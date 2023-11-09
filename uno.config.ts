import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#174b68',
        100: '#d1dbe1',
        200: '#a2b7c3',
        300: '#7493a4',
        400: '#456f86',
        500: '#174b68',
        600: '#123c53',
        700: '#0e2d3e',
        800: '#091e2a',
        900: '#050f15',
      },
      secondary: '#27B7BC',
      danger: '#E43434',
      lcgray: '#EFF3F8',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
