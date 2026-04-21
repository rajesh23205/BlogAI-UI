/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { useSignupMutation } from '../hooks/useAuth';
import type { SignupData } from '../types/auth';

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupData>();
  const { mutate, isPending, isError, error } = useSignupMutation();

  const onSubmit = (data: SignupData) => {
    mutate(data);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white border border-slate-200 rounded-3xl shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">Join the AI Community</h2>
        <p className="text-slate-500 mt-2">Create your profile and start blogging.</p>
      </div>

      {isError && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border-l-4 border-red-500 rounded">
          {(error as any).response?.data?.message || "Something went wrong. Check your inputs."}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* SECTION 1: ACCOUNT DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Account Info</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700">Username *</label>
            <input 
              {...register('username', { required: "Username is required" })}
              className={`w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 ${errors.username ? 'border-red-500' : 'focus:ring-blue-500'}`}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input {...register('name')} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Email Address *</label>
            <input 
              type="email"
              {...register('email', { required: "Email is required" })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Password * (Min 6 chars)</label>
            <input 
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">Min 6 characters required</p>}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* SECTION 2: PROFILE DETAILS */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Profile Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700">Bio</label>
            <textarea 
              {...register('bio')}
              rows={3}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Tell us about your AI interests..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Location</label>
            <input {...register('location')} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        {/* SECTION 3: SOCIAL LINKS (Nested objects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">GitHub</label>
            <input {...register('socialLinks.github')} placeholder="username" className="w-full mt-1 p-2 border rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">LinkedIn</label>
            <input {...register('socialLinks.linkedin')} placeholder="username" className="w-full mt-1 p-2 border rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Twitter</label>
            <input {...register('socialLinks.twitter')} placeholder="username" className="w-full mt-1 p-2 border rounded-lg text-sm" />
          </div>
        </div>

        <button 
          disabled={isPending}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transform transition active:scale-95 disabled:bg-slate-400"
        >
          {isPending ? "Syncing with Database..." : "Create AI Blog Profile"}
        </button>
      </form>
    </div>
  );
}