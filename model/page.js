const dbConnPool = require("./db");

let Page = {};

Page.getPage = async (key) => {
  let result = {};

  let dbConn = await dbConnPool.getConnection();

  const rows = await dbConn.query(
    "SELECT pageKey, title, content, dateModified, username, email FROM `page` JOIN `user` ON user.userId = page.lastEditUser WHERE pageKey = ?",
    [key]
  );
  dbConn.end();

  if (rows.length > 0) {
    result.status = true;
    result.data = rows[0];
  } else {
    result.status = false;
  }

  return result;
};


Page.updatePage = async (key, pageData, userid) => {

  let dbConn = await dbConnPool.getConnection();

  await dbConn.query(
    "UPDATE `restaurant`.`page` SET `title` = ?, `content`=?, lastEditUser=? WHERE  `pageKey`= ?;",[pageData.title, pageData.content, userid, key]
  );
  dbConn.end();

  return {status:true};
};

Page.createPage = async (pageData, userid) => {
  let dbConn = await dbConnPool.getConnection();
  try {
    const sqlResult = await dbConn.query("INSERT INTO `restaurant`.`page` (`pageKey`, `title`, `content`, `lastEditUser) VALUES (?,?,?,?)", [pageData.pageKey, pageData.title, pageData.content, userid])
    } catch (err) {
      dbConn.end();
      return { status: false, message: err.message }
  }
  r

  // console.log(sqlResult);
  return {status:true}
};


module.exports = Page;
