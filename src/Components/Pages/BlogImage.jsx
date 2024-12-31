import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogImage.module.css";

import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";

export default function BlogImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const BlogImages = [
    {
      id: 1,
      title: "What do you need to buy for your baby’s first wardrobe?",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog1,
      link: "/blog/1",
    },
    {
      id: 2,
      title: "Eco-friendly spring essentials for babies",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog2,
      link: "/blog/2",
    },
    {
      id: 3,
      title: "The ultimate guide to buying baby boy jackets",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog3,
      link: "/blog/3",
    },
    {
      id: 4,
      title: "What you should know about buying sleepsuits",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog4,
      link: "/blog/4",
    },
    {
      id: 5,
      title: "What you should know about buying sleepsuits",
      date: "Apr 21, 2020",
      comments: "0 Comments",
      category: "PLAY & GROW",
      image: blog5,
      link: "/blog/5",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BlogImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [BlogImages.length]);

  const getDisplayImages = () => {
    const totalImages = BlogImages.length;
    const isSmallScreen = window.innerWidth <= 767;

    if (isSmallScreen) {
      return [
        BlogImages[currentIndex % totalImages],
        BlogImages[(currentIndex + 1) % totalImages]
      ]; // عرض صورتين في الشاشات الصغيرة
    }

    const indices = [];
    for (let i = 0; i < 4; i++) {
      indices.push((currentIndex + i) % totalImages);
    }

    return indices.map((index) => BlogImages[index]);
  };

  return (
    <div id="blog" className={styles.slideContainer}>
      <div className={styles.headerSection}>
        <h4>Trending now</h4>
        <h1>More news in our blog</h1>
      </div>
      <div className={styles.blogContainer}>
        {getDisplayImages().map((blogImage, index) => (
          <div key={index} className={styles.blogItem}>
            <Link
              to={`/blog/${blogImage.id}`}
              state={{ blogImage }} // تمرير بيانات المدونة كخصائص
              className={styles.imageContainer}
            >
              <img src={blogImage.image} alt={blogImage.title} />
            
            <div className={styles.contentArea}>
              <h3>{blogImage.title}</h3>
              <p>
                {blogImage.date} | {blogImage.comments}
              </p>
              <p>{blogImage.category}</p>
              </div>
              </Link>
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {BlogImages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  ); 
}
