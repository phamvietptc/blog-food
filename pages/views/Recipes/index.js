import RecipesStyles from '../../../styles/Recipes.module.css';
import Navbar, { MBFooter, Footer } from '../navbar';
import { useRouter } from 'next/router';

export default function Recipe() {
    return (
        <>
        <div className={RecipesStyles.container}>
            <Navbar />
            <div className={RecipesStyles.content}>        
                <Posts />
                <Suggestions /> 
            </div>
            <Footer />
        </div>
        </>
    );
}


// Posts
export function Posts() {

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

      const instructions = [
        {
            id: 1,
            text: 'To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.',
          },
          {
            id: 2,
            text: 'Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.',
          },
          {
            id: 3,
            text: 'Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.',
          },
          {
            id: 4,
            text: 'Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.',
          },
          {
            id: 5,
            text: 'Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.',
          },
          {
            id: 6,
            text: 'Add the warm cream and melted gelatin mixture and mix until well combined.',
          },
          {
            id: 7,
            text: 'Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.',
          },
          {
            id: 8,
            text: 'Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and then sprinkle some more starts on top before chilling for 2 hours.',
          },
          {
            id: 9,
            text: 'Slice with a knife to serve.',
          },
      ]

      const nutrition = [
        {
            value: '219.9',
            text: 'Calories',
          },
          {
            value: '10.7 g',
            text: 'Total Fat',
          },
          {
            value: '2.2 g',
            text: 'Saturated Fat',
          },
          {
            value: '37.4 mg',
            text: 'Cholesterol',
          },
          {
            value: '120.3 mg',
            text: 'Sodium',
          },
          {
            value: '32.8 mg',
            text: 'Potassium',
          },
          {
            value: '22.3 g',
            text: 'Total Carbohydrate',
          },
          {
            value: '8.4 g',
            text: 'Sugars',
          },
          {
            value: '7.9 g',
            text: 'Protein',
          },
      ]

      const fresh = [
        {
          img: '/images/recipes/fresh-images.jpg',
          voted: '★★★★★',
          text: 'Spinach and Cheese Pasta',
        },
        {
          img: '/images/recipes/fresh-images.jpg',
          voted: '★★★★★',
          text: 'Perfect Fancy Glazed Donuts',
        },
        {
          img: '/images/recipes/fresh-images.jpg',
          voted: '★★★★★',
          text: 'Mighty Cheesy Breakfast Burger',
        },
        {
          img: '/images/recipes/fresh-images.jpg',
          voted: '★★★★★',
          text: 'Caramel Strawberry Milkshake',
        },
        {
          img: '/images/recipes/fresh-images.jpg',
          voted: '★★★★★',
          text: 'Chocolate and Banana Jar Cake',
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
                             className={RecipesStyles.iconsShare}
                             href='/'
                            >
                                <img className={RecipesStyles.share} src='/icons/recipes/icons-tag.png' />
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
                    <div className={RecipesStyles.boxAuthor}>
                        <img className={RecipesStyles.imgAuthor} src='/images/recipes/avatar-author.png' />
                        <small className={RecipesStyles.textAuthor}>Tricia Albert</small>
                    </div>
                    <div className={RecipesStyles.boxAuthor}>
                        <img className={RecipesStyles.iconsAuthor} src='/icons/recipes/icons-calendar.png' />
                        <small className={RecipesStyles.textAuthor}>Yesterday</small>
                    </div>
                    <div className={RecipesStyles.boxAuthor}>
                        <img className={RecipesStyles.iconsAuthor} src='/icons/recipes/icons-number-comment.png' />
                        <small className={RecipesStyles.textAuthor}>25</small>
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
                                    <li className={RecipesStyles.headPlan}>
                                        <small className={RecipesStyles.textPlan} >PREP TIME</small>
                                        <span className={RecipesStyles.timePlan}>15 MIN</span>
                                    </li>
                                    <li className={RecipesStyles.plan}>
                                        <small className={RecipesStyles.textPlan}>PREP TIME</small>
                                        <span className={RecipesStyles.timePlan}>15 MIN</span>
                                    </li>
                                    <li className={RecipesStyles.plan}>
                                        <small className={RecipesStyles.textPlan}>SERVINGS</small>
                                        <span className={RecipesStyles.timePlan}>
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
                                            <input type="checkbox" className="checkbox checkbox-accent rounded-full float-left mr-3" />
                                            <label className={RecipesStyles.textCake}>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                    
                                    <div className={RecipesStyles.cake}>
                                        <strong className={RecipesStyles.titleCake}>For the cheescake</strong>
                                        {cake.map((item, index) => (
                                        <div key={index} className={RecipesStyles.tickCake}>
                                            <input type="checkbox" className="checkbox checkbox-accent rounded-full float-left mr-3" />
                                            <label className={RecipesStyles.textCake}>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={RecipesStyles.instructions}>
                                    <h6 className={RecipesStyles.titleInstructions}>Instructions</h6>
                                    {instructions.map((item, index) => (
                                    <ul key={index} className={RecipesStyles.listInstructions}>
                                        <li className={RecipesStyles.textInstructions}>
                                            <span className={RecipesStyles.numberInstructions}>{item.id}</span>
                                            {item.text}
                                        </li>
                                    </ul>
                                    ))} 
                                </div>
                            </div>
                        </div>

                        <div className={RecipesStyles.rightBlock}>
                            <div className={RecipesStyles.nutrition}>
                                <h6 className={RecipesStyles.titleNutrition}>Nutrition Facts</h6>
                                {nutrition.map((item, index) => (
                                <ul key={index} className={RecipesStyles.listNutrition}>
                                    <li className={RecipesStyles.contentNutrition}>
                                        <span className={RecipesStyles.textNutrition}>{item.text}</span>
                                        <span className={RecipesStyles.valueNutrition}>{item.value}</span>
                                    </li>
                                </ul>
                                ))}
                            </div>
                            <div className={RecipesStyles.fresh}>
                              <h6 className={RecipesStyles.titleFresh}>Fresh Recipes</h6>
                              {fresh.map((item, index) => (
                              <div key={index} className={RecipesStyles.blockFresh}>
                                <img className={RecipesStyles.imgFresh} src={item.img} />
                                <div className={RecipesStyles.boxFresh}>
                                  <div className={RecipesStyles.detailFresh}>
                                    <div className={RecipesStyles.votedFresh}>{item.voted}</div>
                                    <h6 className={RecipesStyles.textFresh}>{item.text}</h6>
                                  </div>
                                </div>
                              </div>
                              ))}
                            </div>
                            <div className={RecipesStyles.email}>
                              <div className={RecipesStyles.boxEmail}>
                                <h5 className={RecipesStyles.headEmail}>Deliciousness to your inbox</h5>
                                <p className={RecipesStyles.textEmail}>Enjoy weekly hand picked recipes and recommendations</p>
                                <div className={RecipesStyles.formEmail}>
                                  <input
                                    className={RecipesStyles.inputEmail}
                                    type="email"
                                    placeholder="Email Address"
                                  />
                                  <div
                                    className={RecipesStyles.submitEmail}
                                    onClick={'/...'}
                                  >
                                    <button className={RecipesStyles.btnEmail}>JOIN</button>
                                  </div>
                                </div>
                                <small className={RecipesStyles.endEmail}>By joining our newsletter you agree to our <br/> <u href='/' className={RecipesStyles.termsEmail}>Terms and Conditions</u></small>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={RecipesStyles.headFeedback}>
                    <h2 className={RecipesStyles.titleFeedback}>Already made this?</h2>
                    <div href='/' className={RecipesStyles.btnFeedback}>Share your feedback</div>
                    <br />
                    <br />
                    <hr style={{backgroundColor:'#FF642F', height:'11px', opacity:'1', borderColor:'#E8E8E8', margin:'16px 0', color:'inherit', border:'0'}} />
                </div>

                <div className={RecipesStyles.comments}>
                    <div className={RecipesStyles.headComments}>
                        <h2 className={RecipesStyles.titleComments}>Comments</h2>
                        <span className={RecipesStyles.numberComments}> (25)</span>
                    </div>
                    <ul className={RecipesStyles.blockComments}>
                        <li></li>
                    </ul>
                </div>
                
                <div></div>
            </div>
        </>
    )
}


// Suggestions
export function Suggestions() {

  const suggestions = [
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Cranberry Macaroon Ice Cream Cake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'No Bake Cheesecake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Double Thick Layered Sponge Cake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Caramel Glaze Cake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Strawberry Cream Cake Bites',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Homemade Mixed Berries Wedding Cake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'M&M’s Chocolate Cake',
    },
    {
      link: '/',
      img: '/images/recipes/suggestions-images.jpg',
      text: 'Almond Cinnamon Sponge Cake',
    },
  ];

  return (
    <>
      <div className={RecipesStyles.suggestions}>
        <h5 className={RecipesStyles.titleSuggestions}>You might also like</h5>
        <div className={RecipesStyles.rowSuggestions}>
          {suggestions.map((item, index) => (
          <div key={index} className={RecipesStyles.blockSuggestions}>
            <div className={RecipesStyles.boxSuggestions} href={item.link}>
              <img className={RecipesStyles.imgSuggestions} src={item.img} />
              <div className={RecipesStyles.textSuggestions}>{item.text}</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}