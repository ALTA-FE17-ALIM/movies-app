import Button from "@/components/Button";
import Layout from "../../components/Layout";
import { useFavoriteMovies } from "@/lib/contexts/favorite";
import { Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ListFavorite = () => {
  const { toast } = useToast();
  const { favorites, deleteFavoriteByTitle } = useFavoriteMovies();
  return (
    <Layout>
      <div className="container py-10 ">
        {favorites.length > 0 ? (
          <div>
            <h1 className="text-white text-4xl font-semibold ">Favorites</h1>
            <div className="grid grid-cols-4 py-10 px-8  gap-8 ">
              {favorites.map((fav, index) => (
                <div
                  key={index}
                  className="relative space-y-3 rounded-xl overflow-hidden bg-slate-900 pb-4 shadow-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${fav.image}`}
                    className="w-full"
                    alt="image"
                  />
                  <div className="absolute top-0 right-5">
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => {
                        deleteFavoriteByTitle(fav.title),
                          toast({
                            title: "Delete Favorite",
                            description: ` ${fav.title} success deleted`,
                          });
                      }}>
                      <Bookmark />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-y-2 text-[#E8EAED]  text-center">
                    <h4 className="whitespace-nowrap overflow-clip text-lg font-semibold tracking-tight">
                      {fav.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg text-slate-300 italic font-semibold  text-center mt-16">
            Favorites list is empty..
          </p>
        )}
      </div>
    </Layout>
  );
};

export default ListFavorite;
