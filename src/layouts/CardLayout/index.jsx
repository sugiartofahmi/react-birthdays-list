const CardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-auto w-[70vh] p-8 rounded-lg bg-[#A555EC] gap-y-5 ">
      {children}
    </div>
  );
};

export default CardLayout;
