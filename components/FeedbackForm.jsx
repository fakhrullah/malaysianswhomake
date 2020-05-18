import React from 'react';

const FeedbackForm = ({ response, handleChange }) => {
    return (
    <div className="pt-4">
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

        <button className="btn btn-solid float-right" type="submit">Send</button>
    </div>
)};

export default FeedbackForm;