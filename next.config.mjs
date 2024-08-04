import { DB_URI } from './config';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: config.DB_URI,
    }
};

module.exports = nextConfig;
