import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import app from "./firebase";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";

// Todo - remove a champ / clear whole party
// 2 Buttons. Add to red / blue side
// Save draft teamcomp for later viewing. Get to name them e.g. Anti engage, protect the carry etc
// Add the icons added in public folder

export interface IState{
  champion: {
    name: string
    url: string
    dmgType: string
    note?: string
  }[]
}

function App() {
  const db = getDatabase(app);
  const [champion, setChampion] = useState<IState["champion"]>([
    /* {
      name: "Sejuani",
      url: "data:image/jpeg;base64,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",
      dmgType: "AP",
      note: "Engage, CC, Tank",
    } */
  ]);
  
  function getChampList(){
    const champRef = ref(db, "champions/");
    onValue(champRef, (snapshot) => {
	    const data = snapshot.val();
      const champArray: IState["champion"] = [];
      for(let id in data){
        champArray.push({id, ...data[id]})
      }
      setChampion(champArray);
    });
  }
/* function testDeleteChamp(champName: string){
  const champRef = ref(db, "champions/"  + champName);
    remove(champRef);
  } */

  // At first render - load all champs from db
  useEffect(() => {
    getChampList();
  },[db]);

  return (
    <div className="App">
      <h1>Draft Party</h1>
      <List champion={champion}/>
      <AddToList champion={champion} setChampion={setChampion}/>
    </div>
  );
}

export default App;


