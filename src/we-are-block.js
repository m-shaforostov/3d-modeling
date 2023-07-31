import './App.css';
import './we-are-block.css';
import {useState} from "react";
import coordinates from "./images/coordinates.png";
import teamPhoto from "./images/team.png";
import dotImg from "./images/Ellipse.png";
import lineImg from "./images/Line.png";


function WeAreBlock() {

    return (
        <div className="we-are__wrapper flex flex-nowrap px-3 mb-16">
            <div className="we-are__left flex flex-col pr-3">
                <div className="we-are__left-top-block flex flex-nowrap px690:mb-28 px600:mb-36 sm:mb-24 mb-16">
                    <div className="we-are__reversed-text-wrapper uppercase flex h-fit lg:text-7xl px690:text-5xl px600:text-7xl sm:text-6xl text-5xl">
                        <p className="we-are__reversed-text title-bold-text ease-in-out duration-300h-fit whitespace-nowrap -rotate-90 lg:mt-28 lg:-mr-24 lg:-ml-28 px690:mt-20 px690:-mr-16 px690:-ml-20 px600:mt-28 px600:-mr-24 px600:-ml-28 sm:mt-24 sm:-mr-20 sm:-ml-24 mt-20 -mr-16 -ml-20">We are</p>
                    </div>
                    <div className="we-are__main-paragraphs flex flex-col">
                        <div className="main-paragraphs__header-text mb-5">
                            <p className="header-text__bold uppercase title-bold-text text-3xl whitespace-nowrap">3D studio</p>
                            <p className="header-text__general uppercase title-normal-text text-3xl ">Based in Vilnius</p>
                        </div>
                        <div className="main-paragraphs__smaller-text">
                            <p className="smaller-text__paragraph mb-5">We help clients all over the world to create photo-realistic 3d product images and animations for e-commerce, presentations and marketing. </p>
                            <p className="smaller-text__paragraph">We can create any virtual objects in static and motion to solve your business tasks.</p>
                        </div>
                    </div>
                </div>
                <div className="we-are__images-block px690:hidden flex w-full mb-16 ">
                    <img className="absolute w-vw80" src={teamPhoto} alt=""/>
                    <img className="ml-24 mt-10 w-vw80" src={coordinates} alt=""/>
                </div>
                <div className="we-are__left-bottom-block flex flex-col mb-16 pl-3">
                    <div className="title-line flex flex-nowrap items-center mb-5">
                        <img className="w-1.5 h-1.5" src={dotImg} alt=""/>
                        <img className="h-0.5" src={lineImg} alt=""/>
                        <p className="we-are__title uppercase">7+ years experience</p>
                    </div>
                    <div className="title-line flex flex-nowrap items-center mb-5">
                        <img className="w-1.5 h-1.5" src={dotImg} alt=""/>
                        <img className="h-0.5" src={lineImg} alt=""/>
                        <p className="we-are__title uppercase">Extreme attention to detail</p>
                    </div>
                    <div className="title-line flex flex-nowrap items-center mb-5">
                        <img className="w-1.5 h-1.5" src={dotImg} alt=""/>
                        <img className="h-0.5" src={lineImg} alt=""/>
                        <p className="we-are__title uppercase">Fixed prices</p>
                    </div>
                    <div className="title-line flex flex-nowrap items-center">
                        <img className="w-1.5 h-1.5" src={dotImg} alt=""/>
                        <img className="h-0.5" src={lineImg} alt=""/>
                        <p className="we-are__title uppercase">Organized approach</p>
                    </div>
                </div>
            </div>
            <div className="we-are__right px690:flex hidden mb-16">
                <div className="we-are__images-block h-full">
                    {/*<img className="absolute w-2/5" src={teamPhoto} alt=""/>*/}
                    <img className="ml-24 mt-10 w-96" src={coordinates} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default WeAreBlock;
