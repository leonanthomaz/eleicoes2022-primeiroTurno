
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./share/styles/GlobalStyles";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import axios from "axios";

export const App = () => {

  const [ data, setData ] = useState([])

  // console.log(data.map(i => i.ht))

  useEffect(()=>{
    const loadData = async () => {
      await axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json').then((response)=>{
        console.log('lista:',response.data)
        setData([response.data])
      })
    }
    loadData()
  },[])

  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Card data={data}/>
    </div>
  );
}
