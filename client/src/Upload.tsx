import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Upload: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const response = location.state?.response;

  if (!response) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>Upload Details</h2>
      <p>
        <strong>Make:</strong> {response.make} <br />
        <strong>Model:</strong> {response.model} <br />
        <strong>Badge:</strong> {response.badge} <br />
      </p>
      <div>
        <h3>Logbook:</h3>
        <pre>{response.logbook}</pre>
      </div>
    </div>
  );
};

export default Upload;
