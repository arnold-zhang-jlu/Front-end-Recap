import { useContext } from "react";
import { userContext } from "./Parent";

function Grandchild() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h2>Grandchild Component</h2>
      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Grandchild;
