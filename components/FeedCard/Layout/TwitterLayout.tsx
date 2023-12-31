import { graphqlClient } from "@/clients/api";
import { InputField } from "@/components/InputField";
import { ProfileCard } from "@/components/ProfileCard";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useGetAllTweets } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { BiBookmark } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";
import { PiBellBold } from "react-icons/pi";
import { RiBook2Line, RiHome7Fill, RiQuillPenLine } from "react-icons/ri";
import { FeedCard } from "..";
import { Tweet } from "@/gql/graphql";

interface TwitterlayoutProps {
  children: React.ReactNode;
}
interface TwitterSidebarButton {
  id: number;
  title: String;
  icon: React.ReactNode;
}

export const sidebarMenuItems: TwitterSidebarButton[] = [
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

const Twitterlayout: React.FC<TwitterlayoutProps> = (
  props: TwitterlayoutProps
) => {
  const { user } = useCurrentUser();
  console.log(user);
  const { tweets } = useGetAllTweets();
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast("hello ");
      console.log(verifyGoogleToken);
      if (verifyGoogleToken)
        window.localStorage.setItem("twitter_token", verifyGoogleToken);

      await queryClient.invalidateQueries(["current-user"]);
    },
    [queryClient]
  );
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen md:px-1 sm:px-52 lg:px-52">
        <div className="col-span-2  sm:col-span-3 md:col-span-2  lg:col-span-3  pt-1 flex sm:ml-4 md:justify-end  lg:justify-end pr-4 relative">
          <div>
            <div className="text-3xl  hover:bg-gray-800 mb-2 rounded-full p-2 cursor-pointer transition-all w-fit h-fit">
              <BsTwitter className="text-3xl " />
            </div>

            <div className="mt-1 text-xl pr-4">
              <ul>
                {sidebarMenuItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex font-light  items-center justify-center text-2xl px-3 py-2 pl-2 hover:bg-zinc-800 rounded-full  w-fit cursor-pointer transition-all my-2 "
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="hidden  sm:inline md:hidden lg:inline pl-4 text-xl ">{item.title}</span>
                    </li>
                  );
                })}
              </ul>
              <button className=" hidden sm:inline md:hidden bg-[#1d9bf0] mt-4 rounded-full text-xl font-bold px-24 py-3 hover:bg-[#2488ca] transition-all">
                Post
              </button>
              <button className=" md:inline sm:hidden bg-[#1d9bf0] mt-4 ml-2 rounded-full text-xl font-bold px-3 py-3 hover:bg-[#2488ca] transition-all">
                <RiQuillPenLine/>
              </button>
            </div>
            <div className="hidden sm:inline absolute mt-5 bottom-5 ">
          <ProfileCard />
        </div>
          </div>
        </div>

        

        <div className="col-span-10  sm:col-span-6 md:col-span-9 lg:col-span-5 border-x-slate-800 ml-3 overflow-y-scroll no-scrollbar scroll-smooth">
        
          {props.children}
        </div>
        <div className="hidden  sm:col-span-3 p-5 md:col-span-1 ">
          {!user && (
            <div>
              <GoogleLogin onSuccess={handleLoginWithGoogle} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Twitterlayout;
