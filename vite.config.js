
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/VendoTodo/', // Cambia esto por tu nombre de repositorio
});
