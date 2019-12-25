import React from "react";



function withMemeGenerator(WrappedComponent) {
  return class extends React.Component {
    state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };

    
    componentDidMount() {
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
          const { memes } = response.data;
          
          this.setState({
            allMemeImgs: memes
          })
        })
    }
    
    handleChange = (event) => {
      const { name, value } = event.target;
      
      this.setState({
        [ name ]: value
      })
    };
    
    handleSubmit = (event) => {
      event.preventDefault();
      
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
      const randMemeImg = this.state.allMemeImgs[ randNum ].url;
      
      this.setState({
        randomImg: randMemeImg
      });
    };
    
    render() {
      return (
        <WrappedComponent
          { ...this.props }
          { ...this.state }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
      )
    }
  }
}


export default withMemeGenerator;