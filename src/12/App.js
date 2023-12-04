import { useState, memo, useMemo, useCallback } from 'react';
import { DeleteButton } from './DeleteButton';

function App() {
  return (
    <div>
      <DeleteButton onDelete={() => alert('Usun!')} />
    </div>
  );
}

export default App;
