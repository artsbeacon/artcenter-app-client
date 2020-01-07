import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import NewArtwork from "./containers/NewArtwork";
import Artworks from "./containers/Artworks";
import Settings from "./containers/Settings";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
        <AuthenticatedRoute path="/artworks/new" exact component={NewArtwork} appProps={appProps} />
        <AuthenticatedRoute path="/artworks/:id" exact component={Artworks} appProps={appProps} />
        <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
}
