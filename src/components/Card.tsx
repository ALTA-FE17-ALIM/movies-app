import { Component } from "react";
import { Link } from "react-router-dom";

interface IpropsCard {
  id: number;
  title: string;
  image: string;
}
export default class Card extends Component<IpropsCard> {
  render() {
    const { id, title, image } = this.props;

    return (
      <Link
        to={`/detail/${id}`}
        className="flex flex-col gap-y-4 rounded-xl overflow-hidden font-ubuntu">
        <img src={`${image}`} alt="image" />
        <div className="flex flex-col gap-y-2 text-[#E8EAED]  text-center">
          <h4 className="whitespace-nowrap overflow-clip text-lg font-semibold tracking-tight">
            {title}
          </h4>
        </div>
      </Link>
    );
  }
}
