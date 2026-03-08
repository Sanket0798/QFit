import { Button } from '../ui';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-red-500 text-2xl">❤️</span>
              <span className="text-sm font-medium text-gray-700">Your Health, Our Priority</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-dark-text leading-tight">
              YOUR HEALTH,<br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                OUR PRIORITY
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-lg">
              We provide comprehensive healthcare at an affordable price, ensuring a strong and healthy life for you and your loved ones.
            </p>
            
            <Button variant="primary" size="lg">
              Explore Wellness Plans
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for illustration - you can replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">👨</div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">👩</div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">👦</div>
                  </div>
                  <div className="text-red-500 text-4xl">❤️</div>
                </div>
              </div>
              
              {/* Floating heart with pulse */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-red-500 text-3xl">💓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
