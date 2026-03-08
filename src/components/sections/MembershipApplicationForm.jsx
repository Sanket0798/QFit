import { useState } from 'react';
import { Button } from '../ui';

const MembershipApplicationForm = ({ planName, price }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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
    console.log('Form submitted:', formData);
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Optionally redirect to home or plans page
    // window.location.href = '/plans';
  };

  return (
    <section className="relative overflow-hidden rounded-[40px] mx-3 mt-2">
      <div className="bg-gradient-to-b from-[#DDEDF9] to-white pb-2">
        <div className="max-w-[1305px] mx-auto pt-16">
          {/* Main Content Grid */}
          <div className="flex flex-row items-start justify-between">
            {/* Left Side - Plan Info */}
            <div className="">
              <h1 className="font-extrabold mb-6 text-[40px] leading-[53px] tracing-[2%] text-button-color">
                {planName}
              </h1>

              <div className="space-y-5 font-normal text-[17px] leading-[24px] text-custom-dark-text max-w-[447px] mb-16">
                <p className="">
                  A short-term personal loan is a quick financing option designed to cover immediate expenses, typically repaid within a few months to a couple of years.
                </p>
                <p className="">
                  It offers fast approval, flexible usage, and fixed monthly installments, making it ideal for emergencies or short-term cash needs.
                </p>
              </div>

              <div className="inline-block bg-[#ECE4FF] rounded-24 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] py-4 px-16">
                <div className="text-3xl font-bold text-custom-purple">
                  {price}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className='space-y-[54px]'>
              <div className="bg-white rounded-24 p-8 w-[714px] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]">
                <h2 className="text-3xl font-bold leading-[35px] text-[#0072F2] mb-[30px]">
                  Membership Application
                </h2>

                {currentStep === 1 ? (
                  // Step 1: User Details
                  <form onSubmit={handleNext} className="">
                    {/* Form Fields in 2-column Grid */}
                    <div className="grid grid-cols-2 gap-3">
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FBFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FBFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FBFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FBFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
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
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FBFF] text-[#58626C] text-sm"
                        >
                          <option value="">Select Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="mt-9">
                      <Button
                        type="submit"
                        variant="custom"
                        className="bg-custom-purple text-white font-bold text-lg py-[9px] px-[22px] rounded-full hover:bg-purple-700 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                ) : (
                  // Step 2: Nominee Details
                  <form onSubmit={handleSubmit} className="">
                    {/* User Designation and Annual Income */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {/* User Designation */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          User Designation
                        </label>
                        <input
                          type="text"
                          name="userDesignation"
                          value={formData.userDesignation}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
                          placeholder="Enter Your Designation"
                        />
                      </div>

                      {/* Annual Income */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Annual Income
                        </label>
                        <input
                          type="text"
                          name="annualIncome"
                          value={formData.annualIncome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
                          placeholder="Enter Your Annual Income"
                        />
                      </div>
                    </div>

                    {/* Nominee Details Section */}
                    <div className="bg-[#FFE8E8] rounded-3xl p-6 mb-6">
                      <h3 className="text-2xl font-bold text-custom-dark-text mb-0">
                        Nominee Details
                      </h3>
                    </div>

                    {/* Nominee Form Fields */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Nominee Full Name */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="nomineeName"
                          value={formData.nomineeName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
                          placeholder="Enter Your Name"
                        />
                      </div>

                      {/* Nominee Date of Birth */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Date Of Birth
                        </label>
                        <input
                          type="text"
                          name="nomineeDob"
                          value={formData.nomineeDob}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] placeholder:text-sm placeholder:text-[#58626C] placeholder:font-normal"
                          placeholder="DD/MM/YYYY"
                        />
                      </div>

                      {/* Nominee Gender */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Gender
                        </label>
                        <select
                          name="nomineeGender"
                          value={formData.nomineeGender}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-[#58626C] text-sm"
                        >
                          <option value="">Select Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Nominee Relationship */}
                      <div>
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Nominee Relationship
                        </label>
                        <select
                          name="nomineeRelationship"
                          value={formData.nomineeRelationship}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-[#58626C] text-sm"
                        >
                          <option value="">Select Your Nominee Relationship</option>
                          <option value="spouse">Spouse</option>
                          <option value="parent">Parent</option>
                          <option value="child">Child</option>
                          <option value="sibling">Sibling</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Additional Gender field (as shown in image) */}
                      <div className="col-span-2">
                        <label className="block font-normal text-sm leading-[19px] text-custom-dark-text mb-1">
                          Gender
                        </label>
                        <select
                          name="additionalGender"
                          className="w-full px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-[#58626C] text-sm"
                        >
                          <option value="">Select Your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-9 flex gap-4">
                      <Button
                        type="button"
                        variant="custom"
                        onClick={handleBack}
                        className="bg-gray-300 text-custom-dark-text font-bold text-lg py-[9px] px-[22px] rounded-full hover:bg-gray-400 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="custom"
                        className="bg-custom-purple text-white font-bold text-lg py-[9px] px-[22px] rounded-full hover:bg-purple-700 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              <div className="bg-[#ECE4FF] rounded-3xl p-7 flex items-center justify-between shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]">
                <h3 className="text-3xl leading-[35px] font-bold text-[#0072F2]">Credit Score</h3>
                <span className="text-2xl leading-[34px] font-medium text-[#0072F2]">Analysis</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="mt-[66px] pb-9 mx-3">
        <div className="bg-[#DACCFD]/70 rounded-b-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] p-2">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-12 max-w-md mx-4 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] text-center">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-3xl font-bold text-custom-purple mb-4">
              Form Submitted Successfully!
            </h2>
            <p className="text-lg text-custom-dark-text mb-8">
              Thank you for your application. We will get back to you soon.
            </p>

            {/* Close Button */}
            <Button
              variant="custom"
              onClick={handleCloseModal}
              className="bg-custom-purple text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-purple-700 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
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
