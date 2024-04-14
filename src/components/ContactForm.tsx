import { useState, FormEvent, useRef, useEffect, MutableRefObject }  from "react"
import './ContactForm.css'
import emailjs from '@emailjs/browser';

type ContactFormProps = {
  onClose: ()=>void,
  isEmailSent: boolean,
  setisEmailSent: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactForm = ({onClose, setisEmailSent, isEmailSent}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({...formData,[e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: FormEvent) => {

}
  const form = useRef<HTMLFormElement>(null);
 
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_i9svdvj', 'template_x1by15r', form.current, {
        publicKey: 'nEnmgTagRKnAS2Ayl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setisEmailSent(true);
          
          },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
    
      onClose();
  
    }

 

  return (
    
    <>
    <div className="popup">
      <div className="popup-content">
        <button id="close-btn" onClick={onClose} >X</button>
        <h3>Contact Us</h3>
        <div className="popup-body">
            <form ref={form} onSubmit={sendEmail}>
                <input id="input-name"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input id="input-name"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <textarea id="input-message"
                  name="message"
                  placeholder="Message"
                  required
                />
              <button id="button_action" type="submit" className="submit-btn" value="Send">Submit</button>
            </form>
            </div>
      </div>
    </div>
    
    </>
  );
};


export default ContactForm;