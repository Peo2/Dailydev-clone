import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faPlus,faAtom} from '@fortawesome/free-solid-svg-icons';
import { PiChatCenteredTextLight } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
export const Sideicon = () =>{
    return(
          <div>
          
        <div className=' flex flex-col h-full w-12 border-r-2 border-kcolor pl-0.5  bg-mainbg fixed mt-2'>
                 
                 <FontAwesomeIcon icon={faAngleRight} className='border-2 border-white text-firsticoninside bg-white w-6 h-6 rounded-lg ml-7 mt-4 cursor-pointer ' />    
                    <div className='px-2 w-11 h-5 mt-1 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                 <p className='text-firsttxcolor text-sm font-bold text-center border-brown w-7 h-5 rounded-lg bg-brown hover:bg-gencolor hover:text-firsttxcolor'>a</p>
                 </div>
                 <div className='px-2 w-11 h-5 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                 <FontAwesomeIcon icon={faPlus} className='text-gencolor border-2 border-kcolor w-6 h-5 rounded-lg mt-1 hover:bg-gencolor hover:text-firsttxcolor '/>
                 </div>
                
                 <div className='mt-10'>
                <div className='px-2 w-11 h-5 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                <FontAwesomeIcon icon={faAtom} className='text-gencolor w-7 h-5 hover:bg-gencolor hover:text-firsttxcolor' />
                </div>
                <div className='px-2 w-11 h-5 mt-1 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
               <a> <FontAwesomeIcon icon={faPlus} className='text-gencolor border-2 border-kcolor w-6 h-5 rounded-lg mt-1 hover:bg-gencolor hover:text-firsttxcolor'/></a>
                </div>
                </div>

                <div className='mt-10'>
                <div className='px-2 w-11 h-5 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                <FontAwesomeIcon icon={faAtom} className='text-gencolor w-7 h-5 hover:bg-gencolor hover:text-firsttxcolor' />
                </div>
                <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
               <a><PiChatCenteredTextLight className='text-gencolor bg-mainbg  w-6 h-5 rounded-lg mt-1  hover:bg-gencolor hover:text-firsttxcolor'/> </a>
                </div>
                <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                <FaHashtag  className='text-gencolor w-6 h-4 bg-mainbg  hover:bg-gencolor hover:text-firsttxcolor' />
                </div>
                <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
               <a><CiGlobe className='text-gencolor w-6 h-5 rounded-lg mt-1 hover:bg-gencolor hover:text-firsttxcolor '/> </a>
                </div>
                 <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
               <a>  <IoMdContacts className='text-gencolor w-6 h-5 rounded-lg mt-1 hover:bg-gencolor hover:text-firsttxcolor '/></a>
                </div>
                </div>


                <div className='mt-10'>
                <div className='px-2 w-11 h-5 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                <BsLink45Deg className='text-gencolor w-7 h-5 hover:bg-gencolor hover:text-firsttxcolor'/>
                </div>
                <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
               <a> <BsBookmark className='text-gencolor bg-mainbg  w-6 h-4 rounded-lg mt-1  hover:bg-gencolor hover:text-firsttxcolor'/> </a>
                </div>
                <div className='px-2 w-11 h-5 mt-2 hover:text-firsttxcolor cursor-pointer hover:bg-gencolor'>
                <FaHashtag  className='text-gencolor w-6 h-4 bg-mainbg   hover:bg-gencolor hover:text-firsttxcolor' />
                </div>
                </div>



                <div className='mt-10 cursor-pointer hover:bg-gencolor hover:text-firsttxcolor'>
                <div className='px-2 w-11 h-5'>
                <BsFileEarmarkText className='text-gencolor w-7 h-5  bg-mainbg hover:bg-gencolor hover:text-firsttxcolor '/>
                </div>
                </div>
        </div>
        </div>
    )
}