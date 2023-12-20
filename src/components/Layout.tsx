import { Component, ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  }
}
