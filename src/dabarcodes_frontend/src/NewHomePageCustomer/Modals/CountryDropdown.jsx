import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const CountryDropdown = ({ selectedCountry, onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedCountries = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.svg,
          languages: Object.values(country.languages || {}),
        }));

        setCountries(formattedCountries);
        setFilteredCountries(formattedCountries); // Set filtered list initially
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleCountryChange = (country) => {
    onCountryChange(country);
    applyFontForLanguage(country.languages); // Change the body font
    setOpenDropdown(false); // Close the dropdown after selection
  };

  // Dynamically change the body font based on the selected language
  const applyFontForLanguage = (languages) => {
    const body = document.body;

    // Clear any existing inline font-family styling
    body.style.fontFamily = "";

    if (languages.includes("Arabic")) {
      body.style.fontFamily = "'Amiri', serif"; // Arabic font
    } else if (languages.includes("Chinese")) {
      body.style.fontFamily = "'Noto Sans SC', sans-serif"; // Chinese font
    } else if (languages.includes("Hindi")) {
      body.style.fontFamily = "'Noto Sans Devanagari', sans-serif"; // Hindi font
    } else if (languages.includes("Russian")) {
      body.style.fontFamily = "'Roboto Slab', serif"; // Russian font
    } else {
      body.style.fontFamily = "'Arial', sans-serif"; // Default fallback font
    }
  };

  // Handle search query change and filter countries
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="relative dropdown">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-700"
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className="w-6 h-6 rounded-full"
        />
        <MdKeyboardArrowDown size={20} className="text-gray-500" />
      </button>

      {openDropdown && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg right-0 w-40 z-10 max-h-60 overflow-y-auto">
          {/* Search Input */}
          <div className="p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search country..."
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <ul className="max-h-40 overflow-y-auto">
            {filteredCountries.map((country) => (
              <li
                key={country.code}
                className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountryChange(country)}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5 rounded-full"
                />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
// import React, { useEffect, useState } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const CountryDropdown = ({ selectedCountry, onCountryChange }) => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch("https://restcountries.com/v3.1/all");
//         const data = await response.json();

//         const formattedCountries = data.map((country) => ({
//           name: country.name.common,
//           code: country.cca2,
//           flag: country.flags.svg,
//           languages: Object.values(country.languages || {}),
//         }));

//         setCountries(formattedCountries);
//         setFilteredCountries(formattedCountries); // Set filtered list initially
//       } catch (error) {
//         console.error("Error fetching country data:", error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const toggleDropdown = () => {
//     setOpenDropdown((prev) => !prev);
//   };

//   const handleCountryChange = (country) => {
//     onCountryChange(country);
//     applyFontForLanguage(country.languages); // Change the body font
//     setOpenDropdown(false); // Close the dropdown after selection
//   };

//   const applyFontForLanguage = (languages) => {
//     const html = document.documentElement;

//     // Clear any existing font-family styling
//     html.style.fontFamily = "";

//     // Define font families for specific alphabets/languages
//     const languageFonts = {
//       Arabic: "'Amiri', serif",
//       Chinese: "'Noto Sans SC', sans-serif",
//       Hindi: "'Noto Sans Devanagari', sans-serif",
//       Russian: "'Roboto Slab', serif",
//       Default: "'Arial', sans-serif",
//     };

//     // Check if the language matches any specific alphabet
//     if (languages.includes("Arabic")) {
//       html.style.fontFamily = languageFonts.Arabic;
//     } else if (languages.includes("Chinese")) {
//       html.style.fontFamily = languageFonts.Chinese;
//     } else if (languages.includes("Hindi")) {
//       html.style.fontFamily = languageFonts.Hindi;
//     } else if (languages.includes("Russian")) {
//       html.style.fontFamily = languageFonts.Russian;
//     } else {
//       html.style.fontFamily = languageFonts.Default; // Fallback font
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = countries.filter((country) =>
//       country.name.toLowerCase().includes(query)
//     );
//     setFilteredCountries(filtered);
//   };

//   return (
//     <div className="relative dropdown">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center space-x-1 text-gray-700"
//       >
//         <img
//           src={selectedCountry.flag}
//           alt={selectedCountry.name}
//           className="w-6 h-6 rounded-full"
//         />
//         <MdKeyboardArrowDown size={20} className="text-gray-500" />
//       </button>

//       {openDropdown && (
//         <div className="absolute mt-2 bg-white border rounded-md shadow-lg right-0 w-40 z-10 max-h-60 overflow-y-auto">
//           {/* Search Input */}
//           <div className="p-2">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search country..."
//               className="w-full p-1 border border-gray-300 rounded"
//             />
//           </div>
//           <ul className="max-h-40 overflow-y-auto">
//             {filteredCountries.map((country) => (
//               <li
//                 key={country.code}
//                 className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleCountryChange(country)}
//               >
//                 <img
//                   src={country.flag}
//                   alt={country.name}
//                   className="w-5 h-5 rounded-full"
//                 />
//                 <span>{country.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountryDropdown;
