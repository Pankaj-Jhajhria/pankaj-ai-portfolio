export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  implementation: string;
  technicalApproach: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  status: 'Live Deployed' | 'Evaluation Available' | 'Prototype' | 'Research / Benchmarked';
  codeUrl: string;
  demoUrl?: string;
  modelRepoUrl?: string;
  highlights: string[];
}

export interface AdditionalProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  codeUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  activeSkills: string[];
  exploringSkills?: string[];
}

export const PERSONAL_INFO = {
  name: "Pankaj Jhajhria",
  title: "AI Engineer",
  tagline: "Designing, building, and evaluating intelligent systems.",
  positioning: "Agentic AI · LLMs & RAG · Applied Machine Learning · Deep Learning · AI Systems Engineering",
  shortBio:
    "Engineering student at IIITDM Kurnool focused on practical machine learning systems. I build end-to-end intelligent applications with strict evaluation rigor—from evidence-grounded RAG docents and large-scale data pipelines to multimodal computer vision architectures.",
  location: "Kurnool, Andhra Pradesh, India",
  email: "pankajlilo252@gmail.com",
  github: "https://github.com/Pankaj-Jhajhria",
  linkedin: "https://www.linkedin.com/in/pankaj-jhajhria-a6a56735b/",
  x: "https://x.com/PkFlamer",
  resumePath: "/assets/Pankaj_Jhajhria_AI_ML_Resume.pdf",
  institution: "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kurnool",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  graduation: "Expected June 2028",
};

