import { LogIn, Sun } from "lucide-react";
import { Component } from "react";
import SearchComboBox from "./SearchComboBox";
import Button from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div className="w-full h-[82px] flex items-center bg-bgBodyColor font-ubuntu">
        <div className="container mx-auto flex items-center text-white gap-x-4">
          <img
            src="https://live.themewild.com/moplay/assets/img/logo/logo.png"
            alt="logo"
            width={175}
          />
          <ul className="flex items-center justify-center gap-x-10 flex-grow font-semibold text-[17px] text-headingColor">
            <li className="hover:cursor-pointer hover:text-buttonColor duration-300">Home</li>
            <li className="hover:cursor-pointer hover:text-buttonColor duration-300">Genre</li>
            <li className="hover:cursor-pointer hover:text-buttonColor duration-300">Country</li>
            <li className="hover:cursor-pointer hover:text-buttonColor duration-300">Movies</li>
            <li className="hover:cursor-pointer hover:text-buttonColor duration-300">Tv Shows</li>
          </ul>
          <div className="flex items-center gap-x-8">
            <SearchComboBox />
            <Sun className="w-[20px] h-[20px] hover:cursor-pointer hover:text-buttonColor duration-300" />
            <Button>
              <LogIn className="w-4 h-4  " /> SIGN IN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
