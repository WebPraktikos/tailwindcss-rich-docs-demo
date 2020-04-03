const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options) {
  return function ({ addUtilities, variants, theme }) {
    const newUtilities = {
      '.rich-docs': theme("richDocs")
    }
    addUtilities(newUtilities);
  }
}, function (options) {
  return {
    theme: {
      extend: {
        fontFamily: {
          "rd-main": ["Fira Sans", ...defaultTheme.fontFamily.sans]
        },
        fontSize: {
          "rd-2base": "1.0625rem"
        },
        spacing: {
          "rd-3.5": "0.85rem",
          "rd-7": "1.75rem",
        },
        lineHeight: {
          "rd-normal": "1.45"
        },
      },
      richDocs: theme => ({
        "font-family": theme("fontFamily.rd-main").toString(),
        "max-width": "608px",
        "padding-left": defaultTheme.spacing[4],
        "padding-right": defaultTheme.spacing[4],
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-top": defaultTheme.spacing[20],
        "margin-bottom": defaultTheme.spacing[20],
        "counter-reset": "counter-h-1",
        "h1:not(.own-style)": {
          "margin-bottom": defaultTheme.spacing[12],
          "font-size": defaultTheme.fontSize["4xl"],
          "font-weight": defaultTheme.fontWeight["bold"],
          "color": defaultTheme.colors.gray[900],
          "line-height": defaultTheme.lineHeight["none"],
        },
        "> ol:not(.own-style)": {
          "counter-reset": "counter-1",
          "font-size": defaultTheme.fontSize["base"],
          "font-weight": defaultTheme.fontWeight["normal"],
          "line-height": theme("lineHeight.normal"),
        },
        "> ol a:not(.own-style)": {
          "color": defaultTheme.colors.blue[700],
          "transition": "all 0.1s ease-in",
        },
        "> ol a:hover:not(.own-style)": {
          "color": defaultTheme.colors.blue[900],
        },
        "> ol li:not(.own-style)": {
          "margin-bottom": defaultTheme.spacing[2],
        },
        "> ol li:not(.own-style)::before": {
          "content": "counter(counter-1) '. '",
          "counter-increment": "counter-1",
          "color": defaultTheme.colors.gray[800],
          "margin-right": "2px",
        },
        "> ol > li:not(.own-style)": {
          "margin-bottom": theme("spacing['rd-7']"),
        },
        "> ol > li > ol:not(.own-style)": {
          "margin-left": defaultTheme.spacing[4],
          "margin-top": defaultTheme.spacing[2],
          "counter-reset": "counter-2",
        },
        "> ol > li > ol > li:not(.own-style)::before": {
          "content": "counter(counter-1) '.' counter(counter-2) ' '",
          "counter-increment": "counter-2",
          "color": defaultTheme.colors.gray[800],
          "margin-right": "0.1875rem",
        },
        "> ol > li > ol > li:not(.own-style)": {
          "counter-reset": "counter-3",
        },
        "> ol > li > ol > li > ol li:not(.own-style)::before": {
          "content": "counter(counter-1) '.' counter(counter-2) '.' counter(counter-3) ' '",
          "counter-increment": "counter-3",
          "color": defaultTheme.colors.gray[600],
          "margin-right": "0.1875rem",
        },
        "hr:not(.own-style)": {
          "margin-left": "auto",
          "margin-right": "auto",
          "margin-top": defaultTheme.spacing[10],
          "margin-bottom": defaultTheme.spacing[10],
          "border-top-width": "1px",
          "max-width": "7.875rem",
        },
        "h2:not(.own-style)": {
          "font-weight": defaultTheme.fontWeight["medium"],
          "line-height": theme("lineHeight.normal"),
          "color": defaultTheme.colors.gray[800],
          "margin-top": theme("spacing['rd-7']"),
          "margin-bottom": theme("spacing['rd-3.5']"),
          "font-size": theme("fontSize.rd-2base"),
          "counter-reset": "counter-h-2",
        },
        "h2:not(.own-style)::before": {
          "content": "counter(counter-h-1) '.'",
          "counter-increment": "counter-h-1",
          "font-weight": defaultTheme.fontWeight["normal"],
          "margin-right": "2px",
        },
        "h3:not(.own-style)": {
          "font-weight": defaultTheme.fontWeight["medium"],
          "line-height": theme("lineHeight.normal"),
          "color": defaultTheme.colors.gray[800],
          "margin-top": theme("spacing['rd-7']"),
          "margin-bottom": theme("spacing['rd-3.5']"),
          "font-size": theme("fontSize.rd-2base"),
          "counter-reset": "counter-h-3",
          "margin-left": defaultTheme.spacing[4],
        },
        "h3:not(.own-style)::before": {
          "content": "counter(counter-h-1) '.' counter(counter-h-2) ' '",
          "counter-increment": "counter-h-2",
          "font-weight": defaultTheme.fontWeight["normal"],
          "margin-right": "0.1875rem",
        },
        "h4:not(.own-style)": {
          "font-weight": defaultTheme.fontWeight["medium"],
          "line-height": theme("lineHeight.normal"),
          "color": defaultTheme.colors.gray[800],
          "margin-top": theme("spacing['rd-7']"),
          "margin-bottom": theme("spacing['rd-3.5']"),
          "font-size": theme("fontSize.rd-2base"),
          "margin-left": defaultTheme.spacing[4],
        },
        "h4:not(.own-style)::before": {
          "content": "counter(counter-h-1) '.' counter(counter-h-2) '.' counter(counter-h-3) ' '",
          "counter-increment": "counter-h-3",
          "font-weight": defaultTheme.fontWeight["normal"],
          "color": defaultTheme.colors.gray[600],
          "margin-right": "0.1875rem",
        },
        "p:not(.own-style)": {
          "margin-bottom": theme("spacing['rd-3.5']"),
          "font-size": theme("fontSize.base"),
          "color": defaultTheme.colors.gray[700],
          "line-height": theme("lineHeight.rd-normal"),
        },
        "> ul:not(.own-style)": {
          "margin-bottom": theme("spacing['rd-3.5']"),
          "font-size": theme("fontSize.base"),
          "color": defaultTheme.colors.gray[700],
          "line-height": theme("lineHeight.normal"),
          "list-style-type": defaultTheme.listStyleType["disc"],
          "list-style-position": "inside",
        },
        "ul > li:not(.own-style)": {
          "margin-bottom": theme("spacing[2]"),
          "margin-left": "1em",
          "list-style-position": "outside",
        },
        "img:not(.own-style)": {
          "max-width": "100%",
          "margin-top": defaultTheme.spacing[6],
          "margin-bottom": defaultTheme.spacing[6],
        },
        "b:not(.own-style)": {
          "font-weight": defaultTheme.fontWeight["medium"],
        },
        "table:not(.own-style)": {
          "margin-top": defaultTheme.spacing[5],
          "margin-bottom": defaultTheme.spacing[5],
          "width": "100%",
          "font-size": defaultTheme.fontSize["base"],
          "line-height": theme("lineHeight.base"),
          "color": defaultTheme.colors.gray[700],
          "border-color": defaultTheme.colors.gray[200],
          "border-top-width": "1px",
          "border-bottom-width": "1px",
          "table-layout": "fixed",
        },
        "table tr:not(.own-style)": {
          "height": defaultTheme.spacing[8],
        },
        "table tr:nth-child(even):not(.own-style)": {
          "background-color": defaultTheme.colors.gray["100"],
        },
        "table th:not(.own-style)": {
          "font-weight": defaultTheme.fontWeight["medium"],
          "text-align": "left",
          "border-bottom-width": "1px",
          "border-color": defaultTheme.colors.gray[200],
        },
      })
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "even", "odd"],
    }
  }
});
