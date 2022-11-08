import CategoriesStyles from '../../../styles/Categories.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import api from '../../api';


export default function Categories() {

    const content = [
        {
          image: '/images/categories/categories-img.png',
          title: 'Seafood',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Soup',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Pancakes',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Meat',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Chicken',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Pasta',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Pizza',
        },
        {
          image: '/images/categories/categories-img.png',
          title: 'Less than 30 min',
        },
      ];

      const [categoriesData, setcategoriesData] = useState([]);

       useEffect(() => {
    const getCategories = async () => {
      const res = await api.categories.getCategoryDetail();
      if (res.data == null) {
        return;
      }
      setcategoriesData(res.data);
    };
    // const getCategories = async () => {
    //   const res = await api.categories.getCategoryDetail();
    //   if (res?.data == null) {
    //     return;
    //   }
    //   console.log(123, teacherList);
    //   setExperts(
    //     teacherList.data.map((teacher) => ({
    //       id: teacher.id,
    //       url: teacher.avatar,
    //       name: teacher.fullName,
    //       role: teacher.title,
    //     }))
    //   );
    //   setExpertsMobile(
    //     teacherList.data.map((teacher) => ({
    //       id: teacher.id,
    //       url: teacher.avatar,
    //       name: teacher.fullName,
    //       role: teacher.title,
    //     }))
    //   );
    // };
    getCategories();
    // getTeachers();
  }, []);

    return (
        <>
        <div className='bg-white box-border outline-none p-0'>
          <Navbar />
          <div className={CategoriesStyles.content}>
            <div className='my-6 md:my-12 md:mx-auto md:max-w-6xl'>
                <h5 className='text-black text-2xl leading-tight font-bold font-serif py-4 mt-0 mb-4 border-b border-inherit border-solid md:text-6xl md:leading-tight md:mb-12'>Categories</h5>
                <div className={CategoriesStyles.rowCategories}>
                    {categoriesData.map((id, index) => (
                    <div key={index} className={CategoriesStyles.blockCategories}>
                        <div  className='relative text-center my-4 md:my-6'>
                            <Image className='overflow-hidden rounded-full max-w-full cursor-pointer' width='255px' height='255px' src={item.image} alt="" />
                        <figcaption className='mt-2 md:mt-4'>
                            <a className='text-black text-sm font-sans font-semibold mt-2 text-center cursor-pointer md:text-xl md:leading-normal'>{id[0]}</a>
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