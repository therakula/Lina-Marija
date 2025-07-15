import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // remove toast indicator in bottom right
  devIndicators: false
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
