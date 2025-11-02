
import { PlanData, Phase, WeekDetails } from './types';

export const PLAN_DATA: PlanData = {
    1: {
        phase: "Phase 1: System Design",
        title: "Week 1: Foundations",
        focus: "Core concepts.",
        topics: "Scaling (Vertical vs. Horizontal), Load Balancers, Caching (strategies like Write-Through, Write-Back, Cache-Aside), Databases (SQL vs. NoSQL, CAP Theorem, Indexes), Proxies.",
        weekday: "Cover one major topic each night.",
        weekend: "Review all topics and do a basic 'back-of-the-envelope' calculation for a simple system (e.g., a blog)."
    },
    2: {
        phase: "Phase 1: System Design",
        title: "Week 2: Core Patterns & Components",
        focus: "How services communicate and handle data.",
        topics: "Message Queues (e.g., RabbitMQ, Kafka), Pub/Sub, Sharding & Partitioning, Replication & Consistency, CDNs.",
        weekday: "Deep dive into one pattern each night.",
        weekend: "Design a URL Shortener. Draw the diagram, explain the DB schema, and identify bottlenecks."
    },
    3: {
        phase: "Phase 1: System Design",
        title: "Week 3: Practice & Application",
        focus: "Articulating a full design.",
        topics: "Practice common interview problems. Use a framework: 1. Clarify requirements 2. Estimate 3. Design high-level components 4. Deep dive 5. Bottlenecks & trade-offs.",
        weekday: "Tackle one design each night (e.g., 'Design Twitter,' 'Design Netflix,' 'Design Uber Eats').",
        weekend: "Do one full, timed mock interview (with a peer or just talking to a whiteboard)."
    },
    4: {
        phase: "Phase 2: DSA",
        title: "Week 4: Core Data Structures",
        focus: "Review and implement the basics.",
        topics: "Arrays & Strings (sliding window, two pointers), Hash Maps (for lookups, counting), Linked Lists.",
        weekday: "Focus on one pattern/structure. Solve 5-7 Easy/Medium LeetCode problems related to it.",
        weekend: "Mix and match problems from the week. Ensure you can explain the time & space complexity for every solution."
    },
    5: {
        phase: "Phase 2: DSA",
        title: "Week 5: Trees & Graphs",
        focus: "Non-linear data structures.",
        topics: "Trees (BSTs, Traversals: BFS, DFS, Pre/In/Post-order), Tries, Heaps/Priority Queues.",
        weekday: "Spend two days on Trees, one on Tries, one on Heaps.",
        weekend: "Focus entirely on Graphs (BFS, DFS, basic graph algos like Dijkstra or topological sort if time permits)."
    },
    6: {
        phase: "Phase 2: DSA",
        title: "Week 6: Advanced Patterns & Review",
        focus: "Dynamic Programming and common difficult patterns.",
        topics: "Dynamic Programming (1D & 2D), Greedy Algorithms, Intervals.",
        weekday: "Spend at least 3 days on DP. It's all about pattern recognition (e.g., house robber, coin change).",
        weekend: "Do 2-3 timed mock DSA sessions (e.g., 45 mins for 2 problems). Review weak areas from all 3 weeks."
    },
    7: {
        phase: "Phase 3: MLOps",
        title: "Week 7: Foundations & The Pipeline",
        focus: "What is MLOps? Data management.",
        topics: "The ML Lifecycle, Data Ingestion, Data Validation (e.g., TFDV), Data Versioning (DVC).",
        weekday: "Cover one topic per night. Set up DVC for a simple project.",
        weekend: "Build a complete data pipeline script (ingest, validate, split, version)."
    },
    8: {
        phase: "Phase 3: MLOps",
        title: "Week 8: Tooling & Deployment",
        focus: "Packaging and serving models.",
        topics: "Containerization (Docker basics), Orchestration (Kubernetes basics - what are Pods, Services, Deployments?), CI/CD (GitHub Actions or Jenkins for ML), Model Serving (Flask/FastAPI, TF Serving, TorchServe).",
        weekday: "Learn Docker. Write a Dockerfile for a simple Flask app. Learn the K8s basics.",
        weekend: "Create a simple CI/CD pipeline in GitHub Actions that tests and builds a Docker image for a model-serving app."
    },
    9: {
        phase: "Phase 3: MLOps",
        title: "Week 9: Monitoring & Lifecycle Management",
        focus: "What happens after deployment?",
        topics: "Model Monitoring (Data Drift, Concept Drift, Performance), A/B Testing, Experiment Tracking (MLFlow), Pipeline Orchestration (Kubeflow, TFX, or Airflow).",
        weekday: "Install MLFlow and track a few dummy experiments. Read about monitoring strategies.",
        weekend: "Review all of MLOps. Draw a diagram of an entire MLOps pipeline, labeling all the tools and processes."
    },
    10: {
        phase: "Phase 4: Machine Learning",
        title: "Week 10: Supervised Learning & Evaluation",
        focus: "Regression, Classification, and how to measure them.",
        topics: "Linear & Logistic Regression, SVMs, Decision Trees, Model Evaluation Metrics (Accuracy, Precision, Recall, F1, ROC-AUC, RMSE).",
        weekday: "Review one algorithm per night. Understand its pros/cons.",
        weekend: "Code a logistic regression from scratch (or close to it). Deep dive into all evaluation metrics and when to use them."
    },
    11: {
        phase: "Phase 4: Machine Learning",
        title: "Week 11: Ensembles & Unsupervised Learning",
        focus: "More complex models and data without labels.",
        topics: "Ensembles (Random Forest, XGBoost, AdaBoost), Clustering (K-Means), Dimensionality Reduction (PCA).",
        weekday: "Spend two nights on Ensembles (they are important). One on K-Means, one on PCA.",
        weekend: "Deep dive into how XGBoost works. Implement PCA and K-Means using scikit-learn and analyze the results."
    },
    12: {
        phase: "Phase 4: Machine Learning",
        title: "Week 12: Deep Learning & Final Review",
        focus: "NN basics and a final review of all 4 topics.",
        topics: "Basic Neural Networks (Activation functions, backpropagation), CNNs, RNNs (basics).",
        weekday: "One night for each NN topic.",
        weekend: "Mega-Review. Saturday: Do one System Design problem, two DSA problems, and answer 5 MLOps/ML concept questions. Sunday: Review behavioral questions (STAR method) and do a final review of any weak spots. Relax."
    }
};

