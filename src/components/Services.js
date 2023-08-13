import React, { Component } from "react";
import Title from "./Title";
import { FaShuttleVan, FaBeer, FaHiking, FaCocktail } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "At Beach Resort Hotels we offer full free services of cocktails that sooths your every needs and keeps you refresh at all times   ",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "At Beach Resort Hotels we have more than 10km of beautiful vegetation and mountains that will give u unlimited area for hiking with friends and family   ",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle Van",
        info:
          "At Beach Resort Hotels we have stand by shuttle van that is ready to give you a tour round our beautiful city    ",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "At Beach Resort Hotels we are stocked with all varieties of beer that will suit your taste  ",
      },
    ],
  };

  render() {
    let service;

    const { services } = this.state;
    service = services.map((item, index) => {
      return (
        <article key={index} className="service">
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
        </article>
      );
    });
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">{service}</div>
      </section>
    );
  }
}
