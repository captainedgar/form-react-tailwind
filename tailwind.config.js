module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta según tu estructura de archivos
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#E0F1E7',
        botonColor: '#0C7D69',
        customColorBorder: "#0000000"
      },
      height: {
        '128': '42rem', // Nueva clase h-128 para 32rem (512px)
      },
      borderWidth: {
        'custom': '1.5px', // Añade un grosor de borde personalizado
      },
      borderRadius: {
        'custom': '1px', // Añade un radio de borde personalizado
      },
      borderColor:{
        'custom': '#7d7c7cad'
      }
     
    },
  },
  plugins: [],
};
