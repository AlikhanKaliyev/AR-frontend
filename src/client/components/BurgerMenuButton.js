import burgerMenuImage from "../../assets/burger-menu.png";

const BurgerMenuButton = (props) => {
    return (
        <div className="w-[15vw] flex pl-[15px] items-center">
            <img className="w-[7.5vh]" src= {burgerMenuImage} onClick={props.toggleDrawer(true)} />
        </div>
    );
}

export default BurgerMenuButton;