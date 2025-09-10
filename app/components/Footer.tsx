import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus('Please enter your email');
      return;
    }
    
    // Open email client with the subscription information
    const subject = `Newsletter Subscription`;
    const body = `Email: ${email}%0D%0A%0D%0APlease add me to your newsletter list.`;
    window.open(`mailto:info@proyectosalvaje.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    
    // Reset form and show success message
    setSubscribeStatus('Thanks for subscribing!');
    setEmail('');
    
    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSubscribeStatus('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Community Engagement */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Join Our Community</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Become part of our growing community dedicated to regenerative living and ecological stewardship.
            </p>
            <a 
              href="#join" 
              className="inline-block px-6 py-2 text-black-600 text-white rounded-full font-medium hover:bg-black-700 hover:shadow-lg transition-all duration-300"
            >
              Get Involved
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Explore</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">Our Vision</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors duration-200">Regenerative Practices</a></li>
              <li><a href="#land" className="hover:text-blue-400 transition-colors duration-200">Indigenous Integration</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors duration-200">Events & Programs</a></li>
            </ul>
          </div>

          {/* Join */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Join</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#join" className="hover:text-blue-400 transition-colors duration-200">Volunteer</a></li>
              <li><a href="#join" className="hover:text-blue-400 transition-colors duration-200">Residency Programs</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors duration-200">Workshops</a></li>
              <li><a href="#join" className="hover:text-blue-400 transition-colors duration-200">Land Stewardship</a></li>
              <li><a href="#join" className="hover:text-blue-400 transition-colors duration-200">Support Our Mission</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Connect</h3>
            <div className="flex items-center space-x-4 mb-4">
              <a href="https://www.instagram.com/salvaje_mazunte" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-2">Stay updated with our latest news and events.</p>
              <form className="flex flex-col sm:flex-row" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg sm:rounded-r-none w-full border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="text-black-600 text-white px-4 py-2 rounded-lg sm:rounded-l-none w-full sm:w-auto mt-2 sm:mt-0 font-medium transition-all duration-300 hover:bg-black-700"
                >
                  Subscribe
                </button>
              </form>
              {subscribeStatus && (
                <p className="text-sm mt-2 text-blue-400">{subscribeStatus}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 mb-2">
                <span className="font-bold text-blue-400">Email:</span> <a href="mailto:info@proyectosalvaje.com" className="hover:text-blue-400 transition-colors duration-200">info@proyectosalvaje.com</a>
              </p>
              <p className="text-gray-300">
                <span className="font-bold text-blue-400">Location:</span> Mazunte, Oaxaca, Mexico
              </p>
            </div>
            <div className="flex items-center">
              <a href="/" className="focus:outline-none">
                <img
                  src="/favicon.svg"
                  alt="Proyecto Salvaje Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Proyecto Salvaje. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 