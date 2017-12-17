import React from 'react';

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h2 className="text-center">Contact Us</h2>
      <div className="container">
        <div className="row-fluid">
          <div className="col-md-8">
            <iframe title="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed/v1/place?q=19%20Dartmouth%20St%20West%20Newton%2C%20MA%2002465-2601&key=AIzaSyAmLoQRUYTR5-NZYbgjiGjoTFHMKfIJUSo"></iframe>
          </div>

          <div className="col-md-4">
            <h2>React Restuarant</h2>
            <address>
              19 Dartmouth St<br />
              West Newton, MA 02465-2601<br />
              United States<br/>
              Phone: 800-555-6868<br />
              Email: contact@reactrest.com
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
