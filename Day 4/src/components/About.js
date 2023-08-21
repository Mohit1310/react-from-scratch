import { Component } from "react";
// import ProfileClass from "../components/ProfileClass.js";
import { Link, Outlet } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent - Construtor");
  }

  componentDidMount() {
    //* Best place to call API
    console.log("Parent - ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent - ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent - ComponentWillUnmount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About us page</h1>
        <p> Day 7</p>
        <Link to="profile"><button>My Profile</button></Link>
        <Outlet />
        {/* <ProfileClass name={"First Child"} /> */}
      </div>
    );
  }
}

export default About;
