import React, {useState} from "react";
import Ic_Twitter from "../src/Ic_Twitter"

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    return (
      <form className="feedback">
        <div className="pb-4">
          <span className="font-bold">Feedback</span>
          <span className="float-right"><Ic_Twitter/></span>
        </div>
        <label className="pb-2">What's your name?</label>
        <input 
          className="feedbackinput" 
          type="text" 
          name="name" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label className="pb-2">What's your email?</label>
        <input 
          className="feedbackinput" 
          type="email" 
          name="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="pb-2">Your feedback</label>
        <textarea
          className="feedbackinput" 
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button 
          className="btn btn-solid float-right" 
          type="submit">Submit</button>
      </form>
    )
}

export default FeedbackForm;