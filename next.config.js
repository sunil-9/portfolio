module.exports = {
  reactStrictMode: true,
  // Keep a running development server from overwriting production manifests.
  distDir: process.env.NODE_ENV === 'development' ? '.next' : '.next-build',
};
