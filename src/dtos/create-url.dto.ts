import { IsString, Matches } from 'class-validator';
/**
 *  @swagger
 *  components:
 *    schemas:
 *      CreateUrlDTO:
 *        type: object
 *        required:
 *          - url
 *        properties:
 *          url:
 *            type: string
 *            description: The original URL to shorten
 *            example: https://www.example.com
 */
export class CreateUrlDTO {
  @IsString()
  @Matches(
    /^(https:\/\/|http:\/\/)([\w\d-]+)\.([\w\d-]{2,})([\/\w\d.-]*)(\?[\w\d&=]*)?$/,
    { message: `Url should be a valid url that starts with http or https` }
  )
  url!: string;
}
