# Getting Started with Create React App

### This is a program to demonstrate the usage of Hooks in React.

ReactDOM and usestate basics

#### ReactDOM:

ReactDOM is a package in React that provides the rendering capabilities for React components. It's responsible for taking our React components and efficiently rendering them into the HTML DOM (Document Object Model) of a web page. In other words, ReactDOM is the bridge between our React components and the browser, allowing us to see our components come to life on the screen.

By using ReactDOM, we can render our React components into a specific element in the HTML document, typically identified by an ID. This enables us to create dynamic and interactive user interfaces by updating and re-rendering components based on state or user interactions.

React provides a declarative approach to building UIs, where we define how our UI should look based on the current state of our components. ReactDOM takes care of efficiently updating the DOM to match the desired UI, minimizing unnecessary re-renders and providing a smooth user experience.

#### useState:

useState is a fundamental hook in React that allows functional components to have state. It provides a simple and intuitive way to introduce stateful logic into our components without the need for class components.

With useState, we can declare state variables inside our functional components, specifying an initial value. The hook returns an array with two elements: the current state value and a function to update that value. By calling the update function, React takes care of re-rendering the component and updating the displayed value, reflecting the updated state.

The useState hook empowers us to build dynamic and interactive user interfaces by managing and updating state within our functional components. We can access and modify the state value from within our component code, enabling us to create responsive applications that react to user input or other events.

Using useState not only simplifies our code but also improves its readability and maintainability. It eliminates the need for class components and their associated complexity, allowing us to focus on the core logic of our application.

app.js and Counter.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
