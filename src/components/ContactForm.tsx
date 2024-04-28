import { useState, FormEvent, useRef, useEffect, MutableRefObject }  from "react"
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next"


type ContactFormProps = {
  onClose: ()=>void,
  isFormSubmitted: boolean,
  setisFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  error: boolean,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
}

const ContactForm = ({onClose, setisFormSubmitted, isFormSubmitted, error, setError }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {t} =useTranslation()

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
          setisFormSubmitted(true);
          
          },
        (error) => {

          console.log('FAILED...', error.text);
          setError(true)
        },
      )
    
      onClose();
  
    }

 

  return (
    
    <>
    <div className="popup">
      <div className="popup-content">
        <button id="close-btn" onClick={onClose} >X</button>
        <h3>{t('ContactUs')}</h3>
        <div className="popup-body">
            <form ref={form} onSubmit={sendEmail}>
                <input id="input-name"
                  type="text"
                  name="user_name"
                  placeholder={t('ContactFormPlaceholderName')}
                  required
                />
                <input id="input-email"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <textarea id="input-message"
                  name="message"
                  placeholder={t('ContactFormPlaceholderMessage')}
                  required
                />
              <button id="button_action" type="submit" className="submit-btn" value="Send">{t('Submit')}</button>
            </form>
            </div>
      </div>
    </div>
    
    </>
  );
};


export default ContactForm;