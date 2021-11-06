import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const AboutUs = lazy(() => import("./components/about/AboutUs"));
const Home = lazy(() => import("./components/home/Home"));
const service = lazy(() => import("./components/services/ServiceMain"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/services" component={service} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Suspense>
    )
}

export default Routes
