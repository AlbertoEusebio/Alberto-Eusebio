---
title: "NLP-RAG1200"
subtitle: "Notebook-based evaluation of retrieval-augmented question answering"
description: "Experimental NLP workflow combining preprocessing, retrieval, and model comparison on neural-bridge/rag-dataset-12000."
dateString: "2025"
draft: false
tags: ["NLP", "RAG", "LLM", "FAISS", "LangChain", "Python"]
showToc: false
weight: 101
---

## 💬 Overview

NLP-RAG1200 is an exploratory benchmark project comparing retrieval-augmented and generation-based question answering across a range of NLP models. The project works on the `neural-bridge/rag-dataset-12000` dataset: 12,000 context-question-answer triples split into 9,600 train and 2,400 test examples.

Rather than building one RAG system and calling it done, this project compared several model families side-by-side, tracking what context retrieval actually buys you, and whether few-shot prompting changes anything.

## 🔧 Pipeline

**Exploratory NLP Analysis**
- Tokenization, stopword filtering, TF-IDF analysis, Word2Vec embeddings, and t-SNE visualization.
- Token distribution analysis and vocabulary inspection.

**Retrieval Layer**
- FAISS-based document retrieval integrated with LangChain prompt chains.
- Compares QA performance with and without retrieved context.

**Models Compared**
- BERT, RoBERTa
- LSTM seq2seq
- Flan-T5 Base
- TinyLlama-1.1B-Chat
- Quantized Mixtral 7B-Instruct

**Evaluation Metrics**
- Exact Match, cosine similarity, BLEU, ROUGE

**Prompting Settings**
- Zero-shot and one-shot, with and without retrieved context.

## 🖥️ Application Layer

The project also includes a **Streamlit chatbot application** built on Meta's Llama 3.1 8B Instruct, extending the evaluation work into a lightweight interactive demo.

## 📊 Selected Results

| Model | Setting | Cosine Sim | ROUGE-L |
|---|---|---|---|
| Flan-T5 Base | No context, zero-shot | lower baseline | N/A |
| Flan-T5 Base | With context, zero-shot | improved | N/A |
| TinyLlama-1.1B | No context, zero-shot | N/A | N/A |
| TinyLlama-1.1B | With context, zero-shot | **0.8811** | **0.6299** |

Adding retrieved context is the biggest performance driver, consistent across every model tested.

## 📝 Honest Framing

Generative evaluations run on 50-example subsets, fast enough for experimentation, not meant as final benchmarks.

## 🛠️ Technologies
- Python, Hugging Face Datasets and Transformers, FAISS, LangChain, NLTK, scikit-learn, gensim, Streamlit

## Repository
[GitHub: AlbertoEusebio/NLP-RAG1200](https://github.com/AlbertoEusebio/NLP-RAG1200)
