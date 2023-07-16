import './header-block.css';
import headerLogo from './images/3d.png'
import headerNet from './images/net.png'
import menuIcon from './images/menu.svg'
import MenuBlock from "./menuBlock";

function HeaderBlock() {
    return (
        <div className="header-block-wrapper flex flex-col w-full text-gen-grey">
            <div className="header flex w-full px-2 items-center justify-between">
                <div className="header-logo flex h-7 w-32 items-center flex-row justify-between flex-nowrap">
                    <p className="font-bold text-xl uppercase">Product</p>
                    <p className="font-bold text-white bg-gen-grey w-7 rounded-md text-center">3D</p>
                </div>
                <div className="header-buttons flex-nowrap hidden px690:flex justify-between">
                    <div className="header-button uppercase mx-3">Our work</div>
                    <div className="header-button uppercase mx-3">Services and Prices</div>
                    <div className="header-button uppercase mx-3">Contacts</div>
                </div>
                <div className="header-phone-number font-bold uppercase hidden px690:flex">
                    <p className="whitespace-nowrap">+38 (096) 346-65-43</p>
                </div>
                <div className="menu-icon flex px690:hidden">
                    <img className="" src={menuIcon} alt=""/>
                </div>
                <MenuBlock/>
            </div>
            <div className="header-content flex w-full h-full justify-between">
                {/*<div className="header-image">*/}
                {/*    <img className="absolute" src={headerNet} alt=""/>*/}
                {/*    <img className="absolute" src={headerLogo} alt=""/>*/}
                {/*</div>*/}
                {/*<div className="header-text">*/}
                {/*    <div className="header-main-text">*/}
                {/*        <p className="">modeling</p>*/}
                {/*        <p className="">rendering</p>*/}
                {/*        <p className="">animation</p>*/}
                {/*    </div>*/}
                {/*    <div className="header-additional-text">*/}
                {/*        <ul>*/}
                {/*            <li>Modeling and product visualization</li>*/}
                {/*            <li>Photorealistic package visualisation</li>*/}
                {/*            <li>CGI animation for presentations and ads</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="header-try-button">*/}
                {/*        <div className="button-shadow">*/}

                {/*        </div>*/}
                {/*        <div className="button">*/}
                {/*            <p>Get in touch today {`U+2192`}</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default HeaderBlock;
