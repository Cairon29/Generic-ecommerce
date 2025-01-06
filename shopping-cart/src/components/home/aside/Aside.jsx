import { useContext } from "react";
import { FilterContext } from "../../../contexts/filters";
import { FilterSection } from "./FilterSection";
import './home-aside-styles.css';

export const Aside = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleRange = (e) => {
    setFilter((prev) => ({
      ...prev,
      minPrice: e.target.value
    }));
  };

  const handleCategoryChange = (e) => {
    setFilter((prev) => ({
      ...prev,
      category: e.target.value
    }));
  };

  return (
    <FilterSection
      hdlCategory={handleCategoryChange}
      hdlRange={handleRange}
    />
  );
};
