const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red bg-coral-red text-white"} ${fullWidth && "w-full"}`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right"
          className="ml-2 grid h-5 w-5 place-items-center rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
