import { useNavigate } from "react-router";
import {drawerListNavigations} from "../../data/data";

const DrawerList = (props) => {
    const navigate = useNavigate();

    const onPicked = (route) => {
        props.toggleDrawer(false)();
        navigate(route);
    }

    return (
        <div className="w-[250px] bg-orange-500 h-[100vh]">
            {
                drawerListNavigations.map(item => {
                    return (
                        <>
                            <div className="h-[10vh] flex pl-[10px] items-center" 
                            onClick={() => {
                                onPicked(item.route);
                            }}>
                                {item.title}
                            </div>
                            <div className="bg-black w-[100%] h-[1px]" />
                        </>
                    );
                })
            }
        </div>
    );
}

export default DrawerList;