
const Son = (props)=>{
    return (
        <div>
            Son => {props.children}
        </div>
    );
}
const Daughter = (props)=>{
    return (
        <div>
            Daughter => {props.children}
        </div>
    );
}
export default function App() {
 
  return (
      <div>
          <Son>
              Hello I am some JSX wrapped within Son
          </Son>
          <Daughter />
      </div>
      
  );
}
