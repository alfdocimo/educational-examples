# React Redux Basics with containers and hooks

Redux's integration with react comes in two different flavors: `hooks` and `connect`;

## Connect

Offers a functional solution to `inject` a component with all that it needs to communicate with the redux store. It mainly does so by using `mapStateToProps` and `mapDispatchToProps`.

Further reading:
https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
https://react-redux.js.org/using-react-redux/connect-mapstate

## Hooks:

React Redux now offers a set of hook APIs as an alternative to the existing connect() Higher Order Component. 

These APIs allow you to subscribe to the Redux store and dispatch actions, without having to wrap your components in connect().

Further reading:
https://react-redux.js.org/next/api/hooks#hooks