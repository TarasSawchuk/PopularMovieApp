import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import MovieDetails from "./movie-details/MovieDetails";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={App} exact path="/"/>
                <Route component={MovieDetails} path="/movie/:id"/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;