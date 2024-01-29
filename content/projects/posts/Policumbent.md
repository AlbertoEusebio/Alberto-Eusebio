---
title: "Streamliners (Policumbent)"
description: "Cerberus, Phoenix and TaurusX"
dateString: Jan 2020 - Ongoing
draft: false
tags: ["Python", "Arduino", "STM32", "Altium", "PCB design", "RaspberryPy", "Esp32", "MQTT", "IoT", "4G"]
showToc: false
weight: 203
cover:
    image: "projects/Policumbent/Cerberus.webp"
--- 

## Description

As part of the IT & Electronics division of Team Policumbent, I was Involved in the development of the on-board systems for our streamliners. In my three years in Team Policumbent I developed or contributed to develop different systems.

## Features I contributed developing
1. **Electrically-controlled wireless gearbox**: controlled through pushbuttons on the steer, helped the athlete sending the command to change the gear ratio, without stopping pedaling. The system sent a command in RF to a controller, that instructed a motor to shift the gearbox untill the gear was changed.
2. **Wireless Sensors integration**: real-time data collection from Garmin ANT+ sensors, preprocessing and visualization in order to give immediate feedback to the athlete on speed, heartrate, cadence and power dissipated.
3. **Live telemetry**: interface to the 4G network, using a SIM7600 module to transmit bike data from the streamliner to the control station and to other interested users
4. **Standalone weather station** for monitoring wind turbulence that could affect the race, making the record-attempt invalid. The station periodically published data on an external MQTT broker, that then served the data to the connected clients through the MQTT visualizer app.

## Cerberus - 82.80 km/h Handtrike
A high-speed Handtrike capable of reaching 82.80Km/h without any motor, driven by the paraolimpic cyclist Diego Colombari, which almost broke the **World Record** (-0.22Km/h) as the fastest cyclist with disability during the **World Human Powered Speed Challenge**.

![Alt text](/projects/Policumbent/cerberus_image.png)

## Phoenix - 131 Km/h bike
Not so far from the world record set to 145 Km/h, Phoenix reached incredible speeds lead by Andrea Gallo, Matilde Vitillo and Enzo Yokota.
This was mainly because of its extraordinary aerodynamics and innovative mechanics, developed by some of the most promising engineers that I had the pleasure to lead.

![Alt text](/projects/Policumbent/Phoenix.png)