"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Heart, ShoppingCart, ChevronLeft, Star, Check, X } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const Toast = ({ message, type, onClose }: { message: string; type: string; onClose: () => void }) => (
  <div className={`fixed top-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg 
    ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white min-w-[300px] z-50`}>
    <span className="flex-1">{message}</span>
    <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
      <X className="w-4 h-4" />
    </button>
  </div>
);

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setIsInCart(cartItems.some((item: CartItem) => item.id === Number(params.id)));

    const wishlistItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlistItems.some((item: Product) => item.id === Number(params.id)));

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += quantity;
      showToast(`Updated ${product.title} quantity in cart`, 'success');
    } else {
      cartItems.push({ ...product, quantity });
      showToast(`Added ${product.title} to cart`, 'success');
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    setIsInCart(true);
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    const wishlistItems: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isItemInWishlist = wishlistItems.some(item => item.id === product.id);

    if (isItemInWishlist) {
      const updatedWishlist = wishlistItems.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      showToast(`Removed ${product.title} from wishlist`, 'success');
    } else {
      wishlistItems.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      setIsInWishlist(true);
      showToast(`Added ${product.title} to wishlist`, 'success');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <div className="h-8 w-56 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || 'Product not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/product"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                fill
        
                className="max-h-[400px] max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold capitalize">
                    {product.category}
                  </span>
                </div>
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-full transition-all ${
                    isInWishlist 
                      ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  <Heart className="w-6 h-6" fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < Math.floor(product.rating.rate) ? '#FFB800' : '#E5E7EB'}
                      color={i < Math.floor(product.rating.rate) ? '#FFB800' : '#E5E7EB'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center border rounded-lg bg-white">
                    <button
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="w-12 text-center border-x py-2">{quantity}</span>
                    <button
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 py-3 px-8 rounded-lg 
                    bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all
                    hover:shadow-lg active:transform active:scale-[0.98]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}