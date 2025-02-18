import { IsString, IsUrl, Matches } from 'class-validator';

export class CreateUrlDTO {
  @IsString()
  @Matches(
    /^(https:\/\/|http:\/\/)([\w\d-]+)\.([\w\d-]{2,})([\/\w\d.-]*)(\?[\w\d&=]*)?$/,
    { message: `Url should be a valid url that starts with http or https` }
  )
  url!: string;
}