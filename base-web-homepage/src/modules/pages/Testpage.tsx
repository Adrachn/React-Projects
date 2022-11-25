import React, { useState } from "react";
import Papa from "papaparse";
import GameCard from "../organisms/GameCard";

/*There are some requirenments for the structure of this data:
All columns must have a “label” in the first row and not contain any weird characters.
Google assumes an empty row is the end of the sheet and stops returning data.*/
//https://w3collective.com/react-google-sheets/

//https://docs.google.com/spreadsheets/d/e/2PACX-1vSBE-f-frJNHxPE_3iIyoLblajE3TCYdMGaZk5D7bPr8iLdKKo0VvaCe6cl38wIo9uoHm4XnD04cn39/pubhtml

type Test = {
  data: unknown;
}

const TestPage = () => {
    const [data, setData] = useState({});//useState<Array<string>>([]); //{}

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSBE-f-frJNHxPE_3iIyoLblajE3TCYdMGaZk5D7bPr8iLdKKo0VvaCe6cl38wIo9uoHm4XnD04cn39/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            setData(results.data);
        },
    });
    /* eslint-disable */ //todo fix array(from) with ts unknown type. length not known
    //@ts-ignore
    const movies = Array.from(data);
  
    return (
      <div>
      {movies.map((data) => (
         /* eslint-disable */
              //@ts-ignore
        <GameCard gameTitle={data.movie} description={data.year}/>
      ))}
    </div>
    )
       // <ul>
        //  {movies.map((data) => (
              /* eslint-disable */
              //@ts-ignore
          //  <li key={data.movie}>{data.movie} ({data.year}) - Rating {data.rating}
         //   </li>
         // ))}
       // </ul>
        
     // );
   }
export default TestPage;

