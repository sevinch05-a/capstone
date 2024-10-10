import React from 'react';
import { Link } from 'react-router-dom';
import './ShopCategory.css';
// import { useCart } from '../../components/context/CartContext'; 
// import dropdown_icon from '/dropdown-icon.png';

function ShopCategory() {
//    const { addProductToCart } = useContext(OrderContext);
    const menuSection = [
       
        { description: 'Baby Ice Cream Costume', price: 29.99, image: '/baby ice cream.jpg' },
        { description: 'Newborn Ice Cream Costume', price: 34.99, image: '/newborn-ice-cream.jpg' },
        { description: 'Baby Ice Cream Costume', price: 29.99, image: '/baby ice cream.jpg' },
        { description: 'Kid Ice Cream Girl Costume', price: 39.99, image: '/kid-ice-cream-girl.jpg' },
        { description: 'Cupcake Costume 3', price: 29.99, image: '/cupcake-3.jpg' },
        { description: 'Newborn Cupcake 2', price: 34.99, image: '/newborn-cupcake2.jpg' },
        { description: 'Newborn Cupcake Costume', price: 39.99, image: '/newborn-cupcake.jpg' },
        { description: 'Baby Cupcake Costume', price: 29.99, image: '/baby cupcake.jpg' },
        { description: 'Donut Girl Costume', price: 34.99, image: '/donut-girl.jpg' },
        { description: 'Newborn Donut Costume', price: 39.99, image: '/newborn-donut.jpg' },
        { description: 'Donut Boy Costume', price: 34.99, image: '/donut-boy.jpg' },
        { description: 'Fruit Girl 2B Costume', price: 39.99, image: '/fruitgirl2b.jpg' },
        { description: 'Newborn DIY Fruit Costume', price: 34.99, image: '/newborn-diy-fruit.jpg' },
        { description: 'Fruit Boy Costume', price: 29.99, image: '/fruit-boy.jpg' },
        { description: 'Fruits Girl Costume', price: 34.99, image: '/fruits girl.jpg' },
        { description: 'Girl Rubik\'s Cube Costume', price: 39.99, image: '/girl-rubiks-cube.jpg' },
        { description: 'Girl Rubik\'s Cube iGirl Costume', price: 39.99, image: '/girl-rubiks-cubeigirl.jpg' },
        { description: 'Rubik\'s Boy Costume', price: 34.99, image: '/rubiks-boy.jpg' },
        { description: 'Watermelon Boy Costume', price: 34.99, image: '/watermelon-boy.jpg' },
        { description: 'Watermelon Girl Costume', price: 34.99, image: '/watermelon-girl.jpg' },
        { description: 'Baby Watermelon Costume', price: 29.99, image: '/baby-watermelon.jpg' },
        { description: 'Dog Boy Costume', price: 34.99, image: '/dog-boy.jpg' },
        { description: 'Baby Dog Costume', price: 29.99, image: '/baby dog.jpg' },
        { description: 'Boy Chicken Costume', price: 34.99, image: '/boy-chicken.jpg' },
        { description: 'Chicken Baby Costume', price: 29.99, image: '/chicken baby.jpg' },
        { description: 'Baby Fox Costume', price: 34.99, image: '/baby fox.jpg' },
        { description: 'Baby Rabbit Costume', price: 29.99, image: '/baby rabbit.jpg' },
        { description: 'Baby Deer Costume', price: 29.99, image: '/baby deer.jpg' },
        { description: 'Cow Boy Costume', price: 34.99, image: '/cow boy.jpg' },
        { description: 'Boy Panda Costume', price: 34.99, image: '/boy panda.jpg' },
        { description: 'Newborn Panda Costume', price: 39.99, image: '/newborn panda.jpg' },
        { description: 'Infant Sun Boy Costume', price: 29.99, image: '/infant-sun-boy.jpg' },
        { description: 'Sun Costume Girl', price: 34.99, image: '/sun-costumegirl.jpg' },
        { description: 'Baby Sun Newborn Costume', price: 39.99, image: '/baby-sun-newborn.jpg' },
        { description: 'Potted Flower Boy Costume', price: 34.99, image: '/potted-flower-boy.jpg' },
        { description: 'Lotus Flower Girl Costume', price: 34.99, image: '/lotus-flower-girl.jpg' },
        { description: 'Newborn Flower Costume', price: 39.99, image: '/newborn-flower-costume.jpg' },
        { description: 'Smurf Newborn Costume', price: 29.99, image: '/smurf-newborn.jpg' },
        { description: 'Smurf Boy Costume', price: 34.99, image: '/murfboy.jpg' },
        { description: 'Smurfs Girl Costume', price: 34.99, image: '/smurfsgirl.jpg' },
        { description: 'Ms. Potato Girl Costume', price: 34.99, image: '/ms-potatogirl.jpg' },
        { description: 'Potato Newborn Costume', price: 29.99, image: '/potato-newborn.jpg' },
        { description: 'Kid Frozen Boy Costume', price: 34.99, image: '/kid-frozenboy.jpg' },
        { description: 'Newborn Halloween Costume', price: 39.99, image: '/newborn-halloween.jpg' },
        { description: 'Newborn Reindeer Costume', price: 39.99, image: '/newborn-reindeer.jpg' },
        { description: 'Tomato Fancy Dress Girl Costume', price: 34.99, image: '/tomato-fancy-dressgirl.jpg' },
        { description: 'Boy Avocado Costume', price: 34.99, image: '/boy-avocado.jpg' },
        { description: 'Cucumber Fancy Dress Boy Costume', price: 34.99, image: '/cucumber-fancy-dressboy.jpg' },
        { description: 'Girl Bumble Bee 2 Costume', price: 34.99, image: '/girl-bumble-bee2.jpg' },
        { description: 'Newborn Bee Costume', price: 29.99, image: '/newborn-bee.jpg' },
        { description: 'Newborn Bumble Bee 2 Costume', price: 34.99, image: '/newborn-bumble-bee2.jpg' },
    ]
}



   
     
