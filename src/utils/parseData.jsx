import filtersAndOptions from "./getFiltersAndOptions";

export default function parseData(setFilters, filtersInit, data, settings) {
  const parsedData = data.find((item) => item.id === settings.sheet);

  if(parsedData){
    const only = settings.get_only
      ? settings.get_only.split("|").map((item) => {
          const [key, value] = item.split(":");
          return { key, value };
        })
      : null;
  
    let to_res = {
      profiles: only ? parsedData?.data?.filter((item) => {
        return only.every((filter) => {
          return item[filter.key] === filter.value;
        });
      }) : parsedData?.data ,
      colors: settings.with_colors
        ? data.find((item) => item.id === "Colors").data
        : [],
    };
  
    to_res.profiles = to_res.profiles.filter((item) => {
      return filtersInit.every((filter) => {
        return filter.value === "all" || filter.value === item[filter.label];
      }
    )})
  
    setFilters(filtersAndOptions(filtersInit, to_res.profiles))
  
    return to_res
  }else {
    return {
      profiles: [],
      colors: [],
    }
  }

}
