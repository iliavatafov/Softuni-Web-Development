import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { CatalogCard } from "./CatalogCard";

export const Catalog = () => {
  const { games } = useContext(GameContext);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0 ? (
        games.map((x) => <CatalogCard key={x._id} game={x} />)
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
};
