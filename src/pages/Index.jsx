// Mock-up of a business dashboard using Chakra UI
import { Box, Flex, Grid, GridItem, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Container, Heading } from "@chakra-ui/react";
import { FaChartBar, FaDollarSign, FaShoppingBag } from "react-icons/fa";

// This is a placeholder component for where you'd fetch and display data from GCP Cloud SQL
const MetricCard = ({ title, value, icon, trend }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
      <Flex alignItems="center">
        {icon}
        <Box ml={3}>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={trend > 0 ? "increase" : "decrease"} />
            {Math.abs(trend)}%
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};

const Index = () => {
  // TODO: Fetch actual data from GCP Cloud SQL and pass to components
  const mockSales = 1200;
  const mockRevenue = 50000;
  const mockOtherMetric = 350;

  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={5}>Business Dashboard</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%">
          <MetricCard title="Total Sales" value={`${mockSales} units`} icon={<FaShoppingBag size="3em" />} trend={-5} />
        </GridItem>
        <GridItem w="100%">
          <MetricCard title="Total Revenue" value={`$${mockRevenue}`} icon={<FaDollarSign size="3em" />} trend={10} />
        </GridItem>
        <GridItem w="100%">
          <MetricCard title="Other Key Metric" value={`${mockOtherMetric}`} icon={<FaChartBar size="3em" />} trend={3} />
        </GridItem>
      </Grid>
      {/* Additional dashboard content goes here */}
    </Container>
  );
};

export default Index;
