import { api, themeOverride } from "~/utils";
import "~/styles/globals.css";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  ColorSchemeProvider,
  type ColorScheme,
  MantineProvider,
  TypographyStylesProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import { RouterTransition } from "~/components";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <SessionProvider session={session}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            ...themeOverride,
          }}
        >
          <Notifications position="top-center" />
          <RouterTransition />
          <TypographyStylesProvider>
            <Component {...pageProps} />
          </TypographyStylesProvider>
          <Analytics />
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
