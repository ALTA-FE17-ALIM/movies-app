import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getDetailMovie, getSimilarMovies } from "@/lib/apis/movie/api";
import { Movie, MovieDetail } from "@/lib/apis/movie/types";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Bookmark, ChevronsRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useFavoriteMovies } from "@/lib/contexts/favorite";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const DetailMovie = () => {
  const { toast } = useToast();
  const { addFavorite, deleteFavoriteByTitle } = useFavoriteMovies();
  const [data, setData] = useState<MovieDetail>();
  const [dataSimiliar, setDataSimiliar] = useState<Movie[]>([]);
  const { id } = useParams();

  useEffect(() => {
    getMovie();
    getSimiliar();
  }, [id]);

  const getMovie = async () => {
    try {
      const result = await getDetailMovie(id!);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getSimiliar = async () => {
    try {
      const result = await getSimilarMovies(id!);
      setDataSimiliar(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = () => {
    const temp = {
      image: data?.poster_path as string,
      title: data?.title as string,
    };
    const result = addFavorite(temp);
    if (result !== undefined) {
      toast({
        title: "Failed add to favorites",
        description: result,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Add to Favorite",
        description: "Film Added to Favorite",
        action: (
          <ToastAction
            altText="Go to favorite undo"
            onClick={() => deleteFavoriteByTitle(data?.title as string)}>
            undo
          </ToastAction>
        ),
      });
    }
  };
  return (
    <Layout>
      <div className="container font-ubuntu space-y-10 py-10">
        {data && data.videos.results.length > 0 ? (
          <div className="bg-[#131722] p-7 rounded-2xl text-white">
            <iframe
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allowFullScreen
              className="w-full h-[500px] rounded-xl"></iframe>
          </div>
        ) : null}
        <div className="flex gap-x-8 bg-[#131722] rounded-2xl p-7 text-white items-start">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt="image"
            className="rounded-[20px] h-[350px] object-cover"
          />
          <div className="flex flex-col flex-grow gap-y-6">
            <h2 className="font-semibold text-2xl">{data?.title}</h2>
            <p className="text-base text-bodyTextColor">{data?.overview}</p>
            <div className="flex flex-col gap-y-4">
              <p className="space-x-2 ">
                <span className="font-semibold">Genre : </span>
                {data?.genres.map((data) => (
                  <span key={data.id} className="text-buttonColor">
                    {data.name},
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold">Released :</span> {data?.release_date}
              </p>
              <p>
                <span className="font-semibold">Duration :</span> {data?.runtime} min
              </p>
              {data && data?.production_countries.length > 0 ? (
                <p>
                  <span className="font-semibold">Country : </span>
                  {data.production_countries[0].name}
                </p>
              ) : null}
              {data?.tagline ? (
                <span className="text-bodyTextColor font-semibold text-xl">#{data.tagline}</span>
              ) : null}
            </div>
          </div>
          <Button onClick={addToFavorite}>
            <Bookmark />
          </Button>
        </div>

        {dataSimiliar.length > 0 ? (
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-white font-semibold text-2xl">Similiar Movies</h1>
              <Button variant="primary" size="small">
                View All
                <ChevronsRight />
              </Button>
            </div>
            <div className="grid grid-cols-5 gap-x-4">
              {dataSimiliar?.slice(0, 5).map((data) => (
                <Link to={`/detail/${data.id}`} key={data.id}>
                  <Card id={data.id} image={data?.poster_path} title={data.title} />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default DetailMovie;
