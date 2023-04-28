import { useEffect, useState } from "react";
import bg from "../public/Bg.png"
import Arrow from "../public/rightarrow.png"
const Hero = () => {
    const date=new Date()
    const [today, settoday] = useState(date)
    const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear(); 
const hour = today.getHours();
const minute = today.getMinutes();
const DaySuffix=(day:number)=>{
switch (day%10) {
    case 1:
        return 'st'
    case 2: 
        return 'nd'
    case 3: 
       return 'rd'
    default:
      return 'th'
}
}
const monthSuffix=(month:number)=>{
    switch (month%10) {
        case 1:
            return 'Jan'
        case 2: 
            return 'Feb'
        case 3: 
           return 'Mar'
        case 4: 
          return  'Apr' 
          case 5: 
          return  'May' 
          case 6: 
          return  'Jun' 
          case 7: 
          return  'Jul' 
          case 8: 
          return  'Aug' 
          case 9: 
          return  'Sep' 
          case 10: 
          return  'Oct' 
          case 11: 
          return  'Nov' 
          case 12: 
          return  'Dec'   
    }
    }
const formattedDate = `${day}${DaySuffix(day)}  ${monthSuffix(month)} ${year} • ${hour}:${minute} `;

useEffect(() => {
  setInterval(() => {
    const date=new Date()
    settoday(date)
  },60000);
}, [])


    return ( 
        <div  className="p-20 py-10" >
   <h1 className="text-3xl text-[#01002E] font-bold " >  Welcome Dikamsi 👌🏼 </h1>
   <p  className="text-[#8C8C8C] " >{formattedDate}</p>
   <div className="flex items-center justify-between gap-4 my-8 ">
   <div style={{ backgroundImage: `url(${bg.src})`}} className="rounded-[15px] p-5 px-7 bg-cover h-[170px] w-[70%] text-[#FFFFFF] ">
    <p  className="" >Hi Dikamsi, here is your balance:</p>
    <h1 className="text-3xl font-bold ">100.000.000dz</h1>
    <div className="flex gap-5 items-center mt-4 font-semibold">
        <button className="bg-[#0038D9] flex gap-2 items-center rounded-[8px] py-3 px-8 ">  View Accounts <img src={Arrow.src} alt="" />  </button>
        <button className="bg-[#0038D9] flex gap-2 items-center rounded-[8px] py-3 px-8  "> Send Money <img src={Arrow.src} alt="" />  </button>
    </div>
   </div>
   <div className="rounded-[15px] p-5 px-7  bg-[#111827] h-[170px] w-[28%] text-[#FFFFFF] ">
 
   </div>
   </div>
        </div>
     );
}
 
export default Hero;