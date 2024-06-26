import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeleteableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deleteable" onDelete={handleDelete} />
      <Chip label="Deleteable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
