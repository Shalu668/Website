import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <section>
        <div className="flx">
          <Header />
          <Banner />
          <Technologies />
          <OurTeam />
          <Footer />
        </div>
      </section>
    );
  }
}

export default Home;