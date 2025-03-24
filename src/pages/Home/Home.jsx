import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import WorkFlowTimeline from "./components/Timeline/Timeline.jsx";
import PreviewSwiper from "./components/PreviewSwiper/PreviewSwiper.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

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

const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.melavto.com/get")
            .then(response => response.json())
            .then(data => setProducts(data['universities']))
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);


    return (
        <>
            <div className='hero-container'>
                <p className='hero-title'>Cars from Europe.<br/>
                    Reliability proven by experience.</p>
                <p className='hero-text'>
                    We know the European market, understand its specific features and minimize risks.<br/>Our clients receive cars with a confirmed history, a full package of checks and guaranteed delivery.<br/>Every deal is under our control - from the search to the transfer of keys.
                </p>
                <a href="#contacts">
                    <button className="hero-button">
                        FIND MY CAR
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
            <h1 className="header" id='services' style={{color: 'black'}}>What do we do?</h1>
            <div className="services">
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_choice}></object>
                    </div>
                    <div className="service-description">Selection of cars with a clear history and perfect technical condition.
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_diagnostic}></object>
                    </div>
                    <div className="service-description">Full cycle of verification: diagnostics, legal purity, confirmed mileage.
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_deal}></object>
                    </div>
                    <div className="service-description">Organization of a secure transaction: purchase, process control, paperwork.
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_delivery}></object>
                    </div>
                    <div className="service-description">Delivery without hidden fees and delays to any point.
                    </div>
                </div>
            </div>
            <h1 className="header" style={{color: 'black'}}>Why are we trusted?</h1>
            <p className="advantage-text">Over the years, we have helped dozens of customers purchase cars in Europe without problems and unexpected risks. <br/><br/> We don't just sell machines – we build trust and provide 100% transparency at every stage.</p>
            <div className="advantage">
                <div className="card">
                    <span className="index">1</span>
                    <p><b>Only verified cars.</b> We do not offer compromises. If the car is not meets our standards, it does not fall into the selection.</p>
                </div>
                <div className="card">
                    <span className="index">2</span>
                    <p><b>Expertise and quality control.</b>We know where to look for the best options and how to avoid hidden problems</p>
                </div>
                <div className="card">
                    <span className="index">3</span>
                    <p><b>Guarantee of honesty.</b>Each client receives complete information about the condition of the car. Without "surprises" and understatement.</p>
                </div>
            </div>

            <h1 className="header" style={{color: 'black'}}>Who are we?</h1>
            <div className="about">
                <img className="about-img" src={about_img} alt="Aleh Miliakou"/>
                <p className="about-text"><span style={{color: "var(--accent-color)"}}><b>Aleh Miliakou</b></span>— 20 years in professional sports, 10 years of refereeing UFC, M1 Global, ACA, Brave FC tournaments. Discipline, control and clear decisions are the basis of my work, both in sports and in business. We arrange transactions with the same level of accuracy and responsibility, as refereeing on the world stage.</p>
            </div>

            <h1 className="header" style={{color: 'black'}} id='workflow'>How does it work?</h1>
            <div className="workflow">
                <div className="workflow-content">
                    <WorkFlowTimeline/>
                </div>
            </div>

            <div className="preview-catalog">
                <p className="catalog-preview-title">CATALOG <button className="view-all-button" onClick={() => navigate('/catalog')}>VIEW ALL</button>
                </p>
                <PreviewSwiper products={products}/>
            </div>

            <div className="reviews" id="reviews">
                <h1 className="reviews-title">REVIEWS</h1>
                <div className="reviews-list">
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_1} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">October 26, 2024</p>
                                <p className="review-card-author-name">Vladislav Leonov</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I had a great experience with MELAUTO. Their team provided
                            exceptional customer service and made sure I was completely satisfied with my purchase. The
                            car was exactly as described, in excellent condition, and the pricing was fair with no
                            hidden fees. If you're looking for a trustworthy dealership, this is the place to go!</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_2} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">June 15, 2023</p>
                                <p className="review-card-author-name">Emir Yıldız</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I recently purchased a car from MELAUTO, and the experience was
                            fantastic! The staff was friendly, knowledgeable, and patient, answering all my questions
                            and helping me choose the perfect car. The entire process, from selection to financing, was
                            smooth and hassle-free. Highly recommended for anyone looking for a reliable vehicle and
                            great service!</p>
                    </div>
                    <div className="review-card">
                        <div className="review-card-head">
                            <div className="review-card-img-container">
                                <img className="review-card-img" src={review_img_3} alt="author avatar"/>
                            </div>
                            <div className="review-card-author">
                                <p className="review-card-date">December 25, 2024</p>
                                <p className="review-card-author-name">Zofia Nowak</p>
                            </div>
                            <p className="review-card-rating">★★★★★</p>
                        </div>
                        <p className="review-card-text">I was impressed with the wide range of cars available at
                            MELAUTO. The team guided me through every step, from test driving to paperwork, making
                            everything quick and easy. I drove away with my dream car the same day! Definitely recommend
                            them to anyone looking for a stress-free car buying experience. </p>
                    </div>
                </div>
            </div>

            <div className='form-container' id="contacts">
                <h1 style={{fontWeight: '300'}}>CONTACT US</h1>
                <ContactForm/>
            </div>
            <div className='footer' id='socials'>
                <h2 style={{fontWeight: '300'}}>
                    OUR SOCIALS
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