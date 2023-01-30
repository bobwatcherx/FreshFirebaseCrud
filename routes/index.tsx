import { Head } from "$fresh/runtime.ts";
import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

// IMPORT FROM YOU FIREBASE CONFIG
import {q} from '../firebaseconfig/firebase.ts'


// GET DATA BEFORE PAGE IS OPEN

export const handler: Handlers = {
  async GET(_, ctx) {
    const querysnapshot = await fs.getDocs(q)

    // GET ALL DATA FROM TABLE USERS
    let res = []
    querysnapshot.forEach((doc)=>{
      res.push({id:doc.id,data:doc.data()})
    })
      // THEN PUSH DATA HERE TO CLIENT REACTJS BELLOW
    return ctx.render(res)


  },
};

export default function Home({data}) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      {/*LINK TO ADD NEW DATA*/}
      <a href="/addnewdata/addnew">add new data</a>

      {/*NOW CREATE FOLDER NAME ADDNEWDATA FOR ADD DATA*/}



      {data.map((item,index)=>(
        <ul>
          <li key="index">
            name : {item.data.name} - age : {item.data.age}
          </li>

        <li>
        <a href={`/edit/${item.id}`}>edit</a>
        ||
        <a href={`/delete/${item.id}`}>Delete</a>


        </li>          

        </ul>

        ))}

    </>
  );
}
