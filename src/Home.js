// import { useState, useEffect } from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

   /* const deleteblog = (id) =>{
        const newlist = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newlist);
    }*/
    const {data: blogs, error} = useFetch('http://localhost:8000/blogs');

    
    
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs"  />}
            {blogs && <BlogList blogs = {blogs.filter((blog)=>blog.author === "usama")}   title="Usama's blogs"  />}

        </div>
     );
}
 
export default Home
