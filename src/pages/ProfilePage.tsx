import { useGetMe } from '../hooks/useGetMe';

export default function ProfilePage() {
  const { data, isLoading, isError } = useGetMe();

  if (isLoading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load profile
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <p className="mb-2">
        <strong>Name:</strong> {data?.name}
      </p>

      <p className="mb-2">
        <strong>Email:</strong> {data?.email}
      </p>

      <p className="mb-2">
        <strong>User ID:</strong> {data?.id}
      </p>
    </div>
  );
}