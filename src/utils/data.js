const items = [
  {
    "name": "Cappuccino",
    "price": 79,
    "category": "coffee",
    "image": "https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg"
  },
  {
    "name": "Espresso",
    "price": 89,
    "category": "coffee",
    "image": "https://foodsguy.com/wp-content/uploads/2022/02/Espresso-540x720.jpg"
  },
  {
    "name": "Latte",
    "price": 110,
    "category": "coffee",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg"
  },
  {
    "name": "Mocha",
    "price": 120,
    "category": "coffee",
    "image": "https://www.butteredsideupblog.com/wp-content/uploads/2021/04/How-to-Make-a-Mocha-Latte-65.jpg.webp"
  },
  {
    "name": "Americano",
    "price": 99,
    "category": "coffee",
    "image": "https://s3.amazonaws.com/media.gregoryscoffee.com/uploads/food/photo/301/marqii_food_full_1280x720.jpg"
  },
  {
    "name": "Iced coffee",
    "price": 110,
    "category": "coffee",
    "image": "https://images.ctfassets.net/v601h1fyjgba/4GLzOncHIe8rq3xY099cZ/dd17ce72ebb6fb01659c763fe64953db/Iced_Latte.jpg"
  },
  {
    "name": "Frappe",
    "price": 120,
    "category": "coffee",
    "image": "https://www.thehungrybites.com/wp-content/uploads/2023/06/coffee-ice-cream-frappe-frappuccino-feat.jpg"
  },
  {
    "name": "Black Coffee",
    "price": 79,
    "category": "coffee",
    "image": "https://cdn2.shopify.com/s/files/1/2283/9379/files/BC_7_web.jpg?v=1563091571"
  },
  {
    "name": "Affogato",
    "price": 110,
    "category": "coffee",
    "image": "https://www.crowdedkitchen.com/wp-content/uploads/2021/09/Affogato-7.jpg"
  },
  {
    "name": "Green Tea",
    "price": 79,
    "category": "tea",
    "image": "https://cdnimg.webstaurantstore.com/images/products/large/670356/2322859.jpg"
  },
  {
    "name": "Chai",
    "price": 49,
    "category": "tea",
    "image": "https://www.teacupsfull.com/cdn/shop/articles/Screenshot_2023-09-05_at_7.00.35_PM.png"
  },
  {
    "name": "Matcha Tea",
    "price": 150,
    "category": "tea",
    "image": "https://www.acouplecooks.com/wp-content/uploads/2021/09/How-to-Make-Matcha-013s.jpg"
  },
  {
    "name": "Rooibos Tea",
    "price": 99,
    "category": "tea",
    "image": "https://c.ndtvimg.com/2019-01/lvt7hom_rooibos-tea-for-diabetes_625x300_17_January_19.jpg"
  },
  {
    "name": "Black Tea",
    "price": 49,
    "category": "tea",
    "image": "https://mehtaperturk.com/wp-content/uploads/2022/04/turkish-tea.jpg.webp"
  },
  {
    "name": "Herbal Tea",
    "price": 89,
    "category": "tea",
    "image": "https://eqhct8esjgc.exactdn.com/wp-content/uploads/2021/05/mint-tea-in-glass-cup-sq.jpg"
  },
  {
    "name": "Lemon Tea",
    "price": 79,
    "category": "tea",
    "image": "https://feedgrump.com/wp-content/uploads/2023/04/Hong-kong-lemon-tea-feature.jpg"
  },
  {
    "name": "Chocolate Shake",
    "price": 149,
    "category": "milkshake",
    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg"
  },
  {
    "name": "Strawberry Shake",
    "price": 159,
    "category": "milkshake",
    "image": "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg"
  },
  {
    "name": "Oreo Shake",
    "price": 179,
    "category": "milkshake",
    "image": "https://bellyfull.net/wp-content/uploads/2020/07/Oreo-Milkshake-blog-3.jpg"
  },
  {
    "name": "Banana Shake",
    "price": 159,
    "category": "milkshake",
    "image": "https://assets.epicurious.com/photos/647df8cea0ddfab1629e49d4/4:3/w_5092,h_3819,c_limit/BananaShake_RECIPE_053123_3647.jpg"
  },
  {
    "name": "Salted Caramel",
    "price": 179,
    "category": "milkshake",
    "image": "https://www.howsweeteats.com/wp-content/uploads/2017/09/chobani-caramel-shake-9.jpg"
  },
  {
    "name": "Vanilla Shake",
    "price": 159,
    "category": "milkshake",
    "image": "https://homebodyeats.com/wp-content/uploads/2021/05/vanilla-milkshake-recipe.jpg"
  },
  {
    "name": "Mango Shake",
    "price": 189,
    "category": "milkshake",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe-500x500.jpg"
  },
  {
    "name": "Orange Juice",
    "price": 99,
    "category": "juice",
    "image": "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_129600591-1024x683.jpeg"
  },
  {
    "name": "Blueberry Juice",
    "price": 129,
    "category": "juice",
    "image": "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_69825501-1024x683.jpeg"
  },
  {
    "name": "Apple Juice",
    "price": 119,
    "category": "juice",
    "image": "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_52939276-1024x799.jpeg"
  },
  {
    "name": "Cranberry Juice",
    "price": 159,
    "category": "juice",
    "image": "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_60563044-1024x710.jpeg"
  },
  {
    "name": "Watermelon Juice",
    "price": 119,
    "category": "juice",
    "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Fresh-Watermelon-Juice-Recipe.jpg"
  },
  {
    "name": "Mango Juice",
    "price": 159,
    "category": "juice",
    "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg"
  },
  {
    "name": "Pineapple Juice",
    "price": 129,
    "category": "juice",
    "image": "https://www.foodabovegold.com/wp-content/uploads/2019/07/Featured-Hero_-Fresh-Pineapple-Juice-Recipe-Without-a-Juicer.jpg"
  },
  {
    "name": "Croissant",
    "price": 129,
    "category": "bakery",
    "image": "https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/06croissantsrex1-square640.jpg"
  },
  {
    "name": "�clair",
    "price": 139,
    "category": "bakery",
    "image": "https://www.theflavorbender.com/wp-content/uploads/2019/03/Chocolate-Eclairs-Featured.jpg"
  },
  {
    "name": "Cream Puff",
    "price": 119,
    "category": "bakery",
    "image": "https://www.imperialsugar.com/sites/default/files/recipe/Orange-Cream-Puffs-imperial.jpg"
  },
  {
    "name": "Chocolate Cookie",
    "price": 119,
    "category": "bakery",
    "image": "https://thedefineddish.com/wp-content/uploads/2022/07/Perfect-Paleo-Chocolate-Chip-Cookies-4-scaled.jpg"
  },
  {
    "name": "Cheese Cake",
    "price": 159,
    "category": "bakery",
    "image": "https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9141-scaled.jpg"
  },
  {
    "name": "Coffee Cake",
    "price": 139,
    "category": "bakery",
    "image": "https://www.thechunkychef.com/wp-content/uploads/2020/07/coffee-cake-recipe-card.jpg"
  },
  {
    "name": "Red Velvet Cake",
    "price": 149,
    "category": "bakery",
    "image": "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg"
  },
  {
    "name": "Chocolate Cake",
    "price": 129,
    "category": "bakery",
    "image": "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg"
  },
  {
    "name": "Donuts",
    "price": 139,
    "category": "bakery",
    "image": "https://hips.hearstapps.com/hmg-prod/images/types-of-doughnuts-1666119864.jpg"
  },
  {
    "name": "Brownie",
    "price": 139,
    "category": "bakery",
    "image": "https://cakesbymk.com/wp-content/uploads/2023/01/Template-Size-for-Blog-Photos-15-802x1024.jpg"
  },
  {
    "name": "Cupcake",
    "price": 119,
    "category": "bakery",
    "image": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Yellow-Cupcakes_EXPS_BSFRTL23_41925_08_09_10b.jpg?fit=700,700"
  },
  {
    "name": "Muffins",
    "price": 129,
    "category": "bakery",
    "image": "https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
  },
  {
    "name": "Veggie Burger",
    "price": 139,
    "category": "burger",
    "image": "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg"
  },
  {
    "name": "Crispy Chicken Burger",
    "price": 159,
    "category": "burger",
    "image": "https://www.sugarsaltmagic.com/wp-content/uploads/2022/09/Crispy-Chicken-Burgers-15-FEAT.jpg"
  },
  {
    "name": "Panner Burger",
    "price": 159,
    "category": "burger",
    "image": "https://img.freepik.com/premium-photo/delicious-paneer-burger-generated-by-ai_957803-2332.jpg"
  },
  {
    "name": "BBQ Chicken Burger",
    "price": 179,
    "category": "burger",
    "image": "https://www.thegoodbite.co.uk/wp-content/uploads/2023/05/DSCF0220-scaled.jpg"
  },
  {
    "name": "Egg Burger",
    "price": 149,
    "category": "burger",
    "image": "https://sweetcaramelsunday.com/wp-content/uploads/Fried-Egg-Burger-170.jpg"
  },
  {
    "name": "Spaghetti Aglio Olio",
    "price": 249,
    "category": "pasta",
    "image": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2de91e83-2502-47a6-aaa6-99a65eec8bea/Derivates/59952bab-94cb-42e4-8ae4-3e3925f737b3.jpg"
  },
  {
    "name": "Mac and Cheese",
    "price": 239,
    "category": "pasta",
    "image": "https://www.foodandwine.com/thmb/guEUQEjXSlxMaT4GCU9DBL3vrrA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/make-perfect-cheese-sauce-with-sodium-citrate-FT-BLOG1120-3d21b11fddf74de28d29474f6fe29352.jpg"
  },
  {
    "name": "White Sauce Pasta",
    "price": 229,
    "category": "pasta",
    "image": "https://lilluna.com/wp-content/uploads/2022/11/white-sauce-pasta-resize-1-500x500.jpg"
  },
  {
    "name": "Cheese Rigatoni",
    "price": 249,
    "category": "pasta",
    "image": "https://thesaltymarshmallow.com/wp-content/uploads/2019/08/rigatoni1.jpg"
  },
  {
    "name": "Red Sauce Pasta",
    "price": 249,
    "category": "pasta",
    "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/4/8/2/FNM_050114-Classic-Red-Sauce-Recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1397491331300.jpeg"
  },
  {
    "name": "Margherita Pizza",
    "price": 229,
    "category": "pizza",
    "image": "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg"
  },
  {
    "name": "Veggie Delight Pizza",
    "price": 249,
    "category": "pizza",
    "image": "https://recipefund.com/wp-content/uploads/jet-form-builder/f133c249d4a29961d2fd87ee9713e9c1/2023/08/Vegie-Deight-Pizza.png"
  },
  {
    "name": "Chicken Pizza",
    "price": 269,
    "category": "pizza",
    "image": "https://joyfoodsunshine.com/wp-content/uploads/2022/11/BBQ-chicken-pizza-recipe-9.jpg"
  },
  {
    "name": "Pepperoni Pizza",
    "price": 289,
    "category": "pizza",
    "image": "https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go-500x500.jpg"
  },
  {
    "name": "BBQ Chicken Pizza",
    "price": 279,
    "category": "pizza",
    "image": "https://s23209.pcdn.co/wp-content/uploads/2021/10/BBQ-Chicken-PizzaIMG_0027.jpg"
  },
  {
    "name": "Paneer Tikka Pizza",
    "price": 259,
    "category": "pizza",
    "image": "https://www.cavit.com/wp-content/uploads/2022/02/D6889827-35C1-4EA7-8B25-25ADD1A91168.jpeg"
  },
  {
    "name": "Classic Cheese Pizza",
    "price": 249,
    "category": "pizza",
    "image": "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
  },
  {
    "name": "Mozzarella Pizza",
    "price": 259,
    "category": "pizza",
    "image": "https://www.gozney.com/cdn/shop/articles/Caprese_Pizza_Feng_Chen_leopardcrust_-_Large_b45ed4e9-09f8-4bad-a6e9-f2391392a2a0_1000x560.jpg?v=1653033792"
  },
  {
    "name": "Bombay Grilled Sandwich",
    "price": 179,
    "category": "sandwich",
    "image": "https://static.toiimg.com/thumb/54714340.cms?imgsize=458099&width=800&height=800"
  },
  {
    "name": "Veg Toast Sandwich",
    "price": 149,
    "category": "sandwich",
    "image": "https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/veg-masala-toast-sandwich/veg-masala-toast-sandwich.jpg"
  },
  {
    "name": "Chilli Cheese Sandwich",
    "price": 169,
    "category": "sandwich",
    "image": "https://www.spiceupthecurry.com/wp-content/uploads/2017/02/chilli-cheese-sandwich-recipe-8.jpg"
  },
  {
    "name": "Jumbo Sandwich",
    "price": 249,
    "category": "sandwich",
    "image": "https://zaykarecipes.com/wp-content/uploads/2021/10/veg-sandwich.jpg"
  },
  {
    "name": "Jam Butter Toast",
    "price": 139,
    "category": "sandwich",
    "image": "https://recipesblob.oetker.in/assets/d65e637c02454051b6d7c11d05fd5a9d/1272x764/grilled-peanut-butter-and-jam-sandwich.jpg"
  },
  {
    "name": "Paneer Masala Sandwich",
    "price": 199,
    "category": "sandwich",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg"
  },
  {
    "name": "Peri Peri Fries",
    "price": 129,
    "category": "sides",
    "image": "https://jaipurcakengifts.com/images/thumbs/000/0001532_peri-peri-french-fries_550.webp"
  },
  {
    "name": "Stuffed Gralic Bread",
    "price": 159,
    "category": "sides",
    "image": "https://www.melissassouthernstylekitchen.com/wp-content/uploads/2020/08/feature.jpg"
  },
  {
    "name": "Chilli Cheese Nachos",
    "price": 149,
    "category": "sides",
    "image": "https://iambaker.net/wp-content/uploads/2019/07/chili-cheese-nacho-final.jpg"
  },
  {
    "name": "Corn Cheese Balls",
    "price": 139,
    "category": "sides",
    "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/05/Corn-Cheese-Balls.jpg"
  },
  {
    "name": "Pepsi",
    "price": 49,
    "category": "soft drinks",
    "image": "https://www.jiomart.com/images/product/original/491208775/pepsi-750-ml-product-images-o491208775-p491208775-0-202203170727.jpg?im=Resize=(1000,1000)"
  },
  {
    "name": "Sprite",
    "price": 49,
    "category": "soft drinks",
    "image": "https://www.bigbasket.com/media/uploads/p/l/100287_1-sprite-soft-drink.jpg"
  },
  {
    "name": "Coca Cola",
    "price": 49,
    "category": "soft drinks",
    "image": "https://m.media-amazon.com/images/I/61XxVmvUUXL.jpg"
  },
  {
    "name": "Bisleri Water",
    "price": 29,
    "category": "soft drinks",
    "image": "https://www.bigbasket.com/media/uploads/p/l/197349_1-bisleri-mineral-water.jpg"
  },
  {
    "name": "Red Bull",
    "price": 149,
    "category": "soft drinks",
    "image": "https://m.media-amazon.com/images/I/61nJpGHGMgL.jpg"
  }
]

module.exports = items