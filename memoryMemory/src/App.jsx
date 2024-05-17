import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";

export default function App(){
  useEffect(()=>{

  
  const fetchImages=async ()=>{
    try{
    const response= await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    if(!response){
      throw new Error("Cannot fetch data")
    }

    const data=await response.json();
    console.log(data);
    }
    catch (error) {
      setError(error.message);
    }
  }
  
},[])
  return(
    <>
    <Navbar/>
    <Cards cardname="morty"/>
    </>
  )
}