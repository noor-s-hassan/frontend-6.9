import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
    <div className="jumbotron">
        <h1 className="display-4">
            Just Blog It<span className="full-stop">.</span>
        </h1>
        <main>
            Welcome to a blogging platform for all your blogging needs!
            <br />
            Want to read some amazing blogs? We've got you covered!
            <br /> Want to write a great blog post?
            <br /> Rest assured, because, like StateFarm, we've got you covered !
        </main>
        <hr className="my-4 gold-hr" />
        <p>So, click below and begin your writing adventures!</p>
        <Link
            className="btn btn-outline-primary btn-lg"
            to="/posts"
            role="button"
        >
            Show Blog Posts
        </Link>
    </div>
);

export default Landing;
