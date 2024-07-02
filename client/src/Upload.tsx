import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Upload: FC = () => {
  const location = useLocation();
  const { response } = location.state;

  return (
    <>
      <p>
        Make: {response.make} <br />
        Model: {response.model} <br />
        Badge: {response.badge} <br />
      </p>
      <p>Logbook:</p>
      <pre>{response.logbook}</pre>
    </>
  );
};

export default Upload;
