import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

interface ProjectRequest {
  projectName: string;
  projectDescription: string;
}

const ProjectRequestForm = () => {
  const [projectRequest, setProjectRequest] = useState<ProjectRequest>({ projectName: '', projectDescription: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectRequest({ ...projectRequest, [e.target.name]: e.target.value });
  };

  const handleProjectRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call to GPT-4 API to break down the project request will be handled here
  };

  return (
    <Box as="form" onSubmit={handleProjectRequest} id="projectRequestForm">
      <FormControl isRequired>
        <FormLabel>Project Name</FormLabel>
        <Input
          type="text"
          name="projectName"
          value={projectRequest.projectName}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Project Description</FormLabel>
        <Textarea
          name="projectDescription"
          value={projectRequest.projectDescription}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button mt={4} colorScheme="blue" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ProjectRequestForm;