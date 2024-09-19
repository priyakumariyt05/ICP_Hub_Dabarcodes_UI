import StoreMap from "./StoreMap";
import { useData } from "../../ContextApi/DataContext";
import SortFilterSection from "../SortFilterSection";
import TopSkuGrid from "../TopSkuGrid";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

const storeData = {
  name: "Store Name",
  address: "10493 Maple Avenue, Bogalusa, LA 65131-4419",
  openStatus: "Open",
  openTime: "until 11 pm",
  coords: [51.505, -0.09], // Latitude and Longitude for London example
};

function Store() {
     const {topSku} = useData();
      const sortOptions1 = [
        {value: "price-asc", label: "Price: Low to High"},
        {value: "price-desc", label: "Price: High to Low"},
        {value: "rating", label: "Rating"},
      ];

      const filterOptions1 = [
        {value: "category1", label: "Category 1"},
        {value: "category2", label: "Category 2"},
        {value: "category3", label: "Category 3"},
      ];
  return (
    <div>
    <Navbar2/>
      <StoreMap store={storeData} />
      <SortFilterSection
        title="Available Products"
        sortOptions={sortOptions1}
        filterOptions={filterOptions1}
      />
      <TopSkuGrid products={topSku} />
      <Footer/>
    </div>
  );
}

export default Store;