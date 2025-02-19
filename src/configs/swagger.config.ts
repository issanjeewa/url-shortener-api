// swagger.ts (or swagger.js)
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0',
      description: 'A simple URL shortening service',
    },
  },
  apis: [
    path.join(__dirname, '../routes/*.js'),
    path.join(__dirname, '../dtos/*.js'),
  ],
};
console.log(path.join(__dirname, '../dtos/*.ts'));
export const swaggerSpec = swaggerJSDoc(options);
