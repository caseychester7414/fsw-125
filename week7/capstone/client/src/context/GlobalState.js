import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js';
import axios from 'axios'
const initialState = {
   tweets: [
       
   ]
}
axios.get("http://localhost:4000/tweets").then(res => {console.log(res.data)
initialState.tweets= res.data
}).catch(err => console.log(err))
// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dipatch] = useReducer(AppReducer, initialState);

    function getTweet(id) {

        return state.tweets.find(tweet => tweet.id == id);
    }
    function addTweet(tweets) {
        dipatch({
            type: 'ADD_TWEET',
            payload: tweets
        })
    }

    return (<GlobalContext.Provider value={{ tweets: state.tweets, addTweet, getTweet }}>
        {children}
    </GlobalContext.Provider>)
}
