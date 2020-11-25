import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Music from "./routes/Music";
export default function MainPage() {
    return (
        <main className="w-full" style={MainPageStyle}>
            <Switch>
                <Route path="/">
                    <Music />
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