import React from 'react';
import '../components/form.css'

 const Form = () => {

 const FormValidation = (event) => {

    let success = true;


    let name = event.target.name.value.trim();
    let email = event.target.email.value.trim();
    let message = event.target.message.value.trim();

    if(name === ""){
        alert("Type your name")
        success = false;
    }
    else if (email === ""){
alert("Type your email");
success = false;
    }
else if ( message === ""){
    alert("Type a message")
    success = false;
}
else if ( !email.includes("@")){
    alert("You need to have @ in your email");
    success= false;
}

 if(!success){
    event.preventDefault();
 }

 if(success){
    event.target.reset();
    alert("Your response has been recorded")
 }

 }

    return(
        <>
        <form id='form' onSubmit={FormValidation}>
            <label>Your Name</label>
            <input name='name' ></input>
            <label  >Email</label>
            <input name='email' ></input>
            <label>Message</label>
            <textarea name='message' rows={6} placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
        </>
    )
 }

 export default Form;