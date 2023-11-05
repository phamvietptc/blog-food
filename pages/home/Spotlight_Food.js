import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Spotlight Food
export function Spotlight_Food() {
    return (
        <>
            <div className="m-auto bg-blue-100 rounded-2xl border-0 overflow-hidden mt-0 md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-br-none md:rounded-tr-none md:mt-6 md:max-w-6xl">
            <div className={styles.rowSF}>
                <div className={styles.left}>
                <img
                    className="w-full max-w-full align-middle"
                    src="/images/home/Image_Spotlight.png"
                    alt=""
                />
                </div>
                <div className={styles.right}>
                <div className="p-6 justify-center flex-col h-full relative flex md:p-12">
                    <strong className="flex">
                    <Image
                        src="/icons/home/icons-chart-up.png"
                        width="20px"
                        height="20px"
                        alt="chart"
                    />
                    <spam className="font-sans text-xs font-medium leading-normal text-black ml-2 md:text-sm md:leading-normal">
                        85% would make this again
                    </spam>
                    </strong>
                    <h4 className="font-serif font-bold leading-tight text-3xl text-black my-4 md:text-5xl md:leading-tight">
                    Mighty Super Cheesecake
                    </h4>
                    <p className="font-sans text-sm font-normal leading-normal text-black pb-4 pr-0 mt-0 mb-4 md:text-lg md:leading-normal md:pb-0 md:pr-12">
                    Look no further for a creamy and ultra smooth classic cheesecake
                    recipe! no one can deny its simple decadence.
                    </p>
                    <a className="flex justify-center flex-col items-center bottom-2.5 right-0 ml-auto cursor-pointer bg-white w-10 h-10 rounded-full  md:bottom-4 md:right-5 md:absolute md:bg-inherit md:w-6 md:h-6">
                    <Image
                        className="hover:scale-125 transition-all"
                        src="/icons/home/icons-right.png"
                        width="20px"
                        height="20px"
                        alt="next"
                    />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}