import { useState } from 'react';

function NewKeep() {
  const [body, setBody] = useState('');
  return (
    <>
      <input
        type="text"
        value={body}
        onInput={(event) => setBody(event.target.value)}
      ></input>
    </>
  );
}

export default NewKeep;
