import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import '../../styles/global.scss'
import show1 from '../../assets/images/showCase1.png'
import show2 from '../../assets/images/showCase2.png'
import show3 from '../../assets/images/showCase3.png'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={show1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={show2} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={show3} alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;