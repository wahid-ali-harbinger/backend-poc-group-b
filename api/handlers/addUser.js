module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v3.0! AddUser executed successfully!",
        },
        null,
        2
      ),
    };
  };
  