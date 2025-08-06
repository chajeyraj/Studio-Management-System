import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setSuccess(true);
      setIsLoading(false);
    }, 1500);
  };
  return <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Reset your password
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We'll send you an email with a link to reset your password.
      </p>
      {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center">
          <AlertCircleIcon className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>}
      {success ? <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            Check your email
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            We've sent a password reset link to {email}
          </p>
          <div className="mt-6">
            <Link to="/login" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Back to login
            </Link>
          </div>
        </div> : <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <button type="submit" disabled={isLoading} className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {isLoading ? 'Sending reset link...' : 'Send reset link'}
            </button>
          </div>
          <div className="text-center">
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 text-sm">
              Back to login
            </Link>
          </div>
        </form>}
    </div>;
};