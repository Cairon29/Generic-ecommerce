import { useContext } from "react";
import { FilterContext } from "../../contexts/filters";
import { HeaderSection } from "./HeaderSection";

export const Header = () => {
  
  const { setFilter } = useContext(FilterContext);

  const handleInputSearch = (e) => {
    setFilter((prev) =>( {
      ...prev, 
      search: e.target.value.toLowerCase(),
    }))
  }

  return (
    <HeaderSection hdlInput={handleInputSearch}/>
  )
}
