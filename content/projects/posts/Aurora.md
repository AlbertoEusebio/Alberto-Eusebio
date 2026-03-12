---
title: "Aurora"
description: "LLM-enabled mobile application for mental well-being tracking and guided reflection"
dateString: 11/2023 - 06/2024
draft: false
tags: ["Python", "JavaScript", "NLP", "LLM", "AWS Lambda", "AWS Bedrock", "React Native", "Expo", "Mobile", "LLM Applications"]
showToc: false
weight: 203
cover:
  image: "/projects/Aurora/Aurora.png"
---

## ✨ Overview

Aurora is a mobile app for mental well-being tracking, built during graduate research at NECSTLab (Politecnico di Milano). Users share short voice reflections daily; the app tracks them across eight well-being dimensions and uses an LLM to suggest activities. The system's interaction model and response quality were validated through a formal 27-participant user study conducted over multiple weeks.

## 🏗️ Technical Architecture

**Mobile Layer**
- Built with React Native and Expo for cross-platform deployment.
- Interaction flow centered on daily voice-based sharing with structured follow-up.

**Backend**
- Serverless infrastructure using **AWS Lambda** functions.
- LLM integration via **AWS Bedrock** with a fine-tuned **Meta-Llama-3.1-70B** instance.

**Data and Privacy**
- Structured data collection across eight well-being parameters.
- Historical record maintained to support focused follow-up with mental health professionals.
- Data sharing with professionals requires explicit user consent.

## 👥 User Study

Collected and analyzed data from **27 participants** across multiple weeks, covering interaction patterns and LLM response quality.

## 🏆 Outcomes

<div style="border-left: 4px solid #3b82f6; background: rgba(59,130,246,0.07); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
Won <strong>Hack the NECSTCamp</strong>, a competitive 36-hour AI mobile application challenge, delivering a complete end-to-end product: formal user study, serverless LLM backend on AWS, and a cross-platform mobile app ready for real users.
</div>
