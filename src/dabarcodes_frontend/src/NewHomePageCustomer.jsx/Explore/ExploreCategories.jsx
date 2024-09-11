import ExploreItems from "./ExploreItems";
import { useData } from "../../ContextApi/DataContext";
// const categories = [
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },

//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },

//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },

//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
//   { id: 2, name: "Beverages", logo: "/image/category.png" },
// ];
// const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://api.example.com/categories'); // Replace with your actual API
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

const ExploreCategories = () => {
    const { exploreCategory} =
    useData();
  return <ExploreItems title="Explore by Category" items={exploreCategory} />;
};

export default ExploreCategories;
