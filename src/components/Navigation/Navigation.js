import React from "react";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end"
      }}
      // className="br-pill"
    >
      <p
        className="f3 link dim gray underline pa3 pointer ba bg-white b--white-20 br-pill"
        // style={{ color: "white" }}
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
