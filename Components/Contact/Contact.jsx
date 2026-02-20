import React, { useState } from 'react'
import './Contact.css'
import message from '../../assets/mes.png'
import mail from '../../assets/email.png'
import phone from '../../assets/contact.png'
import location from '../../assets/loaction.png'
import white from '../../assets/whites.png'

const Contact = () => {
  
  //     const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   setResult("Sending...");

  //   const formData = new FormData(event.target);

  //   // Add Web3Forms access key
  //   formData.append("access_key", "e9e6ee0f-8b9d-4fc5-ac63-026e21c92569");

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const res = await response.json();

  //     if (res.success) {
  //       console.log("Success:", res);
  //       setResult("Form submitted successfully!");
  //       event.target.reset();
  //     } else {
  //       console.log("Error:", res);
  //       setResult("Submission failed. " + res.message);
  //     }
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     setResult("An error occurred. Please try again.");
  //   }
  // };
      const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e9e6ee0f-8b9d-4fc5-ac63-026e21c92569");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div>
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={message} alt="" /></h3>
                <p>Feel free to reach ouy through contact form or find our contact
                    information below,youre feedback,question,and suggestion are 
                    imported to us as we strive to provoide exceptional service to our
                    university community
                </p>
                <ul>
                    <li><img src={mail} alt="" />Sanjaypersonal031@gmail.com</li>
                    <li><img src={phone} alt="" />+91 123-456-7890</li>
                    <li><img src={location} alt="" />3/143,Korikkadavu,CGM higer Secondary School <br/> Palani, 618623 TamilNadu
                    States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Youre name :</label>
                    <input type="text" name='name' placeholder='Enter youre name..' required />
                    <label>Email Id :</label>
                    <input type="email" name='email' placeholder='Enter youre Email' required/>
                    <label>Write youre messages here :</label>
                    <textarea name="message"  rows='6' placeholder='Enter youre measage..' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white} alt="" /></button>
                     <span>{result}</span>
                </form>
               
                 {/* <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
      <p>{result}</p>
    </form> */}
            </div>
        </div>
    </div>
  )
}

export default Contact