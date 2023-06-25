import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import productOne from "../assets/product/Product1.jpg";
import productTwo from "../assets/product/Product2.jpg";
import productThree from "../assets/product/Product3.jpg";
import productFour from "../assets/product/Product4.png";

import productFive from "../assets/product/Product5.png";
import productSix from "../assets/product/Product6.jpg";
import productSeven from "../assets/product/Product7.png";
import productEight from "../assets/product/Product8.jpg";

import brandOne from "../assets/brand/Prada.png";
import brandTwo from "../assets/brand/Boss.png";
import brandThree from "../assets/brand/Gucci.png";
import brandFour from "../assets/brand/Burberry.png";
import brandFive from "../assets/brand/Catier.png";
import brandSix from "../assets/brand/Tiffany&Co.png";

import icon1 from "../assets/openfashion/icon1.png";
import icon2 from "../assets/openfashion/icon2.png";
import icon3 from "../assets/openfashion/icon3.png";
import icon4 from "../assets/openfashion/icon4.png";

import group1 from "../assets/followus/Group1.png";
import group2 from "../assets/followus/Group2.png";
import group3 from "../assets/followus/Group3.png";
import group4 from "../assets/followus/Group4.png";

export const newArrival = [
  {
    image: productOne,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr2",
  },
  {
    image: productTwo,
    title: "Oblong",
    price: "120",
    id: "pr4",
  },
  {
    image: productThree,
    title: "21WN Reversible Angora Cardigan",
    price: "120",
    id: "pr1",
  },
  {
    image: productFour,
    title: "21WN Reversible Pandra Cardigan",
    price: "120",
    id: "pr3",
  },
];

export const brands = [
  { image: brandOne, title: "Prada", id: "br1" },

  { image: brandThree, title: "Gucci", id: "br3" },
  { image: brandSix, title: "Tiffany & Co", id: "br6" },
  { image: brandFour, title: "Burberry", id: "br4" },
  { image: brandTwo, title: "Boss", id: "br2" },
  { image: brandFive, title: "Catier", id: "br5" },
];

export const productsForYou = [
  {
    image: productFive,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr2",
  },
  {
    image: productSix,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr4",
  },
  {
    image: productSeven,
    title: "Harris Tweed Three Button Jacket",
    price: "120",
    id: "pr1",
  },
  {
    image: productEight,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr3",
  },
];

export const trendingTags = [
  "2023",
  "spring",
  "collection",
  "fall",
  "dress",
  "autumncollection",
  "fashion",
];

export const openFashionInfo = [
  { icon: icon4, info: "Fast shipping. Free on orders over $25.", id: "opi1" },
  {
    icon: icon2,
    info: "Unique designs and high-quality materials.",
    id: "opi2",
  },
  {
    icon: icon3,
    info: "Sustainable process from start to finish.",
    id: "opi3",
  },
  { icon: icon1, info: "Fast shipping. Free on orders over $25..", id: "opi4" },
];

export const followUs = [
  { img: group1, link: "@mia", id: "gr1" },
  { img: group2, link: "@jihyn", id: "gr2" },
  { img: group3, link: "@mia", id: "gr3" },
  { img: group4, link: "@jihyn", id: "gr4" },
];

export const socialIcons = [
  { icon: <AiFillInstagram />, id: "icon1" },
  { icon: <AiFillTwitterSquare />, id: "icon2" },
  { icon: <AiFillYoutube />, id: "icon3" },
];

export const footerLinks = [
  { link: "about", id: "link1" },
  { link: "contact", id: "link2" },
  { link: "blog", id: "icon3" },
];

