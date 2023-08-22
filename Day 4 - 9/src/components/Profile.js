import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  });

  console.log("render");

  return (
    <div>
      <h1>My Profile</h1>
      <h2>Name: {props.name}</h2>
      <h3>Count - {count}</h3>
      <button onClick={() => setCount(count + 1)}>setCount function</button>
    </div>
  );
};

export default Profile;
