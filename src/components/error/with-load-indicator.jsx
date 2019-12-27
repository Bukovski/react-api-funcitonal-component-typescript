import React from "react";
import { SwappingSquaresSpinner } from "react-epic-spinners";
import ErrorMessage from "./error-message";


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


const withLoadIndicator = (WrappedComponent) =>
  class extends React.Component {
    state = {
      loading: true,
      error: false,
    };
    
    onLoadStart = () => {
      this.setState({
        loading: true
      });
    };
    
    onLoaded = () => {
      this.setState({
        loading: false,
        error: false
      })
    };
    
    onError = () => {
      this.setState({
        error: true,
        loading: false
      })
    };
    
    render() {
      const { loading, error } = this.state;
      
      const spinner = loading
        ? <SwappingSquaresSpinner color="#6441A5" size={ 100 } style={ style } />
        : null;
      const errorMessage = error ? <ErrorMessage /> : null;
      
      const hasData = !(loading || error);
      
      return <WrappedComponent
        {...this.props }
        onLoadStart={this.onLoadStart}
        onLoaded={this.onLoaded}
        onError={this.onError}
        hasData={hasData}
      >
        { errorMessage }
        { spinner }
      </WrappedComponent>;
    }
  };


export default withLoadIndicator;
