import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Collapse,
  MultiSelect,
  Paper,
  Spoiler,
  Text,
  Textarea,
} from "@mantine/core";
import { MdContentCopy, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { useMarkedPrompts } from "~/hooks";
import { useDisclosure } from "@mantine/hooks";

const EditPromptForm = (props: {
  text: string;
  id: string;
  tags: Array<{ name: string }>;
  closeForm: () => void;
}) => {
  const edit = useMarkedPrompts((s) => s.edit);
  const [form, setForm] = React.useState<{
    text: string;
    tags: Array<{ value: string; label: string } | string>;
  }>({ text: props.text, tags: props.tags?.map((o) => o.name) });

  const [tags, setTags] = React.useState<Array<string>>(
    props.tags?.map((o) => o.name)
  );

  return (
    <Paper className="w-full space-y-2 px-2 pt-3 pb-1" withBorder>
      <Textarea
        required
        autosize
        placeholder="Your Prompt..."
        minRows={2}
        maxRows={5}
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.currentTarget.value })}
      />
      <MultiSelect
        searchable
        creatable
        clearable
        data={form.tags}
        value={tags}
        onChange={setTags}
        placeholder="Add tags"
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => {
          const item = { value: query, label: query };
          setForm((prv) => ({
            text: prv.text,
            tags: [...prv.tags, item],
          }));
          return item;
        }}
      />
      <div className="gap-2 flex-row-between">
        <Button
          color="dark"
          variant="filled"
          className="w-full"
          onClick={props.closeForm}
          size="xs"
        >
          Cancel
        </Button>
        <Button
          color="dark"
          disabled={!form.text}
          variant="filled"
          className="w-full"
          onClick={() => {
            edit(
              props.id,
              form.text,
              tags.map((str) => ({ name: str }))
            );
            useMarkedPrompts.persist.rehydrate();
            props.closeForm();
          }}
          size="xs"
        >
          Save
        </Button>
      </div>
    </Paper>
  );
};
const CreatePromptForm = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const create = useMarkedPrompts((s) => s.create);
  const [form, setForm] = React.useState<{
    text: string;
    tags: Array<{ value: string; label: string }>;
  }>({ text: "", tags: [] });
  const [tags, setTags] = React.useState<Array<string>>([]);
  return (
    <div className="mb-3">
      <Button
        onClick={toggle}
        className="mb-2 w-full"
        variant="default"
        color="gray"
      >
        {opened ? "X" : "Create Prompt"}
      </Button>

      <Collapse in={opened} className="">
        <Paper className="space-y-2 px-2 pt-3 pb-1" withBorder>
          <Textarea
            required
            autosize
            placeholder="Your Prompt..."
            minRows={2}
            maxRows={5}
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.currentTarget.value })}
          />
          <MultiSelect
            searchable
            creatable
            clearable
            data={form.tags}
            value={tags}
            onChange={setTags}
            placeholder="Add tags"
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setForm((prv) => ({
                text: prv.text,
                tags: [...prv.tags, item],
              }));
              return item;
            }}
          />
          <div className="gap-2 flex-row-between">
            <Button
              color="dark"
              variant="filled"
              className="w-full"
              onClick={() => setForm({ text: "", tags: [] })}
              size="xs"
            >
              Reset
            </Button>
            <Button
              color="dark"
              disabled={!form.text}
              variant="filled"
              className="w-full"
              onClick={() => {
                create(
                  form.text,
                  form.tags.map((t) => ({ name: t.value as string }))
                );
                setForm({ text: "", tags: [] });
                setTags([]);
              }}
              size="xs"
            >
              Save
            </Button>
          </div>
        </Paper>
      </Collapse>
    </div>
  );
};
const PromptCard = ({
  id,
  text,
  tags,
}: {
  id: string;
  text: string;
  tags: Array<{ name: string }>;
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const drop = useMarkedPrompts((s) => s.drop);

  return (
    <>
      {isEditing ? (
        <EditPromptForm
          text={text}
          id={id}
          tags={tags}
          closeForm={() => {
            setIsEditing(false);
          }}
        />
      ) : (
        <Card shadow="sm" p="xl" pb="md">
          <Card.Section className="mb-2 text-left">
            <Spoiler maxHeight={52} showLabel="Show more" hideLabel="Hide">
              <Text>{text}</Text>
            </Spoiler>
          </Card.Section>
          <Card.Section className="gap-x-2 pt-1 pb-2 flex-row-start">
            {tags.map((obj, i) => (
              <Badge
                key={i}
                variant="filled"
                color="gray"
                radius="xs"
                py="sm"
                px={4}
              >
                {obj.name}
              </Badge>
            ))}
          </Card.Section>
          <Card.Section className="gap-x-2 pb-1 pr-2 flex-row-end" withBorder>
            <ActionIcon
              onClick={() => {
                drop(id);
                notifications.show({
                  message: "Prompt has been removed",
                  withCloseButton: true,
                  color: "orange",
                });
              }}
            >
              <MdOutlineDelete />
            </ActionIcon>
            <ActionIcon onClick={() => setIsEditing(true)}>
              <MdOutlineEdit />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                if ("clipboard" in navigator) {
                  navigator.clipboard.writeText(text);
                }
                notifications.show({
                  message: "Prompt Copied",
                  withCloseButton: true,
                  color: "lime",
                });
              }}
            >
              <MdContentCopy />
            </ActionIcon>
          </Card.Section>
        </Card>
      )}
    </>
  );
};
export const MarkedPrompts = () => {
  const userPrompts = useMarkedPrompts((s) => s.list);
  return (
    <>
      <CreatePromptForm />
      <div className="h-full space-y-2">
        {userPrompts.map(({ tags, text, id }, i) => (
          <PromptCard key={i} text={text} tags={tags} id={id} />
        ))}
      </div>
    </>
  );
};