import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import LayOut from '../components/LayOut/LayOut';

const NotFound = () => {
  return (
    <LayOut>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-medium text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </LayOut>
  );
};

export default NotFound;