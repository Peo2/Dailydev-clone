/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#9333ea',
       'mainbg' : '#0e1217',
       'red': '#ef4444',
       'brown': '#ad6648',
       'firsttxcolor' : '#fff',
       'firsticon' : '#1d4ed8',
       'firsticoninside' : '#0E1217',
       'zerocolor' : '#ec4899',
       'newpostcolor' : '#0e1217',
       'kcolor' : '#1c1f26',
       'gencolor' : '#a8b3cf',
       'white' : '#ffffff',
       'dimwhite' : '#a8a29e',
       'searchcolor' : '#1e293b',
    },
   extend: {
    width: {
      '434px': '434px',
      '62px': '62px',
      '434': '434px',
      '1360px': '1360px',
       '156.75px': '156.75px',
       '318px' : '318px',
       '1314px' : '1314px',
       '24.92px': '24.92px'
    }
   },
  
  },
  plugins: [],
}

