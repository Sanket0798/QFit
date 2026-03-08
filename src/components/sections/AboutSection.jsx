import { Button } from '../ui';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-purple-600">ABOUT US</p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-dark-text leading-tight">
              Providing <span className="text-purple-600">Exceptional Healthcare</span> With A Focus On Members.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We Make Quality Care Accessible And Affordable. Our Care Model Blends In-Person Expertise With Digital Convenience So You Can Rest Easy. Consult And Track Your Health Anywhere, Anytime. Preventive Wellness To Acute Care, We've Got You Covered.
            </p>
            
            <p className="text-sm text-gray-500 italic">
              At RupeeQ, we're redefining healthcare by putting members first, ensuring quality and trust in every interaction.
            </p>
            
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for illustration */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-purple-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">👨‍⚕️</span>
                  </div>
                  <div className="bg-blue-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">👩‍⚕️</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-green-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">🏥</span>
                  </div>
                  <div className="bg-yellow-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
                    <span className="text-6xl">💊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
