import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";

export default function CreatePostPage() {
  const navigate = useNavigate();
  const { mutate: create, isPending } = useCreatePost();

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
  >
    Generate By AI
  </button>

</div>

        {/* CONTENT */}
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="w-full border p-2 rounded"
        />

        {/* BUTTON */}
        <button
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {isPending ? "Creating..." : "Create Post"}
        </button>

      </form>
    </div>
  );
}