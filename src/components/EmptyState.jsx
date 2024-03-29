import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EmptyState = ({message, address, label}) => {
    return (
        <div className="min-h-[calc(100vh-134px)] flex gap-5 flex-col items-center justify-center ">
           <p className="text-3xl text-red-600 font-bold">{message}</p>
           <Link to={address} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
      <span className="relative text-white"> {label}</span>
    
      </span>
     
      </Link>
        </div>
    );
};

EmptyState.propTypes ={
    message:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
}

console.log();
export default EmptyState;