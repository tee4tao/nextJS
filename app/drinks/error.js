"use client"; // this has to be on the client server
import React from "react";

const error = (error) => {
  return <div>{error.error.message}</div>;
};

export default error;
// 1. this name of the file is special
// 2. this is for the errror page, in case we encountered an error while fetching our data
