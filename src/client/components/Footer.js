import { Link } from "react-router-dom";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="bg-white rounded-lg">
            <div className="w-full mx-auto max-w-3xl p-4 flex items-center justify-between flex-col md:flex-row">
                <span className="text-sm text-gray-500 sm:text-center">
                    © {year}{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        AR-Nav
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">
                            Licensing
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="hover:underline">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
