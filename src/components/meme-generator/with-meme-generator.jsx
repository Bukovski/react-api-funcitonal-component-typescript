import React, { useState, useEffect } from "react";


function withMemeGenerator(WrappedComponent) {
  return (props) => {
    const { onLoaded, onLoadStart, onError, hasData, children } = props;
    
    const [inputs, setInputs] = useState({
      topText: "",
      bottomText: ""
    });
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
    const [allMemeImgs, setAllMemeImgs] = useState([]);
    
    
    useEffect(() => {
      onLoadStart();
      
      const fetchData = async () => {
        try {
          
          const response = await fetch("https://api.imgflip.com/get_memes");
          const json = await response.json();
          const { memes } = json.data;
          
          setAllMemeImgs(memes);
          onLoaded();
        } catch (e) {
          onError()
        }
      };
      
      fetchData();
    }, []);
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      
      const newState = { ...inputs };
      newState[ name ] = value;
      
      setInputs(newState);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const randNum = Math.floor(Math.random() * allMemeImgs.length);
      const randMemeImg = allMemeImgs[ randNum ].url;
      
      setRandomImg(randMemeImg);
    };
    
    return (
      <React.Fragment>
        { children }
        
        {
          hasData
            ? <WrappedComponent
              { ...props }
              { ...inputs }
              randomImg={ randomImg }
              handleChange={ handleChange }
              handleSubmit={ handleSubmit }
            />
            : null
        }
      
      </React.Fragment>
    )
  }
}


export default withMemeGenerator;
