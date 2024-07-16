import { createContext } from "react";
import Child from "./Child";

const userContext = createContext();
function Parent({ user }) {
  return (
    <userContext.Provider value={{ user }}>
      <h2>Parent Component</h2>
      <Child />
    </userContext.Provider>
  );
}

export { Parent, userContext };
