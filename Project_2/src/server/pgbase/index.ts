// interface IClient {
//   host: string,
//   port: number,
//   database: string,
//   user: string,
//   password: string,
//   connect: () => void
// }

var pg = require ('pg')

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'report',
  user: 'postgres',
  password: '12345',
})

async function init(){
    await client.connect();
}

module.exports.client = client;
module.exports.initClient = init;