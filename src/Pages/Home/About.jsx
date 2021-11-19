import './css/About.css'
import s1 from "../../assets/AboutImg/s1.svg";
import s2 from "../../assets/AboutImg/s2.svg";
import s3 from "../../assets/AboutImg/s3.svg";
import s4 from "../../assets/AboutImg/s4.svg";
import s5 from "../../assets/AboutImg/s5.svg";
import s6 from "../../assets/AboutImg/s6.svg";
import img_2 from "../../assets/AboutImg/img_2.jpg";
import person_1 from '../../assets/AboutImg/person_1.jpg'
import person_2 from "../../assets/AboutImg/person_2.jpg";
import person_3 from "../../assets/AboutImg/person_3.jpg";

export const About = () => {
    return (
        <div className="about">
            <div className="sec1">
                <h2>About Us</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
            </div>

            <div className="sec2">
                <div>
                    <img src={img_2} alt="Free Website Template by Free-Template.co" className="img-fluid" />
                </div>
                <div className="sec2-div">
                    <h3>We Solve Your Financial Problem</h3>

                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</p>

                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                        is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>

            <div className="sec3">
                <div>
                    <img src={s1} alt="Free Website Template by Free-Template.co" />
                    <h3 class="sec3-title">Money Savings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div>
                    <img src={s2} alt="Free Website Template by Free-Template.co" />
                    <h3 class="sec3-title">Online Shoppings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div>
                    <img src={s3} alt="Free Website Template by Free-Template.co" />
                    <h3 class="sec3-title">Credit / Debit Cards</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>

            </div>

            <div className="sec4">
                <div className="sec4-top">
                    <div>
                        <h2>Meet Team</h2>
                        <p>A small river named Duden flows by their
                            place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
                <div className="sec4-team-member">
                    <div className="team-member">
                        <figure>
                            <img src={person_1} alt="person" className="img-fluid" />
                        </figure>
                        <div className="p-3">
                            <h3>Kaiara Spencer</h3>
                            <span className="position">Accountant</span>
                        </div>
                    </div>
                    <div className="team-member">
                        <figure>
                            <img src={person_2} alt="person" className="img-fluid" />
                        </figure>
                        <div className="p-3">
                            <h3>Dave Simpson</h3>
                            <span className="position">Bank Teller</span>
                        </div>
                    </div>
                    <div className="team-member">
                        <figure>
                            <img src={person_3} alt="person" className="img-fluid" />
                        </figure>
                        <div className="p-3">
                            <h3>Ben Thompson</h3>
                            <span className="position">Bank Teller</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec5">
                <div className="sec5-top">
                    <h2 className="section-title mb-3">Our Services</h2>
                </div>
                <div className="sec5-service">
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s1} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Business Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione animi tempora sint hic
                                quod!</p>
                        </div>
                    </div>
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s2} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Credit Card</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo beatae minus
                                incidunt voluptates?</p>
                        </div>
                    </div>
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s3} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Income Monitoring</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio veritatis aperiam
                                consequuntur qui.</p>
                        </div>
                    </div>
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s4} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Insurance Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore suscipit
                                distinctio inventore doloribus deserunt!</p>
                        </div>
                    </div>
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s5} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Financial Investment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio voluptatibus
                                repellat hic officia quibusdam!</p>
                        </div>
                    </div>
                    <div className="unit-4">
                        <div className="unit-4-icon">
                            <img src={s6} alt="Free Website Template by Free-Template.co" />
                        </div>
                        <div>
                            <h3>Financial Management</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iusto eaque velit saepe
                                nobis ipsa?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
