import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'pl.aiagent.app',
    appName: 'AI-AGENT',
    webDir: 'out', // Next.js static export directory
    server: {
        androidScheme: 'https',
        iosScheme: 'https',
    },
};

export default config;
