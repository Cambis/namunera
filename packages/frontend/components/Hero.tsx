
import cn from "classnames";

export type heroTypes = {
    heroTitle: string
    heroContent: string
}

type heroProps = {
    heroData?:  heroTypes
}

const Hero = ( { heroData } : heroProps )  => {
    return (
        <>
            {
                heroData?.heroTitle && (
                    <>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg">
                            <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                                <div className={"mx-auto text-center "}>
                                    <h1 className={"text-3xl font-sans text-5xl font-extrabold text-gray-50"}>
                                        <span className="bg-clip-text antialiased">
                                            {heroData.heroTitle}
                                        </span>
                                    </h1>
                                    <p className={"text-gray-50 font-serif italic"}>
                                        {heroData?.heroContent}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Hero;
