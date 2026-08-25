import { OpenSourceContribution } from '../types';

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 'live-request-watcher',
    title: 'Live Request Watcher',
    description: 'An open-source developer tool for real-time inspection, interception, and live streaming of HTTP and WebSocket traffic in microservice architectures.',
    repository: 'https://github.com/lakshay88/live-request-watcher',
    organization: 'lakshay88',
    contributions: [
      'Engineered core Go daemon for capturing and streaming HTTP/WebSocket packets',
      'Built interactive React frontend for live payload search, filter, and diff inspection',
      'Added Docker and standalone binary packaging for zero-config local development setups',
      'Authored comprehensive documentation and usage guides for team adoption',
    ],
    pullRequests: [
      {
        number: 1,
        title: 'feat: add real-time websocket event broadcasting and ui filtering',
        url: 'https://github.com/lakshay88/live-request-watcher',
        status: 'merged',
        date: '2024',
      },
    ],
    technologies: ['Go', 'WebSockets', 'React.js', 'TypeScript', 'Docker', 'REST API'],
  },
  {
    id: 'rabbitmq-golang',
    title: 'RabbitMQ Golang Event Pipeline',
    description: 'A modular, open-source library and implementation guide for building resilient event-driven systems with Go, RabbitMQ, DLQs, and auto-reconnection.',
    repository: 'https://github.com/lakshay88/rabbitmq-golang',
    organization: 'lakshay88',
    contributions: [
      'Implemented robust publisher/consumer interfaces with graceful reconnect and backpressure',
      'Configured Dead Letter Exchanges and automated message retry policies',
      'Added Prometheus metrics collector for message processing latency and throughput tracking',
      'Provided Docker Compose multi-node cluster setups for local integration testing',
    ],
    pullRequests: [
      {
        number: 1,
        title: 'feat: resilient consumer pool with exponential backoff and DLX handling',
        url: 'https://github.com/lakshay88/rabbitmq-golang',
        status: 'merged',
        date: '2024',
      },
    ],
    technologies: ['Go', 'RabbitMQ', 'Docker', 'Prometheus', 'Event-Driven Architecture'],
  }
];
