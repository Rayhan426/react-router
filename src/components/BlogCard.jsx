import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import errorImg from '../assets/images/404.jpg'

const BlogCard = ({blog}) => {
    const {description, title, id, cover_image, published_at} = blog;
    return (
            <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm border-2 hover:scale-105 duration-300 border-primary hover:border-secondary border-opacity-30 rounded-lg mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || errorImg} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
       
    );
};


BlogCard.propTypes = {
    blog:  PropTypes.object.isRequired,
}
export default BlogCard;