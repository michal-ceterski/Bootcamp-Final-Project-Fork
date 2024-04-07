import { useState, FormEvent }  from "react"
import './ContactForm.css'
import { collection, addDoc, updateDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../api/firebase'

type ContactFormProps = {
  onClose: ()=>void,
}

const ContactForm = ({onClose}: ContactFormProps) => {
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
    e.preventDefault();
    console.log(db)
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
    onClose();
    
    // await fetch('https://dobra-ekipa-6f3c0.web.app', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(formData)
    //   })
    //   .then((res)=>{
    //     if(res.ok) {
    //     alert('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //     }
    //    else {
    //     alert('Message sending failed.');
    //   }})
    //  .catch((err)=>{
    //   console.log('Error sending message:', err);
    //   alert('Error sending message.');
    // })
   
  };
  
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input id="input-name"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea id="input-message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
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