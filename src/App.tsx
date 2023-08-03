import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
function App() {
    const students = [
        {id:1, name:'James', age:8},
        {id:2, name:'Robert', age:12},
        {id:3, name:'Mikhael', age:13},
        {id:4, name:'William', age:16},
        {id:5, name:'Charles', age:7},
    ]

  return (
    <div className="App">
        <NewComponent/>  {/*AAA={students}*/}
    </div>
  );
}

export default App;
