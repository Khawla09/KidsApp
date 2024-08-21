
const products = [
  //******************************************* Shoes****************************************** */
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/1842182/pexels-photo-1842182.jpeg?auto=compress&cs=tinysrgb&w=600"],sizes:["1", "2", "3", "4","5"],quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/2617102/pexels-photo-2617102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/13346744/pexels-photo-13346744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],sizes:["1", "2", "3", "4","5"],quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/15668367/pexels-photo-15668367/free-photo-of-couple-holding-kids-shoes-on-their-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.pexels.com/photos/26698570/pexels-photo-26698570/free-photo-of-little-girl-wearing-white-shoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],sizes:["1", "2", "3", "4","5"],quantity:20  
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://ikiki.co/cdn/shop/products/DuchessBubblegumSparkles_1600x1600_002_1445x.jpg?v=1678714621"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://m.media-amazon.com/images/I/71Kqi7nseuS._AC_UF894,1000_QL80_.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://apistage.rogansshoes.com/Data/Media/957fd523-a10d-4352-94d2-43cdd5ddd7caKIDS_WIDE-MB.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },{       
    category: "shoes",  name: "Kids Toy",   description: "best shoes can kid ever have",  price: 10.99,
    images: ["https://images.meesho.com/images/products/310919586/cbnfi_512.webp"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 13.99,
    images: ["https://n.nordstrommedia.com/id/sr3/158a21cc-79c8-4e59-b68a-78a16bc56b4c.jpeg?h=365&w=240&dpr=2"],sizes:["3-5"] ,quantity:20 
  },
  {       
    category: "shoes",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 13.99,
    images: ["https://target.scene7.com/is/image/Target/GUEST_b5eab17d-8baa-4430-a8fe-ac6d7e8aee58?wid=488&hei=488&fmt=pjpeg"],sizes:["3-5"] ,quantity:20 
  },
  //******************************************  Toys  ****************************************** 
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 10.99,
    images: ["https://m.media-amazon.com/images/I/51X50kituEL._AC_.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 15.99,
    images: ["https://m.media-amazon.com/images/I/71qAi8z9fkL._AC_UF894,1000_QL80_.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 18.99,
    images: ["https://www.chemicalsafetyfacts.org/wp-content/uploads/shutterstock_383521510-002-scaled.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 19.99,
    images: ["https://m.media-amazon.com/images/I/71KIocz1MPL.jpg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 20.99,
    images: ["https://img.kwcdn.com/product/open/2024-05-08/1715163490443-bdc1396994734e739f44b64906d8ac49-goods.jpeg"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 10.99,
    images: ["https://hunnybubbakids.com/cdn/shop/products/montessori-wooden-toys-baby-gift-set-hunny-bubba-kids-fox-toy-948.jpg?v=1632786218&width=1946"],sizes:["1", "2", "3", "4","5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 14.99,
    images: ["https://m.media-amazon.com/images/I/81mzApc3+BL.jpg"],sizes:["3-5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 18.99,
    images: ["https://m.media-amazon.com/images/I/819hOBikpOL.jpg"],sizes:["3-5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 16.99,
    images: ["https://m.media-amazon.com/images/I/71U06Q9P9YL.jpg"],sizes:["3-5"] ,quantity:20 
  },
  {       
    category: "toys",  name: "Kids Toy",   description: "best toys can kid ever have",  price: 13.99,
    images: ["https://www.baldwintoys.com/uploads/1/7/4/8/17482755/s753922065329995444_p4_i1_w518.jpeg"],sizes:["3-5"] ,quantity:20 
  },

  // *****************************************  clothes  *************************************** 
          {       
            category: "clothes",  name: "Kids T-Shirt",   description: "A comfortable cotton t-shirt for kids.",  price: 13.99,
            images: ["https://ae-pic-a1.aliexpress-media.com/kf/Sab143e25422a47a4b057c11389e9b9e8K.jpg_640x640Q90.jpg_.webp"], sizes: ["1", "2", "3", "4","5"],quantity:20 
          },
          {
           
            category: "clothes", name: "Kids T-Shirt",description: "A comfortable cotton t-shirt for kids.",
            price: 19.99, images: [ "https://qkkidsfashion.com/cdn/shop/collections/ali_exp_3.jpg?v=1607368749&width=1074",  ],sizes: ["1", "2", "3", "4","5"],quantity:20 
          },
          {
           
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.",  price: 14.99,
            images: [ "https://i5.walmartimages.com/seo/Princess-Tulle-Dress-Fall-Baby-Girl-Clothes-Rockabilly-Solid-Girls-Sleeve-Vintage-Retro-Kids-Short-Little-Ruffles-712Y-Dresses-Party-Swing-5t-Set_bfd869c2-470b-424c-92c4-3f81a629235c.e3851ed39f76274ddb6e5df9b1d58608.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            ], sizes: ["1", "2", "3", "4","5"],quantity:20 
          },

          { category: "clothes", name: "Kids T-Shirt",description: "A comfortable cotton t-shirt for kids.", price: 12.99,
            images: [ "https://i.ebayimg.com/images/g/~sAAAOSwNSxVam~0/s-l1200.webp",], sizes: ["1", "2", "3", "4","5"],quantity:20 
          },  
          {
           
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 10.99,
             images: [ "https://www.zeekagee.com/wp-content/uploads/2022/04/35fbae8072afecafe982e4cf889c6763.jpg", ],  sizes: ["1", "2", "3", "4","5"],quantity:20 

          },  
          {
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 13.99,
            images: ["https://i.pinimg.com/736x/cc/65/8c/cc658c47107f51ac07d11d1cc8136893.jpg",  ],    sizes: ["1", "2", "3", "4","5"],quantity:20 
            },  
          {
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 14.99,
            images: [ "https://img.fruugo.com/product/5/71/543898715_max.jpg",  ],    sizes: ["1", "2", "3", "4","5"],quantity:20 
          },  
          {
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 17.99,
            images: [ "https://i5.walmartimages.com/seo/Kids-Girls-Solid-Color-Cardigan-Shirt-And-Shorts-Playsuit-Clothes-HolidayOutdoor-Soft-Suit-4-Piece-Set-Baby-Boy-Boys-Summer-First-Birthday_cf3ed395-c5e1-43ea-98dc-41c309d2190c.88045e36b21fc658bb4fbea13aa2cfb4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",  ],   
             sizes: ["1", "2", "3", "4","5"],quantity:20 
          },  
          {
           
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 14.99,
            images: [ "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  ],    sizes: ["1", "2", "3", "4","5"],quantity:20 
          },   {
           
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 14.99,
            images: [ "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  ],    sizes: ["1", "2", "3", "4","5"],quantity:20 

          },         
          {
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 14.99,
            images: [ "https://images.pexels.com/photos/1133721/pexels-photo-1133721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  ],    sizes: ["1", "2", "3", "4","5"],quantity:20 
 
          },  
          {
            category: "clothes", name: "Kids T-Shirt", description: "A comfortable cotton t-shirt for kids.", price: 14.99,
            images: [ "https://images.pexels.com/photos/1619772/pexels-photo-1619772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  ],sizes: ["1", "2", "3", "4","5"],quantity:20 
          
          }
  ];
  module.exports = products