export const blogPost = [
  {
    title: "Essential Wardrobe Staples: 5 Must-Haves for Every Fashionista",
    post: "In this blog post, we'll explore the five key clothing items that every fashion lover should have in their wardrobe. From a versatile little black dress to a well-fitted pair of jeans, we'll discuss why these staples are essential and how they can be styled for various occasions. Discover how these timeless pieces can form the foundation of a stylish and functional wardrobe.",
    tag: "deskofglass",
    author: "open Fashion",
    date: "27th May 2021",
  },

  {
    title: "Accessorize Like a Pro: Elevate Your Outfits with These Tips",
    post: "Accessories have the power to transform any outfit, and in this blog post, we'll share expert tips on how to accessorize like a pro. From statement necklaces to scarves and belts, we'll discuss different accessory types and offer practical advice on how to mix and match them to elevate your outfits. Learn how to create eye-catching combinations and express your personal style through accessories.",
    tag: "fashionbag",
    author: "open Fashion",
    date: "15th July 2022",
  },
  {
    title: "Fashion Color Trends: Hottest Colors of the Season",
    post: "Stay up to date with the latest color trends in the fashion world. In this blog post, we'll showcase the hottest colors of the season and explain how they can add a fresh and modern touch to your wardrobe. From vibrant hues to sophisticated neutrals, we'll explore how to incorporate these colors into your outfits and provide styling inspiration for different fashion preferences.",
    tag: "ladyonthefloor",
    author: "open Fashion",
    date: "24th May 2022",
  },
  {
    title: "Dress for Success: Boost Your Confidence with Fashion",
    post: "Your clothing choices can have a significant impact on your confidence and self-esteem. In this blog post, we'll delve into the psychology of dressing for success and explore how certain clothing styles and colors can boost your confidence in various situations. Discover the power of dressing intentionally and learn practical tips for leveraging fashion to enhance your self-assurance.",
    tag: "manwithflower",
    author: "open Fashion",
    date: "3rd January 2023",
  },
  {
    title: "Sustainable Fashion: Embrace Eco-Friendly Style",
    post: "As environmental awareness grows, sustainable fashion has become increasingly important. In this blog post, we'll dive into the world of eco-friendly fashion and discuss the importance of conscious consumerism. From ethical clothing brands to eco-conscious materials, we'll explore how you can make sustainable fashion choices without compromising on style. Learn about the positive impact of embracing eco-friendly style and discover practical ways to incorporate sustainability into your wardrobe.",
    tag: "womaninsuit",
    author: "open Fashion",
    date: "22nd February 2023",
  },
  {
    title: "Timeless Style Icons: Fashion Inspiration Through the Decades",
    post: "Take a journey through fashion history in this blog post as we explore timeless style icons from different decades. From Audrey Hepburn's elegant simplicity to Madonna's bold and iconic fashion statements, we'll showcase influential figures who have left a lasting impact on the world of fashion. Gain inspiration from their unique styles and learn how to incorporate elements of their fashion sensibilities into your own wardrobe.",
    tag: "womanwithbag",
    author: "open Fashion",
    date: "19th May 2023",
  },
];

export const blogTags = ["Fashion", "Promo", "Policy", "Lookbook", "sale"];

export const menNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "Jacket ",
        navLinkText: "Jacket",
      },
      {
        navLinksRef: "Suit 2",
        navLinkText: "Suit",
      },
      {
        navLinksRef: "Shoes 3",
        navLinkText: "Shoes",
      },
      {
        navLinksRef: "T-Shirt 4",
        navLinkText: "T-Shirt",
      },
      {
        navLinksRef: "Sweat Jacket 5",
        navLinkText: "Sweat Jacket",
      },
      {
        navLinksRef: "Trousers 6",
        navLinkText: "Trousers",
      },
      {
        navLinksRef: "Jeans 6",
        navLinkText: "Jeans",
      },
      {
        navLinksRef: "Chinox 6",
        navLinkText: "Chinox",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "Link apparel 1",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 2",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 3",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 4",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 5",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 6",
        navLinkText: "link apparel",
      },
    ],
  },
  {
    subtitle: "Men Bag",
    submenu: [
      {
        navLinksRef: "Link Bag 1",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 2",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 3",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 4",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 5",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 6",
        navLinkText: "link Bag",
      },
    ],
  },
  {
    subtitle: "Shoes",
    submenu: [
      {
        navLinksRef: "Link Shoes 1",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 2",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 3",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 4",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 5",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 6",
        navLinkText: "link Shoes",
      },
    ],
  },
  {
    subtitle: "Beauty",
    submenu: [
      {
        navLinksRef: "Link Beauty 1",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 2",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 3",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 4",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 5",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 6",
        navLinkText: "link Beauty",
      },
    ],
  },
  {
    subtitle: "Accessories",
    submenu: [
      {
        navLinksRef: "Link Accessories 1",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 2",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 3",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 4",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 5",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 6",
        navLinkText: "link Accessories",
      },
    ],
  },
];

