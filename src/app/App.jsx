
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./share/styles/GlobalStyles";

import axios from "axios";

import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export const App = () => {
  const [ data, setData ] = useState([])

  useEffect(()=>{
    const loadData = async () => {
      await axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json').then((response)=>{
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
      <Footer/>
    </div>
  );
}
