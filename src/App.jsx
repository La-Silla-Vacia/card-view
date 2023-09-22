import { Container } from "@mui/material";
// import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import initialFilters from "./utils/initialFilters";
import parseData from "./utils/parseData";
// import example from "./assets/example.json";
import useGoogleSheets from "use-google-sheets";
import { useEffect, useState } from "react";
import CardsView from "./components/card";

function App() {
  const script = document.getElementById("dinatar-module");
  const [dataset, setDataset] = useState({ profiles: [], colors: [] });
  const [filters, setFilters] = useState(initialFilters(script?.getAttribute("data-filters")));
  const settings = {
    document: script?.getAttribute("data-document"),
    sheet: script?.getAttribute("data-sheet"),
    with_colors: script?.getAttribute("data-with-colors") ? true : false,
    get_only: script?.getAttribute("data-get-only"),
  };
  // const data = example;
  // const loading = true;
  const { data, loading } = useGoogleSheets({
    apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
    sheetId: settings.document,
  });

  const handleChangeFilters = (filterName, value) => {
    const newFilters = filters.map((filter) => {
      if (filter.label === filterName) {
        return { ...filter, value: value };
      } else {
        return filter;
      }  
    });

      setDataset(parseData(setFilters, newFilters, data, settings))
    setFilters(newFilters);
  };


  // useEffect(() => {
  // }, [filters, data, settings])

  useEffect(() => {
    if(!loading){
      setDataset(parseData(setFilters, filters, data, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])



  return (
    <Container maxWidth={"md"}>
      <Filters filters={filters} loading={loading} setFilters={handleChangeFilters} />
      <CardsView dataset={dataset} loading={loading} />
    </Container>
  );
}

export default App;
