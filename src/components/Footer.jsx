import React from 'react'

const Footer = () => {
    return (
        <footer className="p-6 mt-8">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-2xl font-bold mb-2">BookShop</p>
                <p className="text-gray-600 mb-4 underline">471 Book Street, Missispii</p>

                <div className="flex space-x-4">
                    <a href="/about" className="hover:text-gray-400">About Us</a>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                    <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                    <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer