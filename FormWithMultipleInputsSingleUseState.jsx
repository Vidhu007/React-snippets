import {useState} from 'react';
const Form = () => {
    const [inputs, setInputs] = useState({firstName:"", secName:""});
   const handleSubmit = (e)=>{
       e.preventDefault();
       alert('name is ' + inputs.firstName + " " + inputs.secName)
   }
 
    const inputsChange = (e)=>{
       let name = e.target.name;
        let value = e.target.value;
        setInputs((prev)=>{
                return {
                    ...prev, [name]: value
                }
        })
   }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Enter your 1st name:  
                <input type="text"  name="firstName" value={inputs.firstName} onChange={inputsChange} />
            </label>
                </div>
            <div>
            <label>Enter your 2nd name:  
                <input type="text"  name="secName" value={inputs.secName} onChange={inputsChange} />
            </label>
                    </div>
            <div>
            <input type="submit" />
                </div>
        </form>
    );
}
export default function App() {
  return <Form  />
}
