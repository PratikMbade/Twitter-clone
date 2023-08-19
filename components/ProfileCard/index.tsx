import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React, { useCallback } from "react";

export const ProfileCard: React.FC = () => {
  const { user } = useCurrentUser();
  return (
    <>
      {user && (
        <div className="rounded-full flex gap-3 hover:bg-slate-900 transition-all duration-300 cursor-pointer py-2 px-3">
            { user.profileImageURL &&  <Image
            src={user?.profileImageURL}
            alt="user-image"
            width={45}
            height={40}
            className="rounded-full"
          />}
          <div className="flex flex-col">
            <div>
              <p className="text-md">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
