import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";

export const InputField: React.FC = () => {
  const { user } = useCurrentUser();

  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          {user?.profileImageURL && (
            <Image
              src={user?.profileImageURL}
              alt="user-image"
              width={45}
              height={40}
              className="rounded-full"
            />
          )}
        </div>
      </div>
    </>
  );
};
