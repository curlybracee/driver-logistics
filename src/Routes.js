import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const AboutUs = lazy(() => import("./components/about/AboutUs"));
const Home = lazy(() => import("./components/home/Home"));
const service = lazy(() => import("./components/services/ServiceMain"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Clientele = lazy(() => import("./components/clientele"));
const Career = lazy(() => import("./components/career"));
const Blog = lazy(() => import("./components/blogs"));
const News = lazy(() => import("./components/news/News"));
const CaseStudies = lazy(() => import("./components/case-studies/CaseStudies"));
const NewsLetters = lazy(() => import("./components/news-letters/NewsLetters"));
const BlogDetails = lazy(() => import("./components/blogs/BlogDetails"));
const NewsDetails = lazy(() => import("./components/news/NewsDetails"));
const Login = lazy(() => import("./components/login/"));
const Dashboard = lazy(() => import("./components/dashboard/"));
const CustomReport = lazy(() => import("./components/dashboard/CustomReport"));;
const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/services" component={service} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/career" component={Career} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/news" component={News} />
                <Route exact path="/case-studies" component={CaseStudies} />
                <Route exact path="/news-letters" component={NewsLetters} />
                <Route exact path="/clientele" component={Clientele} />
                <Route exact path="/blog/details/:id" component={BlogDetails} />
                <Route exact path="/news/details/:id" component={NewsDetails} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/custom-report" component={CustomReport} />
            </Switch>
        </Suspense>
    )
}

export default Routes
