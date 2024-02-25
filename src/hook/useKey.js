import {  useEffect } from "react";

export function useKey(key,callbackfunc){
    useEffect(()=>{
        function callback(e){
          if(e.code.toLowerCase() === key.toLowerCase()){
            callbackfunc();
          }
        }
    
        document.addEventListener("keydown", callback);
        return()=>{
          document.removeEventListener("keydown", callback);
        }
    
      },[key,callbackfunc])
}

// useKey("Enter",()=>{
//   if(document.activeElement === inputEl.current) return;
//   inputEl.current.focus();
//   setQuery("")
// })



// useKey('Escape',handleSelectedID)
// function handleSelectedID(){
//   setSelectedID(null)
// }
