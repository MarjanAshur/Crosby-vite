import { useState } from 'react';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
  };

  const handleCloseModal = () => {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="contact-us-section">
      <h2>Contact Us</h2>
      <p className="contactText">
        The following text is placeholder known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet nullam.
      </p>
      <button className="contact-us-button" onClick={handleButtonClick}>
        Get in Touch
      </button>

      {/* Modal */}
      <div id="contactModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <h2>Contact Us</h2>
          {isSubmitted ? (
            <div className="thank-you-message">
              <h3>Thank You!</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <span>
                <b>Name</b> (required)
              </span>
              <div className="contact-names">
                <div className="contact-name">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="name" name="first-name" required />
                </div>
                <div className="contact-name">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="name" name="last-name" required />
                </div>
              </div>
              <label className="label" htmlFor="email">
                Email <span>(required)</span>
              </label>
              <input type="email" id="email" name="email" required />
              <label className="label" htmlFor="message">
                Message <span>(required)</span>
              </label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
