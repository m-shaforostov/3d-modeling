import './header-block.css';
import headerLogo from './images/3d.png'
import headerNet from './images/net.png'
import menuIcon from './images/menu.svg'
import MenuBlock from "./menuBlock";
import {useState} from "react";

function HeaderBlock() {
    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <div className="header-block-wrapper flex flex-col w-full text-gen-grey">
            <div className="header flex w-full px-2 items-center justify-between">
                <div className="header-logo flex h-7 w-32 items-center flex-row justify-between flex-nowrap hover:cursor-pointer">
                    <p className="font-bold text-xl uppercase">Product</p>
                    <p className="font-bold text-white bg-gen-grey w-7 rounded-md text-center">3D</p>
                </div>
                <div className="header-buttons flex-nowrap hidden px690:flex justify-between">
                    <div className="header-button hover:cursor-pointer uppercase mx-3">Our work</div>
                    <div className="header-button hover:cursor-pointer uppercase mx-3">Services and Prices</div>
                    <div className="header-button hover:cursor-pointer uppercase mx-3">Contacts</div>
                </div>
                <div className="header-phone-number font-bold uppercase hidden px690:flex">
                    <p className="whitespace-nowrap">+38 (096) 346-65-43</p>
                </div>
                <div className="menu-icon flex px690:hidden hover:cursor-pointer" onClick={() => {setMenuIsActive(true)}}>
                    <img className="" src={menuIcon} alt=""/>
                </div>
                <MenuBlock menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
            </div>
            <div className="header-content mt-16 flex w-full h-full justify-between">
                <div className="header-image h-full">
                    <img className="" src={headerNet} alt=""/>
                    <img className="lg:-mt-96 md:-mt-72" src={headerLogo} alt=""/>
                </div>
                <div className="header-tex mt-6 flex flex-col items-end ml-14">
                    <div className="header-main-text text-left uppercase md:text-5xl lg:text-7xl">
                        <p className="header-bold-text ">modeling</p>
                        <p className="header-normal-text">rendering</p>
                        <p className="header-bold-text">animation</p>
                    </div>
                    <div className="header-additional-text lg:mt-12 md:mt-6 lg:text-lg md:text-base">
                        <div className="flex flex-nowrap items-center justify-end mb-4">
                            <p>Modeling and product visualization</p>
                            <svg className="ml-2.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                        <div className="flex flex-nowrap items-center justify-end mb-4">
                            <p>Photorealistic package visualisation</p>
                            <svg className="ml-2.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                        <div className="flex flex-nowrap items-center justify-end whitespace-nowrap">
                            <p>CGI animation for presentations and ads</p>
                            <svg className="ml-2.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header-try-button lg:mt-14 md:mt-10 text-sm">
                        <div className="button-shadow absolute -m-2.5 h-16 w-60 border-gen-grey border-solid border opacity-50">

                        </div>
                        <div className="button flex bg-gen-grey h-16 w-60 items-center justify-center">
                            <p className="mr-2.5">Get in touch today</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                <path d="M0.000366568 5.56264L0.000366686 4.41694L10.5481 4.41694L7.82863 2.12553L8.5085 0.979826L13.2676 4.98979L8.5085 8.99976L7.82863 7.85405L10.5481 5.56264L0.000366568 5.56264Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBlock;
