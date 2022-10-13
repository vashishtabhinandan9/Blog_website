/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
       // 'loginbg': "url('../assetsfrontend/loginbg.jpg')",
        
        //'signupbg': "url('/img/footer-texture.png')",
      },

      fontFamily  :{
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        sans:[ 'Josefin Sans',' sans-serif'],
        Lora: ['Lora', 'serif'],
        varela: ['Varela', 'sans-serif'],
        varelaround : ['Varela Round', 'sans-serif']
           
      
      },



      colors:{
        nav:{
            50: '#f2f2f2',
            100: '#d9d9d9',
            200: '#bfbfbf',
            300: '#a6a6a6',
            400: '#8c8c8c',
            500: '#737373',
            600: '#595959',
            700: '#404040',
            800: '#262626',
            900: '#0d0d0d',
          
        }
      }
    },
  },
  plugins: [],
}
