import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isUserOrOrgPagesRepo = !!repoName && repoName.toLowerCase().endsWith('.github.io');
  const ciBasePath = process.env.GITHUB_ACTIONS
    ? isUserOrOrgPagesRepo
      ? '/'
      : repoName
        ? `/${repoName}/`
        : '/'
    : '/';
  const rawBasePath = env.VITE_BASE_PATH || ciBasePath;
  const base = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`;

  return {
    base: base.endsWith('/') ? base : `${base}/`,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
