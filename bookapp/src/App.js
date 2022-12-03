import React, {useState} from "react";
import './App.css';
import item from './ItemList';

function App() {
  const [item, setItems]  = useState([
    { id: 1, title: 'first item', completed: true},
    { id: 2, title: 'second item', completed: true},
    { id: 3, title: 'third item', completed: false},
  ]);
  
           return ( 
            <section>
               <h1>item</h1> 
                <ul>ItemList</ul>
                
                </section> 
            );
          }
          
           
          

export default App;
