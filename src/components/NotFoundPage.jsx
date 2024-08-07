import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-light w-full">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Sahifa topilmadi</p>
            <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded">Bosh sahifaga qaytish</a>
        </div>
    );
}

export default NotFoundPage;