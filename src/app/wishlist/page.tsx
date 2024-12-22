"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2, BookmarkIcon } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function WishList() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...existingCart, product]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
            </div>
            <Link 
              href="/cart" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">View Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm py-16">
            <BookmarkIcon className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500">Items added to your wishlist will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h2>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-baseline justify-between mb-6">
                    <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-sky-400"> Name {product.category}</span>
                    <br />
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="ml-2 text-sm text-gray-500">USD</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="font-medium">Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}