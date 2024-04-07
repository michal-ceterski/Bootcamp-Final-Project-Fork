import React from "react";

const Discount = () => {
    return (
        <>
        <div>RECEIVE AN EXTRA 10% DISCOUNT</div>
        <div>Sign up to the newsletter and have all the promos in your inbox the moment they are published.</div>
        <form>
             <label for="email">Enter your Email</label>
             <input type="email" id="email"  name="email" required/>
             <input type="checkbox" id="agreed" name="agreed" value="Agreed" required/>
             <label for="agreed"> I hereby agree to receive commercial information (newsletter) 
             from Sol Hotel with its registered office in Tajna Góra (01-100) al. Nieznana 5 
             (hereinafter referred to as the Company) by electronic means to the e-mail address provided 
             in the form. I understand that I may withdraw my consent at any time and that such withdrawal 
             shall not affect the lawfulness of processing based on consent before its withdrawal.</label>
             <input type="submit" id="submit" name="submit" value="Submit"/>
        </form>
        </>
    )
}

export default Discount;