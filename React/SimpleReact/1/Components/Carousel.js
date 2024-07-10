import React, { useState, useEffect } from 'react';
import classes from './Carousel.module.css';



function Carousel() {


  return (
<div className={classes['pic-ctn']}>
    <img src="https://partners.wsj.com/sap/experience-management-in-action/wp-content/uploads/sites/469/2020/05/1200x628_Construction.jpg?resize=1200%2C628" alt="" className={classes.pic}/>
    <img src="https://images.kus-usa.com/wp-content/uploads/2019/11/GettyImages-887465766.jpg" alt="" className={classes.pic}/>
    <img src="https://www.swinburne.edu.my/wp-content/themes/mytheme-2021/images/2021/Tiles/thumbnail-engineering.jpg" alt="" className={classes.pic}/>
    <img src="https://static.wixstatic.com/media/7ffe50_21aa975b50d849ec9675bc8b225926f6~mv2.jpeg/v1/fill/w_871,h_503,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7ffe50_21aa975b50d849ec9675bc8b225926f6~mv2.jpeg" alt="" className={classes.pic}/>
    <img src="https://th.bing.com/th/id/R.d457a48b8ecdc19ad1d4b674fac5c2e2?rik=7dHBy%2bD0mr7oVg&pid=ImgRaw&r=0" alt="" className={classes.pic}/>
  </div>
  );
}

export default Carousel;
