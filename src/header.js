// Header.js
import React from "react";

const headerStyle = {
  backgroundColor: "#17a2b8", // Blue color for the background
  color: "#fff", // White text color
  padding: "17px", // Padding for spacing
  textAlign: "center" // Center align text
};

const Header = () => {
  return (
    <div style={headerStyle}>
      {/* Your header content here */}
      <h1>Gradebook Project</h1>
    </div>
  );
};

export default Header;
