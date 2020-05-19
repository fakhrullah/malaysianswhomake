import {useState} from "react";
import Ic_ChevronUp from "../src/Ic_ChevronUp";
import Ic_ChevronDown from "../src/Ic_ChevronDown";

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
        <div 
          className="float-right outline-none cursor-pointer"
          onClick={ () => onToggleForm() }
        >
          {showForm === true ? 
            <Ic_ChevronDown/> : <Ic_ChevronUp/>
          }
        </div>
      </div>

      { showForm === true ? 
          <div className="pt-4 text-s">
            <label>Hi! What's your name?</label>
            <input 
                className="feedbackinput"
                type="text" 
                name="name"
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Your email (optional)</label>
            <input 
                className="feedbackinput" 
                type="email" 
                name="email"
                onChange={handleChange}
            />
            <input type='hidden' name='subject' onChange={handleChange}/>
            <input type='text' name='honeypot' className="hidden" onChange={handleChange}/>
            <label className="pb-2" htmlFor="feedback">Your feedback</label>
            <textarea
                className="feedbackinput" 
                name="message"
                onChange={handleChange}
                required
                />
            <span className={response.type === 'submitted' ? 'text-xs' : 'is-hidden text-xs'}>
                {response.message}
            </span>

            <button className="btn btn-solid float-right font-semibold" type="submit">Send</button>
         </div>

        : null 
      }
    </form>
  )
}

export default Feedback;