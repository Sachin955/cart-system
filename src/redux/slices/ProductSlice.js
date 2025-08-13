import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "T-Shirt",
      price: 500,
      description:'This graphic tee is perfect for relaxed dressing. It gives you a casual look while keeping you comfortable.\n Neckline: The t-shirt is framed with a Crew Neck.\n Short Sleeves: The t-shirt is designed with Short Sleeves.\n Cotton Rich: The cotton rich fabric feels super soft against the skin, making the t-shirt wearable for longer hours without any discomfort. Printed: The t-shirt is available in printed pattern. The graphic print adds an urban flair to the t-shirt.",',
      img: "https://m.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: 1200,
description:"Made of 12oz premium denim fabric - 53% Cotton, 46% Polyester & 1% Elastane\n A special hollow fiber with 10% more volume and 10% less weight than regular denims, perfect for extreme weather or travel ease\n This jeans has a unique knit structure at reverse of the fabric\nThis Air-Lite fiber comes with a soft hand feel and moisture management properties\nSymbol Premium's easy stretch jeans feature 'Air-Lite' hollow fiber, providing a unique blend of style, comfort. A desirable choice for denim lovers seeking both fashion and functionality in their wardrobe",
      img: "https://m.media-amazon.com/images/I/61+uoXBMn6L._SY741_.jpg",

    },
    {
      id: 3,
      name: "Shoes",
      price: 2000,
      "description": "Shoes' Upper - These shoes for men have a supportive design\nand a knitted vamp that feels soft and comfortable on your skin.\nThe lace-up closure helps you adjust the fit to your preference and keep your feet secure.\nWhether you need them for work or leisure, these men's shoes are versatile and suitable for any occasion.",

      img: "https://m.media-amazon.com/images/I/61fBpwlOi3L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 4,
      name: "Mobile",
      price: 15000,
      description:"",
      img: "https://m.media-amazon.com/images/I/613wl8JI1+L._SX679_.jpg"
    },
    {
      id: 5,
      name: "Multipurpose Shade",
      price: 709,
      description:"",
      img: "https://m.media-amazon.com/images/I/818qiwVmuYL._SL1500_.jpg",
    },
  ],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice.reducer;
