import {useState,useEffect,useRef} from 'react';

export default function App() {
    const ref = useRef();
 const handleClick  = ()=>{
     ref.current.focus();
 }
  return (<div>
  <input ref={ref} type="text"></input>
      <button onClick={handleClick}>Focus Input</button>
  </div>);
}
