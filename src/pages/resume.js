import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Resume() {

  return (
    <div id="resume">
      <section className="p-3">
        <h4 className="font-weight-bold text-primary-default display-inline">
          Resume
        </h4>
        <div className="row">
          <div className="col-md-6">
            <div className="key-points">
              <ul className="pl-5 pr-2 list-unstyled about">
                <li className="big">
                  <h5 className="font-weight-bold ml-3 underline-primary display-inline">ABOUT ME</h5>
                </li>
                <li>
                  <span className="font-weight-bold">Technical Skills</span><br />
                  <small>Proficient with:</small>
                  <p className="mt-2">HTML/CSS/Javascript, Wordpress, Laravel, ReactJs, Django, Vue, Flutter, Java, React native, Firebase, Mysql, Monggo DB, Postgres SQL, Python3, MEAN, Unix/Linux, Git, Agile [Scrum]</p>
                </li>
                <li>
                  <span className="font-weight-bold">Interests</span><br />
                  <p className="mt-2">Machine learning, Data analysis, Algorithms, Web & Mobile App Development</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="key-points">
              <ul className="pl-5 pr-2 list-unstyled education">
                <li className="big">
                  <h5 className="font-weight-bold ml-3 underline-primary display-inline">EDUCATION</h5>
                </li>
                <li>
                  <span className="font-weight-bold">University of Science and Technology of Southern Philippines</span><br />
                  <small>2018 - Present</small>
                  <p className="mt-2">Bachelor of Science in Information Technology</p>
                </li>
                <li>
                  <span className="font-weight-bold">Liceo de Cagayan University</span><br />
                  <small>2016 - 2018</small>
                  <p className="mt-2">Information and Communication Technologies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light p-3">
        <div className="row">
          <div className="col-md-6 display-centery mb-3">
            <div className="w-100 px-3">
              <h5 className="font-weight-bold underline-primary display-inline">PERSONAL INFO</h5>
              <p className="mt-4 mb-2">
                <span className="font-weight-bold text-orange">Name:</span> <br />Hernie M. Jabien Jr.
                                        </p>
              <p className="mb-2">
                <span className="font-weight-bold text-orange">Email:</span> <br />herniejabien45@gmail.com
                                        </p>
              
              <p className="mb-2">
                <span className="font-weight-bold text-orange">Address:</span> <br />Philippines
                                        </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="crv-8 overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8001437.034457866!2d122.62175425!3d11.69783515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sph!4v1654218651267!5m2!1sen!2sph"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3">
        <h5 className="font-weight-bold ml-3 underline-primary display-inline">CERTIFICATES</h5>
        <div className="px-3 mt-3">
          <Carousel autoPlay interval="5000" showIndicators={false} infiniteLoop transitionTime="500" showStatus={false} showArrows={false} emulateTouch showThumbs={false}>
            <div className="item">
              <img src="img/certificates/frontend.png" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/javascript.png" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/sql.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/python.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/python2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/flutter.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/react.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/website.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/wordpress.jpg" alt="" className="img-fluid" />
            </div>
            <div className="item">
              <img src="img/certificates/firebase.jpg" alt="" className="img-fluid" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Resume;
