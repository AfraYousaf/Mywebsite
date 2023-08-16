import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked" +text);
    let newText= text.toUpperCase();
    setText(newText)
    

  }
  const handleLoClick =() =>{
    // console.log("lowercase was clicked" +text);
    let newText= text.toLowerCase();
    setText(newText)
    
  }
  const handleClearClick =() =>{
    // console.log("clear ctext");
    let newText='';
    setText(newText)
    
  }
  const handleExtraSpaces =() => {
    // console.log("clear extra space");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
  }
  // const handleToggleCaseClick = () => {
  //   let newText = text.split('').map(char => {
  //     if (char === char.toUpperCase()) {
  //       return char.toLowerCase();
  //     } else if (char === char.toLowerCase()) {
  //       return char.toUpperCase();
  //     }
  //     return char;
  //   }).join('');
  
  //   setText(newText);
  // };
  
  const handleCapitalizeFirstLetterClick = () => {
   
       let newText = text .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
    setText(newText);
  };
  
  

  const handleOnChange =(event) =>{
    // console.log("On change");
setText(event.target.value);
  }
const [text, setText]= useState('');
  return (
   <>
   <div className="container">
   <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea type="Text Aera" class="form-control  bg-transparent" value={text} onChange={handleOnChange} id="my box"rows="8"/>
  </div>
  <button className="btn btn-primary mx-1  " onClick={handleUpClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mx-1  " onClick={handleLoClick}>Convert To Lower Case</button>
  <button className="btn btn-primary mx-1  " onClick={handleCapitalizeFirstLetterClick  }>Capitalize Each First Letter</button>
  <button className="btn btn-primary mx-1  " onClick={handleExtraSpaces}>Remove Extra Space</button>

  <button className="btn btn-primary mx-5  " onClick={handleClearClick}>Clear Data</button>

</div>
<div className="container my-3">
    <h3>your Text summary</h3>
    <p> {text.split(" ").length} words & {text.length} characters </p>
    <p> {0.008*text.split(" ").length}second read</p>
    <h3>
        Text Preview
    </h3>
    <p>{text}</p>

</div>  
</>
 
  )
}


