# React Redux Basics Middleware and Async Logic

So far, all the data we've worked with has been directly inside of our React client application. However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

There are many kinds of async middleware for Redux, and each lets you write your logic using different syntax. The most common async middleware is redux-thunk, which lets you write plain functions that may contain async logic directly.

![basic user fetching application](imgs/redux-dev-tools-users.gif)