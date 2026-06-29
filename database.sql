-- Script de creación de la tabla provinces para PostgreSQL

CREATE TABLE IF NOT EXISTS provinces (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  latitude NUMERIC(9,6) NOT NULL,
  longitude NUMERIC(9,6) NOT NULL,
  display_order INTEGER NOT NULL
);


INSERT INTO provinces (name, full_name, latitude, longitude, display_order)
VALUES
  ('Buenos Aires', 'Provincia de Buenos Aires', -34.6037, -58.3816, 1),
  ('Córdoba', 'Provincia de Córdoba', -31.4167, -64.1833, 2),
  ('Santa Fe', 'Provincia de Santa Fe', -31.6333, -60.7000, 3);
