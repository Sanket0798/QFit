import { RightArrowIcon } from '../common/SvgIcons';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/assets/icons/Care.svg',
      title: 'Personalized Care',
      description: 'Care Around You',
      bgColor: 'bg-[#B0E6EC]/20',
    },
    {
      icon: '/assets/icons/24Service.svg',
      title: 'Claims Concierge Assistance',
      description: '24/7 Help',
      bgColor: 'bg-[#178FE5]/20',
    },
    {
      icon: '/assets/icons/Doctor.svg',
      title: 'Good Doctors Team',
      description: 'Experienced Team',
      bgColor: 'bg-[#5528A9]/20',
    },
  ];

  return (
    <section className="relative pb-16 pt-0 md:pt-16 px-4 ">
      {/* Faded overlay at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#E5F4FF] to-transparent pointer-events-none" /> */}

      <div className="relative max-w-[1370px] mx-auto bg-transparent md:bg-white md:rounded-[25px] md:px-6 md:pt-6 md:pb-[78px] md:shadow-[0px_16px_40px_0px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
          <button className="font-normal rounded-full hidden md:flex items-center gap-2 text-[17px] leading-[23px] bg-custom-purple text-white py-3 px-6 transition-colors">
            Why Choose Us
            <RightArrowIcon color="#ffffff" />
          </button>

          <h2 className="md:text-[40px] text-2xl font-semibold md:font-bold leading-[30px] md:leading-[48px] mt-8 text-custom-dark-text md:text-custom-purple px-10 md:px-0">
            Why Our Members Recommend Us
          </h2>

          <p className="hidden md:block font-normal text-[17px] leading-[23px] text-[#4B5768] mt-2">
            We Are Dedicated To Providing Exceptional Medical Care.
          </p>
        </div>

        {/* Features Grid for Desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mt-6 md:mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-6 rounded-[20px] md:rounded-none transition-transform hover:scale-105`}
            >
              <div className="bg-white w-[48px] h-[48px] rounded-[5px] flex items-center justify-center mb-8">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className=""
                />
              </div>

              <h3 className="font-semibold text-[28px] leading-[38px] text-black mb-3">
                {feature.title}
              </h3>

              <p className="font-normal text-[17px] leading-[23px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid for Mobile view */}
        <div className="flex flex-col md:hidden gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-6 rounded-[20px] gap-4 md:rounded-none transition-transform hover:scale-105 flex shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)]`}
            >
              <div className='w-[70px] h-[70px] bg-[#B0E6EC] rounded-full flex items-center justify-center'>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className=""
                />
              </div>
              <div className='flex flex-col text-start justify-center'>
                <h3 className="font-bold text-lg leading-[22px] text-custom-purple mb-2">
                  {feature.title}
                </h3>
                <p className="font-normal text-sm leading-[19px] text-[#4B5768]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
