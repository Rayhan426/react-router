

const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome To <span className="font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>
            <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
           
           <div className="flex  justify-center gap-4">
           <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
      <span className="relative text-white">Read blogs</span>
      </span>
      </a>
           <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
      <span className="relative text-white">Bookmarks</span>
      </span>
      </a>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;