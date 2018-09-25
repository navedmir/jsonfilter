
const env = process.env.NODE_ENV|| 'dev'; // 'prod' or 'dev'

const dev = {
 app: {
   port: parseInt(process.env.PORT) || 3000
 }
};


const config = {
 dev
};

module.exports = config[env];