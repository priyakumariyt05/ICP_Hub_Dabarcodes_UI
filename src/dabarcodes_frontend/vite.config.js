// import { fileURLToPath, URL } from 'url';
// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';
// import environment from 'vite-plugin-environment';
// import dotenv from 'dotenv';

// dotenv.config({ path: '../../.env' });

// export default defineConfig({
//   build: {
//     emptyOutDir: true,
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       define: {
//         global: "globalThis",
//       },
//     },
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://127.0.0.1:4943",
//         changeOrigin: true,
//       },
//     },
//   },
//   plugins: [
//     react(),
//     environment("all", { prefix: "CANISTER_" }),
//     environment("all", { prefix: "DFX_" }),
//   ],
//   resolve: {
//     alias: [
//       {
//         find: "declarations",
//         replacement: fileURLToPath(
//           new URL("../declarations", import.meta.url)
//         ),
//       },
//     ],
//   },
// });
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

// Load environment variables from the specified `.env` file
dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    // Clears the output directory before each build
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", // Ensures compatibility with certain dependencies requiring `global`
      },
    },
  },
server: {
  proxy: {
    "/api": {
      target: "https://demo4.kaifoundry.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""), // Remove "/api" from the path
    },
  },
},

  plugins: [
    react(), // Enables React fast refresh and other React optimizations
    environment("all", { prefix: "CANISTER_" }), // Load environment variables prefixed with "CANISTER_"
    environment("all", { prefix: "DFX_" }), // Load environment variables prefixed with "DFX_"
  ],
  resolve: {
    alias: [
      {
        // Creates a path alias for "declarations"
        find: "declarations",
        replacement: fileURLToPath(
          new URL("../declarations", import.meta.url)
        ),
      },
    ],
  },
});
