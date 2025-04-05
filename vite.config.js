<<<<<<< HEAD
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	base: "/",

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				logged: resolve(__dirname, "nested/logged.html"),
				register: resolve(__dirname, "nested/register.html"),
				login: resolve(__dirname, "nested/login.html"),
			},
		},
	},
});
=======
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	base: "/",

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				logged: resolve(__dirname, "nested/logged.html"),
				register: resolve(__dirname, "nested/register.html"),
				login: resolve(__dirname, "nested/login.html"),
			},
		},
	},
});
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
