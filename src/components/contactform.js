import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {

  // Send email
  var sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_service, process.env.REACT_APP_template, e.target, process.env.REACT_APP_user)
      .then((result) => {
        alert("Message sent\n Status: " + result.text);
      }, (error) => {
        alert("Message not sent\n Status: " + error.text);
      });

    e.target.reset();
  }

  return (
    <div className="card text-center mt-4 crv-8 p-3 bx-shadow bg-primary-default">
      <h4 className="text-left font-weight-bold text-yellow">
        Let's talk
                    </h4>
      <form onSubmit={sendEmail} method="post" className="mt-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text ion-person"></span>
          </div>
          <input type="text" className="form-control" id="name" name="name" placeholder="Name (Optional)" />
        </div>
        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text ion-email"></span>
          </div>
          <input type="text" className="form-control" id="email" name="email" required placeholder="Email" />
        </div>
        <textarea name="message" id="message" rows="5" className="form-control mt-2" placeholder="Message"></textarea>
        <button className="btn btn-warning btn-block mt-3 crv-25">Send now</button>
      </form>
    </div>
  );
}

export default ContactForm;
