import RecipesStyles from '../../styles/Recipes.module.css';
import Navbar, { MBFooter, Footer } from '../../components/navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
            <div className='my-6 md:my-12'>
                <div className='outline-none md:flex'>
                    <div className='ml-auto md:order-2'>
                        <div className='flex pt-0 justify-end -mb-6'>
                            <a
                             className='ml-4 md:ml-9 cursor-pointer'
                             href='/'
                            >
                              <img className='w-5 h-5 md:h-8 md:w-8 align-middle cursor-pointer' src='/icons/recipes/icons-share.png' />
                            </a>
                            <a
                             className='ml-4 md:ml-9 cursor-pointer'
                             href='/'
                            >
                                <img className='w-5 h-5 md:h-8 md:w-8 align-middle cursor-pointer' src='/icons/recipes/icons-tag.png' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <strong>
                            <img className='inline align-middle w-5 h-5' src='/icons/recipes/icons-chart.png'/>
                            <span className='text-black font-sans text-xs font-medium ml-2 md:text-sm leading-normal'>85% would make this again</span>
                        </strong>
                        <h5 className='text-black text-2xl font-bold font-serif leading-tight py-4 my-0 md:text-6xl'>Strawberry Cream Cheesecake</h5>
                    </div>
                </div>

                <div className='flex flex-wrap md:leading-normal'>
                    <div className='my-2 mr-6'>
                        <img className='inline rounded-full max-w-full align-middle' src='/images/recipes/avatar-author.png' />
                        <small className='text-black text-xs font-sans font-normal leading-normal pl-1'>Tricia Albert</small>
                    </div>
                    <div className='my-2 mr-6'>
                        <img className='inline align-middle w-5 h-5' src='/icons/recipes/icons-calendar.png' />
                        <small className='text-black text-xs font-sans font-normal leading-normal pl-1'>Yesterday</small>
                    </div>
                    <div className='my-2 mr-6'>
                        <img className='inline align-middle w-5 h-5' src='/icons/recipes/icons-number-comment.png' />
                        <small className='text-black text-xs font-sans font-normal leading-normal pl-1'>25</small>
                    </div>
                    <div className='my-2 w-full float-left leading-normal font-bold text-red-500 md:w-fit'>
                        ★★★★★
                    </div>
                </div>

                <div class='detail'>
                    <hr style={{borderColor:'#E8E8E8', backgroundColor:'currentcolor', color:'inherit', opacity:'0.3', height:'1px', margin:'20px 0'}} />
                    <p className='text-black text-sm leading-6 font-normal font-sans mt-0 mb-4 md:text-xl md:leading-9'>One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!</p>
                    <br />
                    <img className='relative rounded-xl overflow-hidden w-full max-w-full align-middle' src='/images/recipes/intro-images.jpg' />
                    <br />
                    <div className={RecipesStyles.blockDetail}>
                        <div className={RecipesStyles.leftBlock}>
                            <div className='pr-0 md:pr-12'>
                                <ul className='flex flex-wrap pl-0 list-none md:-ml-7'>
                                    <li className='py-1 px-2 md:px-7'>
                                        <small className='text-gray-500 text-xs leading-3 font-sans font-normal block'>PREP TIME</small>
                                        <span className='text-black text-sm font-sans font-normal leading-normal'>15 MIN</span>
                                    </li>
                                    <li className='py-1 px-2 md:px-7 border-l border-solid border-inherit'>
                                        <small className='text-gray-500 text-xs leading-3 font-sans font-normal block'>PREP TIME</small>
                                        <span className='text-black text-sm font-sans font-normal leading-normal'>15 MIN</span>
                                    </li>
                                    <li className='py-1 px-2 md:px-7 border-l border-solid border-inherit'>
                                        <small className='text-gray-500 text-xs leading-3 font-sans font-normal block'>SERVINGS</small>
                                        <span className='text-black text-sm font-sans font-normal leading-normal'>
                                            4 PEOPLE
                                            <img className='inline ml-2 cursor-pointer align-middle w-5 h-5 md:w-6 md:h-6' src='/icons/recipes/icons-servings.png' />
                                        </span>
                                    </li>
                                    <li className='py-1 px-2 md:px-7 border-l border-solid border-inherit'>
                                        <img className='cursor-pointer align-middle w-5 h-5 md:w-6 md:h-6' src='/icons/recipes/printer.svg' />
                                    </li>
                                </ul>
                                <div className='mt-6 mt-12'>
                                    <h6 className='text-black text-xl font-bold font-serif leading-tight mt-0 mb-2 md:text-3xl'>Ingredients</h6>       
                                    <div className='mt-6 pb-2'>
                                        <strong className='text-black text-sm font-sans font-semibold leading-normal md:text-lg'>For the crust</strong>
                                        {cakeCrust.map((item, index) => (
                                        <div key={index} className='block mt-6 mb-0.5'>
                                            <input type="checkbox" className="checkbox checkbox-accent rounded-full float-left mr-3" />
                                            <label className='text-black text-lg font-sans font-normal leading-tight cursor-pointer block pl-9'>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                    
                                    <div className='mt-6 pb-2'>
                                        <strong className='text-black text-sm font-sans font-semibold leading-normal md:text-lg'>For the cheescake</strong>
                                        {cake.map((item, index) => (
                                        <div key={index} className='block mt-6 mb-0.5'>
                                            <input type="checkbox" className="checkbox checkbox-accent rounded-full float-left mr-3" />
                                            <label className='text-black text-lg font-sans font-normal leading-tight cursor-pointer block pl-9'>{item.text}</label>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='mt-4 mb-16 md:mt-12'>
                                    <h6 className='text-black text-xl font-bold font-serif leading-tight mt-0 mb-2 md:text-3xl md:leading-tight'>Instructions</h6>
                                    {instructions.map((item, index) => (
                                    <ul key={index} className='pt-3.5 pl-0 mt-0 list-none md:mb-4'>
                                        <li className='relative text-black font-sans font-normal text-sm leading-6 pr-0 pl-9 md:text-lg md:leading-normal md:pr-7 md:pl-10'>
                                            <span className='absolute top-0.5 left-0 w-6 h-6 rounded-full bg-orange-600 font-medium text-white text-sm text-center flex justify-center items-center flex-col'>{item.id}</span>
                                            {item.text}
                                        </li>
                                    </ul>
                                    ))} 
                                </div>
                            </div>
                        </div>

                        <div className={RecipesStyles.rightBlock}>
                            <div className='bg-slate-100 rounded-xl p-6'>
                                <h6 className='text-black text-xl font-bold font-serif leading-tight mt-0 mb-6 md:text-3xl md:leading-tight'>Nutrition Facts</h6>
                                {nutrition.map((item, index) => (
                                <ul key={index} className='pl-0 list-none my-0'>
                                    <li className='flex flex-wrap items-center py-1.5 border-t border-solid border-inherit'>
                                        <span className='text-gray-800 text-base font-sans font-light leading-normal w-1/2'>{item.text}</span>
                                        <span className='text-black text-base font-sans font-normal leading-6 w-1/2 text-right'>{item.value}</span>
                                    </li>
                                </ul>
                                ))}
                            </div>
                            <div className='pt-4 mt-6 md:pt-12 md:mt-12'>
                              <h6 className='text-black text-xl font-bold font-serif leading-tight mt-0 mb-2 md:text-3xl md:leading-tight'>Fresh Recipes</h6>
                              {fresh.map((item, index) => (
                              <div key={index} className={RecipesStyles.blockFresh}>
                                <img className={RecipesStyles.imgFresh} src={item.img} />
                                <div className={RecipesStyles.boxFresh}>
                                  <div className='pl-4'>
                                    <div className='w-full float-left text-red-600 leading-loose font-bold cursor-pointer md:mt-1 md:mr-1 md:mb-2.5 md:ml-0'>{item.voted}</div>
                                    <h6 className='text-black text-base font-semibold leading-tight font-sans my-2 cursor-pointer md:text-xl md:leading-tight'>{item.text}</h6>
                                  </div>
                                </div>
                              </div>
                              ))}
                            </div>
                            <div className='bg-orange-100 rounded-md py-12 px-6 mt-12'>
                              <div className='text-center py-4'>
                                <h5 className='text-black text-2xl font-bold font-serif leading-tight mt-0 mb-4 md:text-4xl md:leading-tight'>Deliciousness to your inbox</h5>
                                <p className='text-black text-sm leading-6 font-sans font-normal mt-0 mb-4 md:text-base md:leading-6'>Enjoy weekly hand picked recipes and recommendations</p>
                                <div className='relative flex flex-wrap flex-col rounded overflow-hidden items-stretch w-full mt-6'>
                                  <input
                                    className={RecipesStyles.inputEmail}
                                    type="email"
                                    placeholder="Email Address"
                                  />
                                  <div
                                    className='my-3.5'
                                    onClick={'/...'}
                                  >
                                    <button className='bg-orange-500 cursor-pointer text-lg font-semibold py-1 px-10 h-12 w-full rounded'>JOIN</button>
                                  </div>
                                </div>
                                <small className='block text-black text-xs font-sans leading-normal font-normal'>By joining our newsletter you agree to our <br/> <u href='/' className='hover:text-red-400 decoration-red-400 underline-offset-4 cursor-pointer'>Terms and Conditions</u></small>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pb-6 pt-12 my-6 md:py-12 md:my-12'>
                    <h2 className='text-black text-3xl font-bold font-serif leading-tight mt-0 mb-4 md:text-6xl md:leading-tight'>Already made this?</h2>
                    <div href='/' className='text-black text-base font-sans leading-normal font-medium px-12 py-1.5 inline-block cursor-pointer border border-solid border-black rounded'>Share your feedback</div>
                    <br />
                    <br />
                    <hr style={{backgroundColor:'#FF642F', height:'11px', opacity:'1', borderColor:'#E8E8E8', margin:'16px 0', color:'inherit', border:'0'}} />
                </div>

                <div className='pt-0 my-12 md:pt-4'>
                    <div className='pb-4 mb-6 border-b border-solid border-gray-300'>
                        <h2 className='inline-block text-black text-3xl font-bold leading-tight font-serif mt-0 mb-2 md:text-6xl md:leading-tight'>Comments</h2>
                        <span className='text-black text-base font-sans font-normal leading-normal md:text-2xl md:leading-normal'> (25)</span>
                    </div>
                    <ul className='my-0 pl-0'>
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
      <div className='my-6 md:my-12'>
        <h5 className='text-black font-bold font-serif text-2xl leading-tight py-4 my-0 md:text-4xl md:leading-tight'>You might also like</h5>
        <div className={RecipesStyles.rowSuggestions}>
          {suggestions.map((item, index) => (
          <div key={index} className={RecipesStyles.blockSuggestions}>
            <div className='relative my-4 md:my-6' href={item.link}>
              <img className='block overflow-hidden rounded-md w-full max-w-full cursor-pointer' src={item.img} />
              <div className='block text-black text-sm font-sans leading-normal font-semibold mt-2 cursor-pointer md:text-lg md:leading-normal'>{item.text}</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}