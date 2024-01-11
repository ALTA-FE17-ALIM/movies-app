import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface IpropsCard {
  id: number;
  title: string;
  image: string;
}

const Card = (props: IpropsCard) => {
  const { id, title, image } = props;

  return (
    <Link
      to={`/detail/${id}`}
      className="flex flex-col gap-y-4 rounded-xl overflow-hidden font-ubuntu">
      <div className="relative group overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="image"
          className="group-hover:scale-110 group-hover:blur-sm transition-transform duration-500"
        />
        <button className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-buttonColor rounded-full flex items-center justify-center  cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-500">
          <Play className="w-[25px] h-[25px] text-white" />
        </button>
      </div>

      <div className="flex flex-col gap-y-2 text-[#E8EAED]  text-center">
        <h4 className="whitespace-nowrap overflow-clip text-lg font-semibold tracking-tight">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default Card;
