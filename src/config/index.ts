import dotenv from 'dotenv'
dotenv.config()


export default {
    prot:process.env.PORT,
    db_url:process.env.DB_URL

}