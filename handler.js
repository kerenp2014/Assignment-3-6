exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Kerenp! Your function executed successfully!",
    }),
  };
};
