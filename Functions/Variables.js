import { useState } from "react";
import { place } from "./PlacesList";
let src = "";
let dest = "";
let n = place.length;

const placemap = [];



const setSrc = (newSrc) => {
  src = newSrc;
  placemappush(src);
};

const setDest = (newDest) => {
  dest = newDest;
  placemappush(dest);
};

const placemappush =(src) =>
{
  placemap.length=0;
  for(let i = 0; i< n; i++)
  {
    if(place[i].nearto === src)
    {
      placemap.push(i);
    }
  }
};

export { src, dest, setSrc, setDest, placemap };