import { Button } from '../ui';

const QFitPlansSection = () => {
  const plans = [
    {
      name: 'KAVACH',
      icon: '👨‍👩‍👧',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'SUPER FIT',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'LITE',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      featured: true,
    },
    {
      name: 'ESSENTIAL',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'MAX',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          QFIT PLUS PLANS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.bgColor} rounded-3xl p-6 text-center transition-transform hover:scale-105 ${
                plan.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-3xl`}>
                  {plan.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {plan.name}
              </h3>
              
              <Button variant="primary" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default QFitPlansSection;
