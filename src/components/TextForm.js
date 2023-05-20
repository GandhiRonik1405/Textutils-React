import React, { useState } from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase Was clicked"+ text);
        // let newText = text.toLowerCase();
        // setText(newText)

        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","Success");

    }   

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear text","Success");
    }

    // const handleEmailClick = ()=>{
    //     let newText = '21amtics032@gmail.com';
    //     setText(newText)
    // }


    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text","Success");
    }


    const handleEmailClick = () => {
        const subject = encodeURIComponent('Email Subject');
        const body = encodeURIComponent('Email body content.');
        window.location.href = `mailto:email@example.com? 
        subject=${subject}&body=${body}`;};



    const handleOnChange = (event)=>{
// console.log("on change");
setText(event.target.value);
    }

    const [text, setText] = useState('');

    return(
        <>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'black ':'grey ',color:'white',border:"3px solid pink"}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-info mx-2' onClick={handleClearClick}>clear text</button>
                <button className='btn btn-danger mx-2' onClick={handleEmailClick}>Email</button>
                <button className='btn btn-warning mx-2' onClick={handleCopy}>Copy Text</button>



            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read </p>
                  <h2>Preview</h2>
                  <p>{text.length>0?text:"Empty text box"}</p>
            
            </div>
        </>
        
    )
}