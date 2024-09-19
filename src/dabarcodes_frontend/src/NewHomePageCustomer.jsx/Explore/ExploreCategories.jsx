import ExploreItems from "./ExploreItems";
import { useData } from "../../ContextApi/DataContext";


const ExploreCategories = () => {
    const { exploreCategory} =
    useData();
  return <ExploreItems title="Explore by Category" items={exploreCategory} />;
};

export default ExploreCategories;
