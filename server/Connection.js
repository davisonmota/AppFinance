const pgp = require('pg-promise');

class Connection {
  constructor() {
    this.connection = pgp()(
      'postgres://postgres:root@localhost:5432/appfinance'
    );
  }

  query(statement, params) {
    return this.connection.query(statement, params);
  }
}

module.exports = Connection;
