import Carousel1 from "../assets/carousel-1.svg";
import Carousel2 from "../assets/carousel-2.svg";
import Carousel3 from "../assets/carousel-3.svg";
import Carousel4 from "../assets/carousel-4.svg";
import Carousel5 from "../assets/carousel-5.svg";

const NavigateScreen = () => {
    return (
        <div className="w-full flex-grow flex flex-col justify-center items-center">
            <div
                id="default-carousel"
                className="relative max-w-lg w-full p-2"
                data-carousel="slide"
            >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src={Carousel1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src={Carousel2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src={Carousel3}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src={Carousel4}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src={Carousel5}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 4"
                        data-carousel-slide-to="3"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 5"
                        data-carousel-slide-to="4"
                    ></button>
                </div>

                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg flex flex-col items-center text-center">
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
