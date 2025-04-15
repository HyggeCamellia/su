import React from 'react';
import ComponentWithGlobalState from './comonentWithGlobalState'; 
import ComponentWithoutGlobalState from './componentWithoutGlobalState';
import Ch from './Hch/Ch'; 
import Yn from './Syn/Yn';
import Wfy from './Wfy/Aaaa';
import Lhq from './Lhq/Lh';

const App = () => {

  return (
    <>
      <ComponentWithGlobalState />
      <Ch />
      <Yn />
      <Wfy />
      <Lhq />
    </>
  );
}


export default App;
