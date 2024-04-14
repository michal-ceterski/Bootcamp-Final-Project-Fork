import React from "react"
import './AboutUs.css'
const AboutUs = () => {

    return (
        <>         
         <div className="info-container">
         <h2>A Brand Leader</h2>
         <p>Offering the most powerful portfolio in the industry, our over 30 brands and nearly 
            8,700 properties across 139 countries and territories give people more ways to connect, 
            experience and expand their world.</p>
            <span>Reception</span>
            <span>Tel.No.:<a href="tel:+48589999999">+48 58 999 99 99</a></span>
            <span>Email: <a href="mailto:recepcja@solhotel.com">recepcja@solhotel.com</a></span>
            <span>Booking department</span>
            <span>Tel.No.:<a href="tel:+48588888888">+48 58 888 88 88</a></span>
            <span>Email: <a href="mailto:recepcja@solhotel.com">booking@solhotel.com</a></span>
        </div>
        <div className="box-container">
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_core-values-heritage/unlimited/photo/assets-usage-rights/pdt-hot-shoppe-1927-744354017118562-wide-hor.jpg"></img>
            <div className="text-container">
            <h2>Core Values & Heritage</h2>
            <div>Founded by J. Willard and Alice Marriott, and guided by family leadership since 1927, 
                their principles remain embedded in the company's culture and in everything we do today.</div>
                </div>
        </div>
        <div className="box-container">
            <div className="text-container">
            <h2>Company Strategy</h2>
            <div>Our Growing Forward strategy encapsulates our company priorities, rooted in our core values, 
                and guides us as we deliver on the promise of Marriott’s unique brand of hospitality around the world.</div>
                </div>
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-digital/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets/pdt-corp-strategy-796777262148152.jpg"></img>
        </div>
        <div className="box-container">
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets-usage-rights/pdt-diversity-and-inclusion-593095843034458-wide-hor.jpg"></img>
            <div className="text-container">
            <h2>Diversity & Inclusion</h2>
            <div>Diversity and inclusion is fundamental to our core values and 
                strategic business goals. Taking care of people and their well-being 
                is our most precious cultural inheritance.</div>
                </div>
        </div>
        <div className="box-container">
            <div className="text-container">
            <h2>Sustainability & Social Impact</h2>
            <div>Guided by our sustainability and social impact platform, 
                Serve 360: Doing Good in Every Direction, Marriott International commits 
                to creating positive and sustainable impact wherever we do business.</div>
                </div>
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_sustainability-social-impact/unlimited/photo/assets-usage-rights/pdt-sustain---tree-planting-484752399741473-wide-hor.jpg"></img>
        </div>
        </>
    )
}

export default AboutUs;