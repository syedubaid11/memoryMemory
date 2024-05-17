import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import axios from "axios";

export default function App(){

  const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")


//api call to fetch data from poke api 
async function getPoke(){
    const res=await axios.get(url)
    const array=[res.data.results]
    displayPoke(array,res)
    
  }

async function displayPoke(array,res){
  console.log(res.data.results[0])
  const map=array.map((item)=>{
    return(
      <Cards cardname={res.data.results.name}/>
    )
  })

}
//will get called whenever url changes
  useEffect(()=>{
  getPoke();
},[url])





  return(
    <>
    <Navbar/>

    </>
  )
}