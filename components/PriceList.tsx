import { Box, Text, Link } from "@chakra-ui/react";
import { PriceList } from "../utils/homeDepot";

interface PriceListProps {
  priceList: PriceList;
}

const PriceListComponent: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Price List
      </Text>
      {priceList.map((item, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{item.name}</Text>
          <Text>Price: {item.price}</Text>
          <Link href={item.link} isExternal>
            Buy Now
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default PriceListComponent;