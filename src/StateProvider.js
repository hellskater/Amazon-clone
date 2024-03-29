import React, { createContext, useContext, useReducer } from "react";

// Prepares the datalayer
export const StateContext = createContext();


// Wrap our app and provide the daya layer to every component in the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);