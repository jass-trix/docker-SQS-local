import { SQS } from 'aws-sdk';

const queue = new SQS({
  endpoint: 'http://localhost:9324',
  region: 'us-east-1', // it does not matter
});

(async () => {
  const queues = await queue.listQueues().promise();
  console.log(queues);
})();
