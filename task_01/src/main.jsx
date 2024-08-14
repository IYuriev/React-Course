import { createRoot } from "react-dom/client";

const Heading = ({ text, color }) => {
  const headingStyle = { color };
  return <h1 style={headingStyle}>{text}</h1>;
};

const Description = ({ textStyle }) => {
  const YOUR_NAME = prompt("Enter your name");
  const fontStyle = { textStyle };
  return <h2 style={fontStyle}>{YOUR_NAME}`s first React application.</h2>;
};

createRoot(document.getElementById("root")).render(
  <>
    <Heading text="Hello world" color="crimson" />
    <Description textStyle="italic" />
  </>
);
