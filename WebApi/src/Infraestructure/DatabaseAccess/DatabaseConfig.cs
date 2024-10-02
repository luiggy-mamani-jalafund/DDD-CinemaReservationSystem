using MongoDB.Driver;
using DotNetEnv;

namespace Infraestructure.Data;

public class DatabaseConfig
{
    private IMongoDatabase _database;
    private readonly string _connectionString;
    private readonly string _databaseName;

    public DatabaseConfig()
    {
        LoadEnvironmentVariables();
        _connectionString = CreateConnectionString();
        _databaseName = GetDatabaseName();
        var client = new MongoClient(_connectionString);
        _database = client.GetDatabase(_databaseName);
    }

    private void LoadEnvironmentVariables()
    {
        try
        {
            string envPath = @"../.env";
            Env.Load(envPath);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading .env file: {ex.Message}");
        }
    }

    private string CreateConnectionString()
    {
        var mongoUri = Env.GetString("MONGO_DB_URI");

        return mongoUri ?? throw new InvalidOperationException("MONGO_DB_URI is not set in the environment variables.");
    }

    private string GetDatabaseName()
    {
        var databaseName = Env.GetString("MONGO_DB_NAME");

        return databaseName ?? throw new InvalidOperationException("MONGO_DB_NAME is not set in the environment variables.");
    }

    public IMongoDatabase GetDatabase()
    {
        return _database;
    }

}