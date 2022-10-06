import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="products" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className={`hidden sm:block`} />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button text={"Get Started"} styles="mt-10 w-[170px]" />
      </div>
      <div className={layout.sectionImgReverse}>
        <img
          src={card}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />
        {/* The subtle gradients below the cards images by the left */}
        <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full " />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full " />
      </div>
    </section>
  );
};

export default CardDeal;
