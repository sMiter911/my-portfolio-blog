import Image from "next/image";
import Head from "next/head";
import vusela from "../public/vusela.png";
import coming from "../public/coming_soon.jpg";
import company from "../public/pexels-serpstat-572056.jpg";
import prime from "../public/prime_pixels.png";
import { UilArrowRight } from "@iconscout/react-unicons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="portfolio__content grid">
            <Image
              src={vusela}
              sizes="50vw"
              alt="Vusela"
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
                href="https://waveportal-starter-project.smiter911.repl.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
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
              src={coming}
              sizes="50vw"
              alt="Coming"
              className="portfolio__img"
              layout="responsive"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">NFT Gallery</h3>
              <p className="portfolio__description">
                A gallery to show off minted NFTs and ship them for selling.
              </p>
              {/* <a
                className="button button--flex button--small portfolio__button"
                href="#"
              >
                Demo
                <UilArrowRight
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a> */}
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
              <h3 className="portfolio__title">SYSINFO Company website</h3>
              <p className="portfolio__description">
                SYSINFO started it all, the home of where it all takes places.
              </p>
              <a
                className="button button--flex button--small portfolio__button"
                href="https://sysinfo.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
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
              src={prime}
              sizes="50vw"
              alt="Prime"
              className="portfolio__img"
              layout="responsive"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Primepixels Media website</h3>
              <p className="portfolio__description">
                When you want to capture that special moment, they are the most perfect for the job.
              </p>
              <a
                className="button button--flex button--small portfolio__button"
                href="https://primepixelsmedia.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
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
