import React from 'react'
import axios from 'axios'


var opts={
    maxResults:10,
    key:"AIzaSyD0mNP-r-Grr_jhy0JNxDN8_HnHWjL4mpo"
};

function Results(props){

  const [results, setResults] = React.useState([]);

  React.useEffect((e) => {
    // search(props.tokens[0], opts, function(err, results) {
    //     if(err) return console.log(err);  
    //     setResults(results);
    //     console.log(results);
    // });
  }, [props]);

  return (
    <div id='results'>
      <h1>Difference between javascript object vs JSON object?</h1>
      <image src={"https://i.ytimg.com/vi/912_cPllMyg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3iW32XVweSgM3VmuwXx_mBj4PJA"}/>
    </div>
  )
}
export default Results;