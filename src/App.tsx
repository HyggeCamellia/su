import React from 'react';
import ComponentWithGlobalState from './comonentWithGlobalState'; 
import ComponentWithoutGlobalState from './componentWithoutGlobalState';
import Ch from './Hch/Ch'; 
import Yn from './Syn/Yn';

const App = () => {

  return (
    <>
      <ComponentWithGlobalState />
      <Ch />
    <Yn/>
    </>
  );
}


export default App;
