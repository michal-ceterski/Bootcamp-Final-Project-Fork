import { useState, FormEvent, useRef }  from "react"
import './ContactForm.css'
import emailjs from '@emailjs/browser';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
// @ts-ignore
  // function search(formData) {
  //   const user_name = formData.get("user_name");
  //   alert(`You searched for '${user_name}'`);
  // }

  

    
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({...formData,[e.target.name]: e.target.value });
  };

  // const handleChange = () =>{
  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
   

    emailjs
    // @ts-ignore
      .sendForm('service_i9svdvj', 'template_x1by15r', form.current, {
        publicKey: 'nEnmgTagRKnAS2Ayl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    }

 
  
  return (
    // @ts-ignore
    <form  ref={form} className="contact-form" onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="user_name"
          // onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="user_email"

          // onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          // onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
  
  ;
};

export default ContactForm;