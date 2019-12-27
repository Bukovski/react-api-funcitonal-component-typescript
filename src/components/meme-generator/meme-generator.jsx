import React from "react";
import withMemeGenerator from "./with-meme-generator";
import { SwappingSquaresSpinner } from "react-epic-spinners";
import { ErrorMessage } from "../error";


const style = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  height: "240px",
  width: "70%"
};

const MemeGenerator = (props) => {
  const { topText, bottomText, randomImg, handleChange, handleSubmit } = props;
  
  return (
    <div>
      <form className="meme-form" onSubmit={ handleSubmit }>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={ topText }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={ bottomText }
          onChange={ handleChange }
        />
        
        <button>Gen</button>
      </form>
      
      <div className="meme">
        {/*<img align="center" src={ randomImg } alt="meme" />*/}
        <ErrorMessage />
        {/*<SwappingSquaresSpinner color="red" size="100" style={ style } />*/}
        <h2 className="top">{ topText }</h2>
        <h2 className="bottom">{ bottomText }</h2>
      </div>
    </div>
  )
};


export default withMemeGenerator(MemeGenerator)