import './header-block.css';
import './App.css';
import headerLogo from './images/3d.png'
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
            <div className="header-content flex px690:flex-row flex-col w-full h-full justify-between">
                <div className="header-image-wrapper px690:h-full h-vw80">
                    <div className="header-image flex items-center justify-start px690:bg-center bg-left px690:-mr-12">
                        <img className="lg:-ml-14 lg:-mb-5 px690:-mb-3 -ml-10 px690:w-full w-vw80" src={headerLogo} alt=""/>
                    </div>
                </div>
                <div className="header-text flex flex-col items-end px690:mt-20 px600:-mt-24 sm:-mt-20 -mt-16 px690:ml-14">
                    <div className="header-main-text text-left uppercase lg:text-7xl px690:text-5xl px600:text-7xl sm:text-6xl text-5xl">
                        <p className="title-bold-text ">modeling</p>
                        <p className="title-normal-text">rendering</p>
                        <p className="title-bold-text">animation</p>
                    </div>
                    <div className="header-additional-text lg:mt-12 mt-6 lg:text-lg px600:text-base text-sm w-full flex flex-col px690:items-end items-start">
                        <div className="flex flex-nowrap items-center justify-end mb-4">
                            <p className="px690:order-1 order-3">Modeling and product visualization</p>
                            <svg className="ml-2.5 mr-1.5 order-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                        <div className="flex flex-nowrap items-center justify-end mb-4">
                            <p className="px690:order-1 order-3">Photorealistic package visualisation</p>
                            <svg className="ml-2.5 mr-1.5 order-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                        <div className="flex flex-nowrap items-center justify-end whitespace-nowrap">
                            <p className="px690:order-1 order-3">CGI animation for presentations and ads</p>
                            <svg className="ml-2.5 mr-1.5 order-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C5.988 8.69037 3.30633 6.01112 0 6.01112C3.31371 6.01112 6 3.31982 6 0C6.01195 3.30963 8.69367 5.98888 12 5.98888C8.68624 5.98888 6 8.68018 6 12Z" fill="#303030"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header-try-button mr-2.5 lg:mt-14 mt-10 mb-16 text-sm">
                        <div className="button-shadow absolute -m-2.5 md:h-16 md:w-60 h-14 w-56 border-gen-grey border-solid border opacity-50">

                        </div>
                        <div className="button flex bg-gen-grey md:h-16 md:w-60 h-14 w-56 items-center justify-center">
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
