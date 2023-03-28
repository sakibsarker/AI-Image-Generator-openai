import Inputbox from '@/components/Inputbox'
import { useState } from 'react';
import axios from 'axios';


const apiKey=process.env.OPEN_AI_KEY_Image;
const ApiURL=process.env.OPEN_AI_URL_Image;



const index = () => {
  const[usePrompt,setUsePrompt]=useState(" ");
  const [number,setNumber]=useState(1);
  const[size,setSize]=useState("256x256");
  const[imageUrl,setImageUrl]=useState("");


const generateImage= async ()=>{
  const imageParameters={
    prompt:usePrompt,
    n: parseInt(number),
    size:size,
  }
  const headers={
  "Content-Type": "application/json" ,
  "Authorization": `Bearer ${apiKey}`,
  }
  try{
    const res=await axios.post(ApiURL,imageParameters,{headers});
    const dataurl=res.data.data[0].url;
    setImageUrl(dataurl)

  }catch(error){
    console.log(error)
  }

}

  return (
  
      
     <div className="flex flex-col mt-10"> 
     <div className="flex justify-center items-center mt-10">
     {imageUrl && <img className="m-auto" src={imageUrl} alt='ai image'/>}
     </div>
     <div className="flex flex-col items-center">
  <div className="mr-20">
    <Inputbox label={"Image Description"} setAttribute={setUsePrompt}/>
  </div>
  <div className="mr-5">
    <Inputbox label={"Quentity"} setAttribute={setNumber}/>
  </div>
  <div className="ml-2">
    <Inputbox label={"Size"} setAttribute={setSize}/>
  </div>
  <button onClick={()=>generateImage()} 
      className="bg-bl-color p-2 text-white mt-5 rounded-lg w-32 active:bg-blue-600">Generate</button>
</div>

    
      
    
     
    
     </div>
        


  )
}

export default index