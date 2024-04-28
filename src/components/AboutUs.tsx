import React from "react"
import './AboutUs.css'
import { useTranslation } from "react-i18next"



const AboutUs = () => {
    const {t} =useTranslation()

    return (
        <>
        <div className="all">
        <div className="container">      
         <div className="title-text">{t('about_us_a_brand_leader')}</div>
            <div id="description-content">
                <p>{t('about_us_p1')}</p>
                    <span>{t('about_us_reception')}</span>
                    <span>{t('about_us_Tel_No')}<a href="tel:+48589999999">+48 58 999 99 99</a></span>
                    <span>Email: <a href="mailto:recepcja@solhotel.com">recepcja@solhotel.com</a></span>
                    <span>{t('about_us_Booking_department')}</span>
                    <span>{t('about_us_Tel_No')}<a href="tel:+48588888888">+48 58 888 88 88</a></span>
                    <span>Email: <a href="mailto:recepcja@solhotel.com">booking@solhotel.com</a></span>
            </div>
        </div>
        <div className="box-container">
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_core-values-heritage/unlimited/photo/assets-usage-rights/pdt-hot-shoppe-1927-744354017118562-wide-hor.jpg"></img>
            <div className="text-container">
            <h2>{t('about_us_Core_Values_Heritage')}</h2>
            <div>{t('about_us_p2')}</div>
                </div>
        </div>
        <div className="box-container">
            <div className="text-container">
            <h2>{t('about_us_Company_Strategy')}</h2>
            <div>{t('about_us_p3')}</div>
                </div>
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-digital/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets/pdt-corp-strategy-796777262148152.jpg"></img>
        </div>
        <div className="box-container">
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets-usage-rights/pdt-diversity-and-inclusion-593095843034458-wide-hor.jpg"></img>
            <div className="text-container">
            <h2>{t('about_us_Diversity_Inclusion')}</h2>
            <div>{t('about_us_p4')}</div>
                </div>
        </div>
        <div className="box-container">
            <div className="text-container">
            <h2>{t('about_us_Sustainability_Social_Impact')}</h2>
            <div>{t('about_us_p5')}</div>
                </div>
            <img className="value-img" src="https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_sustainability-social-impact/unlimited/photo/assets-usage-rights/pdt-sustain---tree-planting-484752399741473-wide-hor.jpg"></img>
        </div>
        </div> 
        </>
    )
}

export default AboutUs;