---
title: "OLA Project: Dynamic Pricing and Bidding"
subtitle: "Online learning experiments for pricing, bidding, and regret analysis"
description: "Simulation-based online learning project covering stochastic, auction, and non-stationary decision settings."
dateString: "2025"
draft: false
tags: ["Online Learning", "Dynamic Pricing", "Bandits", "Python", "Jupyter", "Optimization"]
showToc: false
weight: 103
---

## 📈 Overview
This Online Learning Applications project studies dynamic pricing and bidding as sequential decision problems under uncertainty. The repository includes a notebook, a final presentation, and the original course assignment materials.

The notebook implements **GPUCB** (Gaussian Process Upper Confidence Bound) for stochastic pricing, and extends the analysis to auction and non-stationary settings with **SW-UCB** (Sliding Window) and **CUSUM-UCB** variants. Performance is evaluated through simulation, with cumulative regret plotted against clairvoyant baselines.

<div style="border-left: 4px solid #3b82f6; background: rgba(59,130,246,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
The interesting split is <em>stochastic</em> vs. <em>non-stationary</em>: in the stochastic case GPUCB gradually learns the reward distribution; once the distribution can shift, you need CUSUM-UCB or SW-UCB to detect and adapt. Picking the right algorithm for the right setting (not just running one) was the point.
</div>

Cumulative regret is tracked throughout and compared against clairvoyant baselines.

## 🛠️ Technologies
- Python
- Jupyter Notebook
- NumPy
- Matplotlib
- SciPy

## Repository
[GitHub repository](https://github.com/AlbertoEusebio/OLA-project)
