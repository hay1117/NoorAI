import { useForm } from "react-hook-form";
import { ConversationT, useAudio, useModelConfigs, useStore } from ".";
import { useRouter } from "next/router";
import React from "react";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { fetcher } from "@/utils";

interface FormData {
  promptText: string;
}
export const useRegenerate = () => {
  const drop = useStore((s) => s.dropLastTheardElement);
  const { query } = useRouter();

  const conversation = useStore((s) =>
    s.conversations.find((o) => o.id === query.chatId)
  ) as ConversationT;
  const thread = conversation?.thread || [];
  const { onSubmit, stopStreaming } = useFetchForm();

  const regenerate = () => {
    const lastPrompt = thread.at(-1)?.input;

    drop(query.chatId as string);
    useStore.persist.rehydrate();
    lastPrompt && onSubmit({ promptText: lastPrompt });
  };
  return { regenerate, stopStreaming };
};
export const useFetchForm = (param?: { promptText: string }) => {
  const methods = useForm<FormData>({
    defaultValues: { promptText: param?.promptText },
  });

  // transcription hook
  const recorderControls = useAudio({
    onSuccess: (transcription) => {
      methods.setValue("promptText", transcription);
      console.info("set transcription");
    },
    onError: () => {
      notifications.show({
        title: "Error",
        message: "Something went wrong",
      });
    },
  });

  const { query } = useRouter();
  const { reset } = methods;
  const conversationId = query.chatId as string;
  const conversations = useStore((s) => s.conversations);
  const url = useModelConfigs((s) => s.url);
  const push = useStore((s) => s.push);
  const updateStatus = useStore((s) => s.updateStatus);

  const { temperature, max_tokens, model } = useModelConfigs((s) => s.configs);
  const systemInstruction = useModelConfigs((s) => s.systemInstruction);

  const conversation = conversations.find((o) => o.id === conversationId) || {
    thread: [],
    template: {
      role: "user",
      content: "",
      htmlContent: "",
    },
  };
  const [controller, setController] = React.useState<null | AbortController>(
    null
  );
  const { data: sessionData } = useSession();
  const stopStreaming = React.useCallback(() => {
    if (controller) {
      controller.abort();
      setController(null);
      updateStatus("success");
    }
  }, [controller, updateStatus]);
  const fetchingManager = async (input: string) => {
    updateStatus("loading");
    reset({ promptText: "" });
    const abortController = new AbortController();
    setController(abortController);
    // eslint-disable-next-line prefer-const
    let threadIndex = conversation.thread.length;
    const template = conversation?.template?.content;
    // if users use template, don't send messages history (LLM will be confused)
    const messagesHistory = !!template
      ? []
      : [
          ...conversation?.thread.map((o) => ({
            content: o.input,
            role: o?.message?.role || "user",
          })),
        ];

    const body = {
      messages: [
        ...messagesHistory,
        {
          role: "user",
          content: input,
        },
      ],
      template,
      configs: {
        max_tokens,
        temperature,
        model,
      },
      systemInstruction,
    };
    const userId = sessionData?.user.id;
    if (!userId) {
      console.info(userId);
      return;
    }
    const conversationIndex = conversations.findIndex(
      (o) => o.id === conversationId
    );
    // fetching...
    await fetcher({
      url,
      options: {
        signal: abortController.signal,
        body: JSON.stringify(body),
        method: "POST",
      },
      onAbort() {
        setController(null);
        updateStatus("success");
      },
      stream: true,
      onStream(chunkValue) {
        // update the DOM
        push({
          threadIndex,
          conversationIndex,
          input,
          role: "assistant",
          chunkValue,
        });
        useStore.persist.rehydrate();
        console.log("streaming...");
      },
      onStreamFinished() {
        threadIndex += 1;
        updateStatus("success");
      },
    });
  };
  const onSubmit = async ({ promptText: input }: FormData) => {
    if (!sessionData?.user) {
      notifications.show({
        title: "Login required",
        message: "You have to log in to continue using the app",
        withCloseButton: true,
        color: "red",
      });
      return;
    }
    await fetchingManager(input.trim());
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return { methods, onSubmit, stopStreaming, recorderControls };
};

const FormCtx = React.createContext<ReturnType<typeof useFetchForm>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  null as any
);

export const FormProv: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <FormCtx.Provider value={useFetchForm()}> {children} </FormCtx.Provider>;

export const useFetchFormCtx = () => React.useContext(FormCtx);
