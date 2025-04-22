const Hero = () => {
    return (
        <section className="py-24 overflow-x-clip">
            <div className=" relative max-w-7xl mx-auto px-4">
                <div className="text-center ">
                    <h1 className="text-white font-['Google Sans Display'] text-5xl font-display sm:text-7xl lg:text-9xl inline-block font-medium mb-7 leading-[0.99] tracking-[-1.44px] lg:tracking-[-3.72px] max-w-sm sm:max-w-lg lg:max-w-4xl">
                        The full stack
                        <span className="block text-8xl"> AI workspace </span>
                    </h1>
                </div>
                <div className="text-center mt-6">
                    <p className=" text-center max-w-md text-white/80 text-lg leading-relaxed mx-auto">
                    Firebase Studio accelerates your entire development 
                    lifecycle with AI agents. Build backends, front ends, 
                    and mobile apps, all in one place.
                    </p>
                </div>
                <div className="text-center mx-auto mt-10">
                    <button className="bg-orange-400 px-8 py-2 rounded-full text-black/90 font-medium font-['Google Sans Display'] cursor-pointer hover:bg-yellow-600">
                        Try Firebase Studio
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Hero;