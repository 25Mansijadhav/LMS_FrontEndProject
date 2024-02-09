# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#LMS Frontend

##setup instruction
1.clone the project
````````````
https://github.com/25Mansijadhav/LMS_FrontEndProject
````````````
2.Move into the dictionary
`````````
cd lms-frontend
```````````

3.install dependencies
`````````````
npm i
`````````````

4.run the server
``````````````
npm run dev
```````````````````
##setup instructions for tailwind

1.install tailwind css
``````````````
npm install -D tailwindcss
````````````````````

2. create tailwind confi file
```````````````````````
npx tailwindcss init
```````````````````````````

3.add fil extension to tailwind config file
`````````````````````````
"./src/**/*.{html,js,jsx,tsx}"
```````````````````````````
4.Add the tailwind directives at the top of index.css
`````````````````````````
@tailwind base;
@tailwind components;
@tailwind utilities;
````````````````````````
###Adding plugins and dependencies
````````````````````
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
````````````````````````

##Configure auto import sort esline

1.install simple import sort
`````````````````````````
npm i eslint-plugin-simple-import-sort
````````````````````````````

2.Add rule in 'eslint.cjs'
````````````````````````````
'simple-import-sort/imports':'error'
````````````````````````````

3.Add simple-import sort plugin in `eslint.cjs`
``````````````````````````````
plugins:[...,'simple-import-sort']
``````````````````````````````

4.To enable auto import sort on file save in vscode

-open `settings.json`
-add following config
`````
"editor.codeActionsOnSave" :{
    "source.fixAll.eslint":true
}
``````
