
import cn from "classnames";


const Hero = ()  => {
    return (
        <div className="flex bg-blue-500 rounded-lg shadow-lg">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                <div className={"mx-auto text-center "}>
                    <h1 className={"text-3xl font-sans text-5xl font-extrabold text-gray-50"}>
                        <span className="bg-clip-text antialiased">
                            HERO TITLE
                        </span>
                    </h1>
                    <p className={"text-gray-50 font-serif italic"}>Hero Description</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
