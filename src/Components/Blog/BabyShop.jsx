import React from "react";
import ash from "../assets/images/ash.png"
import { useLocation } from "react-router-dom";
import styles from "../Styles/BabyShop.module.css";     
import Navbar from '../Navbar/Navbar'
import { WaveTop } from "../animation/Wave";
import Footer2 from "../Footer/Footer2";
export default function BabyShop() {
  const location = useLocation();
  const { blogImage } = location.state || {};     

  return (
    <div >
      {blogImage ? (
              <>
                  <Navbar/>
                  <WaveTop />
                  
                  <div className={styles.container}>
                    <span className={styles.span} >{blogImage.category}</span>
                    <h1 className={styles.title}>{blogImage.title}</h1>
                      <div className={styles.authorInfo}>
                          <img src={ash} alt="ash" className={styles.ash} />
                        <p className={styles.author}>by Ashton Porter</p>
                        <p className={styles.date}>{blogImage.date}</p>
                        <p className={styles.comments}>{blogImage.comments}</p>
                    </div>
                    <div className={styles.imageContainer}>
                          <img src={blogImage.image} alt={blogImage.title} className={styles.image} />
                    </div>
                      
          <Footer2 />            
          </div>
          
                  </>
    
            ) : (
              <p>No blog post data found.</p>
          )}
      </div>
  );
}