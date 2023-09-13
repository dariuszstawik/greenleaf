export default function SectionTitle({ children, isWhite, isAlignedLeft }) {
  return (
    <div className="m-6 flex flex-col justify-center items-center gap-2">
      <p className="text-primaryGreen text-lg">Green Leaf Power</p>
      <h2
        className={`${isAlignedLeft ? "text-left" : "text-center"} ${
          isWhite && "text-white"
        }`}
      >
        {" "}
        {children}
      </h2>
      <div
        className={`mt-4 w-28 h-1 rounded-sm ${
          isWhite ? "bg-white" : "bg-primaryGreen"
        }`}
      />
    </div>
  );
}
