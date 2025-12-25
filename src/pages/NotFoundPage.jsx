import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-2xl text-gray-400 mb-8">Trang không tồn tại</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Về trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
