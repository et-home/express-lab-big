const dbConnPool = require("./db.js");

let Users = {};

Users.getUser = async (userId) => {
  let result = {};
  if (isNaN(userId)) {
    result.status = false;
  } else {
    let dbConn = await dbConnPool.getConnection();
    const rows = await dbConn.query(
      "SELECT userId, username, `first` FROM `user` WHERE userId = ?",
      [userId]
    );

    dbConn.end();
    //console.log(rows);
    if (rows.length > 0) {
      result.status = true;
      result.rows = rows[0];
      //console.log(rows[0]);
    } else {
      result.status = false;
    }
  }

  return result;
};

Users.getUsers = async () => {
  let result = {};
  let dbConn = await dbConnPool.getConnection();
  const rows = await dbConn.query(
    "SELECT userId, username, `first` FROM `user`"
  );
  dbConn.end();
  //console.log(rows);
  result.data = rows;
  return result;
};

module.exports = Users;
