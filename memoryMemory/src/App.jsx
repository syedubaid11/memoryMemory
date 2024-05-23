import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import axios from "axios";
import Data from "../components/data";

export default function App(){

  
  return(
    <>
    <Data/>
    <Navbar/>
    <Cards/>

    </>
  )
}