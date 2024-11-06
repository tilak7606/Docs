import React, { useRef } from 'react'
import Card from './Card'
import js from '@eslint/js'

const Foreground = () => {

  const ref = useRef(null);
  // const data = [{
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  //   fileSize: ".9mb",
  //   close: true,
  //   tag: {
  //     isOpen: true,
  //     tagTitle: "Download Now",
  //     tagColor: "green"
  //   },
  // }]



  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      },
    },
    {
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      fileSize: "2.5mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Get Started",
        tagColor: "blue"
      },
    },
    {
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      fileSize: "1.2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Access Now",
        tagColor: "red"
      },
    },
    {
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
      fileSize: "3.0mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "View Details",
        tagColor: "purple"
      },
    },
    {
      desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
      fileSize: "5.1mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download PDF",
        tagColor: "orange"
      },
    },
    {
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
      fileSize: "4.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Free Trial",
        tagColor: "yellow"
      },
    }
  ];
  
  
  return (
    <div ref={ref} className=' fixed  w-full h-full top-0 left-0 z-[3] overflow-auto flex gap-10 flex-wrap p-5  '>
      {data.map((item,index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground
