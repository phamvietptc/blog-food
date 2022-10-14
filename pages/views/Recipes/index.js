import RecipesStyles from '../../../styles/Recipes.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';

export default function Recipe_Page() {
    return (
        <>
        <div className={RecipesStyles.container}>
            <Navbar />
            <div className={RecipesStyles.content}>        
                <Recipes />
                {/* <Suggestions />  */}
            </div>
            <Footer />
        </div>
        </>
    );
}


// Recipes
export function Recipes() {
    return (
        <>
            <div className={RecipesStyles.recipes}>
                <div className={RecipesStyles.head}>
                    <div className={RecipesStyles.iconsHead}>
                        <div className={RecipesStyles.iconsBlock}>
                            <a
                             className={RecipesStyles.iconsShare}
                             href='/'
                            >
                                <img className={RecipesStyles.share} src='/icons/recipes/icons-share.png' />
                            </a>
                            <a
                             className={RecipesStyles.iconsTag}
                             href='/'
                            >
                                <img className={RecipesStyles.tag} src='/icons/recipes/icons-tag.png' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <strong>
                            <img className={RecipesStyles.chart} src='/icons/recipes/icons-chart.png'/>
                            <span className={RecipesStyles.spanHead}>85% would make this again</span>
                        </strong>
                        <h5 className={RecipesStyles.textHead}>Strawberry Cream Cheesecake</h5>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}