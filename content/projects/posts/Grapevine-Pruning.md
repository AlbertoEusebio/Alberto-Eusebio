---
title: "Autonomous Grapevine Pruning (PIC4SeR / Yanmar)"
description: "End-to-end computer vision and robotics pipeline for autonomous agricultural pruning"
dateString: 04/2024 - 09/2025
draft: false
tags: ["Computer Vision", "Deep Learning", "Robotics", "Python", "Healthcare AI"]
showToc: false
weight: 206
---

## 🎬 Demo

<video controls width="100%" style="border-radius: 8px; margin-bottom: 1.5rem;">
  <source src="/videos/presentation.mp4" type="video/mp4">
</video>

## 🍇 Overview

Autonomous grapevine pruning system developed within the **Alta Scuola Politecnica** interdisciplinary program, in collaboration with PIC4SeR (Politecnico di Torino Center for Service Robotics) and **Yanmar S.P.A.** The goal was to move expert pruning knowledge from human vintners into a fully autonomous perception-to-action pipeline.

## 🤔 Why It Is Hard

Grapevine pruning requires reading 3D vine structure from images, reconstructing branching topology, and then applying domain-specific rules to decide which branches to cut. That full chain (detection → structure → decision) is what the project had to solve end-to-end.

## 🔧 Technical Approach

### Perception
- Built a deep learning pipeline based on **stacked Hourglass Networks** for keypoint detection on grapevine images.
- The model learns to localize vine structure elements (junctions, canes, spurs) under variable lighting and vine density conditions.

### Reconstruction
- Designed a **graph-based vine reconstruction module** that converts 2D keypoint detections into a topological representation of vine structure.
- The graph encodes branching relationships and provides input for pruning logic.

### Pruning Decision
- Integrated **heuristic pruning strategies** derived from expert agronomic knowledge, translating domain rules into structured decision functions over the graph representation.

## 📊 Results

| Metric | Score |
|---|---|
| Precision | **95%** |
| Recall | **90%** |
| F1 | **92%** |

<div style="border-left: 4px solid #10b981; background: rgba(16,185,129,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
Keypoint detection results on the project test set. The 92% F1 was achieved under variable lighting and vine density conditions, the hardest part of the perception problem.
</div>

## 🎯 Significance

95% precision and 92% F1 on a task that requires reasoning over 3D vine structure from flat images, under real agricultural conditions. The full pipeline runs from raw image to pruning decision with no human in the loop at inference time, encoding decades of expert agronomic knowledge as graph traversal logic.

## 🔗 Links

- **GitHub**: [AlbertoEusebio/VinPRO](https://github.com/AlbertoEusebio/VinPRO)
