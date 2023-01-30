import { Head } from "$fresh/runtime.ts";

// AND GET ID FOR YOU DELETE FROM FIREBASE

import {getbyid} from '../../firebaseconfig/firebase.ts'

// CREATE ISLAND FOR ACTION DELETE ID THIS
import DeleteForm from '../../islands/DeleteForm.tsx'
import {Handlers,PageProps} from '$fresh/server.ts'


// GET DATA 
export const handler: Handlers = {
  async GET(_, ctx) {
    const { deleteid } = ctx.params;
    let res  = await getbyid(deleteid)
    return ctx.render({"res":res,"deleteid":deleteid})
  },
};

export default function DeletePage({data}:PageProps){
	return(
		<>	
		dqdqw
		<DeleteForm alldata = {data}/>
		</>

		)
}
