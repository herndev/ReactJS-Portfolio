import React from 'react';
import TinySlider from "tiny-slider-react";

function Home() {
  const projects = {
    "web": 124,
    "mobile": 83,
  };

  const settings = {
    lazyload: true,
    nav: false,
    // mouseDrag: true,
    controls: false,
    items: 3,
    autoplay: true,
    loop: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    slideBy: 1,
    swipeAngle: false,
    speed: 400,
    responsive: {
      "0": {
        items: 1
      },
      "990": {
        items: 2
      },
      "1400": {
        items: 3
      }
    }
  };

  return (
    <div id="home">
      <section className="display-center text-center">
        <div className="mx-5 w-100">
          <h1 className="brb-anim" data-aos="fade-up" data-aos-delay="300">Hello there!!</h1>
          <p className="mt-4 intro-p mx-auto" data-aos="fade-up" data-aos-delay="100">
            I'm <span className="font-weight-bold">Hernie</span>, your freelance <span className="font-weight-bold">programmer</span> will help you build your plans, projects and task in an organize and <span className="font-weight-bold">cheapest</span>                                    way as possible.
              </p>
        </div>
      </section>


      <section id="services" className="text-center bg-light pb-3">
        <p className="pt-5">
          What I can do
          </p>
        <h1 className="brb-anim mb-5 mx-5" data-aos="fade-up" data-aos-delay="100">
          <span className="text-warning font-weight-bold mr-1">M</span>Y SERVICES
          </h1>
        <div className="row px-3">
          <div className="col-md">
            <TinySlider settings={settings}>
              <div className="item noselect">
                <div className="card sh-s">
                  <div className="card-title">
                    <div className="icon-container">
                      <i className="ion-android-desktop text-lxx"></i>
                    </div>
                  </div>
                  <h3 className="mt-4 pb-2">Web Development</h3>
                  <p>
                    I create and develop website using modern frameworks such as Wordpress, Laravel, Django, ReactJs, and Vue.
                              </p>
                </div>
              </div>
              <div className="item noselect">
                <div className="card sh-s">
                  <div className="card-title">
                    <div className="icon-container">
                      <i className="ion-gear-b text-lxx"></i>
                    </div>
                  </div>
                  <h3 className="mt-4 pb-2">UX / UI</h3>
                  <p>
                    I produce wonderful user interface with great user experience by implementing fully responsive design and materialize look and feel.
                              </p>
                </div>
              </div>
              <div className="item noselect">
                <div className="card sh-s">
                  <div className="card-title">
                    <div className="icon-container">
                      <i className="ion-android-phone-portrait text-lxx"></i>
                    </div>
                  </div>
                  <h3 className="mt-4 pb-2">Mobile Application</h3>
                  <p>
                    I build modern mobile application using Flutter framework with custom design embeded with powerful plugins.
                              </p>
                </div>
              </div>
              <div className="item noselect">
                <div className="card sh-s">
                  <div className="card-title">
                    <div className="icon-container">
                      <i className="ion-android-cloud text-lxx"></i>
                    </div>
                  </div>
                  <h3 className="mt-4 pb-2">Database</h3>
                  <p>
                    I am efficient in working with databases such as Firebase, Mysql, Monggo DB, Postgres SQL, and Sqlite.
                              </p>
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </section>

      <section className="p-3 project-counter-container display-centery">
        <div className="row">
          <div className="col-lg-6 hidden-lg">
            <div className="w-100 display-centerx">
              <img src="img/illustrator_holding_poster.png" alt="" className="img-fluid project-counter-banner" />
            </div>
            <div className="w-100 display-centerx">
              <div className="w-100 card text-center mt-4 project-counter crv-8 bx-shadow">
                <table>
                  <tbody>
                    <tr className="text-white">
                      <th>Websites</th>
                      <th>Mobile Apps</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td className="py-2">{projects.web}</td>
                      <td className="py-2">{projects.mobile}</td>
                      <td className="py-2">{projects.web + projects.mobile}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 display-centery">
            <h2 data-aos="fade-up" data-aos-delay="300">
              <span className="text-warning font-weight-bold mr-1">L</span>et me help you build your <span className="text-info">plans</span> and make it <span className="text-danger">possible</span>.
                  </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;