---
title: "Lung Cancer Classification"
subtitle: "Deep learning comparison for CT-based malignancy prediction"
description: "Medical-imaging project comparing binary and five-class lung malignancy pipelines across full and zoomed CT slices."
dateString: "2025"
draft: false
tags: ["Healthcare AI", "Computer Vision", "Deep Learning", "TensorFlow", "EfficientNet", "Medical Imaging"]
showToc: false
weight: 102
---

## 🫁 Overview

**DeepBreath AI** is a deep learning study on lung cancer malignancy prediction from CT scans, developed as a team project with Sofia Brunori, Alessandro Tognotti, and Andrea Tomasella. The dataset covers **2,363 patients** with CT slices in NRRD format (1,793 benign vs. 570 malignant for the binary task). Two tasks (binary and five-class), two input types (full slice vs. nodule crop), multiple EfficientNet variants; the goal was figuring out which combination actually works and why.

## 🧪 Experimental Design

**Tasks**
- Binary classification: malignancy classes 1–3 grouped as benign, 4–5 as malignant.
- Five-class classification: full malignancy score prediction.

**Input Regimes**
- Full CT slices (broader context, higher noise).
- Zoomed-in slices centered on the nodule (tighter focus on the lesion).

**Preprocessing**
- Min-max normalization and HU windowing (width 1300, level -220).
- Augmentation and class-balancing: random oversampling for binary tasks, SMOTE plus class weighting for multi-class.

**Models**
- EfficientNetV2S for both full-slice and zoomed binary tasks.
- EfficientNetB1 for full-slice multi-class; EfficientNetB0 for zoomed multi-class.
- Training with focal loss, Adam optimizer, EarlyStopping, and ReduceLROnPlateau.

## 📊 Results

| Setting | Accuracy | Precision | Recall | F1 | AUC |
|---|---|---|---|---|---|
| Full-slice binary | 0.73 ± 0.02 | 0.44 ± 0.03 | 0.52 ± 0.05 | 0.48 ± 0.03 | 0.66 ± 0.02 |
| **Zoomed-slice binary** | 0.72 ± 0.03 | 0.45 ± 0.05 | **0.63 ± 0.08** | **0.52 ± 0.05** | **0.75 ± 0.04** |
| Full-slice multi-class | 0.23 ± 0.04 | 0.20 ± 0.04 | 0.21 ± 0.05 | 0.19 ± 0.04 | 0.51 ± 0.04 |
| **Zoomed-slice multi-class** | **0.53 ± 0.02** | 0.46 ± 0.04 | 0.44 ± 0.03 | 0.43 ± 0.03 | **0.74 ± 0.02** |

<div style="border-left: 4px solid #10b981; background: rgba(16,185,129,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>Main Finding:</strong> Zoomed-slice inputs consistently outperform full-slice inputs across all settings. The most striking gap is in multi-class: full-slice scores 0.23 accuracy and 0.51 AUC (near chance), while zoomed-slice reaches 0.53 accuracy and 0.74 AUC. The zoomed binary model also achieves 0.63 recall, which matters most in a cancer screening context. Cropping to the nodule matters more than the architecture choice.
</div>

## 🛠️ Technologies
- Python, TensorFlow and Keras
- EfficientNet (B0, B1, V2S)
- scikit-learn, SimpleITK, OpenCV

## Repository
[GitHub: AlbertoEusebio/Lung-Cancer-Classification](https://github.com/AlbertoEusebio/Lung-Cancer-Classification)
