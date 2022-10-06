import React from "react";
import { clients } from "../constants/constants";
import styles from "../style";

const Clients = ({ logo }) => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex min-w-[120px] flex-1 sm:min-w-[192px] ${styles.flexCenter}`}
        >
          <img
            src={client.logo}
            alt="clients logo"
            className="w-[100px] object-contain hover:opacity-100 sm:w-[192px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
