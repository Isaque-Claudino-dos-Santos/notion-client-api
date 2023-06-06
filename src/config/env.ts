import { load } from 'ts-dotenv'
import path from 'path'
import fs from 'fs'

const envFilePath: string = path.resolve('.env')


if (!fs.existsSync(envFilePath)) {
    throw new Error('The .env not exist in root directory.')
}

const env = load({
    NOTION_KEY: String,
    NOTION_DATABASE_KEY: String,
    APP_HOST: String,
    APP_PORT: Number
})


export default env












