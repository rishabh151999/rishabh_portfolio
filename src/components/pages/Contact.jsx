import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) newErrors.fname = 'First name is required';
    if (!formData.lname.trim()) newErrors.lname = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_3meju6n',  
        'template_z4gatoa',  
        e.target,
        'hAqCBo8gnQZIvvWso'    
      );

      toast.success('Message sent successfully!');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-section">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column - Contact Info */}
          <div className="col-lg-6">
            <div className="contact-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Let's Connect</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Let's build your next <span>project together</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Have an idea or need a dedicated Front-End Developer?
                  Reach out and let's discuss how I can help you bring your vision to life.
                </p>
              </div>

              <div className="contact-us-body">
                <div className="contact-info-list">
                  {/* Address */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-location-black.svg" alt="Location Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Location</h3>
                      <p>Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="icon-box">
                      <img src="/images/icon-phone-black.svg" alt="Phone Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Phone</h3>
                      <p><a href="tel:+919795661093">+91 9795661093</a></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item wow fadeInUp" data-wow-delay="1s">
                    <div className="icon-box">
                      <img src="/images/icon-mail-black.svg" alt="Email Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:rishabhchandralal15@gmail.com">rishabhchandralal15@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="view-resume-circle">
                  <a
                    href="/pdf/Rishabh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/view-resume-circle.png" alt="View Resume" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form">
              <p className="wow fadeInUp">
                Fill out this form and I'll get back to you promptly. I'm excited to discuss your ideas and how I can help!
              </p>

              <form 
                method="POST"
                onSubmit={handleSubmit}
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="fname"
                      className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
                      placeholder="First Name"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                    {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="lname"
                      className={`form-control ${errors.lname ? 'is-invalid' : ''}`}
                      placeholder="Last Name"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                    />
                    {errors.lname && <div className="invalid-feedback">{errors.lname}</div>}
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>

                  <div className="form-group col-md-12 mb-4">
                    <textarea
                      name="message"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      rows="4"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn-default"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}