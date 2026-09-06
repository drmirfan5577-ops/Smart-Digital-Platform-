import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #ffffff, #f8fafc)' }}
    >
      <div className="text-center px-6">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-black mb-2 text-gray-800">404</h1>
        <p className="text-gray-500 mb-6">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 rounded-2xl text-white font-semibold inline-block"
          style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
        >
          ← Return to ESOneWorld
        </a>
      </div>
    </div>
  );
};

export default NotFound;
