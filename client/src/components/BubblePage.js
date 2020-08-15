import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from './axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=>{
    axiosWithAuth().get('/api/colors')
      .then(res=>{console.log('bubblePae',res);
        setColorList(res.data)})
      .catch(err=>console.log(err))

      console.log(colorList);
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

