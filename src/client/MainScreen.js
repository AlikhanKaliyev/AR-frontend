import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import BurgerMenuButton from './components/BurgerMenuButton';
import DrawerList from './components/DrawerList';
import { Outlet } from 'react-router';
import TitleText from './components/TitleText';

const MainScreen = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div className='w-[100%] bg-orange-500 relative'>
      <div className='h-[10%] flex bg-orange-600 fixed w-[100%]'>
          <BurgerMenuButton toggleDrawer = {toggleDrawer} />
          <TitleText />
      </div>
      <div className='w-[100%] h-[2px] fixed top-[10%] bg-black opacity-[0.4]' />
      <Drawer open={open} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer = {toggleDrawer} />
      </Drawer>
      <div className='pt-[10vh] bg-inherit h-[2000px]'> 
        <Outlet />
      </div>
    </div>
  );
}

export default MainScreen;