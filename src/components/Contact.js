import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <input type="text" placeholder="Your business" required />
        <select>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Corporate Web Design">Corporate Web Design</option>
            <option value="Ecommerce Web Development">Ecommerce Web Development</option>
            <option value="Google Ads &amp; SEO">Google Ads &amp; SEO</option>
            <option value="Branding">Branding</option>
            <option value="Commercial Video Shoot">Commercial Video Shoot</option>
            <option value="App Development">App Development</option>
            <option value="All the above">All the above</option>   
        </select>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
