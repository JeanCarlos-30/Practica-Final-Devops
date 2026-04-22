const request = require('supertest');
const app = require('../server');

// ─── Tests de la aplicación ───────────────────────────────────

describe('GET /', () => {
  test('Debe retornar status 200 en la ruta principal', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /api/saludo', () => {
  test('Debe retornar status 200', async () => {
    const res = await request(app).get('/api/saludo');
    expect(res.statusCode).toBe(200);
  });

  test('Debe retornar un JSON con el campo "mensaje"', async () => {
    const res = await request(app).get('/api/saludo');
    expect(res.body).toHaveProperty('mensaje');
  });

  test('El mensaje debe ser "¡Hola Mundo!"', async () => {
    const res = await request(app).get('/api/saludo');
    expect(res.body.mensaje).toBe('¡Hola Mundo!');
  });

  test('Debe retornar el campo "autor"', async () => {
    const res = await request(app).get('/api/saludo');
    expect(res.body).toHaveProperty('autor', 'jeacarlos3015');
  });
});

describe('GET /health', () => {
  test('Debe retornar status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});

describe('Ruta inexistente', () => {
  test('Debe retornar 404 en rutas no definidas', async () => {
    const res = await request(app).get('/ruta-que-no-existe');
    expect(res.statusCode).toBe(404);
  });
});