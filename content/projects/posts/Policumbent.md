---
title: "Team Policumbent: Software Engineering & Leadership"
description: "Embedded telemetry, IoT weather monitoring, and team leadership for the world's fastest human-powered vehicles."
dateString: 03/2021 - 10/2023
draft: false
tags: ["Embedded Systems & Telemetry"]
showToc: false
weight: 202
cover:
  image: "projects/Policumbent/Cerberus.webp"
---

## 🚴 Overview

[Team Policumbent](https://www.policumbent.it/en/) is a student team from Politecnico di Torino that designs and builds the world's fastest human-powered vehicles. I joined as a software engineer in 2021 and became Team Leader in 2022, leading 100+ students across 9 engineering divisions, 4 vehicles, and 23 sponsors.

## 🔧 Onboard Telemetry (BOB)

Built and contributed to [BOB](https://github.com/policumbent/bob), the modular onboard software stack running on Raspberry Pi inside the streamliners Cerberus and Phoenix. BOB is a collection of independent Python modules communicating over MQTT, managed by systemd. My contributions:

- Raspberry Pi software interfacing with Garmin ANT+ sensors for real-time biometric data logging (heart rate, cadence, power).
- MQTT-based telemetry pipeline supporting vehicles running at 130+ km/h.
- Data visualization and near-real-time monitoring for the pit crew during record attempts.
- Improved rider performance by 20% on the Cerberus handbike workstream through data-driven feedback.

## 🌡️ Weather Station (SARA)

Built [SARA](https://github.com/policumbent/sara) (Stazione per l'Analisi di Raffiche Avverse), an ESP32-based IoT weather station for monitoring environmental conditions during high-speed tests and record attempts.

- Captured wind speed, direction, and atmospheric data to support race-condition assessment and timing decisions.
- Published sensor telemetry to an MQTT broker for near-real-time monitoring.
- The system was critical for safety: streamliners operating above 130 km/h are highly sensitive to crosswinds and gusts.

## 🏆 Results

- **2× IHPVA World Human Powered Speed Challenge Champions** (2022 and 2023).
- Matched the world record in the 2023 edition.
- Led 9 divisions, 4 vehicles, and 100+ engineering students as Team Leader.
- Represented the team at Automation & Testing Turin and Maker Faire Rome.

## 🔗 Links

- [Team Policumbent website](https://www.policumbent.it/en/)
- [BOB (onboard software)](https://github.com/policumbent/bob)
- [SARA (weather station)](https://github.com/policumbent/sara)
