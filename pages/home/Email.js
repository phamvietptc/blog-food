import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

// Email
export function Email() {
    return (
        <>
            <div className={styles.email}>
            <div className={styles.emailBox}>
                <div className={styles.emailRow}>
                <div className={styles.emailTitle}>
                    <p className={styles.headTextEmail}>
                    Deliciousness to your inbox
                    </p>
                    <p className={styles.bodyTextEmail}>
                    Enjoy weekly hand picked recipes and recommendations
                    </p>
                </div>
                <div className={styles.submitEmail}>
                    <input
                    type="email"
                    placeholder="Enter Address"
                    className={styles.inputEmail}
                    />
                    <button className={styles.btnEmail} onClick={"/..."}>
                    JOIN
                    </button>
                </div>
                <div className={styles.endEmail}>
                    <small className="block text-black text-xs font-sans leading-normal font-normal">
                    By joining our newsletter you agree to our{" "}
                    <br className="md:hidden" />{" "}
                    <u
                        href="/"
                        className="hover:text-red-400 decoration-red-400 underline-offset-4 cursor-pointer"
                    >
                        Terms and Conditions
                    </u>
                    </small>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}