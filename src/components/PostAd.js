import React from 'react'
import Post from '../pages/Post'
import { Popover } from '@headlessui/react'
import {XIcon,PencilIcon } from '@heroicons/react/solid'



const PostAd = () => {
  return (
    <div>
        <Popover className=" w-fit  ">
          <Popover.Button  className={` relative focus:outline-none pt-1.5`}>
            <PencilIcon className= {` peer ... bg-white/40  rounded p-0.5 w-6`}/>
            <span className="hidden absolute peer-hover:block whitespace-nowrap bg-black/50 text-white px-1 rounded left-full bottom-1 text-xs font-bold">Post Ad</span>

          </Popover.Button>
          <Popover.Panel className=" overflow-hidden p-5 top-1 rounded left-1
             absolute px-2  z-10  text-black bg-black/50 ">
              <Popover.Button className="absolute right-5 ">
                <XIcon className=' w-6 p-1 bg-white/50 text-black rounded-full hover:bg-black/25'/>
              </Popover.Button>
              <Post />
          </Popover.Panel>
        </Popover>
    </div>
  )
}

export default PostAd