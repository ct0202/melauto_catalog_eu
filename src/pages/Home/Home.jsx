import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import WorkFlowTimeline from "./components/Timeline/Timeline.jsx";
import PreviewSwiper from "./components/PreviewSwiper/PreviewSwiper.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

import en from "../../locales/en.json";
import pl from "../../locales/pl.json";

import slider_img1 from "../../assets/images/slider_img_1.jpg";
import slider_img2 from "../../assets/images/slider_img_2.jpg";
import slider_img3 from "../../assets/images/slider_img_3.jpg";

import services_choice from "../../assets/icons/services_choice.svg"
import services_diagnostic from "../../assets/icons/services_diagnostic.svg"
import services_deal from "../../assets/icons/services_deal.svg"
import services_delivery from "../../assets/icons/services_delivery.svg"

import about_img from "../../assets/images/aleh_miliakou.jpg"

import review_img_1 from "../../assets/images/review_avatar_1.png"
import review_img_2 from "../../assets/images/review_avatar_2.png"
import review_img_3 from "../../assets/images/review_avatar_3.png"


import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

import data from './mock/products.json';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import { useLanguage } from "../../contexts/Lang.jsx";

const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const { language } = useLanguage();
    const localization = language === "en" ? en : pl;


    useEffect(() => {
        fetch("https://api.melavto.com/get")
            .then(response => response.json())
            .then(data => setProducts(data['universities']))
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);


    return (
        <>
            <div className='hero-container'>
                <p className='hero-title'>{localization.hero.title1}<br/>
                    {localization.hero.title2}</p>
                <p className='hero-text'>
                    {/*We know the European market, understand its specific features and minimize risks.<br/>Our clients*/}
                    {/*receive cars with a confirmed history, a full package of checks and guaranteed delivery.<br/>Every*/}
                    {/*deal is under our control - from the search to the transfer of keys.*/}
                    {localization.hero.text}
                </p>
                <a href="#contacts">
                    <button className="hero-button">
                        {localization.hero.button}
                    </button>
                </a>
            </div>
            <div id='home'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}

                    modules={[Pagination, Autoplay]}

                    className="swiper"
                >
                    <SwiperSlide>
                        <img className="swiper-slide-img" src={slider_img2} alt="slider1"/>
                        <div className="content">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="swiper-slide-img" src={slider_img3} alt="slider1"/>
                        <div className="content">

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="header" id='services' style={{color: 'black'}}>{localization.services.title}</h1>
            <div className="services">
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_choice}></object>
                    </div>
                    <div className="service-description">{localization.services.items[0]}
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_diagnostic}></object>
                    </div>
                    <div className="service-description">{localization.services.items[1]}
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_deal}></object>
                    </div>
                    <div className="service-description">{localization.services.items[2]}
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_delivery}></object>
                    </div>
                    <div className="service-description">{localization.services.items[3]}
                    </div>
                </div>
            </div>
            <h1 className="header" style={{color: 'black'}}>{localization.trust.title}</h1>
            <p className="advantage-text">{localization.trust.text1}<br/><br/>{localization.trust.text2}</p>
            <div className="advantage">
                <div className="card">
                    <span className="index">1</span>
                    <p><b>{localization.trust.items[0].title}</b>{localization.trust.items[0].text}</p>
                </div>
                <div className="card">
                    <span className="index">2</span>
                    <p><b>{localization.trust.items[1].title}</b>{localization.trust.items[1].text}</p>
                </div>
                <div className="card">
                    <span className="index">3</span>
                    <p><b>{localization.trust.items[2].title}</b>{localization.trust.items[2].text}</p>
                </div>
            </div>

            <h1 className="header" style={{color: 'black'}}>{localization.about.title}</h1>
            <div className="about">
                <img className="about-img" src={about_img} alt="Aleh Miliakou"/>
                <p className="about-text"><span style={{color: "var(--accent-color)"}}><b>{localization.about.name}</b></span>— {localization.about.description}
                </p>
            </div>

            <h1 className="header" style={{color: 'black'}} id='workflow'>{localization.workflow.title}</h1>
            <div className="workflow">
                <div className="workflow-content">
                    <WorkFlowTimeline/>
                </div>
            </div>

            <div className="preview-catalog">
                <p className="catalog-preview-title">{localization.catalog.title}
                    <button className="view-all-button"
                            onClick={() => navigate('/catalog')}>{localization.catalog.button}</button>
                </p>
                <PreviewSwiper products={products}/>
            </div>

            {/*<div className="reviews" id="reviews">*/}
            {/*    <h1 className="reviews-title">{localization.reviews.title}</h1>*/}
            {/*    <div className="reviews-list">*/}
            {/*        <div className="review-card">*/}
            {/*            <div className="review-card-head">*/}
            {/*                <div className="review-card-img-container">*/}
            {/*                    <img className="review-card-img" src={review_img_1} alt="author avatar"/>*/}
            {/*                </div>*/}
            {/*                <div className="review-card-author">*/}
            {/*                    <p className="review-card-date">{localization.reviews.items[0].date}</p>*/}
            {/*                    <p className="review-card-author-name">{localization.reviews.items[0].author}</p>*/}
            {/*                </div>*/}
            {/*                <p className="review-card-rating">★★★★★</p>*/}
            {/*            </div>*/}
            {/*            <p className="review-card-text">{localization.reviews.items[0].text}</p>*/}
            {/*        </div>*/}
            {/*        <div className="review-card">*/}
            {/*            <div className="review-card-head">*/}
            {/*                <div className="review-card-img-container">*/}
            {/*                    <img className="review-card-img" src={review_img_2} alt="author avatar"/>*/}
            {/*                </div>*/}
            {/*                <div className="review-card-author">*/}
            {/*                    <p className="review-card-date">{localization.reviews.items[1].date}</p>*/}
            {/*                    <p className="review-card-author-name">{localization.reviews.items[1].author}</p>*/}
            {/*                </div>*/}
            {/*                <p className="review-card-rating">★★★★★</p>*/}
            {/*            </div>*/}
            {/*            <p className="review-card-text">{localization.reviews.items[1].text}</p>*/}
            {/*        </div>*/}
            {/*        <div className="review-card">*/}
            {/*            <div className="review-card-head">*/}
            {/*                <div className="review-card-img-container">*/}
            {/*                    <img className="review-card-img" src={review_img_3} alt="author avatar"/>*/}
            {/*                </div>*/}
            {/*                <div className="review-card-author">*/}
            {/*                    <p className="review-card-date">{localization.reviews.items[2].date}</p>*/}
            {/*                    <p className="review-card-author-name">{localization.reviews.items[2].author}</p>*/}
            {/*                </div>*/}
            {/*                <p className="review-card-rating">★★★★★</p>*/}
            {/*            </div>*/}
            {/*            <p className="review-card-text">{localization.reviews.items[2].text}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="reviews" id="reviews">
                <h1 className="reviews-title">{localization.reviews.title}</h1>
                <div className="reviews-list">
                    <div className="review-card">

                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_1} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">{localization.reviews.items[0].date}</p>
                                <p className="review-card-author-name">{localization.reviews.items[0].author}</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">{localization.reviews.items[0].text}</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_2} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">{localization.reviews.items[1].date}</p>
                                <p className="review-card-author-name">{localization.reviews.items[1].author}</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">{localization.reviews.items[1].text}</p>

                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_3} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">{localization.reviews.items[2].date}</p>
                                <p className="review-card-author-name">{localization.reviews.items[2].author}</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">{localization.reviews.items[2].text}</p>

                    </div>
                </div>
            </div>

            <div className='form-container' id="contacts">
                <h1 style={{fontWeight: '300'}}>{localization.contact.title}</h1>
                <ContactForm/>
            </div>
            <div className='footer' id='socials'>
                <h2 style={{fontWeight: '300'}}>
                    {localization.socials.title}
                </h2>
                <div className='footer-icons-container'>
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <LinkedIn/>
                </div>
            </div>
        </>
    );
}

export default Home;