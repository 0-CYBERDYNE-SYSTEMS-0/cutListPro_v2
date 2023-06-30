import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { ProjectBreakdown as ProjectBreakdownType } from "../utils/gpt4";

interface ProjectBreakdownProps {
  breakdown: ProjectBreakdownType;
}

const ProjectBreakdown: React.FC<ProjectBreakdownProps> = ({ breakdown }) => {
  return (
    <Box id="projectBreakdown">
      <Heading as="h2" size="lg">
        Project Breakdown
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Heading as="h4" size="md">Tools Needed:</Heading>
          {breakdown.toolsNeeded.map((tool, index) => (
            <Box key={index}>{tool}</Box>
          ))}
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">Supply List:</Heading>
          {breakdown.supplyList.map((supply, index) => (
            <Box key={index}>{supply}</Box>
          ))}
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">Cut List:</Heading>
          {breakdown.cutList.map((cut, index) => (
            <Box key={index}>{cut}</Box>
          ))}
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">Step-by-step Instructions:</Heading>
          {breakdown.instructions.map((instruction, index) => (
            <Box key={index}>{instruction}</Box>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

export default ProjectBreakdown;