import React from 'react';
import ContactForm from '.././components/contactform';

function Contact() {
    return (
        <div id="contact" className="">
            <section className="p-3">
                <h4 className="font-weight-bold text-primary-default display-inline">
                    Contact 
                </h4>

                <ContactForm />
            </section>
        </div>
    );
} 

export default Contact;