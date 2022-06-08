import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "./components/Loader";
import { } from 'react-router';
import Dashboard from './components/user/dashboard/Dashboard'
import DetailsPage from "./components/user/DetailsPage";
import Returned from "./components/user/Returned";

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
const Login = lazy(() => import("./components/login/Login"));
// const Dashboard = lazy(() => import("./components/user/dashboard"));
const Intransist = lazy(() => import("./components/user/Intransist"));
const Delivered = lazy(() => import("./components/user/Delivered"));
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
        <UserGuardRoute exact path="/dashboard" component={Dashboard} />
        <UserGuardRoute exact path="/dashboard/intransist" component={Intransist} />
        <UserGuardRoute exact path="/dashboard/delivered" component={Delivered} />
        <UserGuardRoute exact path="/dashboard/all" component={Delivered} />
        <UserGuardRoute exact path="/dashboard/returned" component={Returned} />
        <UserGuardRoute exact path="/dashboard/search/:id" component={DetailsPage} />
        <UserGuardRoute exact path="/dashboard/:type/details/:id" component={DetailsPage} />
      </Switch>
    </Suspense>
  )
}

const UserGuardRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => {
      const item = localStorage.getItem("user");

      // Do all your conditional tests here
      return item !== null ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

export default Routes
