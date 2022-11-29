import CategoriesStyles from '../../styles/Categories.module.css';
import Navbar, { MBFooter, Footer } from '../../components/navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import api from '../api';


export default function Categories() {

const [categoriesData, setCategoriesData] = useState([]);
useEffect(() => {
  const getCategories = async () => {
    const res = await api.categories.getCategoryDetail();
    const buttonMenu = [
    ...res?.data?.map((item) => ({
    id: item.id,
    Title: item.title,
    img: item.image,
  })),
  ];
  setCategoriesData(buttonMenu);
};
   getCategories();
}, []);

    return (
        <>
        <div className='bg-white box-border outline-none p-0'>
          <Navbar />
          <div className={CategoriesStyles.content}>
            <div className='my-6 md:my-12 md:mx-auto md:max-w-6xl'>
                <h5 className='text-black text-2xl leading-tight font-bold font-serif py-4 mt-0 mb-4 border-b border-inherit border-solid md:text-6xl md:leading-tight md:mb-12'>Categories</h5>
                <div className={CategoriesStyles.rowCategories}>
                    {categoriesData.map((item, index) => (
                    <div key={index} id={item.id} className={CategoriesStyles.blockCategories}>
                      <div  className='relative text-center my-4 md:my-6 text-black hover:text-red-500'>
                        <div className='hover:scale-105 transition-all'>
                          <Image className='overflow-hidden rounded-full max-w-full cursor-pointer' width='255px' height='255px' src={item.image} alt="Menu"/>
                        </div>
                        <figcaption className='mt-2 md:mt-4'>
                          <a className='text-sm font-sans font-semibold mt-2 text-center cursor-pointer md:text-xl md:leading-normal'>{item.title}</a>
                        </figcaption>
                      </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>
          <Footer />
        </div>
        </>
    )
}