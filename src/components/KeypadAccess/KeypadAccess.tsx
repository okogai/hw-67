import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import {
  addInput,
  removeInput,
  resetInput,
  submitInput,
} from "../../slices/keypadSlice.ts";
import { Button, Box, Paper, Typography } from "@mui/material";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const KeypadAccess = () => {
  const dispatch = useDispatch();
  const { input, isAccessGranted } = useSelector(
    (state: RootState) => state.keypad,
  );

  const handleClick = (value: string) => {
    dispatch(addInput(value));
  };

  const handleDelete = () => {
    dispatch(removeInput());
  };

  const handleSubmit = () => {
    dispatch(submitInput());
  };

  const handleReset = () => {
    dispatch(resetInput());
  };

  const displayColor =
    isAccessGranted === null ? "#fff" : isAccessGranted ? "#00bfa5" : "#f4511e";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" marginBottom="40px">
        Insert Pin code
      </Typography>
      <Paper
        style={{
          padding: 20,
          textAlign: "center",
          width: "300px",
          height: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Box
          style={{
            backgroundColor: displayColor,
            height: "110px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "32px",
              fontWeight: 300,
              color: isAccessGranted === null ? "black" : "white",
            }}
          >
            {isAccessGranted === null
              ? "*".repeat(input.length)
              : isAccessGranted
                ? "Access Granted"
                : "Access Denied"}
          </Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={"4px"}
          style={{ justifyItems: "center", height: "250px", marginTop: "20px" }}
        >
          {keys.map((key) => (
            <Button
              key={key}
              variant="contained"
              onClick={() => handleClick(key)}
              fullWidth
              disabled={input.length === 4}
            >
              {key}
            </Button>
          ))}

          <Button
            variant="contained"
            onClick={handleDelete}
            color="primary"
            fullWidth
            disabled={input.length === 0 || isAccessGranted !== null}
          >
            {"<"}
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            fullWidth
            disabled={input.length < 4 || isAccessGranted !== null}
          >
            E
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={handleReset}
          color="primary"
          style={{ width: "100%", height: "50px", marginTop: "15px" }}
          disabled={input.length === 0}
        >
          RESET
        </Button>
      </Paper>
    </Box>
  );
};

export default KeypadAccess;
