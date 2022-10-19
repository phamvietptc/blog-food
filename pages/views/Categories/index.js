import CategoriesStyles from '../../../styles/Categories.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';


export default function Categories() {

    const content = [
        {
          id: 0,
          title: 'Seafood',
        },
        {
          id: 1,
          title: 'Soup',
        },
        {
          id: 2,
          title: 'Pancakes',
        },
        {
          id: 3,
          title: 'Meat',
        },
        {
          id: 4,
          title: 'Chicken',
        },
        {
          id: 5,
          title: 'Pasta',
        },
        {
          id: 6,
          title: 'Pizza',
        },
        {
          id: 7,
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
                    <div
                        className={CategoriesStyles.blockCategories}
                        onClick={() => {
                            if (item.id === index) {
                            router.push(
                                '/'
                            );
                            } else {
                            return;
                            }
                        }}
                    >
                        <div key={index} className={CategoriesStyles.imgCategories}>
                            {index === 0 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 1 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 2 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 3 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 4 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 5 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 6 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                            {index === 7 && <img className={CategoriesStyles.image} src="/images/categories/categories-img.png" alt="" />}
                        <figcaption className={CategoriesStyles.titleCategories}>
                            <a className={CategoriesStyles.textCategories}>
                            {item.title}
                            </a>
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