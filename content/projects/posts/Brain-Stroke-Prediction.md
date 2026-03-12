---
title: "Brain Stroke Prediction: Replication and Critical Evaluation"
description: "Reproducibility study of a stroke-risk prediction paper using classical ML with rigorous evaluation protocol analysis"
dateString: "2024"
draft: false
tags: ["Healthcare AI", "Machine Learning", "Python", "Trustworthy AI", "Fairness", "Deep Learning"]
showToc: false
weight: 105
---

## 🧠 Overview

A replication study of a stroke-risk prediction paper by Dritsas and Trigka. The question was straightforward: do the reported results actually hold up, or are they an artifact of how the evaluation was set up?

## ⚕️ Why Reproducibility Matters Here

The original study reported very high accuracy metrics for stroke prediction. A key question is whether those results reflect genuine generalization, or whether they are inflated by evaluation protocol choices, particularly how class imbalance is handled at train and test time.

## 🔧 Technical Approach

### Data Pipeline

- Exploratory data analysis, data cleaning, missing-value imputation, outlier treatment, one-hot encoding, normalization, and imbalance handling.
- The project distinguishes between two notebook versions:
  - **Notebook A**: Attempts close replication of the original paper, including balancing the full dataset.
  - **Notebook B**: Applies better practices: oversampling only the training set, leaving the test distribution untouched.

### Class Imbalance Analysis

- Compared SMOTE with SMOTENC: naive SMOTE corrupts one-hot encoded features, which matters here.

### Feature Analysis

Random forest feature ranking, information gain, and mutual information all converged on the same finding:

| Rank | Feature |
|---|---|
| 1 | Age |
| 2 | Average glucose level |
| 3 | BMI |

### Models Evaluated

Logistic Regression, Decision Trees, Random Forests, SGD Classifiers, k-NN, Gaussian Naive Bayes, MLPs, Stacking, and Majority Voting. Hyperparameter tuning with GridSearchCV and 10-fold cross-validation.

## 💡 Key Finding

The choice of evaluation protocol materially changes conclusions:

| Setup | Best AUC | Best Model |
|---|---|---|
| Notebook A (full dataset balanced) | **96%** (Stacking) | Stacking, RF, Majority Voting |
| Notebook B (train-only balanced) | Substantially lower | k-NN, Logistic Regression |

<div style="border-left: 4px solid #f59e0b; background: rgba(245,158,11,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>Core Insight:</strong> Balancing the full dataset before splitting produces 96% AUC, matching the original paper's numbers. Applying balancing only to the training set (correct practice) cuts performance substantially and changes which models win. The evaluation protocol, not the model, is driving the headline result.
</div>

## 🎯 Significance

The point was never to find the best stroke predictor. It was to show that the evaluation setup (not the models) explains most of the difference in reported performance. In medical ML, that distinction has real consequences.
