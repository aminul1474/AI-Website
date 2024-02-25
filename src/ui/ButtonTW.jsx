import { Link } from "react-router-dom";

function Button({ children, to, type, onClick }) {
  const base =
    " inline-block text-sm rounded-full bg-yellow-400  font-semibold transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-blue-400 disabled:cursor-not-allowed ";
  const style = {
    small: base + "px-2 py-1.5 sm:px-3 sm:py-2",
    medium: base + "px-3 py-2 sm:px-5 sm:py-3",
    big: base + "px-4 py-3 sm:px-6 sm:py-4",
    secondary:
      "px-2 text-sm py-1.5 sm:px-3 sm:py-2 inline-block rounded-full border-2 border-stone-300 font-semibold transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-blue-400 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );

  return <button className={style[type]}>{children}</button>;
}

export default Button;
