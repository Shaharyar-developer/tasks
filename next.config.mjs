/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful for Docker builds.
 */
import "./src/env.mjs";
import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {};

export default withContentlayer(config);
