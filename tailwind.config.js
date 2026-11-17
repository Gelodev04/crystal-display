module.exports = {
  content: ["./src/**/*.html", "./components/**/*.html"],
  theme: {
    extend: {
      colors: {
        black: "#0F1115",
        white: "#FFFFFF",
        "grey-light": "#F4F6F8",
        "grey-mid": "#9AA1A9",
        "grey-dark": "#3A3F45",
        border: "#E3E6EA",
        accent: "#2F4F6F",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        meta: ["13px", { lineHeight: "1.6" }],
        body2: ["15px", { lineHeight: "1.6" }],
        body: ["17px", { lineHeight: "1.6" }],
        h3: ["24px", { lineHeight: "1.25" }],
        h2: ["36px", { lineHeight: "1.15" }],
        h1: ["48px", { lineHeight: "1.1" }],
      },
      maxWidth: {
        page: "1280px",
        text: "960px",
      },
      borderRadius: {
        sm: "4px",
      },
    },
  },
};

