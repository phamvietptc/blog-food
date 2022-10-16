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

    const cakeCrust = [
        {
          id: 0,
          text: '400g graham crackers',
        },
        {
          id: 1,
          text: '150g unsalted butters, melted',
        },
      ];

      const cake = [
        {
          id: 0,
          text: '300g marshmallows',
        },
        {
          id: 1,
          text: '175g unsalted butter, melted',
        },
        {
            id: 2,
            text: '500g Philadelphia cream cheese, softened',
          },
          {
            id: 3,
            text: '250ml thickened/whipping cream, warm',
          },
          {
            id: 4,
            text: '3 tbsp powdered gelatin + 3 tbsp water',
          },
          {
            id: 5,
            text: '5 drops purple food gel',
          },
          {
            id: 6,
            text: '3 drops blue food gel',
          },
      ];

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

                <div className={RecipesStyles.author}>
                    <div className={RecipesStyles.avatarAuthor}>
                        <img className={RecipesStyles.imgAuthor} src='/images/recipes/avatar-author.png' />
                        <small className={RecipesStyles.textAuthor}>Tricia Albert</small>
                    </div>
                    <div className={RecipesStyles.calendarAuthor}>
                        <img className={RecipesStyles.iconsCalendar} src='/icons/recipes/icons-calendar.png' />
                        <small className={RecipesStyles.textCalendar}>Yesterday</small>
                    </div>
                    <div className={RecipesStyles.commentAuthor}>
                        <img className={RecipesStyles.iconsComment} src='/icons/recipes/icons-number-comment.png' />
                        <small className={RecipesStyles.numberComment}>25</small>
                    </div>
                    <div className={RecipesStyles.voted}>
                        ★★★★★
                    </div>
                </div>

                <div class='detail'>
                    <hr style={{borderColor:'#E8E8E8', backgroundColor:'currentcolor', color:'inherit', opacity:'0.3', height:'1px', margin:'20px 0'}} />
                    <p className={RecipesStyles.preface}>One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!</p>
                    <br />
                    <img className={RecipesStyles.imgIntro} src='/images/recipes/intro-images.jpg' />
                    <br />
                    <div className={RecipesStyles.blockDetail}>
                        <div className={RecipesStyles.leftBlock}>
                            <div className={RecipesStyles.inLeftBlock}>
                                <ul className={RecipesStyles.foodPlan}>
                                    <li className={RecipesStyles.estimatedTime}>
                                        <small className={RecipesStyles.textEst} >PREP TIME</small>
                                        <span className={RecipesStyles.timeEst}>15 MIN</span>
                                    </li>
                                    <li className={RecipesStyles.prepTime}>
                                        <small className={RecipesStyles.textPrep}>PREP TIME</small>
                                        <span className={RecipesStyles.timePrep}>15 MIN</span>
                                    </li>
                                    <li className={RecipesStyles.servings}>
                                        <small className={RecipesStyles.textServings}>SERVINGS</small>
                                        <span className={RecipesStyles.timeServings}>
                                            4 PEOPLE
                                            <img className={RecipesStyles.iconsServings} src='/icons/recipes/icons-servings.png' />
                                        </span>
                                    </li>
                                    <li className={RecipesStyles.print}>
                                        <img className={RecipesStyles.iconsPrint} src='/icons/recipes/printer.svg' />
                                    </li>
                                </ul>
                                <div className={RecipesStyles.ingredients}>
                                    <h6 className={RecipesStyles.headIngredients}>Ingredients</h6>       
                                    <div className={RecipesStyles.cake}>
                                        <strong className={RecipesStyles.titleCake}>For the crust</strong>
                                        {cakeCrust.map((item, index) => (
                                        <div key={index} className={RecipesStyles.tickCake}>
                                            <input className={RecipesStyles.tickBoxCake} />
                                            <label className={RecipesStyles.textCake}>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                    
                                    <div className={RecipesStyles.cake}>
                                        <strong className={RecipesStyles.titleCake}>For the cheescake</strong>
                                        {cake.map((item, index) => (
                                        <div key={index} className={RecipesStyles.tickCake}>
                                            <input className={RecipesStyles.tickBoxCake} />
                                            <label className={RecipesStyles.textCake}>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>

                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}