import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Roboto", "Georgia", "sans-serif"],
  headerWeight: 300,
  bodyFontFamily: ["Inconsolata", "Consolas", "Moncaco", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'body': {
      color: 'rgb(106, 102, 128)'
    },
    'h1,h2,h3,h4,h5,h6': {
      color: 'rgb(20, 13, 64)'
    }
  }),
  googleFonts: [
    {
        name: 'Roboto',
        styles: [
        '300',
        '300i',
        '400',
        '400i',
        '700',
        '700i',
        ]
    },
    {
        name: 'Iconsolata',
        styles: [
        '400',
        '400i',
        '700',
        '700i',
        ]
    }
  ]
});

export default typography;
