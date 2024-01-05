import { Component } from "react";
import Layout from "./Layout";
import withRouter from "@/withRouter";
import { getDetailMovie, getSimilarMovies } from "@/lib/apis/movie/api";
import { Movie, MovieDetail } from "@/lib/apis/movie/types";
import Button from "./Button";
import Card from "./Card";
import { ChevronsRight } from "lucide-react";

interface PropsDetailMovie {
  params: string;
}

interface StateDetailMovie {
  data: Partial<MovieDetail>;
  dataSimiliar: Movie[];
}
class DetailMovie extends Component<PropsDetailMovie, StateDetailMovie> {
  state: StateDetailMovie = {
    data: {},
    dataSimiliar: [],
  };

  getMovie = async () => {
    const result = await getDetailMovie(this.props.params);
    this.setState({ data: { ...result } });
  };
  getSimiliar = async () => {
    const result = await getSimilarMovies(this.props.params);
    this.setState({ dataSimiliar: result.results });
  };

  componentDidMount(): void {
    this.getMovie();
    this.getSimiliar();
  }
  render() {
    const { data, dataSimiliar } = this.state;
    return (
      <Layout>
        <div className="container font-ubuntu space-y-8 py-10">
          <div className="bg-[#131722] p-7 rounded-2xl text-white">
            <iframe
              src={`https://www.youtube.com/embed/${data.videos?.results[0].key}`}
              allowFullScreen
              className="w-full h-[500px] rounded-xl"></iframe>
          </div>
          <div className="flex gap-x-8 bg-[#131722] p-8 text-white ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt="image"
              className="rounded-[20px] h-[350px] object-cover"
            />
            <div className="flex flex-col flex-grow gap-y-6">
              <h2 className="font-semibold text-2xl">{data.title}</h2>
              <p className="text-base text-bodyTextColor">{data.overview}</p>
              <div className="flex flex-col gap-y-4">
                <p className="space-x-2 ">
                  <span className="font-semibold">Genre : </span>
                  {data.genres?.map((data) => (
                    <span key={data.id} className="text-buttonColor">
                      {data.name},
                    </span>
                  ))}
                </p>
                <p>
                  <span className="font-semibold">Released :</span> {data.release_date}
                </p>
                <p>
                  <span className="font-semibold">Duration :</span> {data.runtime}min
                </p>
                <p>
                  <span className="font-semibold">Country : </span>
                  {data.production_countries && data.production_countries[0].name}
                </p>
                <span className="text-bodyTextColor font-semibold text-xl">#{data.tagline}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-white font-semibold text-2xl">Similiar Movies</h1>
              <Button variant="primary" size="small">
                View All
                <ChevronsRight />
              </Button>
            </div>
            <div className="grid grid-cols-5 gap-x-4">
              {dataSimiliar.slice(0, 5).map((data) => (
                <div key={data.id}>
                  <Card id={data.id} image={data.poster_path} title={data.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(DetailMovie);
