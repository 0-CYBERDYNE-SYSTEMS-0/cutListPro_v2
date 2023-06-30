import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { ProjectBreakdown, PriceList } from "../types";

interface FinalLayoutProps {
  originalBreakdown: ProjectBreakdown;
  priceList: PriceList;
  sketchUrl: string;
}

const FinalLayout: React.FC<FinalLayoutProps> = ({ originalBreakdown, priceList, sketchUrl }) => {
  return (
    <Box>
      <Heading as="h1" size="xl">Final Project Layout</Heading>
      <Box mt={4}>
        <Heading as="h2" size="lg">Original Breakdown</Heading>
        <Text>{originalBreakdown.toolsNeeded}</Text>
        <Text>{originalBreakdown.supplyList}</Text>
        <Text>{originalBreakdown.cutList}</Text>
        <Text>{originalBreakdown.instructions}</Text>
      </Box>
      <Box mt={4}>
        <Heading as="h2" size="lg">Price List</Heading>
        {priceList.items.map((item, index) => (
          <Box key={index}>
            <Text>{item.name}: {item.price}</Text>
            <Text>{item.link}</Text>
          </Box>
        ))}
      </Box>
      <Box mt={4}>
        <Heading as="h2" size="lg">Project Sketch</Heading>
        <Image src={sketchUrl} alt="Project Sketch" />
      </Box>
    </Box>
  );
};

export default FinalLayout;