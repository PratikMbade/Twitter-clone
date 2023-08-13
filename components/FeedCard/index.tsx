import Image from "next/image"
import React from "react"
import { BiMessageRounded,BiUpload } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa"
import {AiOutlineHeart  } from "react-icons/ai"
import {GiHistogram  } from "react-icons/gi"
import { FiUpload } from "react-icons/fi"




export const FeedCard: React.FC = () => {
    return (
        <>
            <div className="border border-r-0 border-l-0 border-t-0 border-gray-600  cursor-pointer pt-2.5">
                <div className="grid grid-cols-12 pl-3">
                    <div className="col-span-1 ">
                        <Image src="https://avatars.githubusercontent.com/u/44976328?v=4"
                            alt="userimg"
                            width={50}
                            height={300}
                            />
                    </div>
                    <div className="col-span-11 pl-3 -translate-y-1">
                        <p className="font-bold text-sm">Piyush Grag</p>
                        <p className="font-light text-sm">Virat kohli is the best batsman i have ever seen on. love to watch him. my wishes with virat to win world cup for india and also become player of the tournament</p>
                    </div>
                </div>
                <div className="flex justify-evenly my-3 text-gray-500 text-xl pl-2.5">
                    <div className="flex gap-3 hover:text-blue-500">
                        <div className="text-xl hover:bg-slate-800 rounded-full w-fit py-1 px-1">
                        <BiMessageRounded/>
                        </div>
                        <span className="mt-1.5 !text-xs">20k</span>
                    </div>

                    <div className="flex gap-3 hover:text-green-500">
                        <div className="text-xl hover:bg-slate-800 rounded-full w-fit py-1 px-1">
                        <FaRetweet/>
                        </div>
                        <span className="mt-1.5 !text-xs">20k</span>
                    </div>
                    <div className="flex gap-3 hover:text-pink-500 ">
                        <div className="text-xl hover:bg-slate-800  rounded-full w-fit py-1 px-1">
                        <AiOutlineHeart/>
                        </div>
                        <span className="mt-1.5 !text-xs">20k</span>
                    </div>
                    <div className="flex gap-3 hover:text-blue-500">
                        <div className="text-xl hover:bg-slate-800 rounded-full w-fit py-1 px-1">
                        <GiHistogram/>
                        </div>
                        <span className="mt-1.5 !text-xs">20k</span>
                    </div>
                    <div className="flex gap-3 hover:text-blue-500 text-xl hover:bg-slate-800 rounded-full w-fit py-1 px-1">  
                        <FiUpload/>
                    </div>

                   
                </div>
            </div>
        </>
    )
}