export const PHASES: Phase[] = [
  {
    title: "Phase 1: System Design (Weeks 1-3)",
    weeks: [1, 2, 3],
    theme: {
      name: 'system-design',
      border: 'border-indigo-600',
      text: 'text-indigo-600',
      bg: 'bg-indigo-50 text-indigo-700',
      hoverBg: 'hover:bg-indigo-100',
      activeBg: 'bg-indigo-700 text-white',
      activeShadow: 'shadow-[0_4px_14px_0_rgba(67,56,202,0.3)]'
    }
  },
  {
    title: "Phase 2: DSA (Weeks 4-6)",
    weeks: [4, 5, 6],
    theme: {
      name: 'dsa',
      border: 'border-teal-600',
      text: 'text-teal-600',
      bg: 'bg-teal-50 text-teal-700',
      hoverBg: 'hover:bg-teal-100',
      activeBg: 'bg-teal-600 text-white',
      activeShadow: 'shadow-[0_4px_14px_0_rgba(13,148,136,0.3)]'
    }
  },
  {
    title: "Phase 3: MLOps (Weeks 7-9)",
    weeks: [7, 8, 9],
    theme: {
      name: 'mlops',
      border: 'border-amber-600',
      text: 'text-amber-600',
      bg: 'bg-amber-50 text-amber-700',
      hoverBg: 'hover:bg-amber-100',
      activeBg: 'bg-amber-700 text-white',
      activeShadow: 'shadow-[0_4px_14px_0_rgba(180,83,9,0.3)]'
    }
  },
  {
    title: "Phase 4: Machine Learning (Weeks 10-12)",
    weeks: [10, 11, 12],
    theme: {
      name: 'ml',
      border: 'border-rose-600',
      text: 'text-rose-600',
      bg: 'bg-rose-50 text-rose-700',
      hoverBg: 'hover:bg-rose-100',
      activeBg: 'bg-rose-700 text-white',
      activeShadow: 'shadow-[0_4px_14px_0_rgba(190,18,60,0.3)]'
    }
  },
];

export const TIPS = [
    { title: "1. Be Flexible", content: "This plan is a guide, not a prison. If you're tired, a 1-hour session is better than zero. If a topic is easy, move on. If it's hard, spend more time." },
    { title: "2. Active Learning", content: "Don't just watch videos or read. <strong>Code</strong> the algorithms. <strong>Draw</strong> the system designs. <strong>Explain</strong> concepts out loud." },
    { title: "3. Protect Your Time", content: "Your 8-10 PM 'me time' is critical. Don't skip it. Burnout is the enemy." },
    { title: "4. Track Your Progress", content: "Use a simple notebook or Trello board. It feels good to check things off." },
    { title: "5. Active Job Applications", content: "The 2 hours on Saturday are for *active* work: tailoring your resume, writing cover letters, and networking on LinkedIn. Don't just passively scroll." },
    { title: "6. Weekly Review", content: "The 1-hour Sunday review is your steering wheel. Use it to adjust the plan based on what you've learned and where you're struggling." }
];
