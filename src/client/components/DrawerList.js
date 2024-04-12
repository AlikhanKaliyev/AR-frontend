import { useNavigate } from "react-router";
import { drawerListNavigations } from "../../data/data";

const DrawerList = (props) => {
    const navigate = useNavigate();

    const onPicked = (route) => {
        props.toggleDrawer(false)();
        navigate(route);
    };

    return (
        <div className="w-[250px] h-[100vh] flex flex-col justify-center items-center p-4">
            {drawerListNavigations.map((item, index) => {
                return (
                    <>
                        <div
                            className="h-[10vh] w-full flex items-center justify-center cursor-pointer underline hover:bg-indigo-600 hover:text-white rounded-lg p-2"
                            onClick={() => {
                                onPicked(item.route);
                            }}
                            key={index}
                        >
                            {item.title}
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default DrawerList;
