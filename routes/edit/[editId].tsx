import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {getbyid} from '../../firebaseconfig/firebase.ts'

import Editform from '../../islands/Editform.tsx'

export const handler: Handlers = {
  async GET(_, ctx) {
    const { editId } = ctx.params;
    let res  = await getbyid(editId)
    return ctx.render({"res":res,"editId":editId})
  },
};


export default function EditPage({data}:PageProps) {
 
    return (
      <>
      <Editform alldata={data}/>
      </>)
 
}
