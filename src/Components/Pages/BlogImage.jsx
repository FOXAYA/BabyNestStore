import styles from "./BlogImage.module.css";
import React, { useState, useEffect } from "react";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";

export default function BlogImage() {
  const BlogImages = [
    {
      title: "What do you need to buy for your baby’s first wardrobe?",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog1,
      link: "/blog/1", 
    },
    {
      title: "Eco-friendly spring essentials for babies",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog2,
      link: "/blog/2",
    },
    {
      title: "The ultimate guide to buying baby boy jackets",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog3,
      link: "/blog/3",
    },
    {
      title: "What you should know about buying sleepsuits",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog4,
      link: "/blog/4",
    },
    {
      title: "What you should know about buying sleepsuits",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog5,
      link: "/blog/5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //الصورة تتحرك كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BlogImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [BlogImages.length]);

  //عشان نعرض 4 صور بس وكان الصورة تفضل تتحرك في نظام دائري
  const getDisplayImages = () => {
    const totalImages = BlogImages.length;
    const isSmallScreen = window.innerWidth <= 767; // التحقق من حجم الشاشة

    if (isSmallScreen) {
      return [BlogImages[currentIndex % totalImages]]; // عرض صورة واحدة عند الشاشة الصغيرة
    }

    const indices = [
      currentIndex % totalImages,
      (currentIndex + 1) % totalImages,
      (currentIndex + 2) % totalImages,
      (currentIndex + 3) % totalImages,
    ];
    return indices.map((index) => BlogImages[index]);
  };

  const handleClick = (link) => {
    console.log(`Navigating to ${link}`);
  };

  return (
    <div className={styles.slideContainer}>
      <div className="header-section">
        <h4>Trending now</h4>
        <h1>More news in our blog</h1>
      </div>
      <div className={styles.blog-container}>
        {getDisplayImages().map((blogImage, index) => (
          <div
            key={index}
            className={styles.blog-index}
            onClick={() => handleClick(blogImage.link)}
          >
            <div className={styles.image-container}>
              <img src={blogImage.image} alt={blogImage.title} />
            </div>
            <div className={styles.content-area}>
              <h3>{blogImage.title}</h3>
              <p>
                {blogImage.date} | {blogImage.comments}
              </p>
              <p>{blogImage.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots-container}>
        {BlogImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? {styles.active} : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
