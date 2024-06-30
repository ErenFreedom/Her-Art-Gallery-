import path from 'path';
import { config } from 'dotenv';

config({ path: path.resolve(process.cwd(), '.env') });

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
