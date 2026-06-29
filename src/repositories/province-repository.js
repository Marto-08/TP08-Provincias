import { Client } from "pg";
import dbConfig from "../configs/db-config.js";
import { logError } from "../helpers/log-helper.js";

const TABLE_NAME = "provinces";

const getAllAsync = async () => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(
      `SELECT id, name, full_name, latitude, longitude, display_order
       FROM ${TABLE_NAME}
       ORDER BY display_order, id`
    );

    return result.rows;
  } catch (error) {
    logError(error);
    throw error;
  } finally {
    await client.end();
  }
};

const getByIdAsync = async (id) => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(
      `SELECT id, name, full_name, latitude, longitude, display_order
       FROM ${TABLE_NAME}
       WHERE id = $1`,
      [id]
    );

    return result.rows[0] || null;
  } catch (error) {
    logError(error);
    throw error;
  } finally {
    await client.end();
  }
};

const createAsync = async (province) => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(
      `INSERT INTO ${TABLE_NAME} (name, full_name, latitude, longitude, display_order)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, full_name, latitude, longitude, display_order`,
      [province.name, province.full_name, province.latitude, province.longitude, province.display_order]
    );

    return result.rows[0];
  } catch (error) {
    logError(error);
    throw error;
  } finally {
    await client.end();
  }
};

const updateAsync = async (province) => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(
      `UPDATE ${TABLE_NAME}
       SET name = $1,
           full_name = $2,
           latitude = $3,
           longitude = $4,
           display_order = $5
       WHERE id = $6
       RETURNING id, name, full_name, latitude, longitude, display_order`,
      [province.name, province.full_name, province.latitude, province.longitude, province.display_order, province.id]
    );

    return result.rows[0] || null;
  } catch (error) {
    logError(error);
    throw error;
  } finally {
    await client.end();
  }
};

const deleteByIdAsync = async (id) => {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    const result = await client.query(
      `DELETE FROM ${TABLE_NAME} WHERE id = $1 RETURNING id`,
      [id]
    );

    return result.rowCount > 0;
  } catch (error) {
    logError(error);
    throw error;
  } finally {
    await client.end();
  }
};

export default {
  getAllAsync,
  getByIdAsync,
  createAsync,
  updateAsync,
  deleteByIdAsync,
};
