import { useState } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";

export default function App(){
  return(
    <>
    <Navbar/>
    <Cards cardname="morty"/>
    </>
  )
}