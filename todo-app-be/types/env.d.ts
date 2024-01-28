declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // GITHUB_AUTH_TOKEN: string
      // NODE_ENV: 'development' | 'production'
      PORT?: number
      DB_NAME: string
      DB_USER: string
      DB_PASS: string
      DB_HOST: string
      DB_DIALECT: 'db2' | 'mariadb' | 'mssql' | 'mysql' | 'oracle' | 'postgres' | 'snowflake' | 'sqlite'
    }
  }
}

export {}
