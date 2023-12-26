import { LearnCard } from "./ui/learn-card";
import { type Post, allPosts } from "contentlayer/generated";
export default function Learn() {
  return (
    <>
      <div className="mt-12">
        <h1 className="mx-auto mt-4 max-w-max text-3xl font-bold">
          <span className="text-primary-600">Learn</span> Things
        </h1>
        <div className=" flex-shrink-1 container mx-auto mt-12 flex w-[90%] flex-wrap justify-center gap-4 sm:w-auto ">
          {allPosts.map((post: Post, idx: number) => {
            return (
              <LearnCard
                key={idx}
                name={post.title}
                url={`learn/${post.address}`}
              >
                {post.description}
              </LearnCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
