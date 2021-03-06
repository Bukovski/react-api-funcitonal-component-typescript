import React from "react";
import { IMemeGenerator } from "../../interfaces";



const MemeGenerator = (props: IMemeGenerator) => {
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
        <img src={ randomImg } alt="meme" />
        <h2 className="top">{ topText }</h2>
        <h2 className="bottom">{ bottomText }</h2>
      </div>
    </div>
  )
};


export default MemeGenerator;
