import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import DrawerList from "./components/DrawerList";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import BurgerMenuButton from "./components/BurgerMenuButton";
import TitleText from "./components/TitleText";

const MainScreen = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className="w-[100%] bg-white relative">
            <div className="h-[10%] flex fixed w-[100%] bg-black text-white">
                <BurgerMenuButton toggleDrawer={toggleDrawer} />
                <TitleText />
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList toggleDrawer={toggleDrawer} />
            </Drawer>
            <div className="pt-[10vh] bg-inherit min-h-screen flex flex-col justify-between">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainScreen;
