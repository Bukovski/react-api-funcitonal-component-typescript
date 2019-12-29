import React, { useState } from "react";
import { SwappingSquaresSpinner } from "react-epic-spinners";
import ErrorMessage from "./error-message";
import { ILoadIndicator } from "../../interfaces";


interface IIndicator {
  loading: boolean,
  error: boolean
}

interface IStyle {
  [key: string]: string
}

const style: IStyle = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  height: "240px",
  width: "70%"
};


function withLoadIndicator<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: ILoadIndicator & P) => {
    const [ indicator, setIndicator ] = useState<IIndicator>({
      loading: true,
      error: false,
    });

    const onLoadStart = (): void => {
      setIndicator({
        loading: true,
        error: indicator.error
      });
    };

    const onLoaded = (): void => {
      setIndicator({
        loading: false,
        error: false
      })
    };

    const onError = (): void => {
      setIndicator({
        error: true,
        loading: false
      })
    };

    const { loading, error } = indicator;

    const spinner: JSX.Element | null = loading
      ? <SwappingSquaresSpinner color="#6441A5" size={ 100 } style={ style }/>
      : null;
    const errorMessage: JSX.Element | null = error ? <ErrorMessage/> : null;

    const hasData: boolean = !(loading || error);

    return <WrappedComponent
      { ...props }
      onLoadStart={ onLoadStart }
      onLoaded={ onLoaded }
      onError={ onError }
      hasData={ hasData }
    >
      { errorMessage }
      { spinner }
    </WrappedComponent>;
  };
};


export default withLoadIndicator;
