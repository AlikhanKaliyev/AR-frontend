import { Link } from "react-router-dom";
import Video from "../assets/intro_video.mp4";

const HomeScreen = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20 md:pb-12 flex flex-col justify-center items-center">
                    {/* Hero */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            Welcome to{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                                AR Navigation
                            </span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p
                                className="text-xl text-gray-600 mb-8"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                Got lost in KBTU Campus? Do not worry, we have
                                your back.
                            </p>
                            <div
                                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                data-aos="zoom-y-out"
                                data-aos-delay="300"
                            >
                                <div>
                                    <Link
                                        className="btn text-white bg-indigo-600 p-4 rounded-xl hover:bg-indigo-800 w-full mb-4 sm:w-auto sm:mb-0"
                                        to="/navigate"
                                    >
                                        Get the app
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="flex justify-center items-center">
                        <video className="w-full max-w-2xl h-auto" controls>
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Features */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-12">
                            <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
                                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mb-4">
                                    Features
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Our product has many features, including:
                                </p>
                            </div>

                            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                                {/* 1st item */}
                                <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl">
                                    <svg
                                        className="w-16 h-16 p-1 -mt-1 mb-2"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <rect
                                                className="fill-current text-blue-600"
                                                width="64"
                                                height="64"
                                                rx="32"
                                            />
                                            <g strokeWidth="2">
                                                <path
                                                    className="stroke-current text-blue-300"
                                                    d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                                                />
                                                <path
                                                    className="stroke-current text-white"
                                                    d="M20.571 37.714h5.715L36.57 26.286h8"
                                                />
                                                <path
                                                    className="stroke-current text-blue-300"
                                                    strokeLinecap="square"
                                                    d="M41.143 34.286l3.428 3.428-3.428 3.429"
                                                />
                                                <path
                                                    className="stroke-current text-white"
                                                    strokeLinecap="square"
                                                    d="M41.143 29.714l3.428-3.428-3.428-3.429"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                        Navigation
                                    </h4>
                                    <p className="text-gray-600 text-center">
                                        Indoor navigation using Augmented
                                        Reality
                                    </p>
                                </div>

                                {/* 2nd item */}
                                <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl">
                                    <svg
                                        className="w-16 h-16 p-1 -mt-1 mb-2"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <rect
                                                className="fill-current text-blue-600"
                                                width="64"
                                                height="64"
                                                rx="32"
                                            />
                                            <g
                                                strokeWidth="2"
                                                transform="translate(19.429 20.571)"
                                            >
                                                <circle
                                                    className="stroke-current text-white"
                                                    strokeLinecap="square"
                                                    cx="12.571"
                                                    cy="12.571"
                                                    r="1.143"
                                                />
                                                <path
                                                    className="stroke-current text-white"
                                                    d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                                                />
                                                <path
                                                    className="stroke-current text-blue-300"
                                                    d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                        Map
                                    </h4>
                                    <p className="text-gray-600 text-center">
                                        Complete map of the campus and list of
                                        rooms
                                    </p>
                                </div>

                                {/* 3rd item */}
                                <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl">
                                    <svg
                                        className="w-16 h-16 p-1 -mt-1 mb-2"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <rect
                                                className="fill-current text-blue-600"
                                                width="64"
                                                height="64"
                                                rx="32"
                                            />
                                            <g strokeWidth="2">
                                                <path
                                                    className="stroke-current text-blue-300"
                                                    d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                                                />
                                                <path
                                                    className="stroke-current text-white"
                                                    strokeLinecap="square"
                                                    d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                                                />
                                                <path
                                                    className="stroke-current text-blue-300"
                                                    d="M36.571 32H40"
                                                />
                                                <path
                                                    className="stroke-current text-white"
                                                    d="M24 32h3.429"
                                                    strokeLinecap="square"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                        Community
                                    </h4>
                                    <p className="text-gray-600 text-center">
                                        Latest IT and KBTU news, memes and more
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div
                        className="max-w-3xl w-full relative bg-gray-900 rounded mt-10 mb-4 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                        data-aos="zoom-y-out"
                    >
                        {/* Background illustration */}
                        <div
                            className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                            aria-hidden="true"
                        >
                            <svg
                                width="428"
                                height="328"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <radialGradient
                                        cx="35.542%"
                                        cy="34.553%"
                                        fx="35.542%"
                                        fy="34.553%"
                                        r="96.031%"
                                        id="ni-a"
                                    >
                                        <stop stopColor="#DFDFDF" offset="0%" />
                                        <stop
                                            stopColor="#4C4C4C"
                                            offset="44.317%"
                                        />
                                        <stop stopColor="#333" offset="100%" />
                                    </radialGradient>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <g fill="#FFF">
                                        <ellipse
                                            fillOpacity=".04"
                                            cx="185"
                                            cy="15.576"
                                            rx="16"
                                            ry="15.576"
                                        />
                                        <ellipse
                                            fillOpacity=".24"
                                            cx="100"
                                            cy="68.402"
                                            rx="24"
                                            ry="23.364"
                                        />
                                        <ellipse
                                            fillOpacity=".12"
                                            cx="29"
                                            cy="251.231"
                                            rx="29"
                                            ry="28.231"
                                        />
                                        <ellipse
                                            fillOpacity=".64"
                                            cx="29"
                                            cy="251.231"
                                            rx="8"
                                            ry="7.788"
                                        />
                                        <ellipse
                                            fillOpacity=".12"
                                            cx="342"
                                            cy="31.303"
                                            rx="8"
                                            ry="7.788"
                                        />
                                        <ellipse
                                            fillOpacity=".48"
                                            cx="62"
                                            cy="126.811"
                                            rx="2"
                                            ry="1.947"
                                        />
                                        <ellipse
                                            fillOpacity=".12"
                                            cx="78"
                                            cy="7.072"
                                            rx="2"
                                            ry="1.947"
                                        />
                                        <ellipse
                                            fillOpacity=".64"
                                            cx="185"
                                            cy="15.576"
                                            rx="6"
                                            ry="5.841"
                                        />
                                    </g>
                                    <circle
                                        fill="url(#ni-a)"
                                        cx="276"
                                        cy="237"
                                        r="200"
                                    />
                                </g>
                            </svg>
                        </div>

                        <div className="relative flex flex-col lg:flex-row justify-between items-center">
                            {/* CTA content */}
                            <div className="text-center lg:text-left lg:max-w-xl">
                                <h3 className="text-2xl text-white mb-2">
                                    Got lost again?
                                </h3>
                                <p className="text-gray-300 text-lg mb-6">
                                    Then what are you waiting for?!
                                </p>

                                <Link
                                    className="w-full bg-indigo-500 p-4 rounded-2xl text-white"
                                    to="/navigate"
                                >
                                    Let's navigate!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeScreen;
