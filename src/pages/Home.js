import { addDoc, collection, where,query, getDocs } from 'firebase/firestore';
import React, { useRef, useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { db, auth } from '../firebase_config';

function Home() {
  const textRef = useRef(null);

  const [entry, setEntry] = useState({});
  
  const [userData, setUserData] = useState("");

  const entryCollectionRef = collection(db, "user_entries");

  /*Gets user's today entry and render it in UI */
  const getTodayEntry = () =>{
    console.log("current user ",auth.currentUser.displayName);
    console.log("today is ", new Date().toLocaleDateString());
    let q = query(collection(db, "user_entries"), where("entry_date", "==", new Date().toLocaleDateString()),where("author.name","==",auth.currentUser.displayName));
    const querySnapshot =  getDocs(q);
    console.log("qs - ",querySnapshot);
    querySnapshot.forEach((doc) => {
      let newEntry = { ...entry };
      newEntry =doc.data();
      setEntry(newEntry);
      setUserData(entry['entry']);
      console.log(entry.id, " => ",entry['entry']);
   });
  }
 
  /*Saves the latest entry from text area into the firestore */
  const createEntry =  () => {
    console.log("in create function ", entry);
     addDoc( entryCollectionRef, 
        { entry, 
          author: { 
            name : auth.currentUser.displayName, id: auth.currentUser.uid 
          },
          entry_date : new Date().toLocaleDateString()
        } 
      );
      getTodayEntry();
  }

  /*Gets entry from the textarea and set it in state */
  const getData = () => {
    let newData = { ...userData };
    newData = textRef.current.value;
    setUserData(newData);
    createEntry();
  }

  

  return (
     <div className="App">
      <div className="firstrow">
        <div className="date">{new Date().toDateString()}</div>
        <p className="title">chamelon's journal</p>
          <button className="save-btn" onClick={getData}
          >save</button>
      </div>
        <textarea className="journal" ref={textRef}>{userData}</textarea> 
        <nav>
          <Link to="/prev">Previous</Link>
          <Link to="/next">Next</Link>
        </nav>
        {/* <button className="add-btn">add new page</button> */}
    </div>
  
  )
}

export default Home;