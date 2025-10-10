/** @type {import('next').NextConfig} */
const isProjectPage = true;
const repoBase = '/alirezarahmani.github.io';

module.exports = {
  output: 'export', 
  images: { unoptimized: true },
  ...(isProjectPage && {
    basePath: repoBase,
    assetPrefix: repoBase + '/'
  })
};
