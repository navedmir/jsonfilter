
const env = process.env.NODE_ENV|| 'dev'; // 'prod' or 'dev'

const dev = {
 app: {
   port: parseInt(process.env.PORT) || 3000
 }
};

const production = {
  app: {
    port: parseInt(process.env.PORT) || 3000
  }
 };


const config = {
 dev,
 production
};

module.exports = config[env];