import { Container } from "@mui/material";
// import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Filters from "./components/Filters";
import initialFilters from "./utils/initialFilters";
import parseData from "./utils/parseData";
// import example from "./assets/example.json";
import useGoogleSheets from "use-google-sheets";
import { useEffect, useState } from "react";
import CardsView from "./components/card";

function App() {
  const [dataset, setDataset] = useState({ profiles: [], colors: [] });
  const script = document.getElementById("dinatar-module");
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



  const filtersInit = initialFilters(script?.getAttribute("data-filters"));

  const {
    control,
    // handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      filters: filtersInit,
    },
  });

  useEffect(() => {
    if(!loading){
      setDataset(parseData(reset, filtersInit, data, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])


  const { fields } = useFieldArray({
    control,
    name: "filters",
  });

  return (
    <Container maxWidth={"md"}>
      <Filters filters={fields} loading={loading} />
      <CardsView dataset={dataset} loading={loading} />
    </Container>
  );
}

export default App;
