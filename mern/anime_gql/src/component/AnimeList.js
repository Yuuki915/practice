import { useQuery } from "@apollo/client";
import { getAnimeQuery } from "../queries/queries";

function AnimeList() {
  const { loading, error, data } = useQuery(getAnimeQuery);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  //   console.log(data.animes);
  return data.animes.map((anime) => <div key={anime.id}>{anime.name}</div>);
}
export default AnimeList;
