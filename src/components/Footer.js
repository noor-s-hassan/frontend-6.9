import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="Noor">Noor</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/noor-s-hassan", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-hackerrank"
                onClick={() =>
                    window.open("https://www.hackerrank.com/nhass", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/linkwithnoor/",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-stack-overflow"
                onClick={() =>
                    window.open(
                        "https://stackoverflow.com/users/19505464/n-hassan",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-twitter"
                onClick={() =>
                    window.open("https://twitter.com/NoorSaiedHassa1", "_blank")
                }
            ></i>
        </span>
    </footer>
);

export default Footer;
