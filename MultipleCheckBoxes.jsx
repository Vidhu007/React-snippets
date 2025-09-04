
import {useState} from 'react';
const Skills = ()=>{
    const [skills,setSkills] = useState([""]);
    const handleSkills = (e)=>{
        // if checkbos is checked
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        }
        else {
            // select rest of the skills
            let filteredSkills = skills.filter((item)=>item!=e.target.value)
            setSkills(filteredSkills);
        }
        //console.log(e.target.checked);
    }
    return (
        <div>
            Select your skills
            <br></br>
            
            <label>
            <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
                PHP
            </label>

            <br></br>

            <label>
            <input onChange={handleSkills} type="checkbox"  id="cpp" value="cpp"/>
                C++
            </label>

            <br></br>

            <label>
            <input onChange={handleSkills} type="checkbox"  id="js" value="js"/>
                Javascript
            </label>
<br></br><br></br>
            <div>
            You selected : {skills}
            </div>
            
        </div>
    );
}
export default function App() {
  return <Skills />
}
