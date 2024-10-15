"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    typography: {
      fontFamily:
        " '-apple-system', BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif",
      h1: {
        fontWeight: "700",
        fontSize: "40px",
      },
      h2: {
        fontWeight: "700",
        fontSize: "32px",
      },
      h3: {
        fontWeight: "700",
        fontSize: "32px",
      },
      h4: {
        fontWeight: "700",
        fontSize: "24px",
      },
      h5: {
        fontWeight: "600",
        fontSize: "20px",
      },
      h6: {
        fontWeight: "600",
        fontSize: "18px",
      },

      body1: {
        fontWeight: "400",
        fontSize: "18px",
      },
      body2: {
        fontWeight: "400",
        fontSize: "15px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            backgroundColor:
              "linear-gradient(180deg, transparent 50%, rgba(10, 20, 30, .02)), #fff;",
            borderColor: "#d1d1d1",
            color: "#767676",
            // "&:hover": {
            //   backgroundColor: "#FFF3E3",
            //   color: "#B88E2F",
            //   borderColor: "#B88E2F",
            // },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            lineHeight: "21px",
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#000000",
        light: "#eee",
        dark: "#111",
      },
      secondary: {
        main: "#fff",
        dark: "#767676",
        light: "#FFF3E3",
      },
      error: {
        main: "#E97171", // エラーカラー
      },
      warning: {
        main: "#B88E2F",
        light: "#FCF8F3",
        dark: "#B0B0B0",
      },
      success: {
        main: "#2EC1AC",
        light: "#F4F5F7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
