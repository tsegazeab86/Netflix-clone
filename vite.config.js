import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3455, // ፖርቱን ወደ 3455 ይቀይረዋል
  //  }
})