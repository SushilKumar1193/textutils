import React,{useState} from 'react'

export default function TextForm(props) {
    const Handleupclick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
        // setText("You have clicked on handleUpClick")
        }

        const Handleloclick = ()=>{
            // console.log("Uppercase was clicked");
            let newText = text.toLowerCase();
            setText(newText);
        props.showAlert("Converted to lower case","success")

            // setText("You have clicked on handleUpClick")
            }
            const reverseonclick = ()=>{

                let newtext = text.split(/\s/).reverse().join(" ");
                setText(newtext);
        props.showAlert("Text is reversed","success")
                
            }
        const Handleonchange = (event)=>{
            setText(event.target.value);
        }
        const handleCopy = ()=>{
            let txt = document.getElementById('mybox');
            txt.select();
            document.getSelection().removeAllRanges();
            navigator.clipboard.writeText(txt.value);
        props.showAlert("Text is successfully copied to clipboard","success")

        }
    const [text,setText] = useState('Enter text here');
    // text = "new text";   this is wrong way to update state. we cant change state directly
    // setText=('New Text')  correct way
    return (
        <>
        <div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control " id="mybox" value={text} rows="6" onChange = {Handleonchange} style ={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                <button disabled={text.length===0} className={`btn btn-${props.btn} my-3 mx-3`} onClick={Handleupclick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} my-3 mx-3`} onClick={Handleloclick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} my-3 mx-3`} onClick={reverseonclick}>Reverse your text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btn} my-3 mx-3`} onClick={handleCopy}>Copy your text</button>
                </div>
        </div>
        <div className="container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text summary</h1>
            <p>
                {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
            </p>
            <p>
                {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to read.
            </p>
            <h2>
                Preview
            </h2>
            <p>{text.length>0?text:"Enter your text in above box to preview it here"}</p>
        </div>
        </>
    )
}
