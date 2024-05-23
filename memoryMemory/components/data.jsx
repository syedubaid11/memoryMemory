import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./cards";

export default function Data(){


const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
const[data,setData]=useState("")


//api call to fetch data from poke api 
async function getPoke(){
    const res=await axios.get(url)
    const array=[res.data.results]
    setData(array)
  }

  


function displayPoke(data) {
  console.log(data)
  const map = data.map((item) => {
    
    return <Cards cardname={item.name} />;
  }
  );
}

  useEffect(()=>{
  getPoke();
},[])
  

}