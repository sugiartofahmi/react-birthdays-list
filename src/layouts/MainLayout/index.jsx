const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-[#D09CFA]">
      {children}
    </main>
  );
};

export default MainLayout;
