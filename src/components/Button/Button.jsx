const Button = ({ children, className = "", href, target, rel, ...props }) => {
  const classes = `w-fit py-3 px-5 rounded-full md:rounded-4xl cursor-pointer flex items-center gap-2 text-[14px] font-bold ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