export const kidsNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "Link new 1",
        navLinkText: "link new",
      },
      {
        navLinksRef: "Link new 2",
        navLinkText: "link new",
      },
      {
        navLinksRef: "Link new 3",
        navLinkText: "link new",
      },
      {
        navLinksRef: "Link new 4",
        navLinkText: "link new",
      },
      {
        navLinksRef: "Link new 5",
        navLinkText: "link new",
      },
      {
        navLinksRef: "Link new 6",
        navLinkText: "link new",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "Link apparel 1",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 2",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 3",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 4",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 5",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Link apparel 6",
        navLinkText: "link apparel",
      },
    ],
  },
  {
    subtitle: "Kids Bag",
    submenu: [
      {
        navLinksRef: "Link Bag 1",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 2",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 3",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 4",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 5",
        navLinkText: "link Bag",
      },
      {
        navLinksRef: "Link Bag 6",
        navLinkText: "link Bag",
      },
    ],
  },
  {
    subtitle: "Shoes",
    submenu: [
      {
        navLinksRef: "Link Shoes 1",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 2",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 3",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 4",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 5",
        navLinkText: "link Shoes",
      },
      {
        navLinksRef: "Link Shoes 6",
        navLinkText: "link Shoes",
      },
    ],
  },
  {
    subtitle: "Beauty",
    submenu: [
      {
        navLinksRef: "Link Beauty 1",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 2",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 3",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 4",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 5",
        navLinkText: "link Beauty",
      },
      {
        navLinksRef: "Link Beauty 6",
        navLinkText: "link Beauty",
      },
    ],
  },
  {
    subtitle: "Accessories",
    submenu: [
      {
        navLinksRef: "Link Accessories 1",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 2",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 3",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 4",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 5",
        navLinkText: "link Accessories",
      },
      {
        navLinksRef: "Link Accessories 6",
        navLinkText: "link Accessories",
      },
    ],
  },
];

export const womenNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "new-outer",
        navLinkText: "Outer",
      },
      {
        navLinksRef: "new-dress",
        navLinkText: "Dress",
      },
      {
        navLinksRef: "new-blouse",
        navLinkText: "Blouse/Shirt new",
      },
      {
        navLinksRef: "new-denin",
        navLinkText: "Denin",
      },
      {
        navLinksRef: "new-kids",
        navLinkText: "Kids",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "Link apparel 1",
        navLinkText: "Shirt Apparel",
      },
      {
        navLinksRef: "Link apparel 2",
        navLinkText: "Trousers apparel",
      },
      {
        navLinksRef: "Link apparel 3",
        navLinkText: "Blouse apparel",
      },
      {
        navLinksRef: "Link apparel 4",
        navLinkText: "Cardigan apparel",
      },
      {
        navLinksRef: "Link apparel 5",
        navLinkText: "Shoes Apparel",
      },
    ],
  },
  {
    subtitle: "Bag",
    submenu: [
      {
        navLinksRef: "Link Bag 1",
        navLinkText: "Gucci Bag",
      },
      {
        navLinksRef: "Link Bag 2",
        navLinkText: "L/V Bag",
      },
      {
        navLinksRef: "Link Bag 3",
        navLinkText: "GG Bag",
      },
      {
        navLinksRef: "Link Bag 4",
        navLinkText: "DG Bag",
      },
    ],
  },
  {
    subtitle: "Shoes",
    submenu: [
      {
        navLinksRef: "Link Shoes 1",
        navLinkText: "Nike Shoes",
      },
      {
        navLinksRef: "Link Shoes 2",
        navLinkText: "Timberland Shoes",
      },
      {
        navLinksRef: "Link Shoes 3",
        navLinkText: "L/V Shoes",
      },
      {
        navLinksRef: "Link Shoes 4",
        navLinkText: "GG Shoes",
      },
      {
        navLinksRef: "Link Shoes 5",
        navLinkText: "Airforce Shoes",
      },
      {
        navLinksRef: "Link Shoes 6",
        navLinkText: "link Shoes",
      },
    ],
  },
  {
    subtitle: "Beauty",
    submenu: [
      {
        navLinksRef: "Link Beauty 1",
        navLinkText: "Cosmetics Beauty",
      },
      {
        navLinksRef: "Link Beauty 2",
        navLinkText: "Eye Pencil Beauty",
      },
      {
        navLinksRef: "Link Beauty 3",
        navLinkText: "Powder Beauty",
      },
      {
        navLinksRef: "Link Beauty 4",
        navLinkText: "Mirrors Beauty",
      },
    ],
  },
  {
    subtitle: "Accessories",
    submenu: [
      {
        navLinksRef: "Link Accessories 1",
        navLinkText: "Watch Accessories",
      },
      {
        navLinksRef: "Link Accessories 2",
        navLinkText: "Rings Accessories",
      },
      {
        navLinksRef: "Link Accessories 3",
        navLinkText: "Necklaces Accessories",
      },
      {
        navLinksRef: "Link Accessories 4",
        navLinkText: "Waist Beads Accessories",
      },
      {
        navLinksRef: "Link Accessories 5",
        navLinkText: "Ankle Beads Accessories",
      },
    ],
  },
];

