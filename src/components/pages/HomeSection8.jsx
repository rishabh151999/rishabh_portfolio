import React from "react";

export default function HomeSection8() {
  return (
    <>
      {/* FAQ Section */}
      <div className="our-faqs">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Frequently asked questions</h3>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  Need more info? here's what <span>you're looking for</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="faqs-content wow fadeInUp" data-wow-delay="0.4s">
                <div className="faq-cta-box">
                  <div className="icon-box">
                    <img src="images/icon-faq-cta.svg" alt="" />
                  </div>
                  <div className="faq-cta-content">
                    <h3>You have different questions? Ask Away!</h3>
                    <p>Work With People And Brands Worldwide.</p>
                  </div>
                  <div className="faq-cta-btn">
                    <a href="contact.html" className="btn-default">
                      contact us now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="faq-accordion" id="faqaccordion">
                {faqData.map((faq, index) => (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${index !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 1 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 1 ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqaccordion"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Latest blog</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Showcase of my latest projects and <span>creative work</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.4s">
                  <p>
                    From concept to completion, these works reflect my commitment to delivering
                    high-quality, impactful solutions.
                  </p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.6s">
                  <a href="blog.html" className="btn-default">
                    view all blog
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="post-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="post-featured-image">
                    <a href="blog-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={post.image} alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-content">
                      <h3>
                        <a href="blog-single.html">{post.title}</a>
                      </h3>
                    </div>
                    <div className="post-item-btn">
                      <a href="blog-single.html" className="readmore-btn">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const faqData = [
  {
    question: "How long does a project take to complete?",
    answer:
      "My process involves three main steps: discovery, design, and delivery. First, I'll gather all the necessary details about your project, including your goals and target audience. Then, I create wireframes and prototypes to ensure we're aligned before moving."
  },
  {
    question: "What is your design process?",
    answer:
      "My process involves three main steps: discovery, design, and delivery. First, I'll gather all the necessary details about your project, including your goals and target audience. Then, I create wireframes and prototypes to ensure we're aligned before moving."
  },
  {
    question: "Can I make changes after the project is completed?",
    answer:
      "My process involves three main steps: discovery, design, and delivery. First, I'll gather all the necessary details about your project, including your goals and target audience. Then, I create wireframes and prototypes to ensure we're aligned before moving."
  },
  {
    question: "Do you work with startups or small businesses?",
    answer:
      "My process involves three main steps: discovery, design, and delivery. First, I'll gather all the necessary details about your project, including your goals and target audience. Then, I create wireframes and prototypes to ensure we're aligned before moving."
  },
  {
    question: "What happens if I don't like the initial designs?",
    answer:
      "My process involves three main steps: discovery, design, and delivery. First, I'll gather all the necessary details about your project, including your goals and target audience. Then, I create wireframes and prototypes to ensure we're aligned before moving."
  }
];

const blogPosts = [
  {
    image: "images/post-1.jpg",
    title: "Wireframing Like a Pro Best Practices and Tools"
  },
  {
    image: "images/post-2.jpg",
    title: "Why Prototyping is Essential for Product Success"
  },
  {
    image: "images/post-3.jpg",
    title: "The Essential Tools Every Web Designer Should Know"
  }
];
