import React, { useState, useEffect } from "react";
import { ILoadIndicator, IMemesCollection } from "../../interfaces";


interface Iinputs {
  topText: string,
  bottomText: string
}

function withMemeGenerator<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: ILoadIndicator & P) => {
    const { onLoaded, onLoadStart, onError, hasData, children } = props;
    
    const [inputs, setInputs] = useState<Iinputs>({
      topText: "",
      bottomText: ""
    });
    const [randomImg, setRandomImg] = useState<string>("http://i.imgflip.com/1bij.jpg");
    const [allMemeImgs, setAllMemeImgs] = useState<IMemesCollection[]>([]);
    
    
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
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target as HTMLInputElement & {
        name: keyof Iinputs,
        value: string
      };
      
      const newState = { ...inputs };
      newState[ name ] = value;
      
      setInputs(newState);
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      
      const randNum: number = Math.floor(Math.random() * allMemeImgs.length);
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
