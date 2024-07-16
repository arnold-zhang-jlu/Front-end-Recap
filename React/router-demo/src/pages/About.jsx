import { Parent } from "../components/Parent";

function About() {
  const user = {
    name: "John Doe 00",
    email: "john.doe@example.com",
  };
  return (
    <div>
      About Page
      <Parent user={user} />
    </div>
  );
}

export default About;
