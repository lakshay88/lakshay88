import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const chapters = [
  {
    code: '01 / DISTRIBUTED ENTERPRISE PLATFORMS',
    company: 'Thoughtworks',
    title: 'Resilient microservices, clean architecture, and TDD',
    description: 'Engineering enterprise-grade cloud-native platforms in Go and Python, championing Test-Driven Development (TDD), domain-driven architectures, and zero-downtime releases.',
    signals: ['TDD & DDD', 'Clean Architecture', 'Go & Python', 'CI/CD Automation'],
  },
  {
    code: '02 / EVENT-DRIVEN MESSAGING & QUEUES',
    company: 'Asynchronous Architecture',
    title: 'High-throughput stream and message pipelines',
    description: 'Constructing robust event-driven message queuing architectures using RabbitMQ and Kafka with backpressure handling, Dead Letter Queues (DLQ), and distributed locking.',
    signals: ['RabbitMQ & Kafka', '50K+ msg/sec', 'DLQ & Retries', 'Distributed Locking'],
  },
  {
    code: '03 / CLOUD & CONTAINER INFRASTRUCTURE',
    company: 'Kubernetes · AWS & GCP',
    title: 'Multi-cloud deployments and DevOps automation',
    description: 'Deploying containerized microservices to Kubernetes clusters, configuring automated CI/CD pipelines with GitHub Actions and Jenkins, and instrumenting observability.',
    signals: ['Kubernetes & Docker', 'AWS & GCP', 'Terraform', 'Zero-Downtime Deployments'],
  },
  {
    code: '04 / DEVELOPER TOOLS & OBSERVABILITY',
    company: 'Live Request Watcher & Open Source',
    title: 'Real-time telemetry and developer tooling',
    description: 'Building developer-first tools like Live Request Watcher to capture, inspect, and analyze high-volume HTTP/WebSocket traffic across microservices in real time.',
    signals: ['WebSockets', 'Live Streaming', 'Low Latency', 'Developer Productivity'],
  },
];

const EngineeringJourney = () => (
  <Box id="journey" component="section" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'transparent', contentVisibility: 'auto', containIntrinsicSize: '900px' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.7fr 1.3fr' }, gap: { xs: 5, md: 9 } }}>
        <Box sx={{ position: { md: 'sticky' }, top: { md: 120 }, alignSelf: 'start' }}>
          <Typography sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', color: 'secondary.main', letterSpacing: '.14em', fontSize: '.75rem', mb: 2 }}>
            $ history --impact
          </Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>Systems I’ve shipped.</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            An engineering journey across enterprise consulting, cloud-native distributed microservices, event-driven pipelines, and developer tooling—engineered with high standards of reliability and clean code.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', left: { xs: 12, sm: 18 }, top: 18, bottom: 18, width: 1, background: 'linear-gradient(#5eead4, rgba(56,189,248,.15))' } }}>
          {chapters.map((chapter, index) => (
            <Box
              key={chapter.code}
              component={motion.article}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .5, delay: index * .08 }}
              sx={{ position: 'relative', pl: { xs: 5, sm: 7 }, pb: index === chapters.length - 1 ? 0 : 5 }}
            >
              <Box sx={{ position: 'absolute', left: { xs: 7, sm: 13 }, top: 8, width: 11, height: 11, borderRadius: '50%', backgroundColor: 'secondary.main', boxShadow: '0 0 0 5px rgba(94,234,212,.1), 0 0 24px rgba(94,234,212,.55)' }} />
              <Box sx={{ p: { xs: 2.5, sm: 3.5 }, border: '1px solid', borderColor: 'divider', borderRadius: 3, background: 'linear-gradient(145deg, rgba(15,33,52,.92), rgba(7,17,31,.92))', transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease', '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(94,234,212,.38)', boxShadow: '0 24px 60px rgba(0,0,0,.24)' } }}>
                <Typography sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', color: 'primary.main', fontSize: '.68rem', letterSpacing: '.12em', mb: 1 }}>{chapter.code}</Typography>
                <Typography variant="h5" sx={{ mb: .5 }}>{chapter.title}</Typography>
                <Typography color="secondary.main" sx={{ fontWeight: 700, mb: 1.5 }}>{chapter.company}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>{chapter.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {chapter.signals.map((signal) => <Chip key={signal} label={signal} size="small" variant="outlined" />)}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default EngineeringJourney;
