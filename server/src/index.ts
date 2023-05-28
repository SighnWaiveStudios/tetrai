import "./data";

async function startAPI() {

  const { default: apiServer } = await import('./api');
  const host = process.env.TETRAI_HOST || '127.0.0.1';
  const port = parseInt(process.env.TETRAI_PORT) || 3000

  apiServer.listen(port, host, () => {
    console.log(`Tetrai API Online at ${host}${port?':'+port:''}`)
  }) ;
}

startAPI();