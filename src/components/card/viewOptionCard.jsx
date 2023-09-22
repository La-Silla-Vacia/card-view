import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function ViewOptionCard({ open, selected, handleClose }) {
  return (
    <Dialog
      maxWidth={"sm"}
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent sx={{ maxHeight:700 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Avatar
            alt={`${selected?.Nombres} ${selected?.["Apellido 1"]} ${selected?.["Apellido 2"]}`}
            src={selected?.Foto}
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Typography
            component="h4"
            sx={{
              letterSpacing: "0em",
              fontSize: "40px",
              fontWeight: "400",
              color: "#3d3d3d",
              lineHeight: "1",
              textTransform: "uppercase",
              fontFamily: "Martin",
            }}
          >
            {`${selected?.Nombres} ${selected?.["Apellido 1"]} ${selected?.["Apellido 2"]}`}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#3d3d3d",
              fontFamily: "Manrope",
            }}
          >
            {selected?.["Cargo que busca"]}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#3d3d3d",
              fontFamily: "Manrope",
            }}
          >
            {selected?.Territorio}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#3d3d3d",
              fontFamily: "Manrope",
            }}
          >
            <strong>Coavales: </strong> {selected?.Coavales}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: "18px",
              wordWrap: "break-word",
              color: "#3d3d3d",
              fontFamily: "Manrope",
              fontWeight: "400",
            }}
          >
            {selected?.Perfil}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
