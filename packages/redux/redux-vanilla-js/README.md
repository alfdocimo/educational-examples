# Redux core concepts

The following repository defines an application that allows you to `add` and `withdraw` money. It uses Redux and vanillajs.

Folder structure:
    
- src
    - balanceActions: defines all the `actionCreators` functions and exports `Types` to be used in reducers.

    - balanceReducers: defines a `reducer` to interact with the store and change our app `state`
    
    - index: Main logic with eventListeners to be able to dispatch `actions`


Further reading: 
https://redux.js.org/introduction/examples