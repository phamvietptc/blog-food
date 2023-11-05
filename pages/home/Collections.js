import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Hand-Picked Collections
export function Collections() {
    const router = useRouter();
    const content = [
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "Sushi Combos for your Next Party",
      },
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "Everything Bagel",
      },
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "Cook Like a Chef",
      },
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "Exquisite Dinner Recipe Ideas",
      },
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "The Ultimate Cookie Frenzy Cookie ",
      },
      {
        image: "/images/home/Picked_Collections.jpg",
        title: "For the Love of Donuts",
      },
    ];
  
  return (
    <>
      <div className={styles.boxHpc}>
        <div className={styles.collections}>Hand-Picked Collections</div>
        <div className={styles.hpc}>
          {content.map((item, index) => (
            <div key={index} className={styles.blockHpc}>
              <img className={styles.imageHpc} src={item.image} alt="" />
              <div className={styles.titleHpc}>
                <h3 className={styles.textHpc}>{item.title}</h3>
                <span className={styles.spanHpc}>156 Recipes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}