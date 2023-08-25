import { FeedCard } from "@/components/FeedCard";
import { ProfileCard } from "@/components/ProfileCard";
import { InputField } from "@/components/InputField";
import { useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import Twitterlayout from "@/components/FeedCard/Layout/TwitterLayout";

export default function Home() {
  const { tweets } = useGetAllTweets();

  return (
    <div>
      <Twitterlayout>

        <div className="col-span-5 border-x border-x-slate-800 ml-3 overflow-y-scroll no-scrollbar scroll-smooth">
          <div className="border-y border-y-slate-800 pl-3">
            <InputField />
          </div>
          {tweets?.map((tweet) =>
            tweet ? <FeedCard key={tweet?.id} data={tweet as Tweet} /> : null
          )}
        </div>
      </Twitterlayout>
    </div>
  );
}
