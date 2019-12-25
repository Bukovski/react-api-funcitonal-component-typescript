import React from "react";
import withMemeGenerator from "./with-meme-generator";


const MemeGenerator = ({ topText, randomImg, bottomText, handleChange, handleSubmit }) => (
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
      <img align="center" src={ randomImg } alt="" />
      <h2 className="top">{ topText }</h2>
      <h2 className="bottom">{ bottomText }</h2>
    </div>
  </div>
);


export default withMemeGenerator(MemeGenerator)