import React, { useState } from 'react';
import {IState as Props } from "../App";
import app from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

// To pass on the input values to champion array
interface IProps{
    champion: Props["champion"]
    setChampion: React.Dispatch<React.SetStateAction<Props["champion"]>>
}

const AddToList: React.FC<IProps> = ({champion, setChampion}) => {
    const db = getDatabase(app);

    const [input, SetInput] = useState({
        name: "",
        image: "",
        dmgType: "",
        note: ""
    })

    function addToChampList(champName: string, imageUrl: string, dmgType: string, note: string){
        const championRef = ref(db, "champions/" + champName);
        set(championRef, {
          name: champName,
          url: imageUrl,
          dmgType: dmgType,
          note: note
        })
      };

    // SetInput to whatever the input element has in its name, image, dmgType, note (..input)
    // And change the e.target.name to whatever the target is (event). So whenever input element is changed it is overridden
    // The input names above are linke to the name of the input below, so they have to match
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        SetInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    // Return void
    // set the value from input fields to champions to be displayed
    const handleClick = (): void => {
        if(!input.name || !input.dmgType || !input.image){
            return
        }

        setChampion([
            ...champion, 
            {
                name: input.name,
                //If we had a number here we would have to parseInt(input.age)
                url: input.image,
                dmgType: input.dmgType,
                note: input.note
            }
        ]);

        addToChampList(input.name, input.image, input.dmgType, input.note);

        SetInput({  
            name: "",
            image: "",
            dmgType: "",
            note: ""
        })
    }

   

    return(
        <div className="AddToList"> 
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Damage Type"
                className="AddToList-input"
                value={input.dmgType}
                onChange={handleChange}
                name="dmgType"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.image}
                onChange={handleChange}
                name="image"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button 
                className="AddToList-btn"
                onClick={handleClick}
                >Add
            </button>
        </div>
    )
}
export default AddToList;