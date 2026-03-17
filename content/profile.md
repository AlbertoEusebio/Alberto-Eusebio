---
title: "Profile"
description: "AI and research engineering profile"
showToc: true
TocOpen: true
draft: false
---

<div style="margin-bottom: 1.5rem;">
  <a href="/cv/Alberto_Eusebio_CV.pdf" download style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; border: 1px solid rgba(128,128,128,0.4); border-radius: 6px; font-size: 0.9rem; text-decoration: none;">⬇ Download CV</a>
</div>

## 👤 Summary

**AI/ML Engineer** specialising in deep learning, computer vision, and LLM research. Currently at Huawei (Paris) working on continual learning and hippocampus-inspired Transformer architectures. My master thesis at Italy's National Cancer Institute produced 4 peer-reviewed publications on CT-based survival prediction in lung cancer, across IEEE EMBC, ESMO AI, ECAI, and ECML PKDD.

Along the way I won a 36-hour hackathon with an LLM mobile app (Aurora), led GenAI prototypes for 5+ enterprise clients at Salesforce, and spent two years as software engineer and then team leader for Policumbent, winning the IHPVA world human-powered speed record twice.

> **MSc, Politecnico di Milano** `110/110` &ensp;·&ensp; **BSc, Politecnico di Torino** `110/110 cum laude`
> Alta Scuola Politecnica &ensp;·&ensp; Intraprendenti honor program

<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-value">4</div>
    <div class="stat-label">Peer-reviewed publications</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">110<span>/110</span></div>
    <div class="stat-label">Both MSc &amp; BSc degrees</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">2×</div>
    <div class="stat-label">IHPVA World Champion</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">5+</div>
    <div class="stat-label">Enterprise clients (Salesforce)</div>
  </div>
</div>

<div class="skills-chips">
  <span class="skill-chip accent">PyTorch</span>
  <span class="skill-chip accent">Deep Learning</span>
  <span class="skill-chip accent">Computer Vision</span>
  <span class="skill-chip accent">LLMs</span>
  <span class="skill-chip accent">Continual Learning</span>
  <span class="skill-chip">Transformers</span>
  <span class="skill-chip">Hugging Face</span>
  <span class="skill-chip">LangChain</span>
  <span class="skill-chip">AI Agents</span>
  <span class="skill-chip">XAI</span>
  <span class="skill-chip">Python</span>
  <span class="skill-chip">AWS</span>
</div>

## 💼 Experience

### Research Engineer
**Huawei** | Paris, France | 10/2025 – Present

Working on continual learning and memory-inspired Transformer architectures, studying how LLMs store and update knowledge.

- Co-authored an **ICML 2026 submission** (currently under peer review) on episodic knowledge binding in LLMs.
- Built evaluation pipelines for studying parametric memory failures in frontier models.
- Running multi-GPU fine-tuning experiments to understand and mitigate collateral knowledge damage during model updates.

<hr>

### Graduate Student Researcher: Master Thesis
**Fondazione IRCCS Istituto Nazionale dei Tumori di Milano** | Milan, Italy | 09/2024 – 12/2025

My thesis was about predicting 6-month overall survival in advanced NSCLC patients from lung CT scans, with explainability and fairness checks built in, not just accuracy.

- Developed and evaluated 2D and 3D pipelines on the Apollo11 cohort (**385 patients**).
- Benchmarked CNN-based models (ResNet50) against Vision Transformers and GAN-based approaches.
- Applied **SmoothGradCAM++** to identify which CT regions drove predictions.
- Showed that naive augmentation strategies can silently introduce demographic bias.
- Achieved **0.74 F1** on 6-month overall survival prediction, a clinically meaningful and technically hard task with significant class imbalance.
- **4 peer-reviewed publications** from a single master thesis: IEEE EMBC 2025, ESMO AI 2025, AEQUITAS @ ECAI 2025, PharML @ ECML PKDD 2025.
- Reviewer for the 47th IEEE EMBC conference.

<hr>

### Student Researcher: Computer Vision and Robotics
**PIC4SeR / Yanmar S.P.A. (Alta Scuola Politecnica)** | Turin, Italy | 04/2024 – 09/2025

Yanmar wanted to automate grapevine pruning. The approach: detect vine structure from images, reconstruct the topology as a graph, then apply agronomic rules over it to decide which canes to cut.

- Built a keypoint detection pipeline on stacked Hourglass Networks for vine junction and cane localisation.
- Designed a graph-based reconstruction module converting 2D detections into vine topology.
- Integrated heuristic pruning strategies derived from expert agronomic knowledge.
- Achieved **95% precision**, **90% recall**, **92% F1** on the keypoint detection module.

<hr>

### Solution Engineer Intern
**Salesforce** | Milan, Italy | 09/2024 – 07/2025

Client-facing prototyping: building and demoing GenAI systems for enterprise clients, typically on short timelines.

- Built AI agents on the **Salesforce Agentforce** platform for autonomous task execution.
- Delivered proofs of concept to **5+ large businesses**, adapting to different industries and integration constraints.
- Prototyped GenAI workflows for sales and service automation: case routing, response generation, pipeline management.
- Everything had to be deployable within real enterprise security constraints, not just a slides demo.

<hr>

### Graduate Student Researcher: NLP
**NECSTLab, Politecnico di Milano** | Milan, Italy | 11/2023 – 06/2024

- Built **Aurora**, a cross-platform mobile app using a fine-tuned **Meta-Llama-3.1-70B** (via AWS Bedrock) for daily mental well-being tracking and structured self-reflection.
- Users share short voice reflections; the app organises them across eight well-being dimensions and suggests activities.
- Designed the serverless backend on **AWS Lambda**; front end in React Native and Expo.
- Ran a **27-participant** user study to evaluate the interaction model and response quality.
- Won **Hack the NECSTCamp** *(36-hour AI mobile app challenge)* 🏆.

<hr>

### Team Leader
**Team Policumbent** | Turin, Italy | 10/2022 – 10/2023

Led the engineering program for Team Policumbent: **9 divisions**, **4 vehicles**, ~**100 students**, 23 sponsors.

- Coordinated all technical activities across the team and represented Policumbent at Automation and Testing Turin and Maker Faire Rome.
- Won the **IHPVA World Human Powered Speed Challenge 2023** and *matched the world record* 🏆.

<hr>

### Software Engineer
**Team Policumbent** | Turin, Italy | 03/2021 – 10/2022

First engineering role: embedded systems and telemetry for Cerberus and Phoenix, two high-speed human-powered streamliners.

- Built Raspberry Pi software interfacing with Garmin ANT+ sensors for real-time biometric data logging.
- Developed an ESP32-based weather station for race-condition monitoring.
- Implemented MQTT-based telemetry supporting vehicles running at **130 km/h**.
- Improved rider performance by **20%** on the Cerberus handbike workstream.
- Contributed to the **IHPVA World Human Powered Speed Challenge win in 2022** 🏆.

<hr>

### Software Engineer
**Aquaseek** | Turin, Italy | 04/2022 – 07/2022

Part-time role during my BSc. Aquaseek builds atmospheric water generator machines; I handled the monitoring software side.

- Built a Python desktop app for remote control and real-time visualisation (Matplotlib) of AWG machines.
- Designed the company's database schema and a Telegram-bot for automated alerting.

## 🎓 Education

| Degree | Institution | Period | Grade |
|---|---|---|---|
| MSc, Computer Science and Engineering (AI) | Politecnico di Milano | 09/2023 – 12/2025 | **110/110** |
| Alta Scuola Politecnica | Politecnico di Milano / Torino | 02/2024 – 07/2025 | Honor program |
| BSc, Computer Engineering | Politecnico di Torino | 10/2020 – 07/2023 | **110/110 cum laude** |
| Intraprendenti Honor Program | Politecnico di Torino | | Honor program |

## 📄 Publications & Research Output

<div style="border-left: 4px solid #3b82f6; background: rgba(59,130,246,0.07); padding: 0.75rem 1rem; margin: 0.6rem 0; border-radius: 0 6px 6px 0;">
<strong>IEEE EMBC 2025</strong>: <em>Trustworthy assessment of 2D model for lung CT scans</em><br>
DOI: <a href="https://doi.org/10.1109/EMBC58623.2025.11254399">10.1109/EMBC58623.2025.11254399</a>
</div>

