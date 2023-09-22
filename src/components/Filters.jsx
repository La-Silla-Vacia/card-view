import { FormControl, Grid, MenuItem, Select, Skeleton } from "@mui/material";
import { LabelFilter } from "./shared/filterLabel";

export default function Filters({ filters }) {
  return (
    <Grid container spacing={2} alignItems="flex-end" mt={2}>
      {filters.map((filter, index) => (
        <Grid item xs={12} md={6} lg={4} key={`Filter-${index}`}>
          <FormControl fullWidth>
            <LabelFilter gutterBottom>{filter.label}</LabelFilter>

            {filter.options.length == 0 ? (
              <Skeleton variant="rectangular" width="100%" height={40} />
            ) : (
              <Select
                onChange={() => console.log("change")}
                fullWidth
                value={"all"}
                size="small"
              >
                <MenuItem value="all" selected>
                  <em>Todos</em>
                </MenuItem>
                {filter.options.map((option, index) => (
                  <MenuItem value={option} key={`FilterOption-${index}`}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
}
