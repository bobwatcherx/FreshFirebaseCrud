import { Head } from "$fresh/runtime.ts";

import {useState} from 'preact/hooks'

import * as fs from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

import {q,db} from '../firebaseconfig/firebase.ts'

export default function DeleteForm(props){
	console.log(props.alldata)

	async function deletebtn(){
		try{
			await fs.deleteDoc(fs.doc(db,"users",props.alldata.deleteid))
			console.log("sucess delete")
			alert("success delete")
			window.location.href = "/"

		}catch(err){
			console.log(err)
			alert("errror")
		}
	}

	return (
		<>
		<h4>Delete from {props.alldata.deleteId}</h4>
		<br/>
		name : {props.alldata.res.name}
		<br/>
		age : {props.alldata.res.age}
		<br/>
		<button onClick={deletebtn}>Delete data</button>
		</>

		)
}