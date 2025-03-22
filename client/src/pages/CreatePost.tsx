import { useNavigate } from "react-router";
import { FormField } from "../components/FormField";
import { Loader } from "../components/Loader";
import { useState } from "react";
import { PreviewImage } from "../../public/icons/index";
import { getRandomPrompt } from "../utils";

export const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    photo: "",
    prompt: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);

        const response = await fetch("http://localhost:3000/api/v1/dalleRoutes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();

        setForm({ ...form, photo: data.photo });
        console.log(data)
      } catch (err) {
        console.dir(err, {depth: null});
      } finally {
        setGeneratingImg(false);
      }
    } else {
      console.log("Please enter a prompt");
    }
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto px-2">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create creative and visually appealing images, powered by AI
        </p>
      </div>
      <form action="" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            label="Your name"
            type="text"
            name="name"
            placeholder="jhon doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            label="Prompt"
            type="text"
            name="prompt"
            placeholder="a bowl of soup that looks like a monster, knitted out of wool"
            value={form.prompt}
            isSurpriseMe={true}
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-64 p-3 h-64 flex justify-center items-center mt-10">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <PreviewImage className="w-full h-full" />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-5 flex gap-5 w-full">
          <button
            onClick={generateImage}
            className="text-white bg-green-700 rounded-md md:w-auto px-2 text-sm w-full py-2.5 text-center cursor-pointer"
          >
            {generatingImg ? "Generating..." : "Generate image"}
          </button>
        </div>
        <div className="mt-10">
          <p>
            Once you have created the image you can share it with other in the
            community
          </p>
          <button
            type="submit"
            className="text-white md:w-auto px-2 bg-[#6469ff] rounded-md text-sm w-full py-2.5 text-center cursor-pointer"
          >
            {loading ? "loading..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};