export const MenuNavTag = [
  {
    menu: "women",
    id: "women-product",
  },
  {
    menu: "men",
    id: "men-product",
  },
  {
    menu: "kids",
    id: "kids-product",
  },
];

export const allProducts = [
  {
    collection: "women",
    category: [
      {
        subcategory: "new",
        products: [
          {
            version: "122V",
            title: "Linter Cardigan",
            description: "New-122V-Reversible-Linter-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "130",
            rating: "4.8",
          },
          {
            version: "123V",
            title: "Angora Cardigan",
            description: "New-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "124V",
            title: "Reversible Cardigan",
            description: "New-124V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "132V",
            title: "Pandora Cardigan",
            description: "New-132V-Reversible-Pandora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "134V",
            title: "Reversible Cardigan",
            description: "New-134V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "136V",
            title: "Angora Cardigan",
            description: "New-136V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "156V",
            title: "Wankanda Sweat Cardigan",
            description: "New-156V-Reversible-Wankanda-Sweat Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "356V",
            title: "356V Wankanda Cardigan",
            description: "New-356V-Reversible-Wankanda-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "443V",
            title: "443V Wankanda Cardigan",
            description: "New-443V-Reversible-Wankanda-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "A35V",
            title: "Reversible Wankanda Jacket",
            description: "New-A35V-Reversible-Wankanda-Jacket",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "apparel",
        products: [
          {
            version: "123V",
            title: "123V Reversible Angora Cardigan",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "134",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "bag",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "shoes",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "beauty",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "accessories",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
    ],
  },
  {
    collection: "men",
    category: [
      {
        subcategory: "new",
        products: [
          {
            version: "122V",
            title: "Men Linter Cardigan",
            description: "New-122V-Reversible-Linter-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "130",
            rating: "4.8",
          },
          {
            version: "123V",
            title: "Angora Cardigan",
            description: "New-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "124V",
            title: "Reversible Cardigan",
            description: "New-124V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "132V",
            title: "Pandora Cardigan",
            description: "New-132V-Reversible-Pandora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "134V",
            title: "Reversible Cardigan",
            description: "New-134V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "136V",
            title: "Angora Cardigan",
            description: "New-136V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "apparel",
        products: [
          {
            version: "123V",
            title: "123V Reversible Angora Cardigan",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "134",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "bag",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "shoes",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "beauty",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "accessories",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
    ],
  },
  {
    collection: "kids",
    category: [
      {
        subcategory: "new",
        products: [
          {
            version: "122V",
            title: "Kids Linter Cardigan",
            description: "New-122V-Reversible-Linter-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "130",
            rating: "4.8",
          },
          {
            version: "123V",
            title: "Angora Cardigan",
            description: "New-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "124V",
            title: "Reversible Cardigan",
            description: "New-124V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "132V",
            title: "Pandora Cardigan",
            description: "New-132V-Reversible-Pandora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "134V",
            title: "Reversible Cardigan",
            description: "New-134V-Reversible-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
          {
            version: "136V",
            title: "Angora Cardigan",
            description: "New-136V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "126",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "apparel",
        products: [
          {
            version: "123V",
            title: "123V Reversible Angora Cardigan",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "134",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "bag",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "shoes",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "beauty",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
      {
        subcategory: "accessories",
        products: [
          {
            version: "",
            title: "",
            description: "Apparel-123V-Reversible-Angora-Cardigan",
            material:
              "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. ",
            care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
            price: "",
            rating: "4.8",
          },
        ],
      },
    ],
  },
];
