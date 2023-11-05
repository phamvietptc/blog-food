import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Popular Categories
export function Card_Ctg() {
    const router = useRouter();
    const content = [
        {
            image: "/images/home/Image_Categories.png",
            title: "Pasta",
        },
        {
            image: "/images/home/Image_Categories.png",
            title: "Pizza",
        },
        {
            image: "/images/home/Image_Categories.png",
            title: "Vegan",
        },
        {
            image: "/images/home/Image_Categories.png",
            title: "Desserts",
        },
        {
            image: "/images/home/Image_Categories.png",
            title: "Smoothies",
        },
        {
            image: "/images/home/Image_Categories.png",
            title: "Breakfast",
        },
    ];

    return (
        <>
            <div className="m-auto my-6 md:my-12 md:max-w-6xl">
                <h5 className="py-4 my-0 font-serif text-2xl font-bold leading-tight text-black md:text-4xl md:leading-tight">
                    Popular Categories
                </h5>
                <div className={styles.rowCtg}>
                    {content.map((item, index) => (
                    <div
                        key={index}
                        className={styles.boxCtg}
                        onClick={() => {
                        router.push("/categories");
                        }}
                    >
                        <figure className="relative text-center my-4">
                        <a className="block overflow-hidden rounded-full">
                            <img
                            className="max-w-full align-middle cursor-pointer hover:scale-105 transition-all"
                            src={item.image}
                            alt=""
                            />
                        </a>
                        <figcaption className="mt-2">
                            <a className="font-sans text-sm font-semibold text-black leading-normal text-center cursor-pointer mt-2 md:text-xl md:leading-normal">
                            {item.title}
                            </a>
                        </figcaption>
                        </figure>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}