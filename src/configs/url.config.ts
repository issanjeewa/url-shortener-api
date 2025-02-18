type UrlConfigType = {
  urlLength: number;
};

export const UrlConfig: UrlConfigType = {
  urlLength: !!process.env.URL_LENGTH ? parseInt(process.env.URL_LENGTH) : 8,
};
