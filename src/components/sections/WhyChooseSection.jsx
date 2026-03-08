const WhyChooseSection = () => {
  const features = [
    {
      icon: '⏱️',
      title: 'Good Response Time',
      description: 'Quick and efficient service',
      bgColor: 'bg-blue-50',
    },
    {
      icon: '🏥',
      title: 'Personalized Care',
      description: 'Tailored health solutions',
      bgColor: 'bg-green-50',
    },
    {
      icon: '🤝',
      title: 'Cashless Coverage support',
      description: 'Hassle-free claims',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 mb-2">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-dark-text">
            Why Choose <span className="text-purple-600">RupeeQ?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 text-center transition-transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
