import { Component } from "react";
// import ProfileClass from "../components/ProfileClass.js";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <Link to="profile">
          <button>My Profile</button>
        </Link>
        <Outlet />
        {/* <ProfileClass name={"First Child"} /> */}
      </div>
    );
  }
}

export default About;
