export const profile = {
  name: 'Parth Sood',
  role: 'AI / ML Engineer',
  tagline:
    'Building production-grade LLM systems,\nagentic pipelines, and RAG architectures\nthat actually ship.',
  email: 'parthsood45@gmail.com',
  linkedin: 'https://linkedin.com/in/parth-sood',
  github: 'https://github.com/psood708',
  location: 'India',
  status: 'Available for opportunities',
  education: 'B.Tech, Computer Engineering · PDEU · 2021–2025',
}

export const heroKpis = [
  { count: 10, suffix: 'M+', label: 'Records Processed' },
  { count: 55, suffix: '%', label: 'Latency Reduction' },
  { count: 38, suffix: '%', label: 'False Positives Reduced' },
  { count: 1, suffix: 'M', label: 'Vectors at 98% Recall' },
]

export const aboutBio = [
  `I'm a <strong>Data Science Analyst</strong> at Aspect Ratio Pvt. Ltd. and a Computer Engineering graduate from PDEU. I specialise in <strong>production AI systems</strong> — RAG pipelines, multi-agent orchestration, and embedding-based search engines that run at scale.`,
  `Previously a <strong>Machine Learning Researcher</strong> at ISRO's Space Application Centre, building anomaly detection frameworks on satellite telemetry. I care deeply about systems that don't hallucinate, don't drift, and don't break in production.`,
  `I work with <strong>LangGraph, Claude, GPT-4, ChromaDB, FastAPI, PySpark</strong> and whatever else closes the gap between prototype and shipped product.`,
]

export const aboutStats = [
  { val: '2', suffix: '+', desc: 'Years Building ML Systems' },
  { val: '10', suffix: 'TB+', desc: 'Satellite Telemetry Processed' },
  { val: '500', suffix: 'K+', desc: 'Clinical Notes Segmented' },
  { val: '98', suffix: '%', desc: 'Recall @ 1M-Vector Scale' },
]

export const capabilities = [
  { name: 'LLMs & RAG Systems', pct: 95, color: 'blue' },
  { name: 'Agentic Orchestration', pct: 90, color: 'amber' },
  { name: 'Vector Search & Embeddings', pct: 93, color: 'fuchsia' },
  { name: 'ML & NLP (PyTorch / HF)', pct: 85, color: 'violet' },
  { name: 'Data Pipelines & Backend', pct: 88, color: 'blue' },
  { name: 'MLOps & Cloud Infra', pct: 80, color: 'amber' },
]

export type Chip = { label: string; color?: 'blue' | 'amber' | 'fuchsia' | 'violet' }

export interface ExperienceItem {
  period: string
  company: string
  role: string
  bullets: string[]
  kpis: { label: string; val: string }[]
  chips: Chip[]
  accentColor: 'blue' | 'violet'
}

