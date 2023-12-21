import { Component } from "react";
import { Badge } from "./ui/badge";
import Button from "./Button";
import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { IdummyData } from "@/lib/dummy-movie/type.";

export default class Carousel extends Component<IdummyData> {
  render() {
    const { title, id, image, release_date, overview, rating, duration, genre, director } =
      this.props;

    return (
      <div className="relative min-w-full flex ">
        <div className="bg-black/50 h-full fixed inset-x-0"></div>
        <img src={`${image}`} alt="image" className="h-[600px] w-full object-cover " />
        <div className="absolute container w-full top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-white flex z-50">
          <div className="w-1/2 gap-y-5 flex flex-col">
            <div className="bg-buttonColor rounded-xl px-2 w-fit">
              <h3 className="text-xl font-bold tracking-[6px] uppercase">New Release 2023</h3>
            </div>
            <h1 className="text-[45px] font-bold uppercase ">{title}</h1>
            <div className="flex items-center gap-x-4 text-lg">
              <Badge className="bg-buttonColor text-base gap-x-1 hover:bg-buttonColor2">
                <Star /> {rating}
              </Badge>
              <span>IMDB</span>
              <span className="">{director}</span>
              <span className="">{genre}</span>
              <span>{duration}min</span>
              <span>{release_date}</span>
            </div>
            <p className="text-lg ">{overview}</p>
            <div className="flex gap-x-3 items-center">
              <Button>
                <Play /> play now
              </Button>
              <Link to={`detail/${id}`}>
                <Button variant="secondary">more details</Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-y-3 items-center ">
              <button className="w-[80px] h-[80px] bg-buttonColor rounded-full flex items-center justify-center animate-pulsee cursor-pointer">
                <Play className="w-[40px] h-[40px] " />
              </button>
              <span className="text-xl tracking-widest font-bold">Watch Trailer</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