<div style="border-left: 4px solid #3b82f6; background: rgba(59,130,246,0.07); padding: 0.75rem 1rem; margin: 0.6rem 0; border-radius: 0 6px 6px 0;">
<strong>ESMO AI 2025</strong>: <em>CT-based 3D ResNet50 for predicting survival in NSCLC patients treated with immunotherapy</em><br>
DOI: <a href="https://doi.org/10.1016/j.esmorw.2025.100335">10.1016/j.esmorw.2025.100335</a>
</div>

<div style="border-left: 4px solid rgba(128,128,128,0.5); background: rgba(128,128,128,0.05); padding: 0.75rem 1rem; margin: 0.6rem 0; border-radius: 0 6px 6px 0;">
<strong>AEQUITAS 2025 Workshop (ECAI)</strong>: Poster on fairness in healthcare AI evaluation.
</div>

<div style="border-left: 4px solid rgba(128,128,128,0.5); background: rgba(128,128,128,0.05); padding: 0.75rem 1rem; margin: 0.6rem 0; border-radius: 0 6px 6px 0;">
<strong>PharML Workshop (ECML PKDD 2025)</strong>: Poster on CT-based survival prediction.
</div>

<div style="border-left: 4px solid rgba(128,128,128,0.5); background: rgba(128,128,128,0.05); padding: 0.75rem 1rem; margin: 0.6rem 0; border-radius: 0 6px 6px 0;">
<strong>Reviewer</strong>: 47th Annual IEEE Engineering in Medicine and Biology Society conference.
</div>

## 🛠️ Skills

**ML / AI**
<div class="skills-chips">
  <span class="skill-chip accent">Deep Learning</span>
  <span class="skill-chip accent">Computer Vision</span>
  <span class="skill-chip accent">CNNs</span>
  <span class="skill-chip accent">Vision Transformers</span>
  <span class="skill-chip accent">GANs</span>
  <span class="skill-chip accent">NLP</span>
  <span class="skill-chip accent">RAG</span>
  <span class="skill-chip accent">LLM Applications</span>
  <span class="skill-chip accent">AI Agents</span>
  <span class="skill-chip accent">Continual Learning</span>
  <span class="skill-chip accent">Online Learning</span>
</div>

**Trustworthy AI**
<div class="skills-chips">
  <span class="skill-chip">XAI / SmoothGradCAM++</span>
  <span class="skill-chip">Fairness Assessment</span>
  <span class="skill-chip">Healthcare Evaluation</span>
  <span class="skill-chip">Reproducibility</span>
</div>

**Frameworks & Tools**
<div class="skills-chips">
  <span class="skill-chip">PyTorch</span>
  <span class="skill-chip">TensorFlow</span>
  <span class="skill-chip">scikit-learn</span>
  <span class="skill-chip">Hugging Face</span>
  <span class="skill-chip">LangChain</span>
  <span class="skill-chip">LangGraph</span>
  <span class="skill-chip">FAISS</span>
  <span class="skill-chip">DeepSpeed</span>
  <span class="skill-chip">AWS Lambda</span>
  <span class="skill-chip">AWS Bedrock</span>
</div>

**Languages & Systems**
<div class="skills-chips">
  <span class="skill-chip">Python</span>
  <span class="skill-chip">C / C++</span>
  <span class="skill-chip">Java</span>
  <span class="skill-chip">MQTT</span>
  <span class="skill-chip">Raspberry Pi</span>
  <span class="skill-chip">ESP32</span>
  <span class="skill-chip">IoT / Telemetry</span>
  <span class="skill-chip">PCB Design (Altium)</span>
</div>

## 📬 Contact

- **LinkedIn**: [linkedin.com/in/alberto-eusebio](https://www.linkedin.com/in/alberto-eusebio)
- **GitHub**: [github.com/AlbertoEusebio](https://github.com/AlbertoEusebio)
- **Google Scholar**: [scholar.google.com](https://scholar.google.com/citations?user=elsAGV8AAAAJ&hl=en)
- **Email**: [albertoeusebio72@gmail.com](mailto:albertoeusebio72@gmail.com)
- **Languages**: Italian (native), English (C1, CAE), German (A2, Goethe)
