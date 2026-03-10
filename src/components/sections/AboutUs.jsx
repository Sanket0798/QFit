import { RightArrowIcon, RightUpArrowIcon } from '../common/SvgIcons';
import { Button } from '../ui';


const AboutUs = () => {
  return (
    <section className="relative pt-[74px] px-4 md:bg-gradient-to-b md:from-[#E8EFFF]/30 md:via-[#E8EFFF]/50 md:to-white">
      {/* Faded overlay at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-[#E5F4FF] pointer-events-none" /> */}

      <div className="relative max-w-[1224px] mx-auto text-center">
        <h1 className='hidden md:block font-normal text-xl leading-[26px] text-[#4B5768] mb-[14px]'>About Us</h1>
        <h2 className='font-semibold md:font-bold text-2xl md:text-[40px] leading-[30px] md:leading-[48px] text-custom-dark-text px-10 md:px-52'>Providing <span className='text-custom-purple'>Exceptional Healthcare</span> With A Focus On Members.</h2>
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-[94px] mt-10">
          {/* Left Content */}
          <div className="text-center md:text-start max-w-[630px]">
            <p className="font-normal md:font-medium text-base md:text-2xl leading-[22px] md:leading-[34px] text-custom-dark-text px-8 md:px-0">
              We Make Quality Care Accessible And Affordable. Our Care Model Blends In-Person
              Expertise With Digital Convenience So You Can Book, Consult And Track Your Health
              Anywhere. From Preventive Wellness To Diagnostics And Ongoing Guidance.
            </p>

            <p className="hidden md:block font-normal text-[17px] leading-[23px] text-[#4B5768] mt-3">
              Our Team Focuses On Keeping You Healthy, Not Just Treating Illness.
            </p>

            <Button
              // ref={buttonRef}
              variant="custom"
              className="text-lg !font-normal leading-[20px] text-white gap-5 md:gap-2 rounded-full bg-custom-purple mt-10 w-full md:w-[190px] md:mt-[76px]"

            >

              Learn More
              <RightArrowIcon color='white' />
            </Button>
          </div>

          {/* Right Image */}
          {/* <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-full aspect-square flex items-center justify-center overflow-hidden">
              <img
                src="/assets/images/Workers.png"
                alt="Healthcare Team"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
          <img
            src="/assets/images/Doctors.svg"
            alt="Healthcare Team"
            className="object-contain hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
