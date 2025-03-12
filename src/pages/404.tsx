import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // On GitHub Pages, the 404.html page is served for all missing routes
    // This script handles redirects to the correct route
    const pathname = window.location.pathname;
    const basePath = '/website'; // Your repository name
    
    // If current path starts with the base path, redirect to the path without it
    if (pathname.startsWith(basePath) && pathname !== basePath && pathname !== basePath + '/') {
      const newPath = pathname.slice(basePath.length);
      router.replace(newPath);
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you are looking for does not exist or has been moved.</p>
      <button 
        onClick={() => router.push('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
} 