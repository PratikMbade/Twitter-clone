import { useCurrentUser } from "@/hooks/user";
import {useCallback, useState} from 'react'
import Image from "next/image";
import {RxImage} from 'react-icons/rx'
import {AiOutlineFileGif} from 'react-icons/ai'
import {GiHistogram} from 'react-icons/gi'
import {BsEmojiSmile} from 'react-icons/bs'
import {SlLocationPin} from 'react-icons/sl'
import { useCreateTweet } from "@/hooks/tweet";

export const InputField: React.FC = () => {
  const { user } = useCurrentUser();

  const [content,setContent] = useState('')

  const {mutate} = useCreateTweet()
  
  const handleChange = useCallback( () => {
    const input = document.createElement('input');
    input.setAttribute('type','file')
    input.setAttribute('accept','image/*')
    input.click()
  },[]
  )

  const handleCreateTweet = useCallback(() => {
    mutate({
      content
    })

  },[content,mutate])

  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 ">
          {user?.profileImageURL && (
            <Image
              src={user?.profileImageURL}
              alt="user-image"
              width={45}
              height={40}
              className="rounded-full "
            />
          )}
        </div>
        <div className="col-span-11 ml-2">
          <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
           className="border-b border-slate-500 w-full bg-transparent pt-5" rows={3}
           placeholder="Whats Happening?"
           ></textarea>

           <div className="flex justify-between items-center">
            <div className=" flex gap-4">
            <RxImage
            onClick={handleChange}
             className="text-[#1d9bf0] text-lg cursor-pointer"/>
            <AiOutlineFileGif  className="text-[#1d9bf0] text-lg"/>
            <GiHistogram className="text-[#1d9bf0] text-lg"/>
            <BsEmojiSmile className="text-[#1d9bf0] text-lg"/>
            <SlLocationPin className="text-[#1d9bf0] text-lg"/>
            </div>
           
            <div className="pb-3">
            <button
            onClick={handleCreateTweet}
            className="bg-[#1d9bf0] mt-4  rounded-full text-md font-semibold px-4 py-1 hover:bg-[#2488ca] transition-all ">
              Post
            </button>
            </div>

           </div>
        </div>
      </div>
    </>
  );
};
