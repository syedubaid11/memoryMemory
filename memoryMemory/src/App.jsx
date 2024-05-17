import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import axios from "axios";

export default function App(){

  const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")

  const getPoke=async()=>{
    const res=await axios.get(url)
    const array=[res.data.results]
    console.log(array)
    getPokemon(array)
  }
const getPokemon=async(array)=>{
  const map=array.map(async(item)=>{
    return(
      console.log(array),
      <Cards cardname={array}/>
    )


  })


}
  useEffect(()=>{
  getPoke();
},[url])





  return(
    <>
    <Navbar/>
    {map}
    </>
  )
}