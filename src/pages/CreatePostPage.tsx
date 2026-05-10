import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";
import { useGetAiPost } from "../hooks/useGetAiPost";
import AIPostContent from "../components/AIPostContent/AIPostContent";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const { mutate: create, isPending } = useCreatePost();
  const { mutateAsync: generateAiPost, isPending: aiPostPending } = useGetAiPost();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [aiData, setAiData] = useState<any>(null);
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    create(form, {
      onSuccess: () => {
        navigate("/posts"); // redirect after create
      },
    });
  };

  console.log('aiPostPending', aiPostPending);

  const handleGenerate = async () => {
    try {
      const response = await generateAiPost(form.title);
      console.log("AI response:", response);
      setAiData(response);
    } catch (error) {
      console.error("Error generating AI post:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* TITLE */}
        <div className="flex gap-2 items-center">

  {/* TITLE INPUT */}
  <input
    name="title"
    value={form.title}
    onChange={handleChange}
    placeholder="Title"
    className="flex-1 border p-2 rounded"
  />

  {/* BUTTON */}
  <button
    type="button"
    className="bg-green-600 text-white px-4 py-2 rounded whitespace-nowrap"
    onClick={handleGenerate}
  >
    Generate By AI
  </button>

</div>

{aiPostPending && <div>Loading</div>}
{aiData && !aiPostPending && <AIPostContent AIPostData={aiData.data} />}

        {/* CONTENT */}
{!aiPostPending && <>
{!aiData &&  <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="w-full border p-2 rounded"
        />}

        {/* BUTTON */}
        <button
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {aiData && "Edit"}
        </button>
        <button
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {isPending ? "Creating..." : "Create Post"}
        </button>
</>}

      </form>
    </div>
  );
}