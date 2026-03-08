const PlanTable = ({ planDetails }) => {
  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="max-w-[1370px] mx-auto">
        {/* Mobile Card View */}
        <div className="md:hidden px-[60px] space-y-4">
          {/* Benefits Header */}
          <h2 className="font-semibold text-2xl leading-[30px] text-custom-purple text-center">Benefits</h2>

          {/* Eligibility Card */}
          <div className="bg-[#D1F0FF] rounded-[10px] p-6 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)]">
            <h3 className="font-bold text-xl leading-[25px] text-center text-custom-dark-text mb-4">Eligibility Criteria</h3>
            {planDetails.eligibility.map((item, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <h4 className="font-semibold text-[15px] leading-[18px] text-[#4B5768] mb-1">{item.label}</h4>
                <p className="font-normal text-sm leading-[16px] text-[#4B5768] whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Total Health Wallet Highlight */}
          {planDetails.wellness.find(item => item.highlight) && (
            <div className="bg-[#65ADFD] rounded-[10px] p-6 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)] text-white">
              {planDetails.wellness.filter(item => item.highlight).map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold text-xl leading-[25px] text-center mb-2">{item.label}</h3>
                  <p className="font-bold text-lg leading-[22px] mb-2 text-center">{item.value}</p>
                  <p className="font-normal text-sm leading-[20px] text-center">{item.remark}</p>
                </div>
              ))}
            </div>
          )}

          {/* Wellness Card */}
          <div className="bg-[#F7F3FF] rounded-[10px] p-6 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)]">
            <h3 className="font-bold text-xl leading-[25px] text-center text-custom-dark-text mb-4">Wellness</h3>
            {planDetails.wellness.filter(item => !item.highlight).map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-semibold text-[15px] leading-[18px] text-[#4B5768] mb-1">{item.label}</h4>
                <p className="font-normal text-sm leading-[16px] text-[#4B5768] whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Insurance Card */}
          <div className="bg-[#EADFFF] rounded-[10px] p-6 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)] text-center">
            <h3 className="font-bold text-xl leading-[25px] text-center text-custom-dark-text mb-4 px-10">Complementary Insurance Cover</h3>
            {planDetails.insurance.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-semibold text-[15px] leading-[18px] text-[#4B5768] mb-5">{item.label}</h4>
                <p className="font-normal text-sm leading-[16px] text-[#4B5768] whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Remarks Link */}
          <div className="text-center pt-2">
            <a href="#" className="font-bold text-xl leading-[25px] text-[#0072F2] underline">
              Remarks...
            </a>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block px-2">
          {/* Table Header */}
          <div className="mb-3 overflow-hidden shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]" style={{ borderRadius: '24px' }}>
            <div className="grid grid-cols-4 bg-[#F0FAFF] h-[88px] font-bold text-3xl leading-[35px] text-[#0072F2]">
              <div className="text-start flex items-center justify-center px-10">Comprehensive Health</div>
              <div className="text-center flex items-center justify-center">Benefits</div>
              <div className="text-center flex items-center justify-center">{planDetails.name}</div>
              <div className="text-center flex items-center justify-center">Remarks</div>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mb-1">
            <div className="grid grid-cols-4">
              <div className="p-6 bg-[#D1F0FF] rounded-tl-3xl font-semibold leading-[30px] text-custom-dark-text text-2xl row-span-4 flex items-center justify-center">
                Eligibility
              </div>
              <div className="col-span-3 ">
                {planDetails.eligibility.map((item, index) => (
                  <div key={index} className={`grid grid-cols-3 bg-[#D1F0FF] ${index !== planDetails.eligibility.length - 1 ? 'border-b border-[#178FE5]/50' : ''}`}>
                    <div className="font-normal text-xl leading-[26px] flex items-center justify-start pl-7 text-custom-dark-text border-l border-[#178FE5]/50">{item.label}</div>
                    <div className="p-4 text-center text-custom-dark-text whitespace-pre-line border-l border-[#178FE5]/50 flex items-center justify-center">{item.value}</div>
                    <div className="p-4 flex items-end justify-center text-center text-base font-normal text-custom-dark-text border-l border-[#178FE5]/50">{planDetails.eligibilityRemarks[index] || ''}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Health Wallet Highlight */}
          {planDetails.wellness.find(item => item.highlight) && (
            <div className="grid grid-cols-4 bg-[#0077FC]/50 text-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mb-1">
              <div className="p-6 font-semibold leading-[30px] text-custom-dark-text text-2xl row-span-1 flex items-center justify-center">
                {/* Empty for alignment */}
              </div>
              {planDetails.wellness.filter(item => item.highlight).map((item, index) => (
                <>
                  <div key={`highlight-label-${index}`} className="font-normal text-xl leading-[26px] flex items-center justify-start pl-7 text-white border-l border-[#178FE5]/50">{item.label}</div>
                  <div key={`highlight-value-${index}`} className="p-4 text-center flex items-center justify-center text-white whitespace-pre-line border-l border-[#178FE5]/50">{item.value}</div>
                  <div key={`highlight-remark-${index}`} className="p-4 flex items-center justify-center text-center text-base font-normal text-white border-l border-[#178FE5]/50">{item.remark}</div>
                </>
              ))}
            </div>
          )}

          {/* Wellness Section */}
          <div className="shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mb-1">
            <div className="grid grid-cols-4">
              <div className="p-6 bg-[#F2ECFF] font-semibold leading-[30px] text-custom-dark-text text-2xl flex items-center justify-center " style={{ gridRow: `span ${planDetails.wellness.filter(item => !item.highlight).length}` }}>
                Wellness
              </div>
              <div className="col-span-3">
                {planDetails.wellness.filter(item => !item.highlight).map((item, index, arr) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 bg-[#F2ECFF] ${index !== arr.length - 1 ? 'border-b border-[#178FE5]/50' : ''}`}
                  >
                    <div className="font-normal text-xl leading-[26px] flex items-center justify-start pl-7 text-custom-dark-text border-l border-[#178FE5]/50 py-4">{item.label}</div>
                    <div className="p-4 flex items-center justify-center text-custom-dark-text whitespace-pre-line border-l border-[#178FE5]/50">{item.value}</div>
                    <div className="p-4 flex items-center justify-center text-center text-base font-normal text-custom-dark-text border-l border-[#178FE5]/50">{item.remark}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insurance Section */}
          <div className='shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>
            <div className="grid grid-cols-4">
              <div className="p-6 bg-[#EADFFF] font-semibold text-center rounded-bl-24 leading-[30px] text-custom-dark-text text-2xl flex items-center justify-center" style={{ gridRow: `span ${planDetails.insurance.length}` }}>
                Complementary Insurance Cover
              </div>
              <div className="col-span-3 bg-[#EADFFF]">
                {planDetails.insurance.map((item, index, arr) => (
                  <div key={index} className={`grid grid-cols-3 ${index !== arr.length - 1 ? 'border-b border-[#178FE5]/50' : ''}`}>
                    <div className="font-normal text-xl leading-[26px] flex items-center justify-start pl-7 text-custom-dark-text border-l border-[#178FE5]/50 py-4">{item.label}</div>
                    <div className="p-4 text-center flex items-center justify-center text-custom-dark-text border-l border-[#178FE5]/50 whitespace-pre-line">{item.value}</div>
                    <div className="p-4 text-base flex items-center justify-center text-center text-custom-dark-text border-l border-[#178FE5]/50">{item.remark}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTable;
