import { IoIosNotificationsOutline} from "react-icons/Io";
import {IoHome} from "react-icons/io5";
import Image from "next/image";
import Settings from '../public/Settings.png'
import Accounts from '../public/Accounts.png'
const Navbar = () => {
    return ( 
        <>
        <div  style={{boxShadow:" 0px 4px 2px 0px rgba(0, 0, 0, 0.01)"}} className="flex h-[80px] px-20 justify-between items-center lgg:px-12 mdd:px-8 smm:hidden xss:hidden ">
         <h1 className="text-3xl font-bold text-[#0038D9] lgg:text-[28px] mdd:text-2xl " > Spendwise</h1>
       
       <div className="flex gap-8 items-center text-lg  font-semibold  text-[#A5A5A5] lgg:text-base lgg:gap-6 mdd:gap-5 mdd:text-sm ">
       <li className="flex gap-2 items-center text-[#0038D9] cursor-pointer font-bold ">
       <IoHome  className="text-2xl mdd:w-[20px] mdd:h-[22px] " ></IoHome>
       Dashboard
       </li>
       <li className="flex gap-2 items-center cursor-pointer ">
       <Image alt="Accounts" src={Accounts} className="mdd:w-[22px] " ></Image>
       Accounts
       </li>
       <li className="flex gap-2 items-center cursor-pointer ">
     <Image alt="Settings" src={Settings}  className="mdd:w-[22px] "></Image>
       Settings
       </li>
       </div>

        <div className="flex gap-3 items-center">
            <div className="rounded-full h-[40px] w-[40px] border border-solid border-[#DDDDDD] grid justify-center items-center text-[#8C8C8C] cursor-pointer  ">
            <IoIosNotificationsOutline className="text-2xl" ></IoIosNotificationsOutline>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
                 className="rounded-full h-[40px] w-[40px] cursor-pointer " alt="" />
            </div>
        </div>
        </div>

        <div  style={{boxShadow:" 0px 4px 2px 0px rgba(0, 0, 0, 0.01)"}} className="flex flex-col py-4 justify-center items-center gap-4 sm:hidden ">
          
         <h1 className="font-bold text-[#0038D9] text-2xl " > Spendwise</h1>
       
       <div className="flex gap-12 items-center text-lg  font-semibold  text-[#A5A5A5] xss:text-sm xss:gap-6 ">
       <li className="flex gap-2 items-center cursor-pointer text-[#0038D9]  font-bold ">
       <IoHome  className="text-2xl xss:w-[20px] xss:h-[20px] " ></IoHome>
       Dashboard
       </li>
       <li className="flex gap-2 items-center cursor-pointer ">
       <Image alt="Accounts" src={Accounts} className="xss:w-[20px] " ></Image>
       Accounts
       </li>
       <li className="flex gap-2 items-center cursor-pointer ">
     <Image alt="Settings" src={Settings}  className="xss:w-[20px] "></Image>
       Settings
       </li>
       </div>
        </div>
        </>
     );
}
 
export default Navbar;