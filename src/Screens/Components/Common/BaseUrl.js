const getBaseUrl = () => {
  let url;
  switch (process.env.NODE_ENV) {
    case 'production':
      url = 'http://20.204.131.100:9000/';
      break;
    case 'development':
    default:
      url = 'http://20.204.131.100:9000/';
  }
  return url;
};
export default getBaseUrl;