export const experience: ExperienceItem[] = [
  {
    period: 'Jan 2025 — Present',
    company: 'Aspect Ratio Pvt. Ltd. · Pune, Maharashtra',
    role: 'Data Science Analyst',
    bullets: [
      'Architected an end-to-end <strong>RAG pipeline</strong> and NLP patient cohort system using <strong>PubMedBERT</strong> embeddings, metadata indexing, and optimised token chunking over <strong>10M+ records</strong> across distributed SQL databases — cutting analyst query latency by <strong>55%</strong>.',
      'Designed a production <strong>physician referral knowledge graph</strong> with hybrid retrieval (dense transformer embeddings + frequency-weighted graph traversal), mitigating hallucinations and surfacing <strong>2× more</strong> high-value targets than rule-based systems.',
      'Delivered unsupervised patient segmentation across <strong>500K+ clinical notes</strong> using <strong>BioBERT + UMAP</strong>, uncovering 12 prescribing behaviour clusters that cut strategic market targeting spend by <strong>20%</strong>.',
    ],
    kpis: [
      { val: '55%', label: 'Query Latency↓' },
      { val: '2×', label: 'Target Discovery' },
      { val: '20%', label: 'Spend Reduction' },
      { val: '10M+', label: 'Records' },
    ],
    chips: [
      { label: 'PubMedBERT' },
      { label: 'RAG' },
      { label: 'Knowledge Graphs' },
      { label: 'Hybrid Retrieval' },
      { label: 'BioBERT', color: 'amber' },
      { label: 'UMAP', color: 'amber' },
      { label: 'FastAPI', color: 'violet' },
      { label: 'PostgreSQL', color: 'violet' },
    ],
    accentColor: 'blue',
  },
  {
    period: 'June 2024 — Sept 2024',
    company: 'Space Application Centre, ISRO · Ahmedabad, Gujarat',
    role: 'Machine Learning Researcher Intern',
    bullets: [
      'Built secure, high-throughput <strong>PySpark streaming ingestion pipelines</strong> processing <strong>10TB+</strong> of raw satellite telemetry, enforcing strict data governance in a mission-critical air-gapped environment.',
      'Engineered a production <strong>anomaly detection framework</strong> using <strong>Kalman Filters</strong> with calibrated confidence scoring and tiered alert routing — reducing false-positive alerts by <strong>38%</strong> and cutting Spark model training time by <strong>45%</strong>.',
    ],
    kpis: [
      { val: '38%', label: 'False Positives↓' },
      { val: '45%', label: 'Training Time↓' },
      { val: '10TB+', label: 'Telemetry' },
    ],
    chips: [
      { label: 'PySpark', color: 'fuchsia' },
      { label: 'Kalman Filters', color: 'fuchsia' },
      { label: 'Anomaly Detection', color: 'violet' },
      { label: 'Streaming Pipelines', color: 'violet' },
      { label: 'Satellite Telemetry', color: 'amber' },
    ],
    accentColor: 'violet',
  },
]

export interface FlowNode {
  label: string
  type: 'in' | 'core' | 'out'
}

export interface Project {
  fig: string
  name: string
  sub: string
  flow: FlowNode[]
  desc: string
  kpiBadges: string[]
  chips: Chip[]
  waveColor: string
}

export const projects: Project[] = [
  {
    fig: 'FIG.04-A',
    name: 'MemoryWeave',
    sub: 'Production Agentic Memory System for Long-Context LLM Applications',
    flow: [
      { label: 'LLM Input', type: 'in' },
      { label: 'ChromaDB + NetworkX', type: 'core' },
      { label: 'Hybrid Retrieval', type: 'out' },
    ],
    desc: 'Token-efficient agentic memory with importance scoring, exponential decay forgetting curves, and Hebbian knowledge graph reinforcement. Hybrid retrieval — dense vector similarity → 1–2 hop graph traversal — under a strict 2K-token context budget.',
    kpiBadges: ['2K Token Budget', '5-Agent LangGraph', 'Claude 3.5 / 4.6 + GPT-4'],
    chips: [
      { label: 'LangGraph' },
      { label: 'ChromaDB' },
      { label: 'NetworkX' },
      { label: 'FastAPI', color: 'amber' },
      { label: 'Claude Sonnet', color: 'amber' },
      { label: 'GPT-4', color: 'violet' },
    ],
    waveColor: '#38bdf8',
  },
  {
    fig: 'FIG.04-B',
    name: 'Agent Readiness',
    sub: 'Production AI Analytics Engine with Cloud-Native Data Pipeline',
    flow: [
      { label: 'URL Input', type: 'in' },
      { label: '8 Async Checks', type: 'core' },
      { label: '0–100 Score', type: 'out' },
    ],
    desc: 'Real-time AI-readiness scoring engine parallelising 8 async feature extraction checks (llms.txt, JSON-LD, robots.txt, OpenGraph, Jina content density) via asyncio + FastAPI. ~2s/URL latency validated on 1K+ real-world URLs.',
    kpiBadges: ['~2s / URL', '100% CI Pass Rate', '1K+ URLs Validated'],
    chips: [
      { label: 'FastAPI' },
      { label: 'asyncio' },
      { label: 'Supabase', color: 'amber' },
      { label: 'PostgreSQL', color: 'amber' },
      { label: 'GitHub Actions', color: 'fuchsia' },
      { label: 'Vercel', color: 'violet' },
    ],
    waveColor: '#fbbf24',
  },
  {
    fig: 'FIG.04-C',
    name: 'Vector Search Engine',
    sub: 'From-Scratch HNSW Implementation',
    flow: [
      { label: 'Query Vector', type: 'in' },
      { label: 'HNSW M=16', type: 'core' },
      { label: 'ANN Results', type: 'out' },
    ],
    desc: 'Production-grade vector similarity search using HNSW (M=16, ef_construction=128 via grid search) as a low-latency RAG retrieval backbone. 98% recall at 1M-vector scale with 40% lower query latency vs. baseline — competitive with FAISS on ann-benchmarks.',
    kpiBadges: ['98% Recall @ 1M Vectors', '40% Lower Latency vs Baseline'],
    chips: [
      { label: 'HNSW', color: 'fuchsia' },
      { label: 'Python', color: 'fuchsia' },
      { label: 'ann-benchmarks', color: 'amber' },
      { label: 'FAISS' },
      { label: 'NumPy', color: 'violet' },
    ],
    waveColor: '#e879f9',
  },
]

