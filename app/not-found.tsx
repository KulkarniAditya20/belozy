export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <div className="text-center px-4">
                <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Page Not Found</h2>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <a
                    href="/"
                    className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}
