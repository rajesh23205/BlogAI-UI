import { useState } from 'react';
import { useLoginMutation } from '../hooks/useLoginMutation';

export default function LoginPage() {
  const { mutate: login, isPending } = useLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill all fields');
      return;
    }

    login(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 border rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border rounded"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}