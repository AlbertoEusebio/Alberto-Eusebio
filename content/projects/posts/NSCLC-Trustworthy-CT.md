---
title: "Trustworthy CT Modeling for NSCLC Survival"
description: "Master thesis research in healthcare AI, computer vision, and trustworthy evaluation"
dateString: 09/2024 - 12/2025
draft: false
tags: ["Computer Vision", "Healthcare AI", "CNN", "Vision Transformer", "GAN", "XAI", "Fairness", "Trustworthy AI"]
showToc: false
weight: 205
---

## 🏥 Overview

Master thesis at Fondazione IRCCS Istituto Nazionale dei Tumori di Milano. The goal was 6-month overall survival prediction from lung CT scans in advanced NSCLC patients, with explainability and fairness built in from the start.

<div style="border-left: 4px solid #3b82f6; background: rgba(59,130,246,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>Clinical Motivation</strong><br>
Advanced NSCLC patients receiving immunotherapy face highly variable outcomes. A CT-based model that can reliably flag which patients are unlikely to survive 6 months could materially inform treatment planning, but only if that model is interpretable, fair, and evaluated without leakage.
</div>

## 🔬 Technical Scope

- Developed and evaluated 2D and 3D computer vision pipelines for 6-month overall survival prediction.
- Trained CNN-based models (including ResNet50) and benchmarked against Vision Transformer and GAN-based approaches.
- Worked on the Apollo11 cohort: 385 advanced lung cancer patients treated with immunotherapy.
- Applied **SmoothGradCAM++** for spatial explainability, identifying which CT regions drove model predictions.
- Performed **fairness assessments** showing that naive augmentation strategies can silently introduce bias, something most papers don't check for.

## 📊 Results

<div style="border-left: 4px solid #10b981; background: rgba(16,185,129,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>0.74 F1</strong> on 6-month overall survival prediction, a hard binary classification task on a real-world clinical cohort (Apollo11, 385 advanced NSCLC patients treated with immunotherapy).<br><br>
The fairness analysis identified a previously unreported failure mode: naive augmentation strategies can silently introduce demographic bias, a finding with direct implications for how medical imaging models should be evaluated before clinical deployment.
</div>

## 📢 Dissemination

4 peer-reviewed outputs from a single master thesis, spanning AI, clinical oncology, and trustworthy AI.

| Venue | Contribution |
|---|---|
| **IEEE EMBC 2025** | Paper: *Trustworthy assessment of 2D model for lung CT scans* ([DOI](https://doi.org/10.1109/EMBC58623.2025.11254399)) |
| **ESMO AI 2025** | Abstract: *CT-based 3D ResNet50 for predicting survival in NSCLC patients treated with immunotherapy* ([DOI](https://doi.org/10.1016/j.esmorw.2025.100335)) |
| **AEQUITAS 2025 (ECAI)** | Poster on fairness in healthcare AI evaluation |
| **PharML Workshop (ECML PKDD 2025)** | Poster on CT-based survival prediction |
| **47th IEEE EMBC** | Reviewer service |
