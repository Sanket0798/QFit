import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui';

const MembershipApplicationForm = ({ planName, price, monthlyPrice }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const workersImageRef = useRef(null);
  const [formData, setFormData] = useState({
    // Step 1 - User Details
    fullName: '',
    membershipName: '',
    email: '',
    contactNumber: '',
    dob: '',
    gender: '',
    // Step 2 - Additional Details
    userDesignation: '',
    annualIncome: '',
    // Nominee Details
    nomineeName: '',
    nomineeDob: '',
    nomineeGender: '',
    nomineeRelationship: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final form submission
    // TODO: Integrate with backend API when ready
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Optionally redirect to home or plans page
    // window.location.href = '/plans';
  };

  useEffect(() => {
    // Animate workers image on mobile
    if (workersImageRef.current && window.innerWidth < 768) {
      gsap.from(workersImageRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden rounded-none md:rounded-[40px] mx-0 md:mx-3 mt-0 md:mt-2">
      <div className="md:bg-gradient-to-b md:from-[#DDEDF9] md:to-white md:pb-2">
        {/* Workers Image - Mobile Only */}
        <div className="md:hidden flex justify-center pt-6 pb-4">
          <img
            src="/assets/images/Workers.png"
            alt="Healthcare Workers"
            className="object-contain"
          />
        </div>

        <div className="md:max-w-[1305px] md:mx-auto md:pt-16 md:px-0">
          {/* Main Content Grid */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
            {/* Left Side - Plan Info */}
            <div className="hidden md:block w-full md:w-auto">
              <h1 className="font-extrabold mb-4 md:mb-6 text-2xl md:text-[40px] leading-[30px] md:leading-[53px] tracing-[2%] text-button-color text-center md:text-left">
                {planName}
              </h1>

              <div className="space-y-3 md:space-y-5 font-normal text-sm md:text-[17px] leading-[20px] md:leading-[24px] text-custom-dark-text max-w-full md:max-w-[447px] mb-8 md:mb-16">
                <p className="">
                  A short-term personal loan is a quick financing option designed to cover immediate expenses, typically repaid within a few months to a couple of years.
                </p>
                <p className="">
                  It offers fast approval, flexible usage, and fixed monthly installments, making it ideal for emergencies or short-term cash needs.
                </p>
              </div>

              <div className="bg-[#ECE4FF] rounded-24 shadow-card py-3 md:py-4 px-8 md:px-16 mx-auto md:mx-0 w-fit text-center">
                <div className="text-2xl md:text-3xl font-bold text-custom-purple">
                  {price}
                </div>
              </div>

              {/* Starting From Badge - Desktop Only */}
              <div className="hidden md:block mt-6">
                <div className="bg-custom-purple text-white font-semibold text-base leading-[20px] py-3 px-8 rounded-full shadow-card inline-block">
                  Starting From {monthlyPrice}/Month
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className='space-y-6 md:space-y-[54px] w-full md:w-auto'>
              <div className="bg-white rounded-2xl md:rounded-24 md:p-8 w-full md:w-[714px] my-2 md:my-0 shadow-card">
                <h2 className="hidden md:block text-xl md:text-3xl font-bold leading-[26px] md:leading-[35px] text-[#0072F2] mb-5 md:mb-[30px]">
                  Membership Application
                </h2>
                <h2 className='md:hidden h-[65px] shadow-card rounded-24 bg-[#E0D4FF] flex items-center justify-center font-bold text-3xl leading-[35px] text-[#0072F2] mb-10'>
                  Membership Application
                </h2>

                {currentStep === 1 ? (
                  // Step 1: User Details
                  <form onSubmit={handleNext} className="">
                    {/* Form Fields in 2-column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 px-8 md:px-0">
                      {/* Full Name */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Name"
                        />
                      </div>

                      {/* Membership Name */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Membership Name
                        </label>
                        <input
                          type="text"
                          name="membershipName"
                          value={formData.membershipName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Healthcare Membership Name"
                        />
                      </div>

                      {/* Email ID */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Email ID"
                        />
                      </div>

                      {/* Contact Number */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Contact Number"
                        />
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Date Of Birth
                        </label>
                        <input
                          type="text"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="w-full px-4 md:px-4 py-3 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                        >
                          <option value="">Select Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="mt-6 pb-7 md:pb-0 md:mt-9 px-8 md:px-0">
                      <Button
                        type="submit"
                        variant="custom"
                        className="bg-custom-purple text-white font-bold text-base md:text-lg py-2 md:py-[9px] px-5 md:px-[22px] rounded-full hover:bg-purple-700 transition-colors shadow-card w-full md:w-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                ) : (
                  // Step 2: Nominee Details
                  <form onSubmit={handleSubmit} className="">
                    {/* User Designation and Annual Income */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {/* User Designation */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          User Designation
                        </label>
                        <input
                          type="text"
                          name="userDesignation"
                          value={formData.userDesignation}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-xs md:placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Designation"
                        />
                      </div>

                      {/* Annual Income */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          Annual Income
                        </label>
                        <input
                          type="text"
                          name="annualIncome"
                          value={formData.annualIncome}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-xs md:placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Annual Income"
                        />
                      </div>
                    </div>

                    {/* Nominee Details Section */}
                    <div className="card-base p-4 md:p-6 mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-custom-dark-text mb-0">
                        Nominee Details
                      </h3>
                    </div>

                    {/* Nominee Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Nominee Full Name */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="nomineeName"
                          value={formData.nomineeName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-xs md:placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="Enter Your Name"
                        />
                      </div>

                      {/* Nominee Date of Birth */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          Date Of Birth
                        </label>
                        <input
                          type="text"
                          name="nomineeDob"
                          value={formData.nomineeDob}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-xs md:placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal text-sm"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>

                      {/* Nominee Gender */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          Gender
                        </label>
                        <select
                          name="nomineeGender"
                          value={formData.nomineeGender}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-[#58626C] text-xs md:text-sm"
                        >
                          <option value="">Select Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Nominee Relationship */}
                      <div>
                        <label className="block font-normal text-xs md:text-sm leading-[16px] md:leading-[19px] text-custom-dark-text mb-1">
                          Nominee Relationship
                        </label>
                        <select
                          name="nomineeRelationship"
                          value={formData.nomineeRelationship}
                          onChange={handleChange}
                          required
                          className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-[#58626C] text-xs md:text-sm"
                        >
                          <option value="">Select Your Nominee Relationship</option>
                          <option value="spouse">Spouse</option>
                          <option value="parent">Parent</option>
                          <option value="child">Child</option>
                          <option value="sibling">Sibling</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-6 md:mt-9 flex flex-col md:flex-row gap-3 md:gap-4">
                      <Button
                        type="button"
                        variant="custom"
                        onClick={handleBack}
                        className="bg-gray-300 text-custom-dark-text font-bold text-base md:text-lg py-2 md:py-[9px] px-5 md:px-[22px] rounded-full hover:bg-gray-400 transition-colors shadow-card w-full md:w-auto"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="custom"
                        className="bg-custom-purple text-white font-bold text-base md:text-lg py-2 md:py-[9px] px-5 md:px-[22px] rounded-full hover:bg-purple-700 transition-colors shadow-card w-full md:w-auto"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Credit Score Analysis - Desktop Only */}
              <div className="hidden md:flex bg-[#ECE4FF] rounded-3xl p-7 items-center justify-between gap-0 shadow-card">
                <h3 className="text-3xl leading-[35px] font-bold text-[#0072F2]">Credit Score</h3>
                <span className="text-2xl leading-[34px] font-medium text-[#0072F2]">Analysis</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Features Section - Desktop Only */}
      <div className="hidden md:block mt-[66px] pb-9 mx-3">
        <div className="bg-[#DACCFD]/70 rounded-b-3xl shadow-card p-2">
          <div className="flex items-center justify-around">
            <div className="flex items-center gap-3">
              <img src="/assets/icons/Doctor.svg" alt="Doctor" className="" />
              <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Good Doctors Team</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/icons/Care.svg" alt="Care" className="" />
              <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Personalized Care</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/icons/24Service.svg" alt="Customer Care" className="" />
              <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Claims Concierge support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-md mx-4 shadow-card text-center">
            {/* Success Icon */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 md:w-12 h-10 md:h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-custom-purple mb-3 md:mb-4">
              Form Submitted Successfully!
            </h2>
            <p className="text-base md:text-lg text-custom-dark-text mb-6 md:mb-8">
              Thank you for your application. We will get back to you soon.
            </p>

            {/* Close Button */}
            <Button
              variant="custom"
              onClick={handleCloseModal}
              className="bg-custom-purple text-white font-bold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-purple-700 transition-colors shadow-card w-full md:w-auto"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MembershipApplicationForm;

