import express, { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import cors from 'cors';
import { MODELS } from '../../sample/vehicleData';

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

interface VehicleRequest extends Request {
  body: {
    make: string;
    model: string;
    badge: string;
  };
  file?: Express.Multer.File;
}

app.post('/upload', upload.single('logbook'), (req: VehicleRequest, res: Response) => {
  const { make, model, badge } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'Logbook file is required' });
  }

  const logbookFilePath = req.file.path;

  if (!MODELS[make] || !MODELS[make][model] || !MODELS[make][model].includes(badge)) {
    return res.status(400).json({ error: 'Invalid vehicle selection' });
  }

  fs.readFile(logbookFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read log book file' });
    }

    const response = {
      make,
      model,
      badge,
      logbook: data,
    };

    res.json(response);

    fs.unlink(logbookFilePath, (err) => {
      if (err) console.error('Failed to delete uploaded file:', err);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
