import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Music from "./routes/Music";
import ShowsForYou from "./routes/ShowsForYou";
import Login from "./routes/Login";
export default function MainPage() {
    return (
        // <main className="w-full" style={MainPageStyle}>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route exact path="/music">
                    <Music />
                </Route>
                <Route path="/shows">
                    <ShowsForYou />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        // </main>
    )
}

const MainPageStyle = {
    marginLeft: 220,
    position: 'relative',
    paddingTop: 56
}