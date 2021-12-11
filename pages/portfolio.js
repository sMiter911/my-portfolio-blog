import Image from "next/image";
import Head from "next/head";
import desktop from "../public/pexels-designecologist-1779487.jpg";
import market from "../public/pexels-markus-spiske-3970330.jpg";
import company from "../public/pexels-serpstat-572056.jpg";
import { UilArrowRight } from "@iconscout/react-unicons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
  return (
    <>
    <Head>
      <title>Wandu | Portfolio</title>
      <meta name="keywords" content="wandu"/>
    </Head>
    <section className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        className="portfolio__container container mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="portfolio__content grid">
            <Image
              src={desktop}
              sizes="50vw"
              alt="Desktop"
              className="portfolio__img"
              layout="responsive"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Web3 Application</h3>
              <p className="portfolio__description">
                A Web3 application that allows users to wave and send messages.
                They may even get free Ethereum.
              </p>
              <a
                className="button button--flex button--small portfolio__button"
                href="#"
              >
                Demo
                <UilArrowRight
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="portfolio__content grid">
            <Image
              src={market}
              sizes="50vw"
              alt="Market"
              className="portfolio__img"
              layout="responsive"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">NFT Gallery</h3>
              <p className="portfolio__description">
                A gallery to show off minted NFTs and ship them for selling.
              </p>
              <a
                className="button button--flex button--small portfolio__button"
                href="#"
              >
                Demo
                <UilArrowRight
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="portfolio__content grid">
            <Image
              src={company}
              sizes="50vw"
              alt="Company"
              className="portfolio__img"
              layout="responsive"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Company website</h3>
              <p className="portfolio__description">
                SYSINFO started it all, the home of where it all takes places.
              </p>
              <a
                className="button button--flex button--small portfolio__button"
                href="#"
              >
                Demo
                <UilArrowRight
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};

export default Portfolio;
