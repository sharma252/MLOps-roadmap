import { Brain, Code, Rocket, Cloud, Activity } from "lucide-react";

export const roadmapData = {
  intro: {
    title: "MLOps/DevOps Learning Track",
    description:
      "A complete roadmap for mastering MLOps - from ML fundamentals to production deployment",
    cloud: "Primary Platform: AWS (31-32% market share)",
  },
  phases: [
    {
      id: "phase1",
      title: "Phase 1: ML Fundamentals for Ops",
      icon: Brain,
      color: "primary",
      description: "Bridge the gap between Data Science and DevOps",
      modules: [
        {
          id: "metrics",
          title: "Production Metrics & Evaluation",
          topics: [
            "Classification Metrics (Precision, Recall, F1-Score, ROC-AUC)",
            "Regression Metrics (MSE, MAE, RMSE)",
            "Confusion Matrix debugging",
            "Accuracy Paradox in imbalanced datasets",
          ],
          exercise:
            "Corrupt 20% of Iris dataset labels and measure F1-Score vs Accuracy drop",
          resources: [
            {
              title: "Scikit-Learn: Model Evaluation",
              url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
            },
          ],
        },
        {
          id: "drift",
          title: "Model Drift & Decay",
          topics: [
            "Data Drift (Covariate Shift) - input changes",
            "Concept Drift - relationship changes",
            "Training-Serving Skew - engineering gaps",
            "Detection: KS-Test, rule-based alerts",
          ],
          exercise:
            "Train on Wine Quality dataset, add +2.0 to alcohol feature, observe drift",
          resources: [
            {
              title: "Evidently AI: ML Monitoring 101",
              url: "https://www.evidentlyai.com/blog/machine-learning-monitoring-data-drift-detection",
            },
          ],
        },
        {
          id: "resources",
          title: "Resource Sizing & Hardware",
          topics: [
            "CPU vs GPU: When to use each",
            "Memory Math: Model size × 2.5 = min RAM",
            "VRAM calculation: Parameters × 4 bytes × 1.2",
            "AWS Instance Types: C (compute), R (memory), G/P (GPU)",
          ],
          exercise: "Calculate VRAM for bert-base-uncased (110M params)",
          resources: [
            {
              title: "EleutherAI: Transformer Math 101",
              url: "https://blog.eleuther.ai/transformer-math/",
            },
            {
              title: "AWS EC2 Instance Types",
              url: "https://aws.amazon.com/ec2/instance-types/",
            },
          ],
        },
      ],
      exitCriteria: [
        "Why 99% accuracy fraud model catches zero fraud?",
        "What is it called when input distribution changes?",
        "Why does 7GB model crash with 8GB RAM?",
      ],
    },
    {
      id: "phase2",
      title: "Phase 2: Core DevOps Foundations",
      icon: Code,
      color: "success",
      description: "Master the tools that wrap the model",
      modules: [
        {
          id: "python",
          title: "Production-Grade Python",
          topics: [
            "Pydantic for data validation",
            "Type hinting & runtime enforcement",
            "pytest for unit testing",
            "poetry/pip-tools for deterministic builds",
          ],
          exercise: "Write Pydantic class that rejects invalid housing data",
          resources: [
            {
              title: "Real Python: Pydantic Guide",
              url: "https://realpython.com/python-pydantic/",
            },
            {
              title: "Pytest: Getting Started",
              url: "https://docs.pytest.org/en/7.1.x/getting-started.html",
            },
          ],
        },
        {
          id: "docker",
          title: "Containerization (Docker)",
          topics: [
            "Image vs Container vs Registry",
            "Dockerfile anatomy & best practices",
            "Layer caching optimization",
            "Multi-stage builds for smaller images",
          ],
          exercise: "Write Dockerfile for Python model with layer caching",
          resources: [
            {
              title: "Docker for Data Science",
              url: "https://towardsdatascience.com/docker-for-data-science-9c0ce73e8263",
            },
            {
              title: "Best Practices for Writing Dockerfiles",
              url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
            },
          ],
        },
        {
          id: "iac",
          title: "Infrastructure as Code (Terraform)",
          topics: [
            "Declarative infrastructure",
            "terraform plan & apply workflow",
            "State management (.tfstate)",
            "AWS provider basics",
          ],
          exercise: "Create S3 bucket using Terraform",
          resources: [
            {
              title: "Terraform AWS Tutorial",
              url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started",
            },
            {
              title: "Terraform Best Practices",
              url: "https://www.terraform-best-practices.com/",
            },
          ],
        },
      ],
      exitCriteria: [
        "Write Pydantic class with validation",
        "Build and run Docker container",
        "Explain why requirements.txt is copied first in Dockerfile",
      ],
    },
    {
      id: "phase3",
      title: "Phase 3: MLOps Architecture",
      icon: Rocket,
      color: "warning",
      description: "Automate notebook to production pipeline",
      modules: [
        {
          id: "fastapi",
          title: "Model Serving (FastAPI)",
          topics: [
            "Why FastAPI: Speed + Pydantic + Async",
            "Load model once at startup",
            "POST /predict endpoint pattern",
            "JSON request/response handling",
          ],
          exercise: "Wrap Scikit-Learn model in FastAPI endpoint",
          resources: [
            {
              title: "FastAPI User Guide",
              url: "https://fastapi.tiangolo.com/tutorial/",
            },
            {
              title: "Machine Learning with FastAPI",
              url: "https://testdriven.io/blog/fastapi-machine-learning/",
            },
          ],
        },
        {
          id: "mlflow",
          title: "Model Registry (MLflow)",
          topics: [
            "Experiment tracking: params & metrics",
            "Artifact store: S3 or local",
            "Model versioning & promotion",
            "Loading from registry: models:/MyModel/Production",
          ],
          exercise: "Log training run to local MLflow",
          resources: [
            {
              title: "MLflow Tracking Quickstart",
              url: "https://mlflow.org/docs/latest/tracking.html",
            },
          ],
        },
        {
          id: "airflow",
          title: "Workflow Orchestration (Airflow)",
          topics: [
            "DAGs: Directed Acyclic Graphs",
            "Task dependencies & operators",
            "PythonOperator vs BashOperator",
            "Schedule intervals & sensors",
          ],
          exercise: "Create DAG: Fetch SQL → Retrain → Save Model",
          resources: [
            {
              title: "Apache Airflow Tutorial",
              url: "https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html",
            },
          ],
        },
      ],
      exitCriteria: [
        "Run FastAPI server and test with curl",
        "Log metric to local MLflow",
        "Draw training pipeline DAG on paper",
      ],
    },
    {
      id: "phase4",
      title: "Phase 4: AWS Cloud Stack",
      icon: Cloud,
      color: "info",
      description: "Deploy to production on AWS",
      modules: [
        {
          id: "s3ecr",
          title: "Artifact Stores (S3 & ECR)",
          topics: [
            "S3: Data lake + model artifacts",
            "ECR: Docker image registry",
            "IAM roles for access (never hardcode keys)",
            "Push workflow: build → tag → push",
          ],
          exercise: "Push Docker image to ECR via CLI",
          resources: [
            {
              title: "Amazon ECR User Guide",
              url: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html",
            },
          ],
        },
        {
          id: "lambda",
          title: "Serverless Inference (Lambda)",
          topics: [
            "Mangum adapter for FastAPI",
            "Pay-per-millisecond pricing",
            "Constraints: 10GB memory, 15min timeout",
            "Cold starts: 5-10 seconds",
          ],
          exercise: "Deploy FastAPI container to Lambda",
          resources: [
            {
              title: "Mangum: ASGI Adapter",
              url: "https://mangum.io/",
            },
            {
              title: "Deploy Python Lambda with Container Images",
              url: "https://docs.aws.amazon.com/lambda/latest/dg/python-image.html",
            },
          ],
        },
        {
          id: "sagemaker",
          title: "Managed Inference (SageMaker)",
          topics: [
            "Bring Your Own Container (BYOC)",
            "/invocations and /ping endpoints",
            "Real-time endpoints with autoscaling",
            "GPU instances: P4, G5",
          ],
          exercise: "Deploy model using SageMaker SDK",
          resources: [
            {
              title: "SageMaker Inference",
              url: "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html",
            },
          ],
        },
      ],
      exitCriteria: [
        "Explain when to use Lambda vs SageMaker",
        "Push image to ECR successfully",
        "Can 50GB LLM run on Lambda? (No)",
      ],
    },
    {
      id: "phase5",
      title: "Phase 5: Monitoring & Observability",
      icon: Activity,
      color: "danger",
      description: "Keep systems running and models accurate",
      modules: [
        {
          id: "prometheus",
          title: "System Monitoring (Prometheus & Grafana)",
          topics: [
            "Pull model: Prometheus scrapes /metrics",
            "prometheus-fastapi-instrumentator",
            "Golden signals: Latency, Traffic, Errors",
            "Grafana dashboards",
          ],
          exercise: "Add /metrics endpoint and visualize in Grafana",
          resources: [
            {
              title: "Prometheus FastAPI Instrumentator",
              url: "https://github.com/trallnag/prometheus-fastapi-instrumentator",
            },
            {
              title: "Grafana Fundamentals",
              url: "https://grafana.com/docs/grafana/latest/fundamentals/",
            },
          ],
        },
        {
          id: "evidently",
          title: "ML Monitoring (Evidently AI)",
          topics: [
            "Reference vs Current data comparison",
            "Data drift detection",
            "HTML reports & Prometheus integration",
            "Log predictions for analysis",
          ],
          exercise: "Generate drift report on dummy dataset",
          resources: [
            {
              title: "Evidently AI Documentation",
              url: "https://docs.evidentlyai.com/",
            },
          ],
        },
      ],
      exitCriteria: [
        "Add Prometheus instrumentation to API",
        "Configure Prometheus to scrape API",
        "Create Grafana graph for RPS",
        "Generate Evidently drift report",
      ],
    },
  ],
  capstone: {
    title: "Capstone: Churn Shield System",
    description: "Real-time customer churn prediction API",
    steps: [
      "Data & Modeling: Train XGBoost on Telco dataset",
      "Engineering: FastAPI + Pydantic + Docker",
      "Pipeline: Airflow DAG for retraining",
      "Deployment: ECR → Lambda with Mangum",
      "Monitoring: Prometheus + Grafana + Evidently",
    ],
  },
};
