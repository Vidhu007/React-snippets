import {useState} from 'react';
const Form = () => {
    const [name,setName] = useState("");
   const handleSubmit = (e)=>{
       e.preventDefault();
       alert('name is '+ name)
   }
    const nameChange = (e)=>{
       setName(e.target.value)
   }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:  
                <input type="text"  value={name} onChange={nameChange} />
            </label>
            <input type="submit" />
        </form>
    );
}
export default function App() {
  return <Form  />
}
