import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Tag, Truck } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Pro Gaming Headset",
    description: "Immersive audio experience with noise-cancelling microphone",
    price: 129.99,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Headset"
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    description: "Responsive keys with customizable RGB lighting",
    price: 149.99,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Keyboard"
  },
  {
    id: 3,
    name: "High-Precision Gaming Mouse",
    description: "Ergonomic design with adjustable DPI settings",
    price: 79.99,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Mouse"
  },
  {
    id: 4,
    name: "Gaming Chair",
    description: "Comfortable seating for long gaming sessions",
    price: 249.99,
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Chair"
  },
  {
    id: 5,
    name: "4K Gaming Monitor",
    description: "Ultra-high definition display with low response time",
    price: 399.99,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Monitor"
  },
  {
    id: 6,
    name: "Gaming PC",
    description: "High-performance computer for seamless gaming experience",
    price: 1499.99,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+PC"
  }
]

export default function StorePage() {
  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920&text=Gaming+Gear+Store" alt="Gaming Gear Store Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Gaming Gear Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Equip yourself with the best gear for ultimate performance</p>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image src={product.image} alt={product.name} width={300} height={200} className="w-full" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
                    <Star className="inline-block mr-1" size={16} />
                    {product.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-blue-300">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-400">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Truck size={16} className="mr-1" />
                      Free Shipping
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center w-full">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920&text=Special+Offers" alt="Special Offers Background" layout="fill" objectFit="cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#2a3040] to-[#3a4050] rounded-lg shadow-lg p-8 border border-blue-500 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Special Offers
            </h2>
            <p className="text-xl mb-6 text-center text-gray-300">Limited time deals on premium gaming gear!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2a3040] p-4 rounded-lg flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-300">10% off on all Headsets</span>
                <Tag size={24} className="text-green-400" />
              </div>
              <div className="bg-[#2a3040] p-4 rounded-lg flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-300">Free Mouse with Keyboard purchase</span>
                <Tag size={24} className="text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for exclusive deals and gaming gear news!</p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-900"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-r-full transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

