import React from "react";
import Dish from "./Dish";


export default function DisplayMenu( {menu} ) {
 

  return (
   <div className="cool-grid">
    {menu.map((item) => (
    <Dish key={item.id} item={item} />
   ))}
   </div>
    );
}


