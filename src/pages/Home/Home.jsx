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
                <p className='hero-title'>Автомобили из Европы.<br/>Надежность, проверенная опытом.</p>
                <p className='hero-text'>
                    Мы знаем европейский рынок, понимаем его особенности и минимизируем риски.<br/>Наши клиенты получают
                    автомобили с подтвержденной историей, полным пакетом проверок и гарантированной доставкой.<br/>Каждая
                    сделка под нашим контролем — от поиска до передачи ключей.
                </p>
                <a href="#contacts">
                    <button className="hero-button">
                        Выбрать автомобиль
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
            <h1 className="header" style={{color: 'black'}}>Чем мы занимаемся?</h1>
            <div className="services" id='services'>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_choice}></object>
                    </div>
                    <div className="service-description">Подбор автомобилей с прозрачной историей и идеальным
                        техническим состоянием
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_diagnostic}></object>
                    </div>
                    <div className="service-description">Полный цикл проверки: диагностика, юридическая чистота,
                        подтвержденный пробег.
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_deal}></object>
                    </div>
                    <div className="service-description">Организация безопасной сделки: покупка, контроль процесса,
                        оформление документов.
                    </div>
                </div>
                <div className="service-card">
                    <div>
                        <object type="image/svg+xml" width="100px" height="100px" data={services_delivery}></object>
                    </div>
                    <div className="service-description">Доставка без скрытых платежей и задержек в любую точку.
                    </div>
                </div>
            </div>
            <h1 className="header" style={{color: 'black'}}>Почему нам доверяют?</h1>
            <p className="advantage-text">За годы работы мы помогли десяткам клиентов приобрести автомобили в Европе без
                проблем и неожиданных рисков. <br/><br/> Мы не просто продаем машины — мы создаем доверие и обеспечиваем
                100% прозрачность на каждом этапе.</p>
            <div className="advantage">
                <div className="card">
                    <span className="index">1</span>
                    <p><b>Только проверенные автомобили.</b> Мы не предлагаем компромиссов. Если автомобиль не
                        соответствует нашим стандартам, он не попадает в подбор.</p>
                </div>
                <div className="card">
                    <span className="index">2</span>
                    <p><b>Экспертиза и контроль качества.</b> Мы знаем, где искать лучшие варианты и как избежать
                        скрытых проблем</p>
                </div>
                <div className="card">
                    <span className="index">3</span>
                    <p><b>Гарантия честности.</b> Каждый клиент получает полную информацию о состоянии автомобиля. Без
                        «сюрпризов» и недосказанности.</p>
                </div>
            </div>

            <h1 className="header" style={{color: 'black'}}>Кто мы?</h1>
            <div className="about">
                <img className="about-img" src={about_img} alt="Aleh Miliakou"/>
                <p className="about-text"><span style={{color: "var(--accent-color)"}}><b>Aleh Miliakou</b></span> — 20
                    лет в профессиональном спорте, 10 лет судейства на
                    турнирах UFC, M1 Global, ACA, Brave FC. Дисциплина, контроль и четкие решения — основа моей работы,
                    как в спорте, так и в бизнесе. Мы организуем сделки с таким же уровнем точности и ответственности,
                    как судейство на мировой арене.</p>
            </div>

            <h1 className="header" style={{color: 'black'}}>Как это работает?</h1>
            <div className="workflow" id='workflow'>
                <div className="workflow-content">
                    <WorkFlowTimeline/>
                </div>
            </div>

            <div className="preview-catalog">
                <p className="catalog-preview-title">КАТАЛОГ <button className="view-all-button"
                                                                     onClick={() => navigate('/catalog')}>открыть</button>
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
                <h1 style={{fontWeight: '300'}}>ОСТАВИТЬ ЗАЯВКУ</h1>
                <ContactForm/>
            </div>
            <div className='footer' id='socials'>
                <h2 style={{fontWeight: '300'}}>
                    НАШИ СОЦ. СЕТИ
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