import './menuBlock.css';
import menuIcon from "./images/menu.svg";
import closeIcon from "./images/close.svg";

function MenuBlock() {
    return (

        <div className="menu-block-wrapper flex px690:hidden absolute left-0 top-0 flex-col w-full text-white px-2 pb-2">
            <div className="header flex w-full items-center justify-between">
                <div className="header-logo flex h-7 w-32 items-center flex-row justify-between flex-nowrap">
                    <p className="font-bold text-xl uppercase">Product</p>
                    <p className="font-bold text-gen-grey bg-white w-7 rounded-md text-center">3D</p>
                </div>
                <div className="menu-icon flex">
                    <img className="" src={closeIcon} alt=""/>
                </div>
            </div>
            <div className="menu-content flex w-full flex-col text-right">
                <div className="menu-item uppercase px-1">Our work</div>
                <div className="menu-item uppercase px-1">Services and Prices</div>
                <div className="menu-item uppercase px-1">Contacts</div>
            </div>
        </div>
    );
}

            export default MenuBlock;