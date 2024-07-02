import { ChangeEvent, FC, useState } from 'react';
import { MODELS } from '../../sample/vehicleData';

const App: FC = () => {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedBadge, setSelectedBadge] = useState<string>('');
  const [, setFile] = useState<File | null>(null);

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const make = event.target.value;
    setSelectedMake(make);
    setSelectedModel('');
    setSelectedBadge('');
  };

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const model = event.target.value;
    setSelectedModel(model);
    setSelectedBadge('');
  };

  const handleBadgeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const badge = event.target.value;
    setSelectedBadge(badge);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleSelectVehicle = (make: string, model: string, badge: string) => {
    setSelectedMake(make);
    setSelectedModel(model);
    setSelectedBadge(badge);
  };

  return (
    <>
      <h1>Drill Down Form</h1>
      <div>
        <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">make</option>
          {Object.keys(MODELS).map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={selectedModel} onChange={handleModelChange} disabled={!selectedMake}>
          <option value="">model</option>
          {selectedMake && Object.keys(MODELS[selectedMake]).map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={selectedBadge} onChange={handleBadgeChange} disabled={!selectedModel}>
          <option value="">badge</option>
          {selectedMake && selectedModel && MODELS[selectedMake][selectedModel].map(badge => (
            <option key={badge} value={badge}>{badge}</option>
          ))}
        </select>
      </div>

      {selectedMake && selectedModel && selectedBadge &&
        <>
          <br />
          <div>
            <p>Upload Logbook: </p>
            <div>
              <input type="file" onChange={handleFileUpload} accept=".txt" />
            </div>
          </div>



          <button onClick={handleSubmit}>Submit</button>
        </>
      }

      <h2>Select a Vehicle</h2>
      <>
        <div>
          <button onClick={() => handleSelectVehicle('Tesla', 'Model 3', 'Performance')}>
            Tesla Model 3 Performance
          </button>
        </div>
        <div>
          <button onClick={() => handleSelectVehicle('BMW', '130d', 'xDrive 26d')}>
            BMW 130d xDrive 26d
          </button>
        </div>
      </>
    </>
  );
};

export default App;
