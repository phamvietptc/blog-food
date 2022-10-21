import CategoriesStyles from '../../../styles/Categories.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';


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

    return (
        <>
        <div className={CategoriesStyles.container}>
          <div className={CategoriesStyles.content}>
            <Navbar />
            <div className={CategoriesStyles.categories}>
                <h5 className={CategoriesStyles.headText}>Categories</h5>
                <div className={CategoriesStyles.rowCategories}>
                    {content.map((item, index) => (
                    <div key={index} className={CategoriesStyles.blockCategories}>
                        <div  className={CategoriesStyles.imgCategories}>
                            <Image className={CategoriesStyles.image} width='255px' height='255px' src={item.image} alt="" />
                        <figcaption className={CategoriesStyles.titleCategories}>
                            <a className={CategoriesStyles.textCategories}>{item.title}</a>
                        </figcaption>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Footer />
          </div>
        </div>
        </>
    )
}