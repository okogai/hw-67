import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import { Box, Button, Paper, Typography } from "@mui/material";
import {
  addInput,
  removeInput,
  resetInput,
  submitInput,
} from "../../slices/calculatorSlice.ts";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operations = ["+", "-", "*", "/"];

const Calculator = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootState) => state.calculator);

  const handleClick = (value: string) => {
      if (operations.includes(value) && operations.includes(input.slice(-1))) {
          dispatch(removeInput());
          dispatch(addInput(value));
      } else {
          dispatch(addInput(value));
      }
  };

  const handleDelete = () => {
    dispatch(removeInput());
  };

  const handleReset = () => {
    dispatch(resetInput());
  };

  const handleSubmit = () => {
    dispatch(submitInput());
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" marginBottom="40px">
        Calculator
      </Typography>
      <Paper
        style={{
          padding: 20,
          textAlign: "center",
          width: "350px",
          height: "480px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Box
          style={{
            height: "120px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
            overflowY: "auto",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: input === "Error" ? "red" : "black",
              wordWrap: "break-word",
              maxWidth: "90%",
              textAlign: "center",
            }}
          >
            {input}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          marginTop="20px"
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap={"4px"}
            width="70%"
          >
            {keys.map((key) => (
              <Button
                key={key}
                variant="contained"
                onClick={() => handleClick(key)}
                style={{
                  height: "50px",
                }}
              >
                {key}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={handleDelete}
              color="primary"
              fullWidth
              style={{ marginRight: "10px", height: "50px" }}
            >
              {"<"}
            </Button>
          </Box>

          <Box
            display="grid"
            gridTemplateRows="repeat(4, 1fr)"
            gap={"4px"}
            width="25%"
          >
            {operations.map((operation) => (
              <Button
                key={operation}
                variant="contained"
                onClick={() => handleClick(operation)}
              >
                {operation}
              </Button>
            ))}
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            onClick={handleReset}
            color="secondary"
            fullWidth
            style={{ marginRight: "10px", height: "50px" }}
          >
            C
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            color="secondary"
            fullWidth
          >
            =
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Calculator;
