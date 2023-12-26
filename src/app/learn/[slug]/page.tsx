import { allPosts, type Post } from "contentlayer/generated";
import { Code, Divider } from "@nextui-org/react";
import { format } from "date-fns";
import Markdown from "markdown-to-jsx";
export default function Page({ params }: { params: { slug: string } }) {
  const options = {
    overrides: {
      h1: {
        props: {
          className: "text-5xl font-bold",
        },
      },
      h2: {
        props: {
          className: "text-4xl font-bold",
        },
      },
      h3: {
        props: {
          className: "text-3xl my-4 font-bold",
        },
      },
      h4: {
        props: {
          className: "text-2xl my-3 font-bold",
        },
      },
      h5: {
        props: {
          className: "text-xl my-2 font-semibold",
        },
      },
      h6: {
        props: {
          className: "text-lg my-2 font-semibold",
        },
      },
      p: {
        props: {
          className: "text-lg tracking-wide leading-8",
        },
      },
      a: {
        props: {
          className:
            "text-lg text-primary-800 font-semibold underline underline-offset-1",
        },
      },
      ul: {
        props: {
          className: "list-disc list-inside",
        },
      },
      ol: {
        props: {
          className: "list-decimal list-inside",
        },
      },
      li: {
        props: {
          className: "text-lg",
        },
      },
      blockquote: {
        props: {
          className: "px-2 border`",
        },
      },
      hr: {
        props: {
          className: "",
        },
      },
      img: {
        props: {
          className: "mx-auto",
        },
      },
      code: {
        component: Code,
      },
      pre: {
        props: {
          className: "p-2 rounded",
        },
      },
      span: {
        props: {
          className: "text-lg text-default-500",
        },
      },
    },
  };
  return (
    <>
      <div
        aria-hidden
        className="fixed bottom-0 left-0 z-20 h-[10%] w-full  bg-gradient-to-t from-black/75 via-black/50"
      />
      {allPosts.map((post: Post, idx) => {
        if (post.address === params.slug) {
          return (
            <div key={idx} className="container mx-auto my-6 sm:my-12">
              <div className="relative mb-4 grid items-baseline sm:mb-0 ">
                <h1 className="text-center text-5xl font-bold tracking-tighter text-primary-800">
                  {post.title}
                </h1>
                <div className="ml-[5%] sm:ml-0">
                  <h6 className="mt-2 text-xl font-bold sm:mt-auto">
                    Written By:{" "}
                    <span className="text-primary-700">{post.author}</span>
                  </h6>
                  <h2 className=" text-xl font-semibold tracking-tighter  sm:text-2xl ">
                    {format(post.date, "PPP")}
                  </h2>
                </div>
              </div>
              <Divider />
              <div className="container relative mx-auto mt-4 max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
                <span className="absolute -left-4 -top-4 h-full w-[1px] bg-default-100"></span>
                <Markdown options={options}>{post.body.raw}</Markdown>
                <span className="absolute -right-4 -top-4 h-full w-[1px] bg-default-100"></span>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
