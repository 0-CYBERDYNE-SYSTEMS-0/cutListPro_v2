import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import ProjectRequestForm from '../components/ProjectRequestForm';
import ProjectBreakdown from '../components/ProjectBreakdown';
import PriceList from '../components/PriceList';
import ProjectSketch from '../components/ProjectSketch';
import FinalLayout from '../components/FinalLayout';

export default function Home() {
  const [originalBreakdown, setOriginalBreakdown] = useState(null);
  const [priceList, setPriceList] = useState(null);
  const [projectSketch, setProjectSketch] = useState(null);

  const handleProjectRequest = async (projectRequest) => {
    const response = await fetch('/api/constructProject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectRequest),
    });
    const data = await response.json();
    setOriginalBreakdown(data);
  };

  return (
    <Box>
      <ProjectRequestForm onProjectRequest={handleProjectRequest} />
      {originalBreakdown && (
        <ProjectBreakdown breakdown={originalBreakdown} setPriceList={setPriceList} />
      )}
      {priceList && (
        <PriceList priceList={priceList} setProjectSketch={setProjectSketch} />
      )}
      {projectSketch && (
        <ProjectSketch sketch={projectSketch} />
      )}
      {originalBreakdown && priceList && projectSketch && (
        <FinalLayout breakdown={originalBreakdown} priceList={priceList} sketch={projectSketch} />
      )}
    </Box>
  );
}