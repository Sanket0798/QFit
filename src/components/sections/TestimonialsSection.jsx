const TestimonialsSection = () => {
  const testimonials = [
    {
      icon: '👤',
      title: 'Personalized Care',
      description: 'Care Around me',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
    },
    {
      icon: '🏥',
      title: 'Claims Concierge Assistance',
      description: '24/7 Help',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500',
    },
    {
      icon: '👨‍⚕️',
      title: 'Good Doctors Team',
      description: 'Experienced Experts',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why RupeeQ? ⭐
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-dark-text">
            Why Our Members Recommend Us
          </h2>
          <p className="text-gray-600 mt-4">We Care About You</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-8 text-center transition-transform hover:scale-105`}
            >
              <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
