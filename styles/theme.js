import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  fonts: { heading: 'Segoe UI, sans-serif', body: 'Segoe UI, sans-serif' },
  styles: { global: { body: { bg: 'transparent', lineHeight: 1.7 }, 'h1, h2, h3': { letterSpacing: '-0.035em' } } },
  components: {
    Button: { baseStyle: { borderRadius: 'xl', fontWeight: '600' } },
    Tag: { baseStyle: { container: { borderRadius: 'full' } } },
    Input: { defaultProps: { focusBorderColor: 'cyan.400' } },
    Textarea: { defaultProps: { focusBorderColor: 'cyan.400' } },
  },
});
