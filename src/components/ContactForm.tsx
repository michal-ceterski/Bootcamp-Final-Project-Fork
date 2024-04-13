import { useState, FormEvent, useRef }  from "react"
import './ContactForm.css'
import emailjs from '@emailjs/browser';

type ContactFormProps = {
  onClose: ()=>void,
}

const ContactForm = ({onClose}: ContactFormProps) => {
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
  

  const handleSubmit = async (e: FormEvent) => {
    // const handleChange = () =>{
    const form = useRef();
  
    onClose();
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
  }
 
  
  return (
    <div className="popup">
      <div className="popup-content">
        <button id="close-btn" onClick={onClose}>X</button>
        <h3>Contact Us</h3>
        <div className="popup-body">
            <form onSubmit={handleSubmit}>
                <input id="input-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
                <input id="input-name"
                  type="email"
                  name="email"
                  placeholder="Email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                />
                <textarea id="input-message"
                  name="message"
                  placeholder="Message"
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                />
              <button id="button_action" type="submit" className="submit-btn">Submit</button>
            </form>
            </div>
      </div>
    </div>
  );
};


export default ContactForm;