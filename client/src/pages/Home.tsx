import { useEffect, useState } from "react";
import { FormField } from "../components/FormField";
import { ImageCard } from "../components/ImageCard";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:3000/api/v1/posts");
        const data = await response.json();
        setAllPosts(data.data);
      } catch (err) {
        console.error(err);
      } finally{
        setLoading(false)
      }
    };
    fetchPosts();
  }, []);

  const RenderCards = ({
    data=[],
    title,
  }: {
    data?: { _id: string, name: string, prompt: string, photo: string}[];
    title: string;
  }) => {
    if (data?.length > 0) {
      return data.map((post) => {
        console.log(post)
      return <ImageCard key={post._id} name={post.name} photo={post.photo} prompt={post.prompt} />
    });
    }

    return (
      <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
        {title}
      </h2>
    );
  };

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The community showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Brouse through a collection of creative and visually appealing images,
          powered by AI
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div>
        {loading ? (
          <div className="flex justify-between items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for <span>{searchText}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 ">
              {searchText ? (
                <RenderCards data={allPosts} title="No search results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
