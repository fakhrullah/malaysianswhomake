import {useState} from "react";
import Ic_ChevronUp from "../src/Ic_ChevronUp";
import Ic_ChevronDown from "../src/Ic_ChevronDown";
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

  const [showForm, setShowForm] = useState('');
  const onToggleForm = () => {
    setShowForm(state => {
      return state === true ? false : true
    });
  }

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
          message: 'Thank you for your feedback!'
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
        message: 'Something&apos;s wrong. Try again?'
      });
    }
  };

  return (

    <form 
      className="feedback md:hidden sm:hidden"
      action='https://api.staticforms.xyz/submit'
      method='POST'
      onSubmit={handleSubmit}
    >
      <div>
        <span className="text-s font-bold">We ❤️Feedback</span>
        <button 
          className="float-right outline-none"
          onClick={ () => onToggleForm() }
        >
          {showForm === true ? 
            <Ic_ChevronDown/> : <Ic_ChevronUp/>
          }
        </button>
      </div>

      { showForm === true ? 
        <FeedbackForm
          response={response}
          onChange={handleChange}
        /> : null 
      }
      
    </form>
  )
}

export default Feedback;