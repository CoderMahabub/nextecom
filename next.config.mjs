import { DB_URI } from './config';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI
    }
};

export default nextConfig;
