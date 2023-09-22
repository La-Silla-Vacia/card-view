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
      <DialogContent>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}>
          <Avatar
            alt={`${selected?.Nombres} ${selected?.["Apellido 1"]} ${selected?.["Apellido 2"]}`}
            src={selected?.Foto}
            sx={{
              width: 100,
              height: 100,
            }}
          />
          <Typography variant="h3" component="h2" sx={{ 
            letterSpacing: "0em",
            fontSize: "40px",
            fontWeight: "400",
            color: "#3d3d3d",
            lineHeight: "1",
            textTransform: "uppercase",
            fontFamily: "Martin",
           }}>
            {`${selected?.Nombres} ${selected?.["Apellido 1"]} ${selected?.["Apellido 2"]}`}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
