import { Facebook, Instagram, PinIcon as Pinterest, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-12 mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Contact</Link>
                <Link href="#" className="block text-sm hover:underline">Delivery & Times</Link>
                <Link href="#" className="block text-sm hover:underline">Warranty & Repair</Link>
                <Link href="#" className="block text-sm hover:underline">Order pay</Link>
              </div>
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Own delivery service</Link>
                <Link href="#" className="block text-sm hover:underline">Returns</Link>
                <Link href="#" className="block text-sm hover:underline">Order business</Link>
                <Link href="#" className="block text-sm hover:underline">Privacy Statement</Link>
              </div>
            </div>
          </div>

          {/* MisterDesign */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">MisterDesign</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Shop Den Bosch</Link>
                <Link href="#" className="block text-sm hover:underline">Interior advice</Link>
                <Link href="#" className="block text-sm hover:underline">Projects</Link>
                <Link href="#" className="block text-sm hover:underline">Vacancies</Link>
              </div>
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Terms and Conditions</Link>
                <Link href="#" className="block text-sm hover:underline">Blog</Link>
                <Link href="#" className="block text-sm hover:underline">Trends</Link>
                <Link href="#" className="block text-sm hover:underline">Actions & offers</Link>
              </div>
            </div>
          </div>

          {/* Keep in touch */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Keep in touch!</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Pinterest className="w-6 h-6" />
                <span className="sr-only">Pinterest</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-8 pt-8 border-t md:grid-cols-3">
          {/* Popular Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Chairs</Link>
                <Link href="#" className="block text-sm hover:underline">Furniture</Link>
                <Link href="#" className="block text-sm hover:underline">Lighting</Link>
                <Link href="#" className="block text-sm hover:underline">Accessories</Link>
              </div>
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Garden</Link>
                <Link href="#" className="block text-sm hover:underline">Tables</Link>
                <Link href="#" className="block text-sm hover:underline">Children's room</Link>
                <Link href="#" className="block text-sm hover:underline">Cabinets</Link>
              </div>
            </div>
          </div>

          {/* Popular Brands */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Popular Brands</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Kartell</Link>
                <Link href="#" className="block text-sm hover:underline">Ferm Living</Link>
                <Link href="#" className="block text-sm hover:underline">HAY</Link>
                <Link href="#" className="block text-sm hover:underline">Muuto</Link>
              </div>
              <div className="space-y-2">
                <Link href="#" className="block text-sm hover:underline">Carl Hansen</Link>
                <Link href="#" className="block text-sm hover:underline">Tom Dixon</Link>
                <Link href="#" className="block text-sm hover:underline">Fritz Hansen</Link>
                <Link href="#" className="block text-sm hover:underline">Vitra</Link>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Payment Methods</h3>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Visa"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Mastercard"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="PayPal"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Maestro"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="iDEAL"
                width={50}
                height={30}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Klarna"
                width={50}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-4 text-sm text-center text-white bg-zinc-800">
        <div className="container flex flex-col justify-between gap-2 px-4 mx-auto md:flex-row">
          <p>© 2010 - 2018 MisterDesign Hertogenbosch</p>
          <p>All rights reserved</p>
          <p>All prices include VAT</p>
        </div>
      </div>
    </footer>
  )
}

