import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

function HOC () {
    const id = useParams();

    return <Post id={id} />
}


export default HOC;