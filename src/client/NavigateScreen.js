import Carousel1 from "../assets/carousel-1.svg";
import Carousel from "./components/Carousel";

const NavigateScreen = () => {
    return (
        <div className="w-full flex-grow flex flex-col justify-center items-center">
            <Carousel/>
            <div
                className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg flex flex-col items-center text-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Get out latest app
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Click the button below to download our latest indoor
                    navigation app using Augmented Reality
                </p>
                <a
                    href={Carousel1}
                    download
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    rel="noreferrer"
                >
                    Download APK
                </a>
            </div>
        </div>
    );
};
export default NavigateScreen;
