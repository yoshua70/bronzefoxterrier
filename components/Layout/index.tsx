import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children?: JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center bg-slate-200 dark:bg-slate-900 dark:text-slate-200">
        <Navbar />
        <div className="flex flex-col gap-8 w-full md:w-8/12 px-2 py-4 ">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
