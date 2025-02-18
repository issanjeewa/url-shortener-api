import { UrlMapEntity } from '../entities/url-map.entity';
import { AppDataSource } from '../configs';
import { nanoid } from 'nanoid';
import { NotFoundError } from '../errors';

/**
 * ANCHOR create url
 * @param url
 * @returns
 */
async function createUrl(url: string) {
  try {
    const urlRepo = AppDataSource.getRepository(UrlMapEntity);
    const existingUrl = await urlRepo.findOne({ where: { url: url } });

    if (!!existingUrl?.shortUrl) return existingUrl;
    else {
      const urlData = new UrlMapEntity();
      urlData.shortUrl = nanoid(8);
      urlData.url = url;

      const result = await urlRepo.insert(urlData);
      return {
        ...result.generatedMaps[0],
        url: url,
        shortUrl: urlData.shortUrl,
      };
    }
  } catch (error) {
    console.log(`Error while creating url`, error);
    throw error;
  }
}

/**
 * ANCHOR return original url
 * @param shortUrl
 * @returns
 */
async function getUrl(shortUrl: string): Promise<string> {
  try {
    console.log('calling get url: ', shortUrl);

    const urlRepo = AppDataSource.getRepository(UrlMapEntity);
    const urlData = await urlRepo.findOne({ where: { shortUrl: shortUrl } });

    if (!urlData?.url) {
      throw new NotFoundError('URL not found');
    }

    return urlData.url;
  } catch (error) {
    console.log(`Error while fetching url`, error);
    throw error;
  }
}

export default {
  createUrl,
  getUrl,
};
