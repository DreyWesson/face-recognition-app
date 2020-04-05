import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3" style={{ fontFamily: "Roboto" }}>
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f3" style={{ fontFamily: "Roboto" }}>
        {entries}
      </div>
    </div>
  );
};

export default Rank;
