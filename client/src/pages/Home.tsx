import { useState } from "react";
import { FormField } from "../components/FormField";
import { ImageCard } from "../components/ImageCard";
import { Loader } from "../components/Loader";


export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState()

  return <section>
    <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">The community showcase</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]"></p>
    </div>
  </section>;
};
