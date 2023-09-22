import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Skeleton, styled } from "@mui/material";
import ViewOptionCard from "./viewOptionCard";

const NameCard = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "start",
  color: "#3d3d3d",
  fontFamily: "Manrope",
  cursor: "pointer",
});

export default function CardsView({ dataset, loading }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const handleClickOpen = (card) => {
    setOpen(true);
    setSelected(card);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getColorByPArtido = (partido) => {
    return dataset.colors.find((item) => item.name === partido)?.value
      ? dataset.colors.find((item) => item.name === partido)?.value
      : "rgb(159, 155, 145)";
  };
  
  return (
    <>
      <ViewOptionCard open={open} handleClose={handleClose} selected={selected} />
      <Grid container spacing={2} mt={2} alignItems={"flex-end"}>
        { dataset.profiles.length > 0 &&  dataset.profiles.map((card, index) => (
          <Grid item xs={12} md={4} key={`CardProfile-${index}`}>
            <Card
              onClick={()=>handleClickOpen(card)}
              sx={{
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Avatar
                    alt={`${card.Nombres} ${card?.["Apellido 1"]} ${card?.["Apellido 2"]}`}
                    src={card?.Foto}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Box sx={{
                  minHeight: 50
                }}>
                  <NameCard variant="h5">{`${card.Nombres} ${card?.["Apellido 1"]} ${card?.["Apellido 2"]}`}</NameCard>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  p: "16px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  backgroundColor: getColorByPArtido(card?.['Partido']),
                }}
              >
                <Box
                  sx={{
                    margin: 0,
                    marginLeft: "0 !important",
                    fontFamily: "Manrope",
                    fontWeight: "700",
                    letterSpacing: "0.02857em",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  <Box>{card?.['Cargo que busca']}</Box>
                  <Box>{card?.['Partido']}</Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {loading && (
          <>
            {[...Array(6).keys()].map((item) => (
              <Grid item xs={12} md={4} key={`SkeletonCardView-${item}`}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Skeleton variant="circular" width={100} height={100} />
                    <Skeleton
                      variant="text"
                      width="100%"
                      height={50}
                      sx={{ mt: 2 }}
                    />
                  </CardContent>
                  <CardActions
                    sx={{
                      p: "16px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Skeleton variant="text" width="100%" height={50} />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}
