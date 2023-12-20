import { ArrowLeft, ArrowRight, Play, Star } from "lucide-react";
import { Component } from "react";
import { Badge } from "./ui/badge";
import Button from "./Button";

export default class NewRelease extends Component {
  render() {
    return (
      <div className=" relative h-[600px] overflow-hidden font-ubuntu">
        <div className="flex justify-between absolute z-10 w-full items-center h-full px-10 bg-gradient-to-b from-transparent to-black/50 ">
          <button className="w-[55px] h-[55px] rounded-full bg-[#ffffff33] text-white flex items-center justify-center hover:bg-white group">
            <ArrowLeft className="group-hover:text-buttonColor" />
          </button>
          <button className="w-[55px] h-[55px] rounded-full bg-[#ffffff33] text-white flex items-center justify-center">
            <ArrowRight />
          </button>
        </div>
        <div className="flex h-[600px] relative ">
          <img
            src="https://live.themewild.com/moplay/assets/img/slider/slider-2.jpg"
            alt="image"
            className="w-full shrink-0  object-cover  "
          />
          <img
            src="https://live.themewild.com/moplay/assets/img/slider/slider-1.jpg"
            alt="image"
            className="w-full  shrink-0 object-cover "
          />
          <div className="absolute container w-full top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-white flex z-20">
            <div className="w-1/2 gap-y-5 flex flex-col">
              <div className="bg-buttonColor rounded-xl px-2 w-fit">
                <h3 className="text-xl font-bold tracking-[6px] uppercase">New Release 2023</h3>
              </div>
              <h1 className="text-[45px] font-bold uppercase ">Harry Potter Hogwarts Legacy</h1>
              <div className="flex items-center gap-x-4 text-lg">
                <Badge className="bg-buttonColor text-base gap-x-1 ">
                  <Star /> 9.2
                </Badge>
                <span>IMDB</span>
                <span>2023</span>
                <span>3h 15min</span>
                <span>Magic, fantasy</span>
              </div>
              <p className="text-lg ">
                There are many variations of passages orem psum available but the majority have
                suffered alteration in some repeat predefined chunks form injected humour.
              </p>
              <div className="flex gap-x-3 items-center">
                <Button>
                  <Play /> play now
                </Button>
                <Button variant="secondary">more details</Button>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <div className="flex flex-col gap-y-3 items-center ">
                <div className="w-[80px] h-[80px] bg-buttonColor rounded-full flex items-center justify-center animate-pulsee ">
                  <Play className="w-[40px] h-[40px] " />
                </div>
                <span className="text-xl tracking-widest font-bold">Watch Trailer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
