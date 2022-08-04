import React, { useState, useEffect } from "react";
import { Navbar } from "./nav/Navbar";
import { ApplicationViews } from "./ApplicationViews";
import "./stuffs/Stuff.css";

export const Main = () => {



  return (
    <>
    <Navbar />
    <ApplicationViews />
    </>
  );
};
