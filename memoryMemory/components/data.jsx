import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./cards";

export default function Data(){


const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")


//api call to fetch data from poke api 
async function getPoke(){
    const res=await axios.get(url)
    const array=[res.data.results]
    displayPoke(array)
    
  }



async function displayPoke(array) {
  console.log(array)
  const map = array.map((item) => {
    
    return <Cards cardname={item.name} />;
  }
  );
  return map
}

//will get called whenever url changes
  useEffect(()=>{
  getPoke();
},[])

}