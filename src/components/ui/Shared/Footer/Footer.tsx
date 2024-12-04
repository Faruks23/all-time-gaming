import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Twitch, Youtube, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="text-gray-400 border-t border-[#3a4050] min-h-[50vh] relative">
      <div className="absolute inset-0 z-0">
        <Image src="/footer.jpg" alt="Footer Background" layout="fill" objectFit="cover" className="opacity-30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
      <div className="relative z-20 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/tournaments" className="hover:text-blue-400 transition-colors">Tournaments</Link></li>
              <li><Link href="/challenges" className="hover:text-blue-400 transition-colors">Challenges</Link></li>
              <li><Link href="/store" className="hover:text-blue-400 transition-colors">Store</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/forums" className="hover:text-blue-400 transition-colors">Forums</Link></li>
              <li><Link href="/leaderboards" className="hover:text-blue-400 transition-colors">Leaderboards</Link></li>
              <li><Link href="/news" className="hover:text-blue-400 transition-colors">News</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitch size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-4">
              <a href="mailto:info@all-time-gaming.com" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} className="mr-2" />
                info@all-time-gaming.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p>&copy; 2024 All-Time-Gaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