{/* <div className="shopcategory-indexSort">
    <p>
        <span>Showing 1-50</span> out of 68 costumes
    </p>
    <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt=""/>
    </div>
</div> */}
//     const handleAddToCart = (item) => {
//         console.log(`Added to cart: ${item.description}`);
//     };
//     function ShopCategory() {
//         const { addToCart } = useCart();
//     return (
//         <div className="shop-category">
//             <h1>Costume Shop</h1>
//             <div className="menu-items">
//                 {menuSection.map((item, index) => (
//                     <div key={index} className="menu-item">
//                         <img src={item.image} alt={item.description} />
//                         <h2>{item.description}</h2>
//                         <p>${item.price.toFixed(2)}</p>
//                         <Link to="/Cart" onClick={() => handleAddToCart(item)} className="add-to-cart">
//                           Add to cart
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
 
export default ShopCategory;























































// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ShopCategory.css';
// import { Cart } from './pages/CartPage/Cart';
// import { useCart } from './hooks/useCart';
// import babyicecream from '/baby ice cream.jpg'
// import newbornIceCream from './newborn-ice-cream.jpg';
// import babyIceCream from './baby ice cream.jpg';
// import kidIceCreamGirl from './kid-ice-cream-girl.jpg';
// import cupcake3 from './cupcake-3.jpg';
// import newbornCupcake2 from './newborn-cupcake2.jpg';
// import newbornCupcake from './newborn-cupcake.jpg';
// import babyCupcake from './baby cupcake.jpg';
// import donutGirl from './donut-girl.jpg';
// import newbornDonut from './newborn-donut.jpg';
// import donutBoy from './donut-boy.jpg';
// import fruitGirl2B from './fruitgirl2b.jpg';
// import newbornDiyFruit from './newborn-diy-fruit.jpg';
// import fruitBoy from './fruit-boy.jpg';
// import fruitsGirl from './fruits girl.jpg';
// import girlRubiksCube from './girl-rubiks-cube.jpg';
// import girlRubiksCubeIGirl from './girl-rubiks-cubeigirl.jpg';
// import rubiksBoy from './rubiks-boy.jpg';
// import watermelonBoy from './watermelon-boy.jpg';
// import watermelonGirl from './watermelon-girl.jpg';
// import babyWatermelon from './baby-watermelon.jpg';
// import dogBoy from './dog-boy.jpg';
// import babyDog from './baby dog.jpg';
// import boyChicken from './boy-chicken.jpg';
// import chickenBaby from './chicken baby.jpg';
// import babyFox from './baby fox.jpg';
// import babyRabbit from './baby rabbit.jpg';
// import babyDeer from './baby deer.jpg';
// import cowBoy from './cow boy.jpg';
// import boyPanda from './boy panda.jpg';
// import newbornPanda from './newborn panda.jpg';
// import infantSunBoy from './infant-sun-boy.jpg';
// import sunCostumeGirl from './sun-costumegirl.jpg';
// import babySunNewborn from './baby-sun-newborn.jpg';
// import pottedFlowerBoy from './potted-flower-boy.jpg';
// import lotusFlowerGirl from './lotus-flower-girl.jpg';
// import newbornFlowerCostume from './newborn-flower-costume.jpg';
// import smurfNewborn from './smurf-newborn.jpg';
// import smurfBoy from './murfboy.jpg';
// import smurfsGirl from './smurfsgirl.jpg';
// import msPotatoGirl from './ms-potatogirl.jpg';
// import potatoNewborn from './potato-newborn.jpg';
// import kidFrozenBoy from './kid-frozenboy.jpg';
// import newbornHalloween from './newborn-halloween.jpg';
// import newbornReindeer from './newborn-reindeer.jpg';
// import tomatoFancyDressGirl from './tomato-fancy-dressgirl.jpg';
// import boyAvocado from './boy-avocado.jpg';
// import cucumberFancyDressBoy from './cucumber-fancy-dressboy.jpg';
// import girlBumbleBee2 from './girl-bumble-bee2.jpg';
// import newbornBee from './newborn-bee.jpg';
// import newbornBumbleBee2 from './newborn-bumble-bee2.jpg';

