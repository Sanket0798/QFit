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
    <section className="relative py-16 px-4 bg-gradient-to-b from-[#E8EFFF]/30 via-[#E8EFFF]/50 to-white">
      {/* Faded overlay at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#E5F4FF] to-transparent pointer-events-none" /> */}

      <div className="relative max-w-[1370px] mx-auto bg-white rounded-[25px] px-6 pt-6 pb-[78px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <button className="font-normal rounded-full flex items-center gap-2 text-[17px] leading-[23px] bg-custom-purple text-white py-3 px-6 transition-colors">
            Why Choose Us
            <RightArrowIcon color="#ffffff" />
          </button>

          <h2 className="text-[40px] font-bold leading-[48px] mt-8 text-custom-purple">
            Why Our Members Recommend Us
          </h2>

          <p className="font-normal text-[17px] leading-[23px] text-[#4B5768] mt-2">
            We Are Dedicated To Providing Exceptional Medical Care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-6 transition-transform hover:scale-105`}
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
