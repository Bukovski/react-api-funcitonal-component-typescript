import React from 'react';
import { Header } from "../../components/header";
import { MemeGenerator, withMemeGenerator } from "../../components/meme-generator";
import { ErrorBoundry, withLoadIndicator } from "../../components/error";


const MemeGeneratorView: any = withLoadIndicator(withMemeGenerator(MemeGenerator));

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <ErrorBoundry>
        <MemeGeneratorView />
      </ErrorBoundry>
    </div>
  )
}


export default App;
