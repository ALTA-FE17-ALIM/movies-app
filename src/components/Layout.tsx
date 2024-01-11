import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
