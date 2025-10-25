import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // 禁用 tsup 的 dts 生成
  clean: true,
  sourcemap: true,
  outDir: 'dist',
  target: 'es2020',
  minify: false,
  splitting: false,
  treeshake: true,
  external: []
});
