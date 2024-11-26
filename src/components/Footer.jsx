import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Section from './section';

const Footer = () => {
  return (
     
      <div className="bg-n-7 text-white py-8">
        <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400 text-sm">
              Your concise company description goes here. Brief yet informative.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 py-4 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    
  );
};

export default Footer;