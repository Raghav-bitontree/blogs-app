import Header from "@/components/header";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
