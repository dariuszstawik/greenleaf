const PageHeader = ({ children }) => {
  return (
    <div
      className="mt-28 relative w-screen px-32 py-20 bg-primary flex after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primaryGreen after:opacity-50"
      style={{
        backgroundImage: 'url("/leaves_texture.png")',
        backgroundPosition: "center",
      }}
    >
      <hi className="text-4xl lg:text-5xl text-white z-20">{children}</hi>
    </div>
  );
};

export default PageHeader;
