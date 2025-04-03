using StackExchange.Redis;
using System.Text.Json;

namespace Infraestructure.Cache
{
    public class RedisCacheService : ICacheService
    {
        private readonly IDatabase _redisDatabase;

        public RedisCacheService(IConnectionMultiplexer redis)
        {
            _redisDatabase = redis.GetDatabase();
        }

        public async Task<T?> GetAsync<T>(string key)
        {
            var value = await _redisDatabase.StringGetAsync(key);
            if (value.HasValue)
            {
                return JsonSerializer.Deserialize<T>(value);
            }
            return default;
        }

        public async Task SetAsync<T>(string key, T value, TimeSpan? expiry = null)
        {
            try
            {
                var json = JsonSerializer.Serialize(value);
                await _redisDatabase.StringSetAsync(key, json, expiry);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Error serializing object for cache.", ex);
            }
        }

        public async Task RemoveAsync(string key)
        {
            await _redisDatabase.KeyDeleteAsync(key);
        }
    }
}