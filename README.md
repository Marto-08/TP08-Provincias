# TP08 Provincias API

API REST para gestionar provincias utilizando Node.js, Express y PostgreSQL.

## Requisitos

- Node.js 18+ instalado
- PostgreSQL configurado y accesible

## Instalación

1. Clona el proyecto o copia los archivos.
2. Ejecuta `npm install`.
3. Copia `.env-template` a `.env` y ajusta los valores según tu entorno.

## Configuración

El archivo `.env` debe contener las siguientes variables:

- `DB_HOST`
- `DB_PORT`
- `DB_DATABASE`
- `DB_USER`
- `DB_PASSWORD`
- `LOG_FILE_PATH`
- `LOG_FILE_NAME`
- `LOG_TO_FILE_ENABLED`
- `LOG_TO_CONSOLE_ENABLED`
- `PORT`

## Estructura del proyecto

- `index.js`
- `package.json`
- `.env`
- `.env-template`
- `README.md`
- `src/`
  - `configs/db-config.js`
  - `controllers/province-controller.js`
  - `services/province-service.js`
  - `repositories/province-repository.js`
  - `entities/province.js`
  - `helpers/validaciones-helpers.js`
  - `helpers/log-helper.js`
  - `modules/province-router.js`

## Ejecutar la aplicación

- Modo producción:

```bash
npm start
```

- Modo desarrollo con recarga automática:

```bash
npm run dev
```

## Endpoints

- `GET /api/province`
  - Obtiene todas las provincias.

- `GET /api/province/:id`
  - Obtiene una provincia por su ID.

- `POST /api/province`
  - Crea una nueva provincia.
  - Body JSON:

```json
{
  "name": "Santa Fe",
  "full_name": "Provincia de Santa Fe",
  "latitude": -31.6333,
  "longitude": -60.7000,
  "display_order": 1
}
```

- `PUT /api/province`
  - Actualiza una provincia existente.
  - Body JSON:

```json
{
  "id": 1,
  "name": "Santa Fe",
  "full_name": "Provincia de Santa Fe",
  "latitude": -31.6333,
  "longitude": -60.7000,
  "display_order": 1
}
```

- `DELETE /api/province/:id`
  - Elimina una provincia por su ID.

## Ejemplos con curl

```bash
curl http://localhost:3000/api/province

curl http://localhost:3000/api/province/1

curl -X POST http://localhost:3000/api/province \
  -H "Content-Type: application/json" \
  -d '{"name":"Santa Fe","full_name":"Provincia de Santa Fe","latitude":-31.6333,"longitude":-60.7000,"display_order":1}'

curl -X PUT http://localhost:3000/api/province \
  -H "Content-Type: application/json" \
  -d '{"id":1,"name":"Santa Fe","full_name":"Provincia de Santa Fe","latitude":-31.6333,"longitude":-60.7000,"display_order":1}'

curl -X DELETE http://localhost:3000/api/province/1
```