export const ENGINEERING_FOCUS = [
  {
    id: "genai",
    title: "Agentic AI & Generative Systems",
    iconName: "BrainCircuit",
    description:
      "Architecting reliable LLM workflows with dense vector retrieval, deterministic guardrails, structured source grounding, and multi-modal audio docents.",
    capabilities: [
      "Retrieval-Augmented Generation (RAG) with FAISS & Sentence Transformers",
      "Confidence-threshold intent gating & anti-hallucination refusals",
      "Dual generation modes: Cloud LLMs (Groq) & zero-key offline synthesizers",
      "Multimodal voice pipelines: Whisper speech-to-text & Piper ONNX neural TTS",
    ],
    primaryColor: "amber",
  },
  {
    id: "ml-systems",
    title: "Applied Machine Learning & Data Systems",
    iconName: "Database",
    description:
      "Engineering high-throughput, out-of-core data preparation and evaluation pipelines over millions of real-world records with statistical rigor.",
    capabilities: [
      "DuckDB SQL engines for out-of-core data extraction & joins",
      "High-dimensional TF-IDF vectorization (100,000+ terms) & cosine retrieval",
      "Cost-sensitive loss weighting for extreme class imbalance",
      "Independent holdout validation over 2,000,000+ test samples",
    ],
    primaryColor: "cyan",
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Computer Vision",
    iconName: "Eye",
    description:
      "Designing and benchmarking PyTorch neural network architectures across multimodal sensor fusion, pixel-level semantic segmentation, and sequential modeling.",
    capabilities: [
      "Dual-stream ResNet-18 architectures with 5-stage feature fusion",
      "Class-weighted cross-entropy for 92% background class imbalance",
      "Multimodal aligned sensor perception (RGB + Thermal infrared)",
      "Autoregressive musical sequence modeling with PyTorch LSTMs",
    ],
    primaryColor: "gold",
  },
  {
    id: "systems-eng",
    title: "AI Application & Systems Engineering",
    iconName: "Layers",
    description:
      "Translating experimental models into reproducible, interactive software with automated testing, modular APIs, and live cloud deployments.",
    capabilities: [
      "Interactive multi-model comparison web applications (Streamlit Cloud)",
      "FastAPI backends with real-time WebSocket video & sensor streaming",
      "Automated unit & integration regression suites using pytest",
      "Full SDLC ownership, reproducibility protocols, and transparent metrics",
    ],
    primaryColor: "copper",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "museguide",
    title: "MuseGuide — AI Museum Guide Using RAG",
    subtitle: "Evidence-grounded museum exploration powered by dense vector search and Groq LPU inference.",
    category: "Generative AI · RAG · Multimodal Systems",
    problem:
      "Museum visitors often receive either generic boilerplate or hallucinated historical facts from broad LLMs when inquiring about specialized curatorial collections.",
    implementation:
      "Built an end-to-end RAG docent indexing 2,000 CC0 Cleveland Museum of Art artworks using normalized 384-dim Sentence-Transformers and FAISS inner-product vector search. Features dual answer generators (Groq Cloud LLM `qwen/qwen3.8-27b` + deterministic offline extractive synthesizer), Groq Whisper speech input, local Piper ONNX neural TTS, and strict 1:1 verified accession citation links.",
    technicalApproach:
      "Implemented confidence-threshold gating (0.35) and keyword overlap verification to enforce honest refusals on unsupported inquiries. Benchmarked systematically across positive, thematic, and adversarial negative queries.",
    metrics: [
      { label: "Recall@5 Accuracy", value: "100.0%" },
      { label: "Mean Reciprocal Rank (MRR)", value: "0.944" },
      { label: "Steady-State Retrieval Latency", value: "14.7 ms" },
      { label: "Negative Refusal Accuracy", value: "100.0%" },
      { label: "Automated Pytest Suite", value: "38 Tests Passed" },
    ],
    tags: ["Python", "Groq Cloud LLM", "Sentence-Transformers", "FAISS", "Streamlit", "Whisper STT", "Piper TTS", "pytest"],
    status: "Evaluation Available",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Museum-Guide-Using-Rag-MuseGuide",
    highlights: [
      "Dual answer generation: high-speed Groq LLM + 100% offline extractive synthesizer fallback",
      "Official CMA accession records verified with image thumbnails and cosine relevance scores",
      "Voice docent powered by Groq Whisper and local Piper ONNX neural voice on CPU",
    ],
  },
  {
    id: "reviewradar",
    title: "ReviewRadar — Large-Scale Sentiment Analysis",
    subtitle: "Out-of-core data engineering and cost-sensitive NLP pipeline over 5,000,000 Amazon reviews.",
    category: "Machine Learning Systems · High-Throughput NLP",
    problem:
      "E-commerce sentiment analysis suffers from massive class imbalance (positive reviews dominating) and memory bottlenecks when scaling to multi-gigabyte datasets.",
    implementation:
      "Architected an out-of-core pipeline processing 5,000,000+ Amazon reviews (2.36 GB raw JSONL) using DuckDB SQL joins for dataset audits, splits, and text cleaning. Engineered 100,000-feature TF-IDF n-gram matrices and calibrated cost-sensitive logistic models with inverse class weights to resolve skew across positive, neutral, and negative sentiment.",
    technicalApproach:
      "Benchmarked baseline Naive Bayes against tuned Logistic Regression and Sentence-Transformer embedding baselines; executed final evaluation over a strictly held-out test split of 2,043,926 reviews.",
    metrics: [
      { label: "Test Split Evaluated", value: "2,043,926 Reviews" },
      { label: "Overall Test Accuracy", value: "86.99%" },
      { label: "Weighted F1-Score", value: "0.879" },
      { label: "Negative Class F1-Score", value: "0.813" },
      { label: "TF-IDF Feature Space", value: "100,000 Terms" },
    ],
    tags: ["Python", "DuckDB", "scikit-learn", "TF-IDF", "NLP", "Class Imbalance", "Statistical Modeling"],
    status: "Evaluation Available",
    codeUrl: "https://github.com/Pankaj-Jhajhria/ReviewRadar",
    highlights: [
      "DuckDB out-of-core SQL pipeline parsing 2.36 GB dataset with zero memory crashes",
      "Tuned class weights to detect negative feedback despite overwhelming positive skew",
      "Strict holdout validation on 2.04M reviews with verified test reports in JSON",
    ],
  },
  {
    id: "rgbt-benchmark",
    title: "RGB-T Semantic Segmentation & Benchmark App",
    subtitle: "Dual-stream multimodal perception in PyTorch and live side-by-side architecture comparison.",
    category: "Deep Learning · Multimodal Vision · Live Benchmark",
    problem:
      "Standard RGB cameras fail to distinguish people and obstacles in night darkness or high glare, while thermal cameras lack color and fine texture.",
    implementation:
      "Implemented an RTFNet-inspired dual-stream ResNet-18 in PyTorch fusing aligned RGB and thermal sensor features at 5 scales on the MFNet dataset (1,569 pairs, 9 classes, 92% background imbalance). Built and deployed an interactive Streamlit comparison application benchmarking 4 segmentation models (MFNet, CSFNet-2, ResNet-18+CMAF v2.1, RTFNet18V2) side-by-side.",
    technicalApproach:
      "Trained with class-weighted cross-entropy (inv_sqrt weights, max ratio ≤ 20) to overcome background dominance. Evaluated with full confusion matrices on the test split. App provides live model inference, overlay opacity sliders, thermal palette diagnostics, and ground-truth validation.",
    metrics: [
      { label: "Test 9-Class mIoU", value: "46%" },
      { label: "Test Foreground mIoU", value: "40%" },
      { label: "Car Class IoU", value: "81%" },
      { label: "Person Class IoU", value: "58%" },
      { label: "Architectures Hosted", value: "4 Models" },
    ],
    tags: ["PyTorch", "ResNet-18", "Computer Vision", "Sensor Fusion", "Streamlit Cloud", "MFNet"],
    status: "Live Deployed",
    codeUrl: "https://github.com/Pankaj-Jhajhria/RGBT_4Architecture_Comparison_App",
    modelRepoUrl: "https://github.com/Pankaj-Jhajhria/RGB-T-Semantic-Segmentation",
    demoUrl: "https://rgb-thermal.streamlit.app/",
    highlights: [
      "Live interactive web app comparing 4 architectures on uploaded or sample scenes",
      "Dual ResNet-18 encoders with element-wise thermal feature fusion across 5 stages",
      "Thermal inspection tools with Grayscale, Inferno, Magma, and Viridis colormaps",
    ],
  },
  {
    id: "filmsense",
    title: "FilmSense — Content-Based Recommendation Engine",
    subtitle: "Weighted metadata similarity retrieval with fuzzy title search and live interactive exploration.",
    category: "Recommendation Systems · NLP · Live Web App",
    problem:
      "Users looking for movie recommendations based on nuanced plot elements, directors, and cast frequently encounter cold-start issues and rigid exact-match query failures.",
    implementation:
      "Constructed a content-based recommendation engine processing 3,911 films into 27,548 TF-IDF vocabulary terms via a priority-based metadata coalescing pipeline across heterogeneous TMDB datasets. Engineered weighted composite features prioritizing director, cast, keywords, and genres with cosine NearestNeighbors retrieval.",
    technicalApproach:
      "Integrated multi-stage query parsing: exact match, substring match, and fuzzy string matching using difflib to handle spelling mistakes. Deployed an interactive Streamlit web application with poster visualization and dynamic genre filtering.",
    metrics: [
      { label: "Film Catalogue", value: "3,911 Movies" },
      { label: "TF-IDF Vocabulary", value: "27,548 Terms" },
      { label: "Ranked Retrieval", value: "Top-10 Similar Films" },
      { label: "Deployment", value: "Streamlit Cloud" },
    ],
    tags: ["Python", "pandas", "scikit-learn", "SciPy", "Streamlit Cloud", "difflib", "NLP"],
    status: "Live Deployed",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Movie-Recommendation-System-FilmSense-",
    demoUrl: "https://filmsense.streamlit.app/",
    highlights: [
      "Weighted composite text representations giving higher importance to directors and genres",
      "Tolerant search handling typos and partial queries with difflib fallback",
      "Live deployed application on Streamlit Community Cloud with visual poster cards",
    ],
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    id: "melodyloop",
    title: "MelodyLoop — LSTM Music Generation",
    description:
      "Autoregressive musical sequence modeling in PyTorch trained from scratch on 1,276 MAESTRO classical piano performances. Quantizes MIDI into pitch, duration, and time-shift tokens with temperature-controlled rollout.",
    tags: ["PyTorch", "LSTM", "Music Generation", "MAESTRO", "Audio Synthesis"],
    status: "PyTorch Core",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Music-Generation-using-LSTM-MelodyLoop-",
  },
  {
    id: "amazon-ml-2026",
    title: "Amazon ML Challenge 2026 — Entity Resolution",
    description:
      "Multi-source business entity resolution pipeline utilizing DuckDB 7-view blocking, RapidFuzz similarity re-ranking, 30 engineered features, and LightGBM classifier with hard-negative mining.",
    tags: ["DuckDB", "LightGBM", "RapidFuzz", "Feature Engineering", "Entity Matching"],
    status: "Competition Pipeline",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Amazon-ML-Challenge-2026",
  },
  {
    id: "signbridge",
    title: "SignBridge — Sign Language Translator",
    description:
      "Webcam-based Indian Sign Language translator extracting 21 MediaPipe hand landmarks into Random Forest geometric classifiers, streamed via FastAPI WebSockets with edge-tts audio synthesis.",
    tags: ["Python", "FastAPI", "MediaPipe", "scikit-learn", "WebSocket"],
    status: "Prototype",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Sign-Language-Translator-Sign-Bridge-",
  },
  {
    id: "satellite-seg",
    title: "Satellite Image Segmentation",
    description:
      "Pixel-level land-cover classification from satellite imagery using a PyTorch U-Net baseline trained and evaluated on LandCover.ai and DeepGlobe multi-class aerial datasets.",
    tags: ["PyTorch", "U-Net", "Semantic Segmentation", "Remote Sensing"],
    status: "Jupyter Pipeline",
    codeUrl: "https://github.com/Pankaj-Jhajhria/Satellite-Image-Segmentation",
  },
  {
    id: "ml-from-scratch",
    title: "ML Algorithms From Scratch",
    description:
      "Pure Python/NumPy implementations of core machine learning algorithms without ML libraries: Decision Trees (Gini/Entropy), Gaussian Naive Bayes, Logistic Regression, and Linear Regression with Normal Equations.",
    tags: ["Python", "NumPy", "Algorithms", "Mathematics", "Optimization"],
    status: "Foundational Code",
    codeUrl: "https://github.com/Pankaj-Jhajhria",
  },
  {
    id: "findit",
    title: "FindIt — Lost & Found Campus Platform",
    description:
      "Full-stack web application for campus community lost-and-found reporting featuring persistent MySQL storage, category filtering, WhatsApp direct connects, and an administrative moderation panel.",
    tags: ["PHP", "MySQL", "Full-Stack", "Web Development"],
    status: "Live Deployed",
    demoUrl: "https://lostfoundd.freedev.app/",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Generative AI & Retrieval Systems",
    description: "Building grounded, hallucination-resistant LLM architectures with production vector search.",
    activeSkills: [
      "Retrieval-Augmented Generation (RAG)",
      "FAISS Vector Search (IndexFlatIP)",
      "Dense Embeddings (Sentence-Transformers)",
      "Source Grounding & Citation Guardrails",
      "Prompt Engineering & Intent Classification",
      "Groq Cloud API & LPU Inference",
      "Groq Whisper Speech-to-Text",
      "Piper ONNX Local Neural TTS",
    ],
    exploringSkills: ["LangGraph Workflows", "Agentic Tool Calling", "Multi-Vector Reranking"],
  },
  {
    title: "Machine Learning & Data Systems",
    description: "Statistical modeling, high-throughput feature pipelines, and scalable data engines.",
    activeSkills: [
      "scikit-learn",
      "DuckDB Out-of-Core SQL",
      "NumPy & pandas",
      "SciPy Sparse Computations",
      "TF-IDF Feature Representation",
      "Cosine Similarity & k-NN Retrieval",
      "Class Imbalance Handling (Cost-Sensitive)",
      "Evaluation Metrics (Recall@k, MRR, F1, mIoU)",
    ],
    exploringSkills: ["LightGBM Tuning", "RapidFuzz Entity Resolution"],
  },
  {
    title: "Deep Learning & Computer Vision",
    description: "Neural network architectures in PyTorch across vision, fusion, and sequence data.",
    activeSkills: [
      "PyTorch & Torchvision",
      "Convolutional Neural Networks (CNNs)",
      "Dual-Stream ResNet Feature Fusion",
      "Semantic Segmentation (MFNet, U-Net)",
      "Recurrent Neural Networks (LSTM Sequences)",
      "MediaPipe Landmark Detection",
      "OpenCV Image Processing",
      "Confusion Matrix & Error Mapping",
    ],
    exploringSkills: ["Diffusion Models", "Vision Transformers (ViT)"],
  },
  {
    title: "Software & Systems Engineering",
    description: "Reliable, testable, and deployable code with clean architecture.",
    activeSkills: [
      "Python 3",
      "C++ (DSA & Structured Problem Solving)",
      "SQL (PostgreSQL / SQLite / MySQL)",
      "FastAPI & REST APIs",
      "Streamlit Application Engineering",
      "Git & GitHub Workflows",
      "Linux / Shell Scripting",
      "pytest Automated Testing",
    ],
    exploringSkills: ["Docker Containerization", "Next.js / TypeScript Web Frontends"],
  },
];

export const EXPERIENCE_EDUCATION = {
  experience: [
    {
      role: "Founding Team Member",
      company: "CoolieMate",
      url: "https://cooliemate.in",
      period: "Jan 2025 – Present",
      location: "Kurnool, India",
      bullets: [
        "Co-founded a digital logistics platform for pre-booking licensed railway station porters, piloted in the Kurnool Railway Station (KRNT) market.",
        "Led grassroots customer discovery, operational workflow design, and direct outreach, securing initial organic paying bookings (~1 booking/week pre-campaign) to validate consumer demand.",
        "Collaborated on creative brand messaging and partner channel distribution to prepare scalable promotional campaigns.",
      ],
    },
  ],
  education: {
    institution: "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Kurnool",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "Aug 2024 – Expected June 2028",
    location: "Kurnool, Andhra Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Probability & Statistics",
      "Linear Algebra",
    ],
  },
  certifications: [
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Nov 2025",
      description: "Completed practical simulation applying data analytics, forensic data validation, and exploratory visualization using Python and SQL.",
    },
  ],
};
