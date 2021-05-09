let instances = process.env.WEB_CONCURRENCY || 1;
let maxMemory = process.env.WEB_MEMORY || 512;
var numCPUs = process.env.WEB_CONCURRENCY || 1;

if (process.env.WEB_CONCURRENCY_MAX) {
  instances =
    numCPUs > +process.env.WEB_CONCURRENCY_MAX
      ? +process.env.WEB_CONCURRENCY_MAX
      : numCPUs;
  console.log("Starting with", instances, "clusters, each with", maxMemory);
}

module.exports = {
  apps: [
    {
      script: "public/server.js",
      instances: "max",
      name: "Man The Bay",
      watch: true,
      exec_mode: "cluster",
      wait_ready: true,
      max_memory_restart: "256M", // Optional: Restarts your ap
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
