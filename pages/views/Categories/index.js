import CategoriesStyles from '../../../styles/Categories.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';


export default function Categories() {
    const router = useRouter();
    return (
        <>
        <div className={CategoriesStyles.container}>
            <div className={CategoriesStyles.content}>
                <Navbar />

                <Footer />
            </div>
        </div>
        </>
    );
}