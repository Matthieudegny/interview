import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    color: "white !important",
  },
  "& .MuiInputLabel-root": {
    color: "white !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white !important",
  },
}));
