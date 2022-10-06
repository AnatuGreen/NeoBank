import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />
      {/* The subtle gradients below the cards images by the left */}
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full " />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className={`hidden sm:block`} /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="mt-6 flex w-full flex-row flex-wrap sm:mt-10 ">
        <img
          src={apple}
          className="mr-6 h-[42px] w-[130px] cursor-pointer object-contain "
          alt="apple store logo"
        />
        <img src={google} className="h-[42px] w-[130px]" alt="Playstore logo" />
      </div>
    </div>
  </section>
);

export default Billing;
