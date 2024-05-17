import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import axios from "axios";

export default function App(){

  const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")

  const getPoke=async()=>{
    const res=await axios.get(url)
    console.log(res.data.results.name)
  }

  useEffect(()=>{
  getPoke();
},[url])

  return(
    <>
    <Navbar/>
    <Cards cardname="morty"/>
    </>
  )
}