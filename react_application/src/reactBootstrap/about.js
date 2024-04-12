import React from "react";

const AboutDetails = ()=>{
    return(
       <section className="abt-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2>About Us</h2>
        <p>
          Packyourbags is a tour and travel company based in hyderabad. We
          specialize in providing customised tours to our customers, ensuring
          that they have an unforgettable experience while travelling with us.
          Our team of experienced professionals are passionate about creating
          unique experiences for each customer, from planning the itinerary to
          booking flights and accommodation. With over 10 years of experience in
          the industry, we strive to provide exceptional service at competitive
          prices. Whether you're looking for a weekend getaway or a month-long
          adventure, Packyourbags has got you covered!
        </p>
        <p>
          Tours and travel packages - Group tours and travel-Adventure tours and
          travel - Luxury tours and travel - Family friendly tours and
          travel-Cheap tour packages for couples - How to plan a budget-friendly
          vacation - Best places to visit on a family holiday - Tips for
          planning an international trip -Travel tips for first time travelers.
        </p>
        <a href="/resource/about-us.aspx" className="about-btn1">
          <span>View More</span> <i className="fa fa-angle-right" />
        </a>
      </div>
      <div className="col-md-6">
        <img src="http://packurbags.co.in/resource/Image/abt-img.jpg" className="img-responsive" alt="image_load"/>
      </div>
    </div>
  </div>
</section>
    
    )
}

export default AboutDetails;