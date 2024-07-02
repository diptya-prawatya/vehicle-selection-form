import request from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../src/index';

describe('POST /upload', () => {
  const validVehicle = {
    make: 'ford',
    model: 'Ranger',
    badge: 'Raptor',
  };

  const invalidVehicle = {
    make: 'invalid_make',
    model: 'Ranger',
    badge: 'Raptor',
  };

  let logbookFilePath: string;

  beforeEach(() => {
    const logbookFile = path.join(__dirname, '../../sample/logbook.txt');

    if (!fs.existsSync(logbookFile)) {
      throw new Error(`Missing sample logbook.txt file: ${logbookFile}`);
    }

    logbookFilePath = logbookFile;
  });

  it('should upload logbook and return vehicle data', async () => {
    const response = await request(app)
      .post('/upload')
      .field('make', validVehicle.make)
      .field('model', validVehicle.model)
      .field('badge', validVehicle.badge)
      .attach('logbook', logbookFilePath);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      make: validVehicle.make,
      model: validVehicle.model,
      badge: validVehicle.badge,
      logbook: expect.any(String),
    });
  });

  it('should return error for invalid vehicle selection', async () => {
    const response = await request(app)
      .post('/upload')
      .field('make', invalidVehicle.make)
      .field('model', invalidVehicle.model)
      .field('badge', invalidVehicle.badge)
      .attach('logbook', logbookFilePath);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid vehicle selection');
  });

  it('should return error if logbook file is not uploaded', async () => {
    const response = await request(app)
      .post('/upload')
      .field('make', validVehicle.make)
      .field('model', validVehicle.model)
      .field('badge', validVehicle.badge);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Logbook file is required');
  });
});
