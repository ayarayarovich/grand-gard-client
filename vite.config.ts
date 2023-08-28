import {
    defineConfig,
    loadEnv,
    ServerOptions,
    BuildOptions,
    UserConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }): UserConfig => {
    /// Common server options ///
    const serverOptions: ServerOptions = {
        proxy: {
            '/api': 'http://localhost:8000',
        },
    };

    /// Common build options ///
    const buildOptions: BuildOptions = {
        outDir: 'dist',
        assetsDir: 'assets',
    };

    /// Production Mode ///
    if (mode === 'production') {
        process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

        Object.assign(serverOptions, {
            host: '0.0.0.0',
            port: 3000,
        });

        Object.assign(buildOptions, {
            sourcemap: false,
            manifest: true,
        });
    }

    /// Development Mode ///
    if (mode === 'development') {
        Object.assign(serverOptions, {
            host: 'localhost',
            port: 3000,
        });

        Object.assign(buildOptions, {
            sourcemap: true,
        });
    }

    return {
        plugins: [tsconfigPaths(), react()],

        base: '/',
        publicDir: './public',

        server: serverOptions,
        build: buildOptions,
        preview: {
            port: 3000,
        },
    };
});