export interface SkillGroup {
  name: string
  color: 'blue' | 'amber' | 'fuchsia' | 'violet'
  tags: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'LLMs & GenAI',
    color: 'blue',
    tags: [
      'GPT-4o','Azure OpenAI','Claude Sonnet/Opus','LLaMA','Mistral',
      'RAG Pipelines','HyDE','Hybrid Retrieval','Cross-Encoder Re-ranking',
      'Prompt Engineering','Fine-Tuning LoRA/PEFT','Context Windows',
    ],
  },
  {
    name: 'Agent Frameworks',
    color: 'amber',
    tags: [
      'LangGraph','LangChain','LlamaIndex','AutoGen','CrewAI',
      'Semantic Kernel','Multi-Agent Orchestration','ReAct Patterns',
      'Tool Use','Memory Management',
    ],
  },
  {
    name: 'Vector Databases',
    color: 'fuchsia',
    tags: [
      'HNSW','FAISS','ChromaDB','Pinecone','Knowledge Graphs',
      'NetworkX','Semantic Search','Embedding Models',
    ],
  },
  {
    name: 'ML & NLP',
    color: 'violet',
    tags: [
      'PyTorch','Scikit-learn','XGBoost','Transformers','PubMedBERT',
      'BioBERT','UMAP','BERTopic','Kalman Filters','Hallucination Mitigation',
    ],
  },
  {
    name: 'Data & Backend',
    color: 'blue',
    tags: [
      'Python','FastAPI','Flask','PySpark','SQL','PostgreSQL',
      'Supabase','Snowflake','Databricks','asyncio','ETL Pipelines',
    ],
  },
  {
    name: 'MLOps & Cloud',
    color: 'amber',
    tags: [
      'AWS','Azure','Docker','Kubernetes','GitHub Actions',
      'MLflow','CI/CD','Distributed Tracing','Vercel','Render',
    ],
  },
]

export const telemetryLogs = [
  '[09:42:11] RAG pipeline :: query_latency=12ms',
  '[09:42:13] embedding :: model=PubMedBERT dim=768',
  '[09:42:15] graph_traversal :: hops=2 targets=14',
  '[09:42:17] anomaly_score :: delta=0.023 status=OK',
  '[09:42:18] vector_search :: recall=0.98 k=50',
  '[09:42:20] agent :: tool_call=search memory_hit=true',
  '[09:42:22] pipeline :: records_processed=10M+',
  '[09:42:24] llm :: tokens=1847 budget=2000 cache_hit',
  '[09:42:26] kalman_filter :: confidence=0.94',
  '[09:42:28] cluster :: segment=7 n=41K spend_delta=-20%',
  '[09:42:30] hnsw :: M=16 ef=128 latency=0.8ms',
  '[09:42:32] bioBERT :: umap_components=20 clusters=12',
  '[09:42:34] langraph :: node=memory_consolidation done',
  '[09:42:36] spark :: throughput=10TB ingested',
  '[09:42:38] retrieval :: dense+sparse hybrid alpha=0.6',
]

export const marqueeItems = [
  'LangGraph','ChromaDB','FastAPI','PySpark','RAG','HNSW','Claude',
  'GPT-4o','PyTorch','BioBERT','PubMedBERT','UMAP','Kalman Filters',
  'Docker','AWS','LangGraph','ChromaDB','FastAPI','PySpark','RAG',
  'HNSW','Claude','GPT-4o','PyTorch','BioBERT','PubMedBERT','UMAP',
  'Kalman Filters','Docker','AWS',
]
