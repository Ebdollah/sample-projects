import React, { createContext, useContext, useState } from 'react';
import Leftpanel from './Leftpanel';
import Rightpanel from './Rightpanel';

const HeightContext = createContext();

// Parent component that provides the context
function Context() {
  const [heightValue, setHeightValue] = useState(null);

  return (
    <HeightContext.Provider value={{ heightValue, setHeightValue }}>
      <Rightpanel />
      <Leftpanel />
    </HeightContext.Provider>
  );
}

export { HeightContext };  // <-- Updated export statement
export default Context;
