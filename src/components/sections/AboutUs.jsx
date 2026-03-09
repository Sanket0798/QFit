import { RightArrowIcon } from '../common/SvgIcons';

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-500 text-lg font-medium">About Us</p>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Providing <span className="text-purple-600">Exceptional Healthcare</span>{' '}
              <span className="text-gray-900">With A Focus On Members.</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              We Make Quality Care Accessible And Affordable. Our Care Model Blends In-Person 
              Expertise With Digital Convenience So You Can Book, Consult And Track Your Health 
              Anywhere. From Preventive Wellness To Diagnostics And Ongoing Guidance.
            </p>
            
            <p className="text-gray-500 text-base">
              Our Team Focuses On Keeping You Healthy, Not Just Treating Illness.
            </p>
            
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 text-white rounded-full text-base font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
              Learn More
              <RightArrowIcon color="#ffffff" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-full aspect-square flex items-center justify-center overflow-hidden">
              <img
                src="/assets/images/Workers.png"
                alt="Healthcare Team"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
