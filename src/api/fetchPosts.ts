import React from "react";
import {Post} from "../types/types.ts";

export async function fetchPosts(
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    count: number
) {
    try {
        setIsLoading(true);

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
        const json = await response.json();

        for (let i = 0; i < json.length; i++) {
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${i + 1}`);
            json[i].author = await userResponse.json();
        }

        setIsLoading(false);
        setPosts(json);
    } catch (e) {
        console.error(e);
    }
}