import React from "react";
import './App.css';
import {Counter} from "./Component/Counter/Counter";
import {createContext} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";

export const MessageContext = createContext('');

function App() {
    const message: "Hello there" = "Hello there";
    return (

        <Provider store={store}>
            <MessageContext.Provider value={message}>
                <div className={"app"}>
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    )
}

export default App;