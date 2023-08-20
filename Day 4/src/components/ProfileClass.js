import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohit1310");
    const json = await data.json();
    this.setState({
        userInfo: json
    })
    console.log("Child - componentDidMount");
    this.timer = setInterval(() => {
      console.log("Class Timer Running");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Child - render");
    return (
      <div>
        <h1>My Profile Class Component</h1>
        <h2>Name - {this.state.userInfo.name}</h2>
        <h2>Location - {this.state.userInfo.location}</h2>
        <h3>Count - {this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          SetCount class
        </button>
      </div>
    );
  }
}

export default ProfileClass;
