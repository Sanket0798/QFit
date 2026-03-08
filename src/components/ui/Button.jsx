const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    // Purple button - main CTA style
    primary: 'bg-button-color text-white hover:bg-[#4a2470] shadow-lg hover:shadow-xl hover:scale-105',
    // White button with purple text
    'primary-white': 'bg-white text-button-color hover:bg-gray-100',
    // White button with purple text and scale effect
    'primary-white-scale': 'bg-white text-button-color hover:bg-gray-50 hover:scale-105',
    // Text link style (blue)
    'text-link': 'text-[#0072F2] font-semibold hover:underline',
    // Border button with icon
    'outline-icon': 'border border-[#EBEBEB] text-black hover:text-button-color',
    // Original variants (keep for backward compatibility)
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
    ghost: 'text-primary hover:bg-primary/10 active:scale-95',
    header: 'border border-brand text-brand text-lg font-medium leading-26 tracking-0 hover:bg-brand hover:text-white active:scale-95',
  };

  const sizes = {
    custom: '',
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-12 py-5 text-lg rounded-full',
    xl: 'px-12 py-4 text-lg rounded-full',
    header: 'px-6 py-2 rounded-full',
    // Special sizes
    'icon-md': 'px-6 py-3 text-base rounded-full',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Use header size if header variant is selected
  const buttonSize = variant === 'header' ? 'header' : size;

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[buttonSize]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
