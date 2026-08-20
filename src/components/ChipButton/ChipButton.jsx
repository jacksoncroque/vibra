const ChipButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={` inline-flex max-w-fit items-center gap-3 rounded-full bg-white px-4 py-2 text-[14px] font-semibold leading-tight text-[#171717] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ChipButton;
