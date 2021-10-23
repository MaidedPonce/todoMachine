import React from "react";

function Header({ children, loading }) {
  /*   return (<header>{React.cloneElement(children, { loading })} </header>);
   */
  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}{" "}
    </header>
  );
}

export default Header;
