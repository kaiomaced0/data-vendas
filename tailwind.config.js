/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E3092',  // Cor primária personalizada
          dark: '#1C1F7C',     // Variante mais escura da cor primária
          light: '#4A4ECF',    // Variante mais clara da cor primária
        },
        secondary: {
          DEFAULT: '#FFC82A',  // Cor secundária personalizada
          dark: '#E6B021',     // Variante mais escura da cor secundária
          light: '#FFD95A',    // Variante mais clara da cor secundária
        },
        background: {
          DEFAULT: '#f9f9f9',  // Cor de fundo padrão
        },
        muted: {
          foreground: '#757575', // Cor para texto ou ícones desativados
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],  // Fonte principal personalizada
        serif: ['Merriweather', 'serif'],         // Fonte secundária (serifada)
      },
      spacing: {
        '18': '4.5rem',  // Exemplo de espaçamento personalizado
        '128': '32rem',  // Outro exemplo de espaçamento
      },
      borderRadius: {
        'xl': '1.5rem',  // Exemplo de raio de borda personalizado
      },
    },
  },
  plugins: [],
}
