# react-router and webpack-dev-server with history example app

This is an example app using [react-router](https://github.com/rackt/react-router)
and [webpack](https://webpack.github.io/), along with the handy
[webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html).

The dev server is configured with `historyApiFallback: true` in `webpack.config.js`,
which allows use of `createBrowserHistory` in react-router for better looking URLs
(using the HTML5 pushState/history API).

webpack-dev-server will serve `index.html` instead of any 404 request, which allows
react-router to pick up the URL and build the correct application state.

To run the examples in your development environment:

1. Clone this repo
2. Run `npm install`
3. Start the development server with `npm start`
4. Point your browser to http://localhost:8080

