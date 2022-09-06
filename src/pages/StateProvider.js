// //State provider wraps our App in a data layer

import React, { createContext, useContext, useReducer } from "react"

// //Preparing the data layer
export const StateContext = createContext()

// //Higher order component, the children is referring to the <App />, we pass reducer and initialState
// //initial state is what that data layer looks like when the app is loaded
// //reducer is clever and looks to changes
export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// //Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)

