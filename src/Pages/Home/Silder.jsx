import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Slider = () => {
    return (
        <section id="section__one">
        <div className="slider__heading">Our Services :-</div>
        <div className="slider__wrapper">
                <OwlCarousel  className="owl-carousel" id="features-slider" items={1} autoplayTimeout={5000} autoplaySpeed={2000} loop autoplay lazyload="true">
                
                <div className="feature">
                    <div className="main card">
                        <div className="sub__heading">One-click Money Transfer</div>
                        <div className="content">
                            <li>Transfer money globally</li>
                            <li>Send and request money in seconds</li>
                        </div>
                        <div className="sub card">
                            <div className="gif_conainer">
                                <iframe title="Slide 1" src="https://embed.lottiefiles.com/animation/68590"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="feature">
                    <div className="main card">
                        <div className="sub__heading">One-stop to all e-banking
                            services</div>
                        <div className="content">
                            <li>Open an account in minutes</li>
                            <li>instant spending notifications</li>
                            <li>Built-in budgeting</li>
                        </div>
                        <div className="sub card">
                            <div className="gif_conainer">
                                <iframe title="Slide 2" src="https://embed.lottiefiles.com/animation/58948"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="feature">
                    <div className="main card">
                        <div className="sub__heading">Loans available easily</div>
                        <div className="content">
                            <p>Take control of your
                                financial life with a personal
                                or business loan
                            </p>
                        </div>
                        <div className="sub card">
                            <div className="gif_conainer">
                                <iframe title="Slide 3" src="https://embed.lottiefiles.com/animation/11109"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="feature">
                    <div className="main card">
                        <div className="sub__heading"> Manage all your accounts
                            from your phone</div>
                        <div className="content">
                            <p>One place to manage all
                                your accounts
                            </p>
                        </div>
                        <div className="sub card">
                            <div className="gif_conainer">
                                <iframe title="Slide 4" src="https://embed.lottiefiles.com/animation/6139"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>

    </section>
    )
}