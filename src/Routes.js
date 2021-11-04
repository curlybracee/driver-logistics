import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
const Home = lazy(() => import("./components/home/Home"));
const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Suspense>
    )
}

export default Routes
