import img1 from "../assets/images/product-image1.jpg";
import img2 from "../assets/images/product-image2.jpg";
import img3 from "../assets/images/product-image3.jpg";
import img4 from "../assets/images/product-image4.jpg";
import img5 from "../assets/images/product-image5.jpg";
import img6 from "../assets/images/product-image6.jpg";
import img7 from "../assets/images/seet.jpeg";
import img9 from "../assets/images/toy.jpg";
import img8 from "../assets/images/swim.jpeg";
import img10 from "../assets/images/denim.jpeg";
import img11 from "../assets/images/denim.jpeg";
import img12 from "../assets/images/jacket.jpeg";
import img13 from "../assets/images/dress.jpeg";
import img14 from "../assets/images/Yellow stroller.jpg";
import img15 from "../assets/images/Tablewareset.jpg";
import img16 from "../assets/images/Woodengiraffe.jpg";
import img17 from "../assets/images/Babycrib.jpg";
import img18 from "../assets/images/Handmadedolls.jpg";
import img19 from "../assets/images/Siliconebib.jpg";
import img20 from "../assets/images/Siliconepacifier.jpg";
import img21 from "../assets/images/teddy.jpg";
import img22 from "../assets/images/newbornbootie.jpg";
import img23 from "../assets/images/Plasticstool.jpg";
import img24 from "../assets/images/product-category1.jpg";
import img25 from "../assets/images/product-category2.jpg";
import img26 from "../assets/images/product-category3.jpg";
import img27 from "../assets/images/product-category4.jpg";

const brands = ["Boden", "Burberry", "Rejina Pyo", "Tinycottons"];

const Images = [
  {
    id: 1,
    src: img1,
    name: "Baby Bodysuit",
    price: 90,
    rating: 4.5,
    colors: ["#000", "#8B4513", "#C0C0C0"],
    sizes: ["6-12 m"],
    date: "2025-01-01",
    popularity: 100,
    category: "Uncategorized",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 2,
    src: img2,
    name: "Baby Romper",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["6-12 m"],
    date: "2025-01-02",
    popularity: 50,
    category: ["Baby girl", "Girl"],
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 3,
    src: img3,
    name: "Baby Sweater",
    price: 100,
    rating: 2,
    colors: ["#FF6347", "#FFD700"],
    sizes: ["12-18 m"],
    date: "2025-01-03",
    popularity: 30,
    category: "Baby girl",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 4,
    src: img4,
    name: "Newborn Bootie",
    price: 80,
    rating: 4,
    colors: ["#000", "#FFF"],
    sizes: ["0-3 m"],
    date: "2025-01-04",
    popularity: 70,
    category: "Baby girl",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 5,
    src: img5,
    name: "Cotton Sweatshirt",
    price: 55,
    rating: 4.5,
    colors: ["#A52A2A", "#808080"],
    sizes: ["3-6 m"],
    date: "2025-01-05",
    popularity: 90,
    category: "Baby boy",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 6,
    src: img6,
    name: "Girl Cardigan",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["1-2 year"],
    date: "2025-01-06",
    popularity: 110,
    category: "Baby boy",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 7,
    src: img7,
    name: "Sweatshirts",
    price: 100,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["1-2 year"],
    date: "2025-01-25",
    popularity: 10,
    category: "Boy",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 8,
    src: img8,
    name: "Swimsuits",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["2-4 year"],
    date: "2025-08-01",
    popularity: 1000,
    category: "Denim",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 9,
    src: img9,
    name: "Toys",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["2-4 year"],
    date: "2020-01-01",
    popularity: 10,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 10,
    src: img10,
    name: "Jackets",
    price: 95,
    rating: 3,
    sizes: ["2-4 year"],
    date: "2025-01-01",
    popularity: 75,
    category: "Jackets",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 11,
    src: img11,
    name: "Denim",
    price: 75,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["4-8 year"],
    date: "2025-02-01",
    popularity: 81,
    category: "Denim",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 12,
    src: img12,
    name: "Dresses",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-06-01",
    popularity: 7,
    category: "Dresses",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 13,
    src: img13,
    name: "Dresses",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-07-01",
    popularity: 3,
    category: "Dresses",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 14,
    src: img14,
    name: "Yellow Stroller",
    price: 250,
    rating: 4,
    sizes: ["One Size"],
    date: "2025-08-01",
    popularity: 2,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 15,
    src: img15,
    name: "Tableware Set",
    price: 70,
    rating: 5,
    sizes: ["One Size"],
    date: "2025-09-01",
    popularity: 19,
    category: "Tableware",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 16,
    src: img16,
    name: "Wooden Giraffe",
    price: 70,
    rating: 5,
    sizes: ["One Size"],
    date: "2025-10-01",
    popularity: 18,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 17,
    src: img17,
    name: "Baby Crib",
    price: 340,
    rating: 5,
    sizes: ["One Size"],
    date: "2025-11-01",
    popularity: 17,
    category: "Cribs",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 18,
    src: img18,
    name: "Handmade Dolls",
    price: 77,
    rating: 5,
    date: "2025-01-27",
    popularity: 47,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 19,
    src: img19,
    name: "Silicone Pacifier",
    price: 17,
    rating: 4,
    date: "2025-01-14",
    popularity: 39,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 20,
    src: img20,
    name: "Silicone Pacifier",
    price: 18,
    rating: 3.5,
    date: "2025-01-17",
    popularity: 38,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 21,
    src: img21,
    name: "Teddy",
    price: 20,
    rating: 5,
    colors: ["#FF69B4", "#8A2BE2"],
    date: "2025-01-16",
    popularity: 35,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 22,
    src: img22,
    name: "Newborn Bootie",
    price: 90,
    rating: 4.5,
    colors: ["#000", "#8B4513", "#C0C0C0"],
    sizes: ["0-3 m", "3-6 m", "6-12 m"],
    date: "2025-01-15",
    popularity: 33,
    category: "Baby Girl",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 23,
    src: img23,
    name: "Girl Cardigan",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["12-18 m", "18-24 m", "24-36 m"],
    date: "2025-01-15",
    popularity: 30,
    category: "Outerwear",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 24,
    src: img24,
    name: "Baby Sweater",
    price: 100,
    rating: 2,
    colors: ["#FF6347", "#FFD700"],
    sizes: ["36-48 m", "24-36 m"],
    date: "2025-01-11",
    popularity: 77,
    category: "Jackets",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 25,
    src: img25,
    name: "Newborn Bootie",
    price: 80,
    rating: 4,
    colors: ["#000", "#FFF"],
    sizes: ["0-3 m"],
    date: "2025-01-06",
    popularity: 110,
    category: "Outerwear",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 26,
    src: img26,
    name: "Cotton Sweatshirt",
    price: 55,
    rating: 4.5,
    colors: ["#A52A2A", "#808080"],
    sizes: ["3-6 m", "6-12 m"],
    date: "2025-01-05",
    popularity: 85,
    category: "Sweatshirts",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 27,
    src: img27,
    name: "Girl Cardigan",
    price: 90,
    rating: 4.5,
    colors: ["#000000", "#8B4513", "#C0C0C0"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-01-04",
    popularity: 88,
    category: "Outerwear",
    brand: brands[Math.floor(Math.random() * brands.length)]
  },
  {
    id: 28,
    src: img11,
    name: "Girl Cardigan",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["1-2 m"],
    date: "2025-01-15",
    popularity: 30,
    category: "Swimsuits",
    brand: brands[Math.floor(Math.random() * brands.length)]
  }
];

export default Images;
