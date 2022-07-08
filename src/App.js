import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HOC from "./components/HOC"

//Import style
import "./stylesheets/index.css";

//Import all components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Landing = lazy(() => import("./components/Landing"));
const CreatePost = lazy(() => import("./components/CreatePosts"));
const EditPost = lazy(() => import("./components/EditPost"));
const PostsList = lazy(() => import("./components/PostsList"));
const Login = lazy(() => import("./components/Login"));
const About = lazy(() => import("./components/About"));

const renderLoader = () => (
    <div className="spinner-container">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const App = () => (
    <div className="container">
        <Router>
            <Navbar />
            <Suspense fallback={renderLoader()}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/posts" element={<PostsList />} />
                    <Route path="/posts/new/" element={<CreatePost />} />
                    <Route path="/posts/:id" element={<HOC />} />
                    <Route path="/posts/:id/edit" element={<EditPost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    </div>
);

export default App;
