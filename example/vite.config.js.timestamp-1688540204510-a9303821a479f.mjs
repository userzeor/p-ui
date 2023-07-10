// vite.config.js
import { defineConfig } from 'file:///D:/Sunya/p-ui/node_modules/.pnpm/vite@4.3.9_sass@1.63.2/node_modules/vite/dist/node/index.js'
import vue from 'file:///D:/Sunya/p-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import path from 'path'
import eslint from 'file:///D:/Sunya/p-ui/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.42.0_vite@4.3.9/node_modules/vite-plugin-eslint/dist/index.mjs'
import vueJsx from 'file:///D:/Sunya/p-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs'
var __vite_injected_original_dirname = 'D:\\Sunya\\p-ui\\example'
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__vite_injected_original_dirname, 'src')
    }
  },
  server: {
    port: 3e3,
    cors: true,
    proxy: {}
  },
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, './dist')
  },
  envDir: path.resolve(__vite_injected_original_dirname, 'env')
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTdW55YVxcXFxwLXVpXFxcXGV4YW1wbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFN1bnlhXFxcXHAtdWlcXFxcZXhhbXBsZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU3VueWEvcC11aS9leGFtcGxlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlSnN4KCksIGVzbGludCgpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgY29yczogdHJ1ZSxcclxuICAgIHByb3h5OiB7fVxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vZGlzdCcpXHJcbiAgfSxcclxuICBlbnZEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdlbnYnKVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlQLFNBQVMsb0JBQW9CO0FBQ3RSLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUpuQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFBQSxFQUNuQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPLENBQUM7QUFBQSxFQUNWO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxRQUFRO0FBQUEsRUFDMUM7QUFBQSxFQUNBLFFBQVEsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFDdkMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
