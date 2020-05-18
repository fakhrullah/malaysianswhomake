import {useState} from "react";
import Ic_ChevronUp from "../src/Ic_ChevronUp";
import FeedbackForm from "./FeedbackForm";

function Feedback() {
  
    const [feedback, setFeedback] = useState({
      name: '',
      email: '',
      subject: 'StaticForms - New Feedback',
      honeypot: '',
      message: '',
      accessKey: '49832cd6-0093-472e-8c10-9c9b2c06c87f'
    });
    
    const [response, setResponse] = useState({
      type: '',
      message: ''
    });

    const handleChange = e =>
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
    
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          body: JSON.stringify(feedback),
          headers: { 'Content-Type': 'application/json' }
        });
      
        const json = await res.json();

        if (json.success) {
          setResponse({
            type: 'success',
            message: 'Thank you! ❤️'
          });
        } else {
          setResponse({
            type: 'error',
            message: json.message
          });
        }
      } catch (e) {
        setResponse({
          type: 'error',
          message: 'An error occured while submitting the form.'
        });
      }
    };

    return (

      <form 
        className="feedback" 
        action='https://api.staticforms.xyz/submit'
        method='POST'
        onSubmit={handleSubmit}
      >
        <div>
          <span className="font-bold">Feedback</span>
          <button className="float-right">
            <Ic_ChevronUp/>
          </button>
        </div>

        <FeedbackForm
          response={response}
          onChange={handleChange}
        />
        
      </form>
    )
  }

export default Feedback;