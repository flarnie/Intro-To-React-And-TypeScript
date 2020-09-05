# Setting up React and TypeScript with Webpack

1. Set up webpack and your project by running these commands:
```
mkdir webpack-typescript-react
cd webpack-typescript-react
npm init -y
npm install @types/react @types/react-dom ts-loader css-loader html-webpack-plugin mini-css-extract-plugin source-map-loader typescript webpack webpack-cli webpack-dev-server
npm install react react-dom
mkdir src && mkdir dist
touch src/index.html && touch src/index.tsx && touch src/App.tsx
```

2. Save this as your `src/index.html`
```
<!doctype html>
<html>
  <head>
    <title>React and TypeScript with Webpack</title>
  </head>
  <body>
    <script src="./dist/bundle.js"></script>
    <div id="root"></div>
  </body>
</html>
```

3. Set up your TS config and Webpack config:
Save this as `webpack.config.js`.
```
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/yourfile.css",
    }),
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Save this as your `tsconfig.json`.
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  },
  "include": [
    "src/index.tsx"
  ]
}
```

4. Fill out `App.tx` and `index.ts`:

Save this as `src/App.tsx`.
```
import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName}! Welcome to {props.lang}!
  </h1>
);
```

Save this as `src/index.tsx`.
```
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
ReactDOM.render(
  <App userName="YOUR_NAME_HERE" lang="TypeScript" />,
  document.getElementById("root")
);
```

6. Add the following scripts to your `package.json`:
```
"scripts": {
"start": "webpack-dev-server --open",
"build": "webpack"
},
```

Run `yarn build && yarn start`.

That's it! Enjoy your new app!

Sources:
* https://webpack.js.org/guides/getting-started/
* https://webpack.js.org/guides/typescript/
* https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/
