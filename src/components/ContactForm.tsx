import { useState, FormEvent }  from "react"
import './ContactForm.css'
import { collection, addDoc, updateDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../api/firebase'



const ContactForm = () => {
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
  
  ;
};

export default ContactForm;