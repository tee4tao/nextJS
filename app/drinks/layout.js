// To create nested layout. This layout will only be displayed in the drinks segment

import React from "react";

const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl ">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;

//make sure to return the children
