const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`w-fit py-3 px-5 rounded-4xl cursor-pointer flex items-center gap-2 text-[14px] font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
