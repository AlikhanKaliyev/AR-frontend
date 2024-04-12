import { useLocation } from "react-router-dom";
import { drawerListNavigations } from "../../data/data";

const TitleText = () => {
    const location = useLocation();
    return (
        <h1 className="w-[75vw] flex justify-center items-center font-semibold text-lg">
            {drawerListNavigations
                .filter((item) => item.route === location.pathname)
                .map((item) => item.title)}
        </h1>
    );
};

export default TitleText;
