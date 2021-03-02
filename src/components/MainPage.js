import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Music from "./routes/Music";
import ShowsForYou from "./routes/ShowsForYou";
export default function MainPage() {
    return (
        <main className="w-full" style={MainPageStyle}>
            <Switch>
                <Route exact path="/music">
                    <Music />
                </Route>
                <Route path="/shows">
                    <ShowsForYou />
                </Route>
            </Switch>
        </main>
    )
}

const MainPageStyle = {
    marginLeft: 220,
    position: 'relative',
    paddingTop: 56
}