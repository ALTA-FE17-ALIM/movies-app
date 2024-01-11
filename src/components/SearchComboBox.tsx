/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchComboBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <Search className="w-[20px] h-[20px] hover:cursor-pointer hover:text-buttonColor duration-300" />
      </PopoverTrigger>
      <PopoverContent className="mt-6 -translate-x-32 z-20">
        <div className=" p-3 w-[340px] rounded-[10px] bg-[#131722] border border-slate-800 shadow-lg">
          <Input
            placeholder="Type Keyword..."
            className={
              "text-white bg-[#131722]  focus-visible:ring-0 focus-visible::ring-offset-0  border-slate-600 "
            }
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchComboBox;
