export default function SignupPage() {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 border rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <input className="w-full mb-4 p-2 border rounded" type="text" placeholder="Full Name" />
        <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Email" />
        <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
      </div>
    );
  }