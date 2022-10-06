import React from "react";
//Let us import the stats to display from the constants file
import { stats } from "../constants/constants";
//Import styles
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} mb-5 flex-row flex-wrap sm:mb-20`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`m-3 flex flex-1 flex-row items-center justify-start`}
      >
        <h4 className="mr-5 font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px] ">
          {stat.value}
        </h4>
        <p className="text-gradient mr-3 font-poppins text-[15px] font-normal uppercase leading-[21px] text-white xs:text-[20px] xs:leading-[53px]">
          {stat.title}
        </p>
        <span className="ml-5 text-white">|</span>
      </div>
    ))}
  </section>
);

export default Stats;
