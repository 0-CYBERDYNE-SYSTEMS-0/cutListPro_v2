import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateProjectSketch } from "../utils/dalle2";

interface ProjectSketchProps {
  originalBreakdown: any;
}

const ProjectSketch: React.FC<ProjectSketchProps> = ({ originalBreakdown }) => {
  const [projectSketch, setProjectSketch] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectSketch = async () => {
      const sketch = await generateProjectSketch(originalBreakdown);
      setProjectSketch(sketch);
    };

    fetchProjectSketch();
  }, [originalBreakdown]);

  return (
    <Box>
      {projectSketch ? (
        <Image src={projectSketch} alt="Project Sketch" />
      ) : (
        <p>Loading project sketch...</p>
      )}
    </Box>
  );
};

export default ProjectSketch;