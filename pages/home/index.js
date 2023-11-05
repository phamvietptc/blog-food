import Image from "next/image";
import Navbar, { MBFooter, Footer } from "../../components/navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Spotlight_Food } from "./Spotlight_Food";
import { Card_Food1 } from "./Card_Food1";
import { Card_Food2 } from "./Card_Food2";
import { Card_Ctg } from "./Card_Ctg";
import { Email } from "./Email";
import Collections from "./Collections";
import Recipes from "./Recipes";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../../redux/actions";
import { Provider } from 'react-redux';
// Kết nối component với Redux store

export default function Home(props) {



  // Sử dụng useSelector để truy cập trạng thái từ Redux store
  const foodInfo = useSelector(state => state.foodReducer.foodInfo);
  console.log("foodInfo: ", foodInfo)
  // Sử dụng useDispatch để lấy một hàm gửi action
  const dispatch = useDispatch();

  const getAllFoodInfo = () => {
    dispatch(actions.fetchAllFoodInfoStart());
  };

  useEffect(() => {
    // Thực hiện các tác vụ tương tự như trong componentDidMount
    getAllFoodInfo();
  }, []);

  // const [state, setState] = useState({
  //   testState: "this is test",
  // });
  return (
    <>
      <div className={styles.contain}>
        <Navbar />
        <div className={styles.content}>
          <Spotlight_Food />
          <Card_Food1 
          foodInfo= {foodInfo} />
          <Card_Food2 />
          <Card_Ctg />
          <Email />
          {/* <Collections />  */}
          {/* <Recipes />   */}
        </div>
        <Footer />
      </div>
    </>
  );
}