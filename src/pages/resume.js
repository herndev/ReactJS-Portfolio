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
                <span className="font-weight-bold text-orange">Phone:</span> <br />+639397724280
                                        </p>
              <p className="mb-2">
                <span className="font-weight-bold text-orange">Email:</span> <br />herniejabien45@gmail.com
                                        </p>
              
              <p className="mb-2">
                <span className="font-weight-bold text-orange">Address:</span> <br />Cagayan de Oro, Misamis Oriental Philippines
                                        </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="crv-8 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126293.44490128885!2d124.59075304177426!3d8.434015933820442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d9810e9e81%3A0x2edcd5b84a6de2a2!2sCagayan%20de%20Oro%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1611891257630!5m2!1sen!2sph"
                width="100%" title="location" height="450" aria-hidden="false" tabIndex="0"></iframe>
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
