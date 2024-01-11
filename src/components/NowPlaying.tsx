import { useEffect, useState } from "react";
import Button from "./Button";
import { ChevronsRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Card from "./Card";
import { getMoviesNowPlaying } from "@/lib/apis/movie/api";
import { Movie } from "@/lib/apis/movie/types";

const NowPlaying = () => {
  const [data, setData] = useState<Movie[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getMoviesNowPlaying();
    setData(result.results);
  };

  return (
    <div className="container space-y-4">
      <div className="flex justify-between items-center">
        <h1 className=" font-bold text-2xl text-[#E8EAED]">Now Playing</h1>
        <Button size="small">
          view all
          <ChevronsRight />
        </Button>
      </div>
      <Swiper
        id="card-swiper-color"
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}>
        {data?.map((data) => (
          <SwiperSlide key={data.id}>
            <Card id={data.id} image={data.poster_path} title={data.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NowPlaying;
