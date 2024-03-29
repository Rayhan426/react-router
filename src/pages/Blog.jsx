import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation,} from "react-router-dom";
import Loader from "../components/Loader";
import { BsBookmarkStarFill } from "react-icons/bs";
import { setBlogs } from "../utils";



const Blog = () => {
const navigation = useNavigation()	
    const blog = useLoaderData()
	const handleBookmark = (blog)=>{
		setBlogs(blog)
	}
    const {published_at, comments_count,  public_reactions_count, title, reading_time_minutes} = blog;
    const [tabIndex, setTabIndex] = useState(0);

	if(navigation.state === 'loading') return <Loader></Loader>

    return (
        <div>
            <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
					<p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
			</div>


            {/* tab start  */}

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-left flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link to={''} onClick={()=> {setTabIndex(0)}}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? ' border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
	</Link>
	<Link to={'author'} onClick={()=> {setTabIndex(1)}}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Author</span>
	</Link>
{/* bookmark btn  */}
<div onClick={()=> handleBookmark(blog)} className="ml-2 bg-primary p-3 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer text-secondary hover:scale-105 overflow-hidden">
	<BsBookmarkStarFill></BsBookmarkStarFill>
</div>
</div>
{/* end tab  */}
		</div>
	</article>
	<Outlet></Outlet>
		
	</div> 
</div>
    );
};

export default Blog;