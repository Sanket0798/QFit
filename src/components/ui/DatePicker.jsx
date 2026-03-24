import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';

// Custom input styled to match the form fields
const CustomInput = forwardRef(({ value, onClick, placeholder, className }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className={`w-full text-left px-4 py-3 border border-[#D0D0D0] rounded-full focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-[#F8FCFF] text-sm ${value ? 'text-custom-dark-text' : 'text-[#58626C]'} ${className || ''}`}
  >
    {value || placeholder}
  </button>
));
CustomInput.displayName = 'CustomInput';

const DatePicker = ({ value, onChange, placeholder = 'DD/MM/YYYY', className, maxDate, minDate }) => {
  const selected = value ? new Date(value) : null;

  return (
    <>
      <style>{`
        .qfit-datepicker .react-datepicker {
          font-family: inherit;
          border: none;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          overflow: hidden;
        }
        .qfit-datepicker .react-datepicker__header {
          background: linear-gradient(135deg, #7C3AED, #0072F2);
          border: none;
          padding: 16px 0 8px;
          border-radius: 0;
        }
        .qfit-datepicker .react-datepicker__current-month {
          color: white;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .qfit-datepicker .react-datepicker__day-name {
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          font-size: 12px;
          width: 2rem;
          line-height: 2rem;
        }
        .qfit-datepicker .react-datepicker__navigation-icon::before {
          border-color: white;
        }
        .qfit-datepicker .react-datepicker__navigation:hover *::before {
          border-color: rgba(255,255,255,0.7);
        }
        .qfit-datepicker .react-datepicker__month-select,
        .qfit-datepicker .react-datepicker__year-select {
          background: rgba(255,255,255,0.15);
          color: white;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          outline: none;
        }
        .qfit-datepicker .react-datepicker__month-select option,
        .qfit-datepicker .react-datepicker__year-select option {
          background: #7C3AED;
          color: white;
        }
        .qfit-datepicker .react-datepicker__day {
          width: 2rem;
          line-height: 2rem;
          border-radius: 50%;
          font-size: 13px;
          color: #374151;
          transition: background 0.15s;
        }
        .qfit-datepicker .react-datepicker__day:hover {
          background: #EDE9FE;
          border-radius: 50%;
          color: #7C3AED;
        }
        .qfit-datepicker .react-datepicker__day--selected,
        .qfit-datepicker .react-datepicker__day--keyboard-selected {
          background: #7C3AED;
          color: white !important;
          border-radius: 50%;
          font-weight: 700;
        }
        .qfit-datepicker .react-datepicker__day--today {
          font-weight: 700;
          color: #0072F2;
        }
        .qfit-datepicker .react-datepicker__day--outside-month {
          color: #D1D5DB;
        }
        .qfit-datepicker .react-datepicker__month-container {
          background: white;
        }
        .qfit-datepicker .react-datepicker__triangle {
          display: none;
        }
        .qfit-datepicker .react-datepicker-popper {
          z-index: 50;
        }
      `}</style>
      <div className="qfit-datepicker w-full">
        <ReactDatePicker
          selected={selected}
          onChange={(date) => onChange(date ? date.toISOString().split('T')[0] : '')}
          customInput={<CustomInput placeholder={placeholder} className={className} />}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          maxDate={maxDate}
          minDate={minDate}
          placeholderText={placeholder}
          popperPlacement="bottom-start"
        />
      </div>
    </>
  );
};

export default DatePicker;
