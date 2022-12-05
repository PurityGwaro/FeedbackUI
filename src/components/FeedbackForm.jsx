import React from 'react'
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

function FeedbackForm() {  
    const [text,setText] = useState('') 
    const [btnDisabled,setBtnDisabled] = useState(true) 
    const [message,setMessage] = useState('') 

    const handleTextChange = (e) =>{
        if(text === '' ){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text Must Be At Least 10 Characters!')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false) 
        }
        setText(e.target.value);
    }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* TODO: Rating select component */}
        <div className="input-group">
            <input 
            value={text}
            onChange={handleTextChange}
            type="text" placeholder='Write A Review'/>
            <Button
            isDisabled={btnDisabled}
            type='submit'
            >Send</Button>
            
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
