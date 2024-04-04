import http from 'http';
import os from 'os';
import throng from 'throng';
import app from './app';

const WORKERS = process.env.WEB_CONCURRENCY || os.cpus().length;

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error): void => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

const port = Number(process.env.PORT) || 1338;
app.set('port', port);

throng({
  start: threadId => start(app, threadId, port),
  workers: WORKERS,
  lifetime: Infinity
});

function start(App, threadId, Port) {
  const httpServer = http.createServer(App);
  httpServer.listen(Port, () => {
    console.log(`Thread threadId: ${threadId} pid: ${process.pid} port: ${port} alive!`);
  });

  const SIGS = [
    'SIGINT', // Ctrl + C
    'SIGBREAK', // Ctrl + C
    'SIGTERM', // Soft Shutown
  ] as const;

  SIGS.forEach((SIG) => {
    process.on(SIG, function() {
      console.log(`Worker ${threadId} exiting`);
      console.log('Cleanup here');
      process.exit();
    })
  });
}
