import React from "react";
// CSS
import "Pages/Home/css/style.css";
import "Pages/Home/css/style-faq.css";
import "Pages/Home/css/style-footer.css";
import "Pages/Home/css/style-slider.css";

import { Footer } from "./Footer";
import { Faq } from "./Faq";
import HomeHeader from "./Header";
import { MidSection } from "./MidSection";
import { Nav } from "./Nav";
import { Slider } from "./Silder";
import { Spinner } from "components/spinner/Spinner";
class Home extends React.Component {
  state = { load: false };
  renderPage = () => {
    return (
      <>
        {!this.state.load ? <Spinner close={() => setTimeout(() => this.setState({load: true}), 3000) }/> : null}
        <div className="home" id="home">
          <Nav />
          <HomeHeader />
          <Slider />
          <MidSection />
          <Faq />
          <Footer />
        </div>
      </>
    );
  };
  render() {
    return this.renderPage();
  }
}

export default Home;
