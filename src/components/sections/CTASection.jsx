import { Button } from '../ui';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-dark-text leading-tight">
            Your Safety Net Is One Click Away
          </h2>
          
          <p className="text-gray-600 text-lg">
            Pick Your QFIT Plus Plan Now And Secure Your Future.
          </p>
          
          <Button variant="primary" size="lg">
            Explore Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
