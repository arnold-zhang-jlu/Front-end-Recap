import Parent from "../components/Parent";

function About() {
  const user = {
    name: "John Doe",
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
