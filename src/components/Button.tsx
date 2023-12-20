import { cn } from "@/lib/utils";
import { Component, ReactNode } from "react";
interface IButton {
  children: ReactNode;
  variant?: "primary" | "secondary";
}
export default class Button extends Component<IButton> {
  render() {
    const { children, variant = "primary" } = this.props;
    const classesButton = variant === "primary" ? "bg-buttonColor" : "bg-buttonColor2";
    const classesHover = variant === "primary" ? "bg-buttonColor2" : "bg-buttonColor";
    return (
      <button
        className={cn(
          classesButton,
          "px-[18px] py-[10px] rounded-lg text-sm flex items-center gap-x-3 font-semibold relative justify-center overflow-hidden text-white group"
        )}>
        <span
          className={cn(
            classesHover,
            "absolute w-0 h-0 transition-all duration-300 ease-in rounded-full group-hover:w-56 group-hover:h-56"
          )}></span>
        <div className="relative flex items-center gap-x-2 uppercase">{children}</div>
      </button>
    );
  }
}
