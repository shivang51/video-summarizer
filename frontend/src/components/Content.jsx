import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Content(props){

  const [text, setText] = React.useState("");

  const navigate = useNavigate();


  function onSubmit(e){
    axios.post("http://127.0.0.1:8080/getTokens", {"text" : text}).then(e => {
      const tokens = e.data[0]["message"];
      props.setTokens(tokens);
      navigate("/results", {'tokens': tokens});
    });
  }


  return (
    <div id='content'>
        <form action="javascript:void(0);">
        <h1>Video Summerizer</h1>
            <input name='ytURL' id='url' type="text" placeholder='Enter your url' />
            <h2>OR</h2>
            <textarea name='transText' id='texts'  placeholder='Enter the Text' value={text} 
            onChange = {(e) => {
              setText(e.target.value);
            }}
            />
            <button id='submit' onClick={onSubmit}>Submit</button>
        </form>

    </div>
  )
}
export default Content;