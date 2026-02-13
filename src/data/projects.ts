import type { Project } from "@/types";

export const projects: Project[] = [

  {
    id: "project-7",
    title: "Distributed Key-Value Store",
    description:
      "A scalable and fault-tolerant distributed key-value store designed for efficient data storage and retrieval across multiple nodes. Implements consistent hashing, replication, and consensus algorithms.",
    demoUrl: "https://github.com/rohanbennur43/distributed-key-value-store",
    githubUrl: "https://github.com/rohanbennur43/distributed-key-value-store",
    tags: ["Distributed Systems", "Go", "Consensus Algorithms"],
  },
  {
    id: "project-8",
    title: "Starlite",
    description:
      "A lightweight geospatial visualization tool, generating spatial tiles and Mapbox Vector Tiles directly from Parquet datasets. The repository streamlines the entire process into a small set of simple make targets, automates execution steps, and produces structured logs for transparency and reproducibility. Ideal for data pipelines that require efficient, repeatable tile generation with minimal setup.",
    demoUrl: "https://star.cs.ucr.edu/",
    githubUrl: "https://github.com/rohanbennur43/starlite",
    additionalLink: "https://star.cs.ucr.edu/", // Added official website link
    tags: ["Python","Memory Management", "Geospatial Visualization", "R* Tree", "Z-order Curve"],
  },
  {
    id: "project-9",
    title: "ProtoForgeAI",
    description:
      "ProtoForgeAI generates real, compilable Go gRPC tests directly from your .proto files. It automates repetitive gRPC test scaffolding while ensuring correctness, determinism, and engineering control. The tool parses your schema using protoc, extracts services, messages, fields, and enums, and generates tests strictly constrained to that structure. The generated code is validated with go build, and any compiler errors are automatically repaired in a bounded loop.",
    demoUrl: "https://github.com/rohanbennur43/ProtoForgeAI",
    githubUrl: "https://github.com/rohanbennur43/ProtoForgeAI",
    tags: ["Go", "gRPC", "Protobuf", "RAG's", "AI Assisted Code Generation", "OpenAI API", "LangChain", "Ollama API"],
  },
  {
    id: "project-10",
    title: "B-tree",
    description:
      "An implementation of the B-tree data structure designed for efficient indexing and disk based storage. The project demonstrates balanced tree operations including insertion, deletion, and search while maintaining logarithmic performance. Built to highlight core database indexing concepts and optimized memory management techniques.",
    githubUrl: "https://github.com/rohanbennur43/B-tree",
    tags: ["C++", "Data Structures", "B-tree", "Indexing", "Database Systems"],
  }

];
