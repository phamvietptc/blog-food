import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Latest Recipes
export function Recipes() {
    const router = useRouter();
    const content = [
        {
            image: "/images/home/Recipes.jpg",
            title: "Caramel Strawberry Milkshake",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Cashew Vegan Rice",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Smoked Salmon Salad Sandwich",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Salmon in Creamy Sun Dried Tomato Sauce",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Healthy Jam Waffle Breakfast",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Chocolate and Banana Jar Cake",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Caramel Blueberry Scones",
        },
        {
            image: "/images/home/Recipes.jpg",
            title: "Blueberry Carrot Cake",
        },
    ];

    return (
        <>
            <div className={styles.boxLr}>
                <div className="text-black text-2xl font-bold font-serif leading-tight py-4 my-0 md:text-4xl md:leading-tight">
                    Latest Recipes
                </div>
                <div className={styles.rowRecipes}>
                    {content.map((item, index) => (
                    <div
                        key={index}
                        className={styles.lr}
                        onClick={() => {
                        router.push("/recipes");
                        }}
                    >
                        <div className="relative cursor-pointer my-4 md:my-6 text-black hover:text-red-500">
                        <img
                            className="block overflow-hidden rounded-md w-full max-w-full hover:scale-105 transition-all"
                            src={item.image}
                            alt=""
                        />
                        <figcaption className="mt-2">
                            <a className="text-sm font-semibold font-sans block cursor-pointer mt-1 md:text-lg md:leading-normal">
                            {item.title}
                            </a>
                        </figcaption>
                        </div>
                    </div>
                    ))}
                </div>
        
                {/* load more */}
                <div className="py-12 text-center">
                    <a
                    className="text-black text-sm font-medium font-sans leading-normal py-1 px-6 inline-block text-center cursor-pointer rounded border border-black border-solid md:text-lg md:leading-normal md:py-2 md:px-12 hover:bg-black hover:text-white"
                    href=""
                    >
                    Load More
                    </a>
                </div>
            </div>
        </>
    );
}