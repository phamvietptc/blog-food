import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Card Food2
export function Card_Food2() {
    const router = useRouter();
    const defaultContents = [
        {
        image: "/images/home/card-food.jpg",
        text: "Caramel Strawberry Milkshake Card_food2",
        },
        {
        image: "/images/home/card-food.jpg",
        text: "Chocolate and Banana Jar Cake",
        },
        {
        image: "/images/home/card-food.jpg",
        text: "Berry Maddness Biscuts",
        },
    ];

return (
    <>
        <div className="m-auto my-6 outline-none md:my-12 md:max-w-6xl">
            <h5 className="text-black font-serif text-2xl leading-tight font-bold py-4 mb-0 md:text-4xl md:leading-tight">
            Sweet Tooth
            </h5>
            <div className={styles.rowCF}>
            {defaultContents.map((item, index) => (
                <div key={index} className={styles.boxCF}>
                <figure className="relative my-4">
                    <a className="block overflow-hidden rounded-md">
                    <img
                        className="w-full max-w-full align-middle cursor-pointer hover:scale-105 transition-all"
                        src={item.image}
                        alt=""
                    />
                    </a>
                    <figcaption className="mt-2">
                    <div className="w-full float-left">
                        <div className="float-left">
                        <div className="rating rating-sm">
                            <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-600"
                            />
                            <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-600 ml-1.5"
                            />
                            <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-600 ml-1.5"
                            />
                            <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-600 ml-1.5"
                            />
                            <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-600 ml-1.5"
                            />
                        </div>
                        <a className="block cursor-pointer font-sans text-black text-base font-semibold leading-normal mt-1 md:text-xl md:leading-normal">
                            {item.text}
                        </a>
                        </div>
                    </div>
                    </figcaption>
                </figure>
                </div>
            ))}
            </div>
        </div>
    </>
);
}