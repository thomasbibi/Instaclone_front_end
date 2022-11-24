import React from "react";
import { useCallback, useContext, useEffect, useState } from "react"
import { loadAllPosts } from "../utils/apiutils";

//creating context
const PostContext = React.createContext();

//create context provider
export function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([]); //memoized version of data 
    const fetchPosts = useCallback(()=>{
        loadAllPosts()
            .then(({data}) => {
                console.log("get posts response from server : ",data);
                setPosts(data)
            });
    },[]); //memoized version of callback

    useEffect(() => {
        //fetch call to get post data from server and update posts
        console.log("PostContext posts before fetching : ",posts);
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{
            posts,             //all child comp can access context data     
            onPostAdded: ()=>{ // now can use this to call fetchPosts from child comp
                fetchPosts();
            }
            }}>
            {children}
        </PostContext.Provider>
    );

}

//creating cutome hook to access post context
export const usePosts = () => useContext(PostContext) ;