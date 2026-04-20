export default function PostsPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Generated Posts</h1>
        <div className="grid gap-4">
          {[1, 2, 3].map((post) => (
            <div key={post} className="p-4 border rounded-xl hover:shadow-md transition">
              <h2 className="text-xl font-semibold">Post Title {post}</h2>
              <p className="text-gray-600">This is where your AI-generated blog content will appear...</p>
            </div>
          ))}
        </div>
      </div>
    );
  }