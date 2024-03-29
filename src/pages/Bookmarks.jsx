import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleDelete = id =>{
        deleteBlogs(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }

    if (blogs.length <1) {
        return <EmptyState message={'No bookmarks available!!'} address={`/blogs`} label={'Go to blogs'}></EmptyState>
    }
    return (
        <div className="grid sm:px-8 lg:px-12 py-8 px-4 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {
                    blogs.map((blog, idx)=> <BlogCard handleDelete={handleDelete} deleteAble = {true} key={idx} blog={blog}></BlogCard>)
                }
            </div>
    );
};

export default Bookmarks;