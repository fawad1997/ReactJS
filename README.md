# ReactJS
ReactJS Basics
## What is React
-   React is a Javascript library created by Facebook and is used for building user interfaces (UIs) and front-end applications.
-   React is often called a framework because of its behaviour and capabilities.
-   React is the most popular framework in the industry (for now)

## Create React App
To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app myapp
```
OR

### npm

```sh
npm install create-react-app

create-react-app myapp
```
It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
myapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```
No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start`
Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
