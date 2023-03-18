import { Box, Grid } from "@chakra-ui/react";

const BackgroundWithSquares = () => {
  const numberOfRows = 8;
  const numberOfColumns = 14;
  const squareSize = "102px";

  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
      squares.push(
        <Box
          key={i}
          bg="transparent"
          border="1px solid #22252762"
          width={squareSize}
          height={squareSize}
        />,
      );
    }
    return squares;
  };

  return (
    <Grid
      templateColumns={`repeat(${numberOfColumns}, ${squareSize})`}
      gap={0}
      position="absolute"
      top={0}
      left={0}
      overflow="hidden"
    >
      {renderSquares()}
    </Grid>
  );
};

export default BackgroundWithSquares;
