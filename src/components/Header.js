
import { useState, useEffect} from 'react';

import {faBorderNone,faMagnifyingGlass,faBell,faO, faBolt} from '@fortawesome/react-fontawesome'
import { FiZap } from "react-icons/fi";
import { BsRecord } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { Sideicon } from './Sidebar';
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";


export const Header = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((des) => {
          const limitedPost = des.slice(0, 21);
         const usersWithImages = limitedPost.map((data, index) => ({
           ...data,
           image: `https://i.pravatar.cc/150?img=${index + 1}`, 
         })); setUsers(usersWithImages);
        })
     }, []);

     const filterSearch = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    return(
        <div className='bg-mainbg  w-full h-full '>
{/*....................................HEADER BAR.................................................*/}
        <div className='flex justify-around border-y-2 border-kcolor h-16 w-1360px fixed'>
       <div className='text-firsttxcolor w-434px h-4 pt-3 flex'>
     <Link to="/"><BsLink className='w-8 h-8 text-2xl font-bold cursor-pointer'/></Link> 
          <p className='pt-1'> <Link to="/">daily<small className='text-dimwhite'>.dev</small></Link></p>
         </div>
         {/*...................SEARCH BOX.....................*/}
         <div className='flex  border-2 border-kcolor w-434px h-12 rounded-lg justify-around mt-1 bg-searchcolor'>
         <FaSearch className='text-gencolor mt-3 w-9 h-5 '/> 
        <input placeholder='Search' value={searchTerm}   onChange={(e) => setSearchTerm(e.target.value)} className='my-0.5 w-72 h-10 justify-start  border-searchcolor outline-none text-firsttxcolor bg-searchcolor'/>
        <p className='text-gencolor border-2 border-kcolor w-10 h-6 rounded-lg text-center mt-2.5'>Ctrl</p>
        <p className='text-gencolor mt-2.5'>+</p>
        <p className='text-gencolor border-2 border-kcolor w-7 h-6 text-center rounded-lg mt-2.5 '>K</p>
        </div>
         {/*............NEW POST............................*/}
        <p className='text-firsticoninside w-28 h-10 border-inherit bg-firsttxcolor rounded-lg text-center text-base pt-1 mt-2 cursor-pointer hover:bg-gencolor'><Link to="/">New post</Link></p>
         {/*.............MD SYMBOL............*/}
         <Link to="/"><MdOutlineDashboardCustomize className='text-gencolor w-10 h-10 mt-2 cursor-pointer hover:bg-firsttxcolor' /></Link>
        {/*.............BELL SYMBOL............*/}
        <Link to="/"> <BsBell  className='text-gencolor w-10 h-10 mt-2 cursor-pointer hover:bg-firsttxcolor' /></Link>
        {/*.............SMALL BOX......*/}
        <div className='flex w-156.75px h-10 border-2 border-kcolor rounded-lg justify-around mt-2 bg-searchcolor mr-2'>
        <Link to="/"><BsRecord className='text-zerocolor h-7 mt-1  cursor-pointer hover:bg-gencolor'  /> </Link>
        <p className='text-zerocolor mt-1 hover:bg-gencolor'><Link to="/">0</Link></p>
       <Link to="/"><FiZap className='text-firsticoninside bg-firsticon border-firsticon rounded-full w-4 mt-2' /> </Link> 
        <p className='text-firsttxcolor mt-1'><Link to="/">10</Link></p>
        <p className='text-firsttxcolor text-sm font-bold border-4 border-brown w-8 h-8 text-center rounded-lg bg-brown mt-0.5'><Link to="/">a</Link></p>
        </div>
    </div>  
             
{/*.......................................SIDE BAR COMPONENT & BODY........................................*/}

           <div className='flex pt-14'>
           {/*..................SIDE BAR COMPONENT.....................*/} 
              <Sideicon/>
            <div className='px-36 mt-7'>
       {/*..................FEED SETTING BOX.....................*/}       
              <div className='flex w-156.75px h-10 border-2 border-kcolor rounded-lg justify-around pt-1 pl-3 pr-3 hover:bg-gencolor hover:text-firsttxcolor cursor-pointer'>
              
              <Link to="/"><PiSlidersHorizontalBold className='text-gencolor h-7 hover:bg-gencolor hover:text-firsttxcolor'/></Link> 
              <p className='text-gencolor hover:bg-gencolor hover:text-firsttxcolor'><b>Feed settings</b></p>
              </div>  
      {/*...........SPACE BETWEEN FEED SETTING & CARD...........*/}        
        <div className='w-full overflow-visible'></div>
        {/*...........CARD...........*/}  
            <div className='mt-6 grid grid-cols-3 gap-10 '>
            {filterSearch.map((datas) => {
            return (
              
              <div >
          
                <div className='w-318px h-96 border-2 border-kcolor rounded-lg  justify-items-center items-center'>
                  <div className='text-firsttxcolor font-bold text-xl pl-6 pr-6'><p><b>{datas.name}</b></p></div>
                 <div className=''><img src={datas.image} alt={datas.alto} width={250}/></div> 
                  <div className='text-gencolor'>
                   <b> <p>Id:{datas.id}</p></b>
                   </div>
                    <div className='text-gencolor'>{datas.email}</div>
                </div>
              </div>
              
            );
            
          })}
        </div>
        </div>
        </div>
            </div>
    )
}