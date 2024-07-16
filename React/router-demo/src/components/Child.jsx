import Grandchild from "./Grandchild";

function Child({ user }) {
  return (
    <div>
      <h2>Child Component</h2>
      <Grandchild user={user} />
    </div>
  );
}

export default Child;
