import React from 'react';
import ComponentWithGlobalState from './comonentWithGlobalState'; 
import ComponentWithoutGlobalState from './componentWithoutGlobalState';
import Ch from './Hch/Ch'; 

const App = () => {

  return (
    <>
      <ComponentWithGlobalState />
      <Ch />
    </>
  );
}


export default App;
