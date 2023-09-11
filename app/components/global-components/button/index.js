export default function Button({ children, className }) {
  return (
    <button
      className={`inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-primaryGreen hover:bg-secondaryGreen text-gray-50 font-bold leading-loose transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
