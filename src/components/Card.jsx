import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='mt-5 leading-tight font-semibold text-sm'>{data.desc} </p> 
        <div className='footer absolute bottom-0 left-0 w-full  '>
          <div className='flex items-center justify-between mb-3 py-3 px-8'>
            <h5>{data.fileSize} </h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
            
              {data.close ? <IoClose/> : <MdOutlineFileDownload size=".7em" color='#fff' />  }
            </span>

          </div>

         {data.tag.isOpen &&  <div className= {`tag bg-green-600 py-4 w-full flex items-center justify-center  `} >
            <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>

          </div>}

        </div>
          
    </motion.div>

  )
}

export default Card
