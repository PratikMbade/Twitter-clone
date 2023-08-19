import { BsTwitter } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { PiBellBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { RiBook2Line } from "react-icons/ri";

import { FeedCard } from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast/headless";
import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery, verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/user";
import { ProfileCard } from "@/components/ProfileCard";
import { InputField } from "@/components/InputField";

interface TwitterSidebarButton {
  id: number;
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    id: 1,
    title: "Home",
    icon: <RiHome7Fill />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <FiSearch />,
  },
  {
    id: 3,
    title: "Notifications",
    icon: <PiBellBold />,
  },
  {
    id: 4,
    title: "Messages",
    icon: <MdMailOutline />,
  },
  {
    id: 5,
    title: "Lists",
    icon: <RiBook2Line />,
  },
  {
    id: 6,
    title: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    id: 7,
    title: "Profile",
    icon: <HiOutlineUser />,
  },
  {
    id: 8,
    title: "Communities",
    icon: <HiOutlineUsers />,
  },
  {
    id: 9,
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {

  const { user } = useCurrentUser();
  console.log(user)
  const queryClient = useQueryClient()

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) return toast.error(`Google token`);

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken })

    toast('hello ')
    console.log(verifyGoogleToken)
    if (verifyGoogleToken) window.localStorage.setItem('twitter_token', verifyGoogleToken)

    await queryClient.invalidateQueries(["current-user"])

  }, [queryClient])


  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-2 ml-32 relative">
          <div className="text-3xl  hover:bg-gray-800 mb-2 rounded-full p-2 cursor-pointer transition-all w-fit">
            <BsTwitter className="text-3xl " />
          </div>
          <div>
            <ul>
              {sidebarMenuItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex font-light  items-center justify-center text-2xl px-3 py-2 pl-2 hover:bg-zinc-800 rounded-full  w-fit cursor-pointer transition-all my-2 "
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="pl-4 text-xl ">{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <button className="bg-[#1d9bf0] mt-4  rounded-full text-xl font-bold px-24 py-3 hover:bg-[#2488ca] transition-all">
              Post
            </button>
          </div>
        </div>

        <div className="absolute mt-5 bottom-5 ml-28">
          <ProfileCard />
        </div>


        <div className="col-span-5 border-x border-x-slate-800 ml-3 overflow-y-scroll no-scrollbar scroll-smooth">

          <div className="border-y border-y-slate-800 ">
            <InputField/>
          </div>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-4 ">
          {
            !user && <div>
              <GoogleLogin onSuccess={handleLoginWithGoogle} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
