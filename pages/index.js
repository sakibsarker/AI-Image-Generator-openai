
import { Inter } from '@next/font/google'
import Inputbox from '@/components/Inputbox'
import { Configuration,OpenAIApi } from 'openai'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const configuration=new Configuration({
  apiKey:process.env.OPEN_AI_KEY,
});

const openai=new OpenAIApi(configuration);


const index = () => {
  const[usePrompt,setUsePrompt]=useState("");
  const [number,setNumber]=useState(1);
  const[size,setSize]=useState("256x256");
  const[imageUrl,setImageUrl]=useState("");


const generateImage=async()=>{
  const imageParameters={
    prompt:usePrompt,
    n:parseInt(number),
    size:size,
  }
  const res=await openai.createImage(imageParameters);
  const urlDate=res.data.data[0].url;
  setImageUrl(urlDate)
}

  return (
  
     
     <div className="text-center"> 
      {imageUrl && <img src={imageUrl} alt='ai image'/>}
      <Inputbox label={"Description"} setAttribute={setUsePrompt}/>
      <Inputbox label={"Amount"} setAttribute={setNumber}/>
      <Inputbox label={"Size"} setAttribute={setSize}/>
    
      <button onClick={generateImage} className="bg-slate-500 p-2">Generate</button>
    
     </div>
        


  )
}

export default index