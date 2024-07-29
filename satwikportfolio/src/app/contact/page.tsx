"use client"
import React,{useState} from 'react'
import { Input } from 'src/@/components/ui/input'
import { Label } from 'src/@/components/ui/label'
import { Textarea } from 'src/@/components/ui/textarea'
import {Button} from 'src/@/components/ui/button'
const Contact: React.FC = () => {

  const [email, setemail] = useState<string>("");
  const [message,setmessage] = useState<string>("");

  const handleSubmit = () => {
    setemail("");
    setmessage("");


  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 align-middle p-5 ">
      
      <h1 className="text-4xl font-bold text-center text-emerald-200 p-10">Contact me</h1>
      
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className='text-white'>Email</Label>
      <Input type="email" id="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
    </div>
      
      <div className="grid w-full gap-1.5">
      <Label htmlFor="message" className='text-white'>Your message</Label>
      <Textarea placeholder="Type your message here." id="message" onChange={(e)=>setmessage(e.target.value)} />
    </div>
    <div className=' flex flex-col items-center align-middle pt-10'>
    <Button className='bg-slate-200 hover:bg-emerald-200 ' onClick={handleSubmit}>Submit</Button>
    </div>


    </div>
  )
}

export default Contact