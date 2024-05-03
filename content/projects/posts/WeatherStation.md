---
title: "Weather Station (Policumbent)"
description: "Sara - Stazione analisi raffiche Avverse"
dateString: Jan 2020 - Feb 2021
draft: false
tags: ["Python", "Arduino", "ESP32", "Altium", "PCB design", "MQTT", "IoT", "Streaming Data Analysis"]
showToc: false
weight: 203
cover:
    image: "projects/WeatherStation/weatherStation.jpg"
--- 

When trying to break world records, every detail is important!
When travelling at more than 130 Km/h on an instable system it becomes essential for the safety of the driver to monitor the wind conditions. This is the reason why I have developed 'Sara'(Stazione Analisi Raffiche Avverse).

## Description
The Weather station is an IoT device that measures ambient data such as humidity, temperature, pressure, wind direction and wind speed.
It computes in real time the sample mean of the collected parameters and uses it to compute the estimated air density. A lower air density equals a lower power dissipation and an higher speed, so it is an important parameter to monitor in the selection of the timing slot for the race.

Finally, the station publishes periodically the updates on the sensors' measures to an Mqtt broker, to which a client mobile application is connected for data visualization.

![alt text](/projects/WeatherStation/clientAppSara.jpg)