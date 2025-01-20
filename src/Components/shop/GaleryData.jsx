import img1 from "../assets/images/product-image1.jpg";
import img2 from "../assets/images/product-image2.jpg";
import img3 from "../assets/images/product-image3.jpg";
import img4 from "../assets/images/product-image4.jpg";
import img5 from "../assets/images/product-image5.jpg";
import img6 from "../assets/images/product-image6.jpg";
import img7 from "../assets/images/seet.jpeg";
import img9 from "../assets/images/toy.jpg";
import img8 from "../assets/images/swim.jpeg";
import img10 from "../assets/images/product-image13.jpg";
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
import img24 from "../assets/images/Babycrib2.jpg";
import img25 from "../assets/images/Siliconeplate.jpg";
import img26 from "../assets/images/robbettoys.jpg";
import img27 from "../assets/images/product-image14.jpg";
import img28 from "../assets/images/autumn-3.jpg";
import img29 from "../assets/images/autumn-4.jpg";
import img30 from "../assets/images/autumn-2.jpg";
import img31 from "../assets/images/autumn-1.jpg";
import img32 from '../assets/images/Linenshorts.jpg'

const brands = ["Boden", "Burberry", "Rejina Pyo", "Tinycottons", "Denim"];

const Product = [
  {
    id: 1,
    image: img1,
    name: "Baby Bodysuit",
    price: 90,
    rating: 4.5,
    colors: ["#000", "#8B4513", "#C0C0C0"],
    sizes: ["6-12 m"],
    date: "2025-01-01",
    popularity: 100,
    sale: "Up to - 20%",
    category: ["Uncategorized", "Baby boy", "BestSellers"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 2,
    image: img2,
    name: "Baby Romper",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["6-12 m" , "12-14"],
    date: "2025-01-02",
    popularity: 50,
    category: ["Baby girl", "BestSellers"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 3,
    image: img3,
    name: "Baby Sweater",
    price: 80,
    rating: 3,
    colors: ["#FF6347", "#FFD700"],
    sizes: ["12-18 m"],
    date: "2025-01-03",
    popularity: 30,
    category: ["Boy", "BestSellers"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 4,
    image: img4,
    name: "Newborn Bootie",
    price: 80,
    rating: 4,
    colors: ["#000", "#FFF"],
    sizes: ["0-3 m"],
    date: "2025-01-04",
    popularity: 70,
    category: ["Baby boy", "BestSellers"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 5,
    image: img5,
    name: "Cotton Sweatshirt",
    price: 55,
    rating: 4.5,
    colors: ["#A52A2A", "#808080"],
    sizes: ["3-6 m"],
    date: "2025-01-05",
    popularity: 90,
    category: ["Baby boy", "BestSellers", "Outerwear", "Sweatshirts"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 6,
    image: img6,
    name: "Girl Cardigan",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["1-2 year"],
    date: "2025-01-06",
    popularity: 110,
    category: ["Baby girl", "Girl", "BestSellers"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 7,
    image: img7,
    name: "Sweatshirts",
    price: 100,
    rating: 2.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["1-2 year"],
    date: "2025-01-25",
    popularity: 10,
    category: "Boy",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 8,
    image: img8,
    name: "Swimsuits",
    price: 40,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["2-4 year"],
    date: "2025-08-01",
    popularity: 1000,
    category: "Swimsuits",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 9,
    image: img9,
    name: "Toys",
    price: 90,
    rating: 2.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["2-4 year"],
    date: "2020-01-01",
    popularity: 10,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 10,
    image: img10,
    name: "Yellow raincoat",
    price: 105,
    colors: ["#FFD700"],
    rating: 3,
    sizes: ["2-4 year", "5-8 year"],
    date: "2025-01-01",
    popularity: 75,
    category: "Jackets",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 11,
    image: img11,
    name: "Denim",
    price: 75,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["4-8 year"],
    date: "2025-02-01",
    popularity: 81,
    category: ["Denim", "Outerwear"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 12,
    image: img12,
    name: "Jackets",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-06-01",
    popularity: 7,
    category: "Jackets",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 13,
    image: img13,
    name: "Dresses",
    price: 90,
    rating: 4.5,
    colors: ["#FF69B4", "#8A2BE2"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-07-01",
    popularity: 3,
    category: "Dresses",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 14,
    image: img14,
    name: "Yellow Stroller",
    price: 250,
    rating: 4,
    sizes: ["One Size"],
    date: "2025-08-01",
    popularity: 2,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 15,
    image: img15,
    name: "Tableware Set",
    price: 70,
    rating: 5,
    sizes: ["One Size"],
    date: "2025-09-01",
    popularity: 19,
    category: "Tableware",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 16,
    image: img16,
    name: "Wooden Giraffe",
    price: 70,
    rating: 2.5,
    sizes: ["One Size"],
    date: "2025-10-01",
    sale: "Up to - 20%",
    popularity: 18,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 17,
    image: img17,
    name: "Baby Crib",
    price: 340,
    rating: 5,
    sizes: ["One Size"],
    date: "2025-11-01",
    popularity: 17,
    category: "Cribs",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 18,
    image: img18,
    name: "Handmade Dolls",
    price: 77,
    rating: 5,
    date: "2025-01-27",
    popularity: 47,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 19,
    image: img19,
    name: "Silicone bib",
    price: 17,
    rating: 4.5,
    date: "2025-01-14",
    popularity: 39,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 20,
    image: img20,
    name: "Silicone Pacifier",
    price: 18,
    rating: 3,
    date: "2025-01-17",
    popularity: 38,
    category: "Baby accessories",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 21,
    image: img21,
    name: "Teddy",
    price: 20,
    rating: 5,
    colors: ["#FF69B4", "#8A2BE2"],
    date: "2025-01-16",
    popularity: 35,
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 22,
    image: img22,
    name: "Newborn Bootie",
    price: 90,
    rating: 4.5,
    colors: ["#000", "#8B4513", "#C0C0C0"],
    sizes: ["0-3 m", "3-6 m", "6-12 m"],
    date: "2025-01-15",
    popularity: 33,
    category: "Baby Girl",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 23,
    image: img25,
    name: "Silicone plate",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["12-18 m", "18-24 m", "24-36 m"],
    date: "2025-01-15",
    popularity: 30,
    category: "Tableware",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 24,
    image: img24,
    name: "Wooden crib",
    price: 250,
    rating: 4.5,
    colors: ["#FF6347", "#FFD700"],
    sizes: ["One Size"],
    date: "2025-01-11",
    popularity: 77,
    category: "Cribs",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 25,
    image: img30,
    name: "Knitted cardigan",
    price: 80,
    rating: 3,
    colors: ["#000", "#FFF"],
    sizes: ["0-3 m"],
    date: "2025-01-06",
    popularity: 110,
    category: "Outerwear",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 26,
    image: img26,
    name: "Handmade toys",
    price: 55,
    rating: 4.5,
    colors: ["#A52A2A", "#808080"],
    sizes: ["3-6 m", "6-12 m"],
    date: "2025-01-05",
    popularity: 85,
    sale: "Up to - 20%",
    category: "Toys",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 27,
    image: img27,
    name: "Bodysuits pack",
    price: 90,
    rating: 4.5,
    colors: ["#000000", "#8B4513", "#C0C0C0"],
    sizes: ["6-12 m", "12-18 m"],
    date: "2025-01-04",
    popularity: 88,
    category: "Swimsuits",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 28,
    image: img1,
    name: "Stripped",
    price: 75,
    rating: 3,
    colors: ["#FFF", "#ADD8E6"],
    sizes: ["1-2 m"],
    date: "2025-01-15",
    popularity: 30,
    category: "Swimsuits",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },

  {
    id: 29,
    image: img28,
    name: "Demin jumpsuit",
    price: 80,
    rating: 3,
    colors: ["#000", "#ADD8E6", "#E16A54"],
    sizes: ["1-2 Year", "2-4 Year", "4-8 Year"],
    date: "2025-01-20",
    popularity: 30,
    category: ["OuterWear", "Denim"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },

  {
    id: 30,
    image: img29,
    name: "Striped bodysuit",
    price: 35.0,
    rating: 4,
    colors: ["#000", "#16404D", "#77B254"],
    sizes: ["1-2 Year", "2-4 Year", "4-8 Year"],
    date: "2025-01-20",
    popularity: 30,
    category: ["OuterWear", "Baby boy"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 31,
    image: img30,
    name: "Knitted cardigan",
    price: 35.0,
    rating: 4,
    colors: ["#000", "#9F5255", "#FFEB00"],
    sizes: ["1-2 Year", "2-4 Year", "4-8 Year"],
    date: "2025-01-20",
    popularity: 30,
    category: "OuterWear",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },
  {
    id: 32,
    image: img31,
    name: "Winter jacket",
    price: 60,
    rating: 4,
    colors: ["#000", "#FFEB55", "#77B254"],
    sizes: ["1-2 Year", "2-4 Year", "4-8 Year"],
    date: "2025-01-20",
    popularity: 30,
    category: "OuterWear",
    brand: brands[Math.floor(Math.random() * brands.length)],
  },

  {
    id: 33,
    image: img32,
    name: "Linen Shorts",
    price: 30,
    rating: 4.5,
    colors: ["#000", "#8B4513", "#C0C0C0"],
    sizes: ["1-2 Year", "2-4 Year","4-8 Year"],
    date: "2025-01-01",
    popularity: 100,
    sale: "Up to - 30%",
    category: ["Boy"],
    brand: brands[Math.floor(Math.random() * brands.length)],
  }
];

export default Product;
