import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to uppercase!", "success")
  }
  const handleLoClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to lowercase!", "success")
  }
  // const handleBoldText = () =>{
  //   // console.log("uppercase was clicked" + text);
  //   let newText = text
  //   setText(<strong>newText</strong>)
  // }
  const handleCopy=()=>
  {
    // console.log("I am Copy")

    navigator.clipboard.writeText(text);
  
    props.showAlert(" Text Copied!", "success")
  }
  const handleClearText = () =>{
    
    let newText = '';
    setText(newText)
    props.showAlert(" Clear Text!", "success")
  }
  const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces removed!", "success")
  }
  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
    const[text, setText] = useState("");
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 class='mb-4'>{props.heading}</h1>
  <div className="mb-3">

    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
    Convert to UpperCase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
    Convert to LowerCase
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
    Clear Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
    Copy Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
    Remove Extra Spaces
  </button>
  {/* <button className="btn btn-primary mx-1" onClick={handleBoldText}>
  Convert to Bold Text
  </button> */}
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
      </>
  )
}
