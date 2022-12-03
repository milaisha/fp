import React from 'react'

function ItemList({ name, hasRead }) {
    if (hasRead) {
        return <li className="item">{name} ✔</li>;
      }
      return <li className="item">{name}</li>;
  }
  <>
  <section>
  <h1>Ash reading List</h1>
  <ul>
    <item 
      hasRead={true} 
      name="Atomic Habits" 
    />
     <item 
      hasRead={true} 
      name="The Power of Positive Thinking" 
    />
    <item 
      hasRead={false} 
      name="Rich Dad Poor Dad" 
    />
  </ul>
</section>
</>
    
    
  


export default itemList