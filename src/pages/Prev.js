import React from 'react'
import {  useState } from 'react'
import { db } from '../firebase_config';
import { Link} from 'react-router-dom';
import {  collection, where,query, getDocs } from 'firebase/firestore';
function Prev() {

  const [entries, setEntries] = useState([]);

  const getPrevEntry = async() =>{
    const q = query(collection(db, "user_entries"), where("entry_date", "==", '2/26/2023'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let record = doc.data();
      
     // doc.data() is never undefined for query doc snapshots
     entries.push(
     record["entry"]
     );
     
     console.log(doc.id, " => ", doc.data());
   });
  }
 
  return (
    <div className="App">
      <div className="firstrow">
        <div className="date">12-jan-2023</div>
        <p className="title">chamelon's journal</p>
         
      </div>
         <textarea className="journal" >{entries}</textarea>  
        <nav>
          <Link to="/prev">Previous</Link>
          <Link to="/next">Next</Link>
        </nav>
        {/* <button className="add-btn">add new page</button> */}
    </div>
  )
}

export default Prev