import { Component } from "react";
import { getMovieUpComing } from "@/lib/apis/movie/api";
import { Movie } from "@/lib/apis/movie/types";
import Carousel from "./Carousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
interface IUpcomingMovie {
  data: Movie[];
}
export default class NewRelease extends Component {
  state: IUpcomingMovie = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const result = await getMovieUpComing();
    this.setState({ data: result.results });
  };
  render() {
    return (
      <div className="font-ubuntu">
        <Swiper
          id="swiper-color"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}>
          {this.state.data.slice(0, 10).map((data) => (
            <SwiperSlide>
              <Carousel
                key={data.id}
                id={data.id}
                poster_path={data.poster_path}
                overview={data.overview}
                title={data.title}
                vote_average={data.vote_average}
                release_date={data.release_date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
