import { useGetPost } from "../hooks/useGetPosts";

export default function PostsPage() {
  const { data, isLoading, isError } = useGetPost();
  if(isLoading){
    return <>Loading...</>
  }

  if(isError){
    return <>Error...</>
  }
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
        <div className="grid gap-4">
          {data?.posts?.map((post, index) => (
            <div key={index} className="p-4 border rounded-xl hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }