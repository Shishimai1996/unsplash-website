"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { GlobalStyles } from "@mui/system";

const globalStyles = (
  <GlobalStyles
    styles={{
      ".MuiButton-root": {
        color: "#767676 !important", // Force text color globally
        borderColor: "#d1d1d1 !important",
        border: "1px solid transparent",
      },

      ".MuiButton-root:hover": {
        color: "#111 !important",
        borderColor: "#111 !important",
      },
      ".css-1j81r15-MuiButtonBase-root-MuiButton-root": {
        padding: 0,
      },
    }}
  />
);

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
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: "700",
        fontSize: "32px",
      },
      h3: {
        fontWeight: "700",
        fontSize: "24px",
      },
      h4: {
        fontWeight: "600",
        fontSize: "20px",
      },
      h5: {
        fontWeight: "600",
        fontSize: "18px",
      },
      h6: {
        fontWeight: "500",
        fontSize: "15px",
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
            fontFamily:
              " -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            backgroundColor: "linear-gradient(180deg, transparent 50%, #fff;",

            // borderColor: "#d1d1d1",
            // border: "1px solid transparent",
            // color: "#767676 !important",
            // "& .MuiButton-label": {
            //   color: "#767676 !important",
            // },
            // "&:hover": {

            //   color: "primary.main",
            //   borderColor: "primary.main",
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
        light: "#555",
        dark: "#111",
      },
      secondary: {
        main: "#fff",
        dark: "#767676",
        light: "#FFF3E3",
      },
      error: {
        main: "#f15151", // エラーカラー
      },
      warning: {
        main: "#B88E2F",
        light: "#d1d1d1",
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
      {globalStyles}
      {children}
    </ThemeProvider>
  );
}
