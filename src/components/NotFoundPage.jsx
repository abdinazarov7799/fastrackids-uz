import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-32">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Sahifa topilmadi</p>
            <a href="/" className="bg-purple hover:bg-orange transition text-white py-2 px-4 rounded-lg">Bosh sahifaga qaytish</a>
        </div>
    );
}

export default NotFoundPage;