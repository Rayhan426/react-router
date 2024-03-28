import { PacmanLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-134px)]">
    <PacmanLoader size={20} color="violet"></PacmanLoader>
   
        </div>
    );
};

export default Loader;