/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'alto':'#d8d8d8',
      'blackpearl':'#070724',
      'dustygray':'#979797',
      'brightgray':'#38384F',
      'waterloo':'#838391',
      'pelorous':'#419EBB',
      'tuliptree':'#EDA249',
      'purpleheart':'#6f2ed6',
      'valenciadeep':'#D14C32',
      'valencialight':'#D83A34',
      'piper':'#CD5120',
      'java':'#1ec2a4',
      'royalblue':'#2d68f0',
      'white':'#fff'
    },
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    extend: {
      fontFamily:{
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif']
      }
    },
    boxShadow: {
      'custom': '16px 6px 16px rgba(30, 44, 52, 1)',
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}
