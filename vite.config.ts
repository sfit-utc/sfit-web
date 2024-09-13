import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Tối ưu định dạng GIF
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      // Tối ưu định dạng PNG
      optipng: {
        optimizationLevel: 7,
      },
      // Tối ưu định dạng JPEG
      mozjpeg: {
        quality: 75,
      },
      // Tối ưu định dạng PNG với PNGQuant
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      // Tối ưu định dạng SVG
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      // Chuyển đổi và tối ưu định dạng WebP
      webp: {
        quality: 75,
      },
    }),
  ],
})
