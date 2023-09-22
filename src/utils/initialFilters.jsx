export default function initialFilters(filters) { 
  return filters.split(",").map((filter) => {
    return {
      label: filter,
      value: "all",
      options: [],
    }
  })
}
