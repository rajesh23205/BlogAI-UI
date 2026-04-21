import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">AI Blog npm run dev</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">Posts</Link>
            <Link to="/create" className="hover:text-blue-600">Create Post</Link>
            <Link to="/profile" className="hover:text-blue-600">Profile</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </nav>
      
      <main className="max-w-5xl mx-auto p-6">
        <Outlet /> {/* This is where the specific page content renders */}
      </main>
    </div>
  );
}