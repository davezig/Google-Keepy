import { useState } from 'react';

function NewKeep() {
  const [body, setBody] = useState('');
  return (
    <>
      <input type="text" value={body}></input>
    </>
  );
}

export default NewKeep;
