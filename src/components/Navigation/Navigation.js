import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"
        >
          Sign In
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim white underline pa3 pointer ba bw2 b--white-20 br-pill grow"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