// import babyDeer from './baby deer.jpg';
// import cowBoy from './cow boy.jpg';
// import boyPanda from './boy panda.jpg';
// import newbornPanda from './newborn panda.jpg';
// import infantSunBoy from './infant-sun-boy.jpg';
// import sunCostumeGirl from './sun-costumegirl.jpg';
// import babySunNewborn from './baby-sun-newborn.jpg';
// import pottedFlowerBoy from './potted-flower-boy.jpg';
// import lotusFlowerGirl from './lotus-flower-girl.jpg';
// import newbornFlowerCostume from './newborn-flower-costume.jpg';
// import smurfNewborn from './smurf-newborn.jpg';
// import smurfBoy from './smurfboy.jpg';
// import smurfsGirl from './smurfsgirl.jpg';
// import msPotatoGirl from './ms-potatogirl.jpg';
// import potatoNewborn from './potato-newborn.jpg';
// import kidFrozenBoy from './kid-frozenboy.jpg';
// import newbornReindeer from './newborn-reindeer.jpg'

// function ShopCategory() {
//     const { addCostumeToOrder } useCart();
//   const menuSection = [
//     {
//         id: 1,
//         name: "Sweet Newborn Ice Cream",
//         category: "costumes",
//         image: newbornIceCream,
//         price: 29.99,
//     },
//     {
//         id: 2,
//         name: "Cool Baby Ice Cream",
//         category: "costumes",
//         image: babyIceCream,
//         price: 29.99,
//     },
//     {
//         id: 3,
//         name: "Ice Cream Diva",
//         category: "costumes",
//         image: kidIceCreamGirl,
//         price: 29.99,
//     },
//     {
//         id: 4,
//         name: "Cupcake Delight",
//         category: "costumes",
//         image: cupcake3,
//         price: 29.99,
//     },
//     {
//         id: 5,
//         name: "Mini Cupcake Cutie",
//         category: "costumes",
//         image: newbornCupcake2,
//         price: 29.99,
//     },
//     {
//         id: 6,
//         name: "Tiny Cupcake Baby",
//         category: "costumes",
//         image: newbornCupcake,
//         price: 29.99,
//     },
//     {
//         id: 7,
//         name: "Baby Cupcake Sprinkle",
//         category: "costumes",
//         image: babyCupcake,
//         price: 29.99,
//     },
//     {
//         id: 8,
//         name: "Donut Dream Girl",
//         category: "costumes",
//         image: donutGirl,
//         price: 29.99,
//     },
//     {
//         id: 9,
//         name: "Donut Baby Delight",
//         category: "costumes",
//         image: newbornDonut,
//         price: 29.99,
//     },
//     {
//         id: 10,
//         name: "Donut Boy Wonder",
//         category: "costumes",
//         image: donutBoy,
//         price: 29.99,
//     },
//     {
//         id: 11,
//         name: "Fruit Princess",
//         category: "costumes",
//         image: fruitGirl2B,
//         price: 29.99,
//     },
//     {
//         id: 12,
//         name: "Newborn DIY Fruit",
//         category: "costumes",
//         image: newbornDiyFruit,
//         price: 29.99,
//     },
//     {
//         id: 13,
//         name: "Fruit Boy Splash",
//         category: "costumes",
//         image: fruitBoy,
//         price: 29.99,
//     },
//     {
//         id: 14,
//         name: "Fruity Girl",
//         category: "costumes",
//         image: fruitsGirl,
//         price: 29.99,
//     },
//     {
//         id: 15,
//         name: "Rubik's Cube Girl Genius",
//         category: "costumes",
//         image: girlRubiksCube,
//         price: 29.99,
//     },
//     {
//         id: 16,
//         name: "Color Block Cutie",
//         category: "costumes",
//         image: girlRubiksCubeIGirl,
//         price: 29.99,
//     },
//     {
//         id: 17,
//         name: "Rubik's Boy Brainiac",
//         category: "costumes",
//         image: rubiksBoy,
//         price: 29.99,
//     },
//     {
//         id: 18,
//         name: "Watermelon Boy Splash",
//         category: "costumes",
//         image: watermelonBoy,
//         price: 29.99,
//     },
//     {
//         id: 19,
//         name: "Watermelon Sweetie",
//         category: "costumes",
//         image: watermelonGirl,
//         price: 29.99,
//     },
//     {
//         id: 20,
//         name: "Baby Watermelon Joy",
//         category: "costumes",
//         image: babyWatermelon,
//         price: 29.99,
//     },
//     {
//         id: 21,
//         name: "Puppy Boy Wonder",
//         category: "costumes",
//         image: dogBoy,
//         price: 29.99,
//     },
//     {
//         id: 22,
//         name: "Baby Puppy Pawfect",
//         category: "costumes",
//         image: babyDog,
//         price: 29.99,
//     },
//     {
//         id: 23,
//         name: "Clucky Chicken Boy",
//         category: "costumes",
//         image: boyChicken,
//         price: 29.99,
//     },
//     {
//         id: 24,
//         name: "Chirpy Chicken Baby",
//         category: "costumes",
//         image: chickenBaby,
//         price: 29.99,
//     },
//     {
//         id: 25,
//         name: "Baby Fox Explorer",
//         category: "costumes",
//         image: babyFox,
//         price: 29.99,
//     },
//     {
//         id: 26,
//         name: "Bunny Hop Baby",
//         category: "costumes",
//         image: babyRabbit,
//         price: 29.99,
//     },
//     {
//         id: 27,
//         name: "Deer Baby Darling",
//         category: "costumes",
//         image: babyDeer,
//         price: 29.99,
//     },
//     {
//         id: 28,
//         name: "Moo Cow Kid",
//         category: "costumes",
//         image: cowBoy,
//         price: 29.99,
//     },
//     {
//         id: 29,
//         name: "Panda Buddy Boy",
//         category: "costumes",
//         image: boyPanda,
//         price: 29.99,
//     },
//     {
//         id: 30,
//         name: "Newborn Panda Paws",
//         category: "costumes",
//         image: newbornPanda,
//         price: 29.99,
//     },
//     {
//         id: 31,
//         name: "Sunny Boy",
//         category: "costumes",
//         image: infantSunBoy,
//         price: 29.99,
//     },
//     {
//         id: 32,
//         name: "Sunshine Girl",
//         category: "costumes",
//         image: sunCostumeGirl,
//         price: 29.99,
//     },
//     {
//         id: 33,
//         name: "Newborn Sun Ray",
//         category: "costumes",
//         image: babySunNewborn,
//         price: 29.99,
//     },
//     {
//         id: 34,
//         name: "Potted Flower Boy",
//         category: "costumes",
//         image: pottedFlowerBoy,
//         price: 29.99,
//     },
//     {
//         id: 35,
//         name: "Lotus Flower Girl",
//         category: "costumes",
//         image: lotusFlowerGirl,
//         price: 29.99,
//     },
//     {
//         id: 36,
//         name: "Newborn Flower Bloom",
//         category: "costumes",
//         image: newbornFlowerCostume,
//         price: 29.99,
//     },
//     {
//         id: 37,
//         name: "Newborn Smurf Baby",
//         category: "costumes",
//         image: smurfNewborn,
//         price: 29.99,
//     },
//     {
//         id: 38,
//         name: "Smurf Boy Mischief",
//         category: "costumes",
//         image: smurfBoy,
//         price: 29.99,
//     },
//     {
//         id: 39,
//         name: "Smurfs Girl Magic",
//         category: "costumes",
//         image: smurfsGirl,
//         price: 29.99,
//     },
//     {
//         id: 40,
//         name: "Ms. Potato Girl",
//         category: "costumes",
//         image: msPotatoGirl,
//         price: 29.99,
//     },
//     {
//         id: 41,
//         name: "Newborn Potato Baby",
//         category: "costumes",
//         image: potatoNewborn,
//         price: 29.99,
//     },
//     {
//         id: 42,
//         name: "Frozen Boy Magic",
//         category: "costumes",
//         image: kidFrozenBoy,
//         price: 29.99,
//     },
//     {
//         id: 43,
//         name: "Newborn Reindeer",
//         category: "costumes",
//         image: newbornReindeer,
//         price: 29.99,
//     },
//     {
//         id: 44,
//         name: "Tomato Fancy Dress Girl",
//         category: "costumes",
//         image: tomatoFancyDressGirl,
//         price: 29.99,
//     },
//     {
//         id: 45,
//         name: "Avocado Boy Wonder",
//         category: "costumes",
//         image: boyAvocado,
//         price: 29.99,
//     },
//     {
//         id: 46,
//         name: "Cucumber Fancy Dress Boy",
//         category: "costumes",
//         image: cucumberFancyDressBoy,
//         price: 29.99,
//     },
//     {
//         id: 47,
//         name: "Bumblebee Buzz Girl",
//         category: "costumes",
//         image: girlBumbleBee2,
//         price: 29.99,
//     },
//     {
//         id: 48,
//         name: "Newborn Honey Bee",
//         category: "costumes",
//         image: newbornBee,
//         price: 29.99,
//     },
//     {
//         id: 49,
//         name: "Bumble Bee Sweet Baby",
//         category: "costumes",
//         image: newbornBumbleBee2,
//         price: 29.99,
//     },
//     {
//         id: 50,
//         name: "Bunny Hop Baby",
//         category: "costumes",
//         image: babyRabbit,
//         price: 29.99,
//     },
//     {
//         id: 51,
//         name: "Deer Baby Darling",
//         category: "costumes",
//         image: babyDeer,
//         price: 29.99,
//     },
//     {
//         id: 52,
//         name: "Moo Cow Kid",
//         category: "costumes",
//         image: cowBoy,
//         price: 29.99,
//     },
//     {
//         id: 53,
//         name: "Panda Buddy Boy",
//         category: "costumes",
//         image: boyPanda,
//         price: 29.99,
//     },
//     {
//         id: 54,
//         name: "Newborn Panda Paws",
//         category: "costumes",
//         image: newbornPanda,
//         price: 29.99,
//     },
//     {
//         id: 55,
//         name: "Sunny Boy",
//         category: "costumes",
//         image: infantSunBoy,
//         price: 29.99,
//     },
//     {
//         id: 56,
//         name: "Sunshine Girl",
//         category: "costumes",
//         image: sunCostumeGirl,
//         price: 29.99,
//     },
//     {
//         id: 57,
//         name: "Newborn Sun Ray",
//         category: "costumes",
//         image: babySunNewborn,
//         price: 29.99,
//     },
//     {
//         id: 58,
//         name: "Potted Flower Boy",
//         category: "costumes",
//         image: pottedFlowerBoy,
//         price: 29.99,
//     },
//     {
//         id: 59,
//         name: "Lotus Flower Girl",
//         category: "costumes",
//         image: lotusFlowerGirl,
//         price: 29.99,
//     },
//     {
//         id: 60,
//         name: "Newborn Flower Bloom",
//         category: "costumes",
//         image: newbornFlowerCostume,
//         price: 29.99,
//     },
//     {
//         id: 61,
//         name: "Newborn Smurf Baby",
//         category: "costumes",
//         image: smurfNewborn,
//         price: 29.99,
//     },
//     {
//         id: 62,
//         name: "Smurf Boy Mischief",
//         category: "costumes",
//         image: smurfBoy,
//         price: 29.99,
//     },
//     {
//         id: 63,
//         name: "Smurfs Girl Magic",
//         category: "costumes",
//         image: smurfsGirl,
//         price: 29.99,
//     },
//     {
//         id: 64,
//         name: "Ms. Potato Girl",
//         category: "costumes",
//         image: msPotatoGirl,
//         price: 29.99,
//     },
//     {
//         id: 65,
//         name: "Newborn Potato Baby",
//         category: "costumes",
//         image: potatoNewborn,
//         price: 29.99,
//     },
//     {
//         id: 66,
//         name: "Frozen Boy Magic",
//         category: "costumes",
//         image: kidFrozenBoy,
//         price: 29.99,
//     },
//     {
//         id: 67,
//         name: "Newborn Reindeer",
//         category: "costumes",
//         image: newbornReindeer,
//         price: 29.99,
//     },

//   ]







//   return (
//     <div></div>
//   )
// }

// export default ShopCategory



















// import React from 'react'
// import './ShopCategory.css'
// import { ShopContext } from '../../Contex/ShopContext';
// import dropdown_icon from '/dropdown-icon.png';

// function ShopCategory(props) {
//   const {all_product} = useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <div className="shopcategory-indexSort">
//         <p>
//          <span>Showing 1-50</span> out of 65 products 
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if (props.category===item.category) {

//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default ShopCategory
