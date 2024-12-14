const Redis = require('redis');
const logger = require('./logger');

const redisClient = Redis.createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => logger.error('Redis Client Error:', err));
redisClient.on('connect', () => logger.info('Redis Client Connected'));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;