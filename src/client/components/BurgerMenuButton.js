import burgerMenuImage from "../../assets/lines.png";

const BurgerMenuButton = (props) => {
    return (
        <div className="w-[15vw] flex pl-[15px] items-center">
            <img
                className="w-[7.5vh] cursor-pointer"
                src={burgerMenuImage}
                onClick={props.toggleDrawer(true)}
                alt="btn"
            />
        </div>
    );
};

export default BurgerMenuButton;
