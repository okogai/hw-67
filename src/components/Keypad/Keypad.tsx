import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

interface KeypadProps {
  title: string;
  input: string;
  result?: string;
  isAccessGranted?: boolean | null;
  keys: string[];
  operations?: string[];
  onButtonClick: (value: string) => void;
  onDelete: () => void;
  onSubmit: () => void;
  onReset?: () => void;
  inputLengthLimit?: number;
  submitDisabledLength?: number;
  displayColor?: string;
}

const Keypad: React.FC<KeypadProps> = ({
  title,
  input,
  result,
  isAccessGranted,
  keys,
  operations = [],
  onButtonClick,
  onDelete,
  onSubmit,
  onReset,
  submitDisabledLength,
  displayColor = "#fff",
  inputLengthLimit,
}) => {
  const displayValue =
    result !== null
      ? result
      : isAccessGranted === false
        ? "*".repeat(input.length)
        : input;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" marginBottom="40px">
        {title}
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
            backgroundColor: displayColor,
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: result === "Error" ? "red" : "black",
              wordWrap: "break-word",
              maxWidth: "90%",
              textAlign: "center",
            }}
          >
            {displayValue}
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
            gap="4px"
            width="70%"
          >
            {keys.map((key) => (
              <Button
                key={key}
                variant="contained"
                onClick={() => onButtonClick(key)}
                style={{ height: "50px" }}
                disabled={
                  inputLengthLimit ? input.length >= inputLengthLimit : false
                }
              >
                {key}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={onDelete}
              color="primary"
              fullWidth
              style={{ marginRight: "10px", height: "50px" }}
              disabled={input.length === 0}
            >
              {"<"}
            </Button>
          </Box>

          <Box
            display="grid"
            gridTemplateRows="repeat(4, 1fr)"
            gap="4px"
            width="25%"
          >
            {operations?.map((operation) => (
              <Button
                key={operation}
                variant="contained"
                onClick={() => onButtonClick(operation)}
              >
                {operation}
              </Button>
            ))}
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between">
          {onReset && (
            <Button
              variant="contained"
              onClick={onReset}
              color="secondary"
              fullWidth
              style={{ marginRight: "10px", height: "50px" }}
            >
              C
            </Button>
          )}

          <Button
            variant="contained"
            onClick={onSubmit}
            color="secondary"
            fullWidth
            disabled={
              submitDisabledLength ? input.length < submitDisabledLength : false
            }
          >
            =
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Keypad;
