---
title: "Aurora"
description: "A voice diary for mental well-being: LLM-scored daily reflections, a serverless AWS backend, and a 27-participant study"
dateString: 11/2023 - 06/2024
draft: false
tags: ["Python", "JavaScript", "NLP", "LLM", "AWS Lambda", "AWS Bedrock", "React Native", "Expo", "Mobile", "LLM Applications"]
showToc: true
TocOpen: false
weight: 203
cover:
  image: "/projects/Aurora/Aurora.png"
  hiddenInSingle: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Outfit:wght@300&display=swap');
.post-single .post-title,.post-single .post-description,.post-single .post-content{font-family:"Manrope",system-ui,-apple-system,"Segoe UI",sans-serif;}
.post-content{--aur-p:#5879B6;--aur-peach:#F4A58C;--aur-lav:#B8B5E6;--aur-ink:#252D3D;--aur-sub:#6B7389;--aur-card:#ffffff;--aur-line:#E8EAF1;}
.dark .post-content{--aur-p:#8FA8DC;--aur-peach:#F4A58C;--aur-lav:#B8B5E6;--aur-ink:var(--primary);--aur-sub:var(--secondary);--aur-card:var(--entry);--aur-line:var(--border);}
.post-content h2{font-weight:600;letter-spacing:-.02em;border-bottom:0;padding-bottom:0;margin-top:3.2rem;}
.post-content h3{font-weight:600;color:var(--aur-ink);}
.post-content h3::before{content:none;}
/* hero */
.aur-hero{position:relative;margin:.5rem 0 2.5rem;padding:2.4rem 1.6rem 1.6rem;border-radius:28px;overflow:hidden;background:
  radial-gradient(70% 55% at 100% 100%,rgba(244,165,140,.38) 0%,rgba(244,165,140,0) 70%),
  radial-gradient(60% 50% at 0% 0%,rgba(88,121,182,.20) 0%,rgba(88,121,182,0) 70%),
  linear-gradient(180deg,#FAFAFC 0%,#F3F4F9 100%);color:#252D3D;text-align:center;}
.dark .aur-hero{background:radial-gradient(70% 55% at 100% 100%,rgba(244,165,140,.16) 0%,rgba(244,165,140,0) 70%),radial-gradient(60% 50% at 0% 0%,rgba(143,168,220,.18) 0%,rgba(143,168,220,0) 70%),linear-gradient(180deg,var(--entry) 0%,var(--theme) 100%);color:var(--primary);}
.aur-brand{display:inline-flex;align-items:center;gap:.6rem;}
.aur-orb{display:inline-block;width:34px;height:34px;border-radius:50%;background:linear-gradient(42deg,#5879B6 0%,#B8B5E6 50%,#F4A58C 100%);box-shadow:0 10px 22px rgba(244,165,140,.45);animation:aur-breathe 5.2s ease-in-out infinite;}
@media (prefers-reduced-motion:reduce){.aur-orb{animation:none;}}
@keyframes aur-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.aur-wordmark{font-family:"Outfit",sans-serif;font-weight:300;font-size:1.7rem;letter-spacing:.22em;line-height:1;}
.aur-hero-title{font-weight:600;font-size:2rem;line-height:1.18;letter-spacing:-.025em;margin:1.3rem auto .9rem;max-width:22ch;}
.aur-hero-lead{font-size:1.02rem;line-height:1.65;color:var(--aur-sub);max-width:52ch;margin:0 auto;}
.aur-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:.45rem;margin:1.3rem auto 0;}
.aur-chips span{font-size:.78rem;font-weight:500;padding:.3rem .8rem;border-radius:999px;background:rgba(255,255,255,.65);border:1px solid rgba(37,45,61,.08);}
.dark .aur-chips span{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);}
.aur-hero-shot{display:block;width:100%;margin:1.8rem auto 0;border-radius:18px;}
.aur-hero-cap{font-size:.78rem;font-weight:500;color:var(--aur-sub);margin:.7rem 0 0;}
/* screens gallery */
.aur-shots{display:grid;grid-template-columns:repeat(4,1fr);gap:.9rem;margin:1.4rem 0 1.8rem;}
.aur-shots figure{margin:0;text-align:center;}
.aur-shots img{width:100%;height:auto;border-radius:18px;border:1px solid var(--aur-line);box-shadow:0 10px 24px rgba(37,45,61,.08);}
.aur-shots figcaption{font-size:.78rem;font-weight:500;color:var(--aur-sub);margin-top:.5rem;line-height:1.35;}
@media (max-width:640px){.aur-shots{grid-template-columns:repeat(2,1fr);}}
/* finding cards */
.aur-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem;margin:1.2rem 0 1.6rem;}
@media (max-width:640px){.aur-cards{grid-template-columns:1fr;}}
.aur-card{background:var(--aur-card);border:1px solid var(--aur-line);border-radius:20px;padding:1.1rem 1.15rem;box-shadow:0 8px 20px rgba(37,45,61,.05);}
.aur-card .k{font-weight:600;font-size:1.55rem;line-height:1.1;color:var(--aur-ink);letter-spacing:-.02em;}
.aur-card .k small{font-size:.85rem;font-weight:500;color:var(--aur-sub);margin-left:.25rem;}
.aur-card p{margin:.45rem 0 0;font-size:.86rem;line-height:1.5;color:var(--aur-sub);}
.aur-note{border-left:3px solid var(--aur-peach);background:rgba(244,165,140,.10);padding:.8rem 1rem;margin:1.2rem 0;border-radius:0 14px 14px 0;}
.dark .aur-note{background:rgba(244,165,140,.12);}
/* figures */
.aur-fig{margin:1.6rem 0;color:var(--content);--aur-blue:#2a78d6;--aur-orange:#eb6834;--aur-aqua:#1baf7a;--aur-mark:#5879B6;--aur-good:#5E9E8B;--aur-grid:#e1e0d9;--aur-muted:#898781;}
.dark .aur-fig{--aur-blue:#3987e5;--aur-orange:#d95926;--aur-aqua:#199e70;--aur-mark:#8FA8DC;--aur-grid:#2c2c2a;}
.aur-fig svg{max-width:100%;height:auto;display:block;margin:0 auto;font-family:"Manrope",system-ui,-apple-system,"Segoe UI",sans-serif;}
.aur-fig figcaption{font-size:.85rem;color:var(--secondary);text-align:center;margin:.6rem auto 0;line-height:1.5;max-width:60ch;}
.aur-fig .zone{fill-opacity:.07;stroke-width:1.2;}
.aur-fig .z-blue{fill:var(--aur-blue);stroke:var(--aur-blue);}
.aur-fig .z-orange{fill:var(--aur-orange);stroke:var(--aur-orange);}
.aur-fig .z-aqua{fill:var(--aur-aqua);stroke:var(--aur-aqua);}
.aur-fig .zl{font-size:11px;font-weight:600;letter-spacing:.04em;}
.aur-fig .zl-blue{fill:var(--aur-blue);}
.aur-fig .zl-orange{fill:var(--aur-orange);}
.aur-fig .zl-aqua{fill:var(--aur-aqua);}
.aur-fig .box{fill:var(--entry);stroke:currentColor;stroke-width:1.2;}
.aur-fig .box-dash{stroke-dasharray:5 4;}
.aur-fig .box-good{fill:var(--aur-good);fill-opacity:.14;stroke:var(--aur-good);stroke-width:1.4;}
.aur-fig .t{fill:currentColor;font-size:12.5px;}
.aur-fig .tb{fill:currentColor;font-size:12.5px;font-weight:600;}
.aur-fig .ts{fill:var(--secondary);font-size:11px;}
.aur-fig .tm{fill:var(--aur-muted);font-size:10.5px;}
.aur-fig .lbl{paint-order:stroke;stroke:var(--theme);stroke-width:4px;stroke-linejoin:round;}
.aur-fig .ln{stroke:currentColor;stroke-width:1.4;fill:none;}
.aur-fig .ln-dash{stroke-dasharray:5 4;}
.aur-fig .ln-soft{stroke:var(--secondary);stroke-width:1;fill:none;stroke-dasharray:3 4;}
.aur-fig .grid{stroke:var(--aur-grid);stroke-width:1;}
.aur-fig .axis{stroke:var(--secondary);stroke-width:1.2;}
.aur-fig .bar{fill:var(--aur-mark);}
.aur-fig .dot{fill:var(--aur-mark);stroke:var(--theme);stroke-width:1.5;}
.aur-fig .span{fill:var(--aur-peach);fill-opacity:.28;stroke:var(--aur-peach);stroke-width:1;stroke-dasharray:4 3;}
</style>

<section class="aur-hero">
<div class="aur-brand"><span class="aur-orb"></span><span class="aur-wordmark">aurora</span></div>
<div class="aur-hero-title">Say how your day went. See how you are doing.</div>
<p class="aur-hero-lead">Aurora is a voice diary for mental well-being. A few seconds of speaking a day become eight scores with written reasons, kept private until you choose to share them with your psychologist. Designed and built at NECSTLab, Politecnico di Milano, and evaluated with 27 people over several weeks.</p>
<div class="aur-chips"><span>React Native · Expo</span><span>AWS Lambda</span><span>Amazon Bedrock · Llama 70B</span><span>OpenAI Whisper</span><span>27-participant study</span></div>
<img class="aur-hero-shot" src="/projects/Aurora/aurora-concept.png" alt="Five phone screens of the Aurora concept: a dawn-lit home screen with the sphere, a voice reflection in progress, a guided reflection chat, eight-dimension well-being insights with a weekly trend, and suggested activities" loading="eager">
<p class="aur-hero-cap">The Aurora experience: daily reflection, guided follow-up, insights across eight dimensions, and suggested activities.</p>
</section>

A monthly session with a psychologist lasts fifty minutes. The other twenty-nine days are where life happens, and by the time the session arrives it is hard to recall how the weeks actually went. Aurora closes that gap from both sides: for the person, keeping a diary costs a few seconds of speaking; for the professional, scattered impressions become a time series of eight scores, each with a one-sentence reason, that the session can start from.

The research question behind it: can a general-purpose large language model, with careful prompting and no fine-tuning, assess well-being from free speech consistently enough to be useful as a conversation starter between a patient and a therapist? Aurora is the instrument built to answer it. I designed and built the whole stack: the cross-platform client, the speech pipeline, the serverless analysis backend, and the user study.

## The experience

Three screens, one gesture. You hold the Aurora sphere and talk; you let go and read back what Aurora heard; you tap *Analyse* and see something to do today and how you are doing. Every tap that was not strictly needed was removed, because the app has to be pleasant to use every single day. These are the screens of the current build.

<div class="aur-shots">
<figure><img src="/projects/Aurora/listening.png" alt="Home screen while recording: the sphere swells and glows peach" loading="lazy"><figcaption>Hold the sphere and speak</figcaption></figure>
<figure><img src="/projects/Aurora/home.png" alt="Home screen with one transcribed reflection and Listen and Analyse actions" loading="lazy"><figcaption>Read it back, then analyse</figcaption></figure>
<figure><img src="/projects/Aurora/activities.png" alt="Activities screen with two suggestions" loading="lazy"><figcaption>Something for today</figcaption></figure>
<figure><img src="/projects/Aurora/parameters.png" alt="Parameters screen with the eight well-being scores" loading="lazy"><figcaption>Today's well-being</figcaption></figure>
</div>

### Eight dimensions, one vocabulary

Every reflection is scored on the same eight dimensions. The definitions below are passed verbatim to the model, so the app, the backend and the professional all speak the same language.

| # | Dimension | What the model looks for |
|---|---|---|
| 1 | Emotional well-being | A positive mood, resilience in the face of challenges, and the ability to manage and express a range of emotions appropriately |
| 2 | Healthy thought patterns | A realistic outlook on life, positive self-esteem, and the ability to cope with stress and adversity |
| 3 | Social connections | Supportive relationships, a strong social support network, and the ability to maintain healthy relationships |
| 4 | Self-acceptance | Being comfortable with oneself, accepting one's own strengths and weaknesses, and having a positive self-image |
| 5 | Autonomy | A sense of control over one's own life and the ability to make decisions aligned with one's values and goals |
| 6 | Resilience | The ability to bounce back from setbacks, adapt to changes, and learn from difficult experiences |
| 7 | Stress management | Effective coping strategies to deal with stressors and challenges in life |
| 8 | Work-life balance | Balancing the demands of work, personal life and leisure to maintain overall well-being |

Each dimension receives an integer from `1` (very low) to `5` (very high), or `-1` when the reflection does not say enough to judge it. That escape hatch is deliberate: a short "today was fine" should not produce confident scores on social connections or work-life balance, and the app shows it as "not enough said" rather than a number.

### What an analysis looks like

For the reflection in the screens above ("Hi Aurora, today I'm not feeling very well. I have slept not so much, and I'm going to start this day with tiredness, but I really should accomplish so much today, so I'll get going"), the profile looks like this. Hover a bar to read the kind of reason the model attaches to each score.

<figure class="aur-fig">
<svg viewBox="0 0 640 330" role="img" aria-label="Horizontal bar chart of an example well-being profile on a 1 to 5 scale: Emotional well-being 3, Healthy thought patterns 2, Social connections not scored, Self-acceptance 2, Autonomy 4, Resilience 4, Stress management 2, Work-life balance 2.">
<g class="grid">
<line x1="210" y1="20" x2="210" y2="296"/><line x1="286" y1="20" x2="286" y2="296"/><line x1="362" y1="20" x2="362" y2="296"/><line x1="438" y1="20" x2="438" y2="296"/><line x1="514" y1="20" x2="514" y2="296"/><line x1="590" y1="20" x2="590" y2="296"/>
</g>
<line x1="210" y1="296" x2="590" y2="296" class="axis"/>
<g class="tm" text-anchor="middle">
<text x="210" y="312">0</text><text x="286" y="312">1</text><text x="362" y="312">2</text><text x="438" y="312">3</text><text x="514" y="312">4</text><text x="590" y="312">5</text>
<text x="400" y="327">score (1 = very low · 5 = very high)</text>
</g>
<g class="t" text-anchor="end">
<text x="198" y="46">Emotional well-being</text>
<text x="198" y="80">Healthy thought patterns</text>
<text x="198" y="114">Social connections</text>
<text x="198" y="148">Self-acceptance</text>
<text x="198" y="182">Autonomy</text>
<text x="198" y="216">Resilience</text>
<text x="198" y="250">Stress management</text>
<text x="198" y="284">Work-life balance</text>
</g>
<g class="bar">
<g><title>Emotional well-being: 3 / 5. Low mood and tiredness, expressed clearly and without avoidance. The day still starts with intent.</title><path d="M210,33 h224 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-224 z"/></g>
<g><title>Healthy thought patterns: 2 / 5. "I really should accomplish so much" points to pressure and self-demand rather than a realistic outlook.</title><path d="M210,67 h148 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-148 z"/></g>
<g><title>Social connections: not enough said. Nobody else is mentioned today, so there is not enough to judge social connections.</title><path d="M210,101 h0 z"/></g>
<g><title>Self-acceptance: 2 / 5. The day is measured by what must get done, not by how the person actually feels.</title><path d="M210,135 h148 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-148 z"/></g>
<g><title>Autonomy: 4 / 5. The decision to get going is clearly their own. A strong sense of agency comes through.</title><path d="M210,169 h300 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-300 z"/></g>
<g><title>Resilience: 4 / 5. Tired and unwell, yet choosing to start anyway. That is resilience in practice.</title><path d="M210,203 h300 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-300 z"/></g>
<g><title>Stress management: 2 / 5. Poor sleep and a heavy to-do list, with no coping strategy mentioned.</title><path d="M210,237 h148 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-148 z"/></g>
<g><title>Work-life balance: 2 / 5. Everything in the reflection is framed around obligations; no rest or leisure appears.</title><path d="M210,271 h148 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-148 z"/></g>
</g>
<g class="ts" text-anchor="start">
<text x="446" y="46">3</text><text x="370" y="80">2</text><text x="218" y="114">not enough said</text><text x="370" y="148">2</text><text x="522" y="182">4</text><text x="522" y="216">4</text><text x="370" y="250">2</text><text x="370" y="284">2</text>
</g>
</svg>
<figcaption>Illustrative profile for the sample reflection. The scores and the reasons shown on hover are examples of the model's output style, not study data.</figcaption>
</figure>

Two things are visible even in this small example. The model separates dimensions that a single mood score would blur: low emotional well-being and poor stress management coexist with high autonomy and resilience. And the reasons are where the value is. A 2 on healthy thought patterns is a number; "should accomplish so much points to pressure rather than a realistic outlook" is something a therapist can open a session with.

### One reflection, end to end

<figure class="aur-fig">
<svg viewBox="0 0 700 440" role="img" aria-label="Sequence diagram: the user holds the sphere and releases, the app sends the audio to OpenAI Whisper and receives a transcript, the user taps Analyse, the app invokes the AWS Lambda, which prompts Llama on Bedrock and parses its generation into eight scores that the app then shows on the Activities and Parameters screens.">
<defs><marker id="aur-arw1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g class="tb" text-anchor="middle">
<rect x="20" y="14" width="100" height="30" rx="6" class="box"/><text x="70" y="34">User</text>
<rect x="165" y="14" width="110" height="30" rx="6" class="box"/><text x="220" y="34">Aurora app</text>
<rect x="315" y="14" width="110" height="30" rx="6" class="box"/><text x="370" y="34">Whisper API</text>
<rect x="465" y="14" width="110" height="30" rx="6" class="box"/><text x="520" y="34">Lambda</text>
<rect x="600" y="14" width="90" height="30" rx="6" class="box"/><text x="645" y="34">Bedrock</text>
</g>
<g class="ln-soft">
<line x1="70" y1="44" x2="70" y2="418"/><line x1="220" y1="44" x2="220" y2="418"/><line x1="370" y1="44" x2="370" y2="418"/><line x1="520" y1="44" x2="520" y2="418"/><line x1="645" y1="44" x2="645" y2="418"/>
</g>
<g class="ln" marker-end="url(#aur-arw1)">
<line x1="70" y1="80" x2="218" y2="80"/>
<line x1="70" y1="112" x2="218" y2="112"/>
<line x1="220" y1="144" x2="368" y2="144"/>
<line x1="370" y1="176" x2="222" y2="176" class="ln-dash"/>
<line x1="220" y1="208" x2="72" y2="208" class="ln-dash"/>
<line x1="70" y1="240" x2="218" y2="240"/>
<line x1="220" y1="272" x2="518" y2="272"/>
<line x1="520" y1="304" x2="643" y2="304"/>
<line x1="645" y1="336" x2="522" y2="336" class="ln-dash"/>
<line x1="520" y1="368" x2="222" y2="368" class="ln-dash"/>
<line x1="220" y1="400" x2="72" y2="400" class="ln-dash"/>
</g>
<g class="ts lbl" text-anchor="middle">
<text x="145" y="74">hold the sphere → recording</text>
<text x="145" y="106">release → m4a saved locally</text>
<text x="295" y="138">POST audio (multipart)</text>
<text x="295" y="170">transcript text</text>
<text x="145" y="202">transcript + Listen / Analyse</text>
<text x="145" y="234">tap Analyse</text>
<text x="370" y="266">invoke { transcript, user_id }  (RequestResponse)</text>
<text x="582" y="285">prompt: rules, 8 params,</text>
<text x="582" y="298">schema, transcript</text>
<text x="582" y="330">generation (free text)</text>
<text x="370" y="362">JSON: 8 × { score, motivation }</text>
<text x="145" y="394">Activities → Parameters</text>
</g>
<text x="20" y="434" class="tm">solid: request · dashed: response · the round trip is dominated by the two model calls</text>
</svg>
<figcaption>Two network calls leave the phone: the audio goes to Whisper for transcription, and the transcript goes to the Lambda, the only component that talks to the language model.</figcaption>
</figure>

A few details of the interaction that came out of using it daily:

- **Press and hold.** A recording lasts exactly as long as the finger stays on the sphere. No start and stop confirmations, no accidental twenty-minute recordings.
- **Read before analysing.** The transcript is shown first, with a play-once control, so what the model reads is what was actually said.
- **Bounded sessions.** At most three reflections can be held at once; clearing them deletes the audio from the device.
- **Honest empty states.** A missing score is shown as "not enough said", and a malformed response renders as unscored rather than as a crash.

## How it works

Aurora is a thin client in front of a serverless backend. There is no server to maintain: the phone talks to one third-party API for speech-to-text and to AWS for everything else. All prompting lives in a single Python Lambda, so the client never contains model logic and the model can be swapped without shipping a new app build.

<figure class="aur-fig">
<svg viewBox="0 0 680 470" role="img" aria-label="Architecture diagram with three zones. On the phone: Recorder, Home screen and the Activities and Parameters screens. Third-party API: OpenAI Whisper receives m4a audio and returns a transcript. AWS serverless: the Home screen invokes the analysis Lambda, which calls a Llama 70B chat model on Bedrock and returns eight scores; an optional S3 upload of audio and transcript and a planned chat Lambda are drawn dashed.">
<defs><marker id="aur-arw2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<rect x="20" y="20" width="640" height="150" rx="10" class="zone z-blue"/>
<text x="36" y="42" class="zl zl-blue">On the phone · React Native + Expo</text>
<rect x="20" y="230" width="270" height="110" rx="10" class="zone z-orange"/>
<text x="36" y="252" class="zl zl-orange">Third-party API</text>
<rect x="310" y="230" width="350" height="220" rx="10" class="zone z-aqua"/>
<text x="326" y="442" class="zl zl-aqua">AWS · serverless</text>
<g text-anchor="middle">
<rect x="40" y="70" width="160" height="70" rx="8" class="box"/>
<text x="120" y="98" class="tb">Recorder</text>
<text x="120" y="116" class="ts">expo-av · m4a · ≤ 3 clips</text>
<text x="120" y="130" class="ts">audioProcessing.js</text>
<rect x="260" y="70" width="160" height="70" rx="8" class="box"/>
<text x="340" y="98" class="tb">Home screen</text>
<text x="340" y="116" class="ts">state + service wrappers</text>
<text x="340" y="130" class="ts">listen · analyse · clear</text>
<rect x="480" y="70" width="160" height="70" rx="8" class="box"/>
<text x="560" y="98" class="tb">Activities → Parameters</text>
<text x="560" y="116" class="ts">activity cards · 8 score</text>
<text x="560" y="130" class="ts">rings + reasons</text>
<rect x="40" y="272" width="230" height="52" rx="8" class="box"/>
<text x="155" y="294" class="tb">OpenAI Whisper</text>
<text x="155" y="311" class="ts">speech-to-text · model whisper-1</text>
<rect x="330" y="272" width="180" height="52" rx="8" class="box"/>
<text x="420" y="294" class="tb">Analysis Lambda</text>
<text x="420" y="311" class="ts">Python · boto3 · prompt + parser</text>
<rect x="330" y="372" width="180" height="52" rx="8" class="box"/>
<text x="420" y="394" class="tb">Amazon Bedrock</text>
<text x="420" y="411" class="ts">Meta Llama 70B chat · temp 0</text>
<rect x="530" y="272" width="110" height="52" rx="8" class="box box-dash"/>
<text x="585" y="294" class="tb">S3 bucket</text>
<text x="585" y="311" class="ts">audio + transcript</text>
<rect x="530" y="372" width="110" height="52" rx="8" class="box box-dash"/>
<text x="585" y="394" class="tb">Chat Lambda</text>
<text x="585" y="411" class="ts">work in progress</text>
</g>
<g class="ln" marker-end="url(#aur-arw2)">
<line x1="200" y1="122" x2="258" y2="122"/>
<line x1="420" y1="122" x2="478" y2="122"/>
<line x1="170" y1="140" x2="170" y2="270"/>
<line x1="200" y1="272" x2="200" y2="142" class="ln-dash"/>
<line x1="350" y1="140" x2="350" y2="270"/>
<line x1="390" y1="272" x2="390" y2="142" class="ln-dash"/>
<line x1="400" y1="324" x2="400" y2="370"/>
<line x1="440" y1="372" x2="440" y2="326" class="ln-dash"/>
<polyline points="418,140 418,205 585,205 585,270" class="ln-dash"/>
<line x1="530" y1="398" x2="512" y2="398" class="ln-dash"/>
</g>
<g class="ts">
<text x="229" y="92" text-anchor="middle">clip +</text>
<text x="229" y="105" text-anchor="middle">transcript</text>
<text x="449" y="92" text-anchor="middle">navigate</text>
<text x="449" y="105" text-anchor="middle">(scores)</text>
<text x="162" y="190" text-anchor="end">m4a audio</text>
<text x="162" y="204" text-anchor="end">(multipart)</text>
<text x="208" y="190" text-anchor="start">transcript</text>
<text x="208" y="204" text-anchor="start">(text)</text>
<text x="342" y="165" text-anchor="end">invoke</text>
<text x="342" y="179" text-anchor="end">{ transcript,</text>
<text x="342" y="193" text-anchor="end">user_id }</text>
<text x="398" y="165" text-anchor="start" class="lbl">8 × { score,</text>
<text x="398" y="179" text-anchor="start" class="lbl">motivation }</text>
<text x="577" y="222" text-anchor="end" class="lbl">optional upload · user-id-prefixed keys</text>
<text x="392" y="352" text-anchor="end">invoke_model</text>
<text x="448" y="352" text-anchor="start">generation</text>
<text x="640" y="442" text-anchor="end">planned: conversational context</text>
</g>
<text x="20" y="464" class="tm">Credentials and endpoints are injected at build time from a .env file; dashed elements are optional or still in progress.</text>
</svg>
<figcaption>Three trust zones. The phone owns capture and presentation, Whisper owns transcription, and the Lambda is the single place where the well-being prompt and the model live.</figcaption>
</figure>

| Layer | Component | Responsibility | Implementation |
|---|---|---|---|
| Client | Navigation shell | Native stack with Home, Activities and Parameters | `@react-navigation/native-stack` |
| Client | Audio service | Permission, record, stop and unload, play once, clear files | `expo-av`, `expo-file-system` |
| Client | Transcription service | Multipart upload of the clip to Whisper, returns the transcript | `fetch` to the OpenAI audio endpoint |
| Client | Lambda invocation service | Synchronous invoke with transcript and user id, JSON unwrap | `aws-sdk` Lambda client |
| Client | Upload service | Writes the clip and the transcript to S3 with user-id-prefixed keys | `aws-sdk` S3 client |
| Backend | Analysis Lambda | Builds the structured prompt, calls Bedrock, validates the JSON, returns scores or a safe default | Python, `boto3` |
| Backend | Model | Scores the transcript on the eight dimensions with reasons | Meta Llama 70B chat on Amazon Bedrock |
| Backend | Chat Lambda | Conversational follow-up, keeps the exchange as context | Work in progress |

### Prompt design

The prompt is a single JSON document with four fields, so the model sees the task, the vocabulary, the expected output shape and the user input as clearly separated parts:

```json
{
  "system_prompt":   "Analyse 'user_prompt' along the 8 parameters below, giving a score 1 (very low) .. 5 (very high) or -1 (not applicable) and a motivation for each. Answer as a JSON document shaped like 'output_format'. If the prompt is defective, return {'-1': {...}}",
  "parameters_list": { "1": { "name": "Emotional Well-being", "description": "..." }, "...": "...", "8": { "name": "Work-Life Balance", "description": "..." } },
  "output_format":   { "1": { "score": "<number 1..5>", "motivation": "<string>" }, "...": "...", "8": { "score": "<number 1..5>", "motivation": "<string>" } },
  "user_prompt":     "<transcript>"
}
```

- **Integer scores with an explicit `-1`.** The model may decline to score a dimension, which reduces hallucinated confidence on short reflections.
- **A reason for every score.** The reason is what the psychologist reads; the number is an index into the history. It also lets the user audit the model before sharing anything.
- **Deterministic decoding.** `temperature = 0`, `top_p = 0.9`, `max_gen_len = 800`: the same reflection yields the same scores on repeated calls, a prerequisite for comparing days.

### Making free text safe for a UI

Llama returns prose around the JSON, sometimes truncated, sometimes with commentary. The Lambda never passes that through. It either produces valid JSON or a well-defined default profile, and encodes which one happened in the status code.

<figure class="aur-fig">
<svg viewBox="0 0 480 590" role="img" aria-label="Flowchart of the Lambda response handling: invoke the model; on exception return the default profile with status 500; read the generation; if empty return the default with 200; scan the text for the first brace-balanced block; if unbalanced return default with 500; parse it with json.loads; if parsing fails return default with 500; otherwise return the scores with 200.">
<defs><marker id="aur-arw4" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g text-anchor="middle">
<rect x="50" y="20" width="200" height="44" rx="8" class="box"/>
<text x="150" y="39" class="tb">bedrock invoke_model</text>
<text x="150" y="55" class="ts">Llama 70B chat · temperature 0</text>
<polygon points="150,86 205,108 150,130 95,108" class="box"/>
<text x="150" y="112" class="t">exception?</text>
<rect x="50" y="152" width="200" height="40" rx="8" class="box"/>
<text x="150" y="177" class="t">read body → "generation"</text>
<polygon points="150,214 205,236 150,258 95,236" class="box"/>
<text x="150" y="240" class="t">empty?</text>
<rect x="50" y="280" width="200" height="44" rx="8" class="box"/>
<text x="150" y="299" class="t">brace-balance scan</text>
<text x="150" y="315" class="ts">keep first { … } block, drop prose</text>
<polygon points="150,346 205,368 150,390 95,368" class="box"/>
<text x="150" y="372" class="t">balanced?</text>
<rect x="50" y="412" width="200" height="40" rx="8" class="box"/>
<text x="150" y="437" class="t">json.loads(block)</text>
<polygon points="150,474 205,496 150,518 95,496" class="box"/>
<text x="150" y="500" class="t">parses?</text>
<rect x="50" y="540" width="200" height="40" rx="8" class="box box-good"/>
<text x="150" y="565" class="tb">200 · eight scores + reasons</text>
<rect x="300" y="86" width="160" height="432" rx="8" class="box box-dash"/>
<text x="380" y="282" class="tb">Default profile</text>
<text x="380" y="302" class="ts">8 × { score: -1,</text>
<text x="380" y="318" class="ts">motivation:</text>
<text x="380" y="334" class="ts">"Not enough information" }</text>
</g>
<g class="ln" marker-end="url(#aur-arw4)">
<line x1="150" y1="64" x2="150" y2="84"/>
<line x1="150" y1="130" x2="150" y2="150"/>
<line x1="150" y1="192" x2="150" y2="212"/>
<line x1="150" y1="258" x2="150" y2="278"/>
<line x1="150" y1="324" x2="150" y2="344"/>
<line x1="150" y1="390" x2="150" y2="410"/>
<line x1="150" y1="452" x2="150" y2="472"/>
<line x1="150" y1="518" x2="150" y2="538"/>
<line x1="205" y1="108" x2="298" y2="108"/>
<line x1="205" y1="236" x2="298" y2="236"/>
<line x1="205" y1="368" x2="298" y2="368"/>
<line x1="205" y1="496" x2="298" y2="496"/>
</g>
<g class="ts">
<text x="158" y="146" text-anchor="start">no</text>
<text x="158" y="274" text-anchor="start">no</text>
<text x="158" y="406" text-anchor="start">yes</text>
<text x="158" y="534" text-anchor="start">yes</text>
<text x="252" y="102" text-anchor="middle">yes · 500</text>
<text x="252" y="230" text-anchor="middle">yes · 200</text>
<text x="252" y="362" text-anchor="middle">no · 500</text>
<text x="252" y="490" text-anchor="middle">no · 500</text>
</g>
</svg>
<figcaption>Every exit of the Lambda returns the same shape. The client only ever renders eight score objects; the status code says whether they came from the model or from the fallback.</figcaption>
</figure>

Rather than asking the model for "JSON only" and hoping, the function walks the generation character by character, counting braces, and keeps exactly the first balanced block. Anything added before or after is discarded, and a truncated generation (unbalanced braces, typically from hitting the token limit) is detected before parsing ever runs.

## Privacy by design

Mental-health data is about as sensitive as personal data gets, so the data path was designed before the interface was.

- **Stateless analysis.** The Lambda receives a transcript, returns scores, and keeps nothing. Nothing is stored on a server by default.
- **Anonymised history.** When uploads are enabled, objects are keyed by an opaque user identifier plus a timestamp, never by name, e-mail or device. The identifier is what links a person's history together for a professional.
- **Consent-gated sharing.** The history is visible to a psychologist only after the user shares it. Until then it exists only for the user, and the app says so on the scores screen.
- **Secrets out of source control.** All credentials are injected from an untracked `.env` file, with a committed template documenting each key.

<div class="aur-note">Known limitation: the prototype signs AWS calls with credentials bundled at build time. A public release would move them behind an API Gateway or Cognito identity so the app holds no long-lived keys. It is the first item on the roadmap.</div>

## What the study showed

Aurora was evaluated with a formal user study of 27 participants over multiple weeks. Participants used the app as intended, recording daily reflections, and the study collected both interaction patterns and judgements of the model's output.

<div class="aur-cards">
<div class="aur-card"><div class="k">27<small>participants</small></div><p>Daily use over several weeks, on their own phones.</p></div>
<div class="aur-card"><div class="k">8<small>dimensions</small></div><p>Scored on every reflection, each with a written reason.</p></div>
<div class="aur-card"><div class="k">0<small>unparseable responses</small></div><p>The fallback profile made every model reply renderable.</p></div>
</div>

What was measured:

- **Interaction patterns.** How often and when reflections were recorded, how long they were, and how often participants re-listened or re-recorded before analysing.
- **Response quality.** Whether the scores and reasons were perceived as accurate, consistent across days, and useful as a basis for discussion with a professional.

Two findings shaped the product directly. Participants wanted to verify what the model would read, which is why the transcript is shown before analysis rather than after. And the written reasons, not the numbers, were what people described as useful: a score is a point on a line, a reason is something to talk about.

## Outcomes

<div class="aur-note">Winner of <strong>Hack the NECSTCamp</strong>, a 36-hour AI mobile application challenge, with a complete end-to-end product: user study, serverless LLM backend on AWS, and a cross-platform app ready for real users.</div>

- A daily reflection loop that takes under a minute: speak, read back, analyse, act.
- A serverless scoring backend whose output is always a valid eight-dimension profile, with the fallback case made explicit rather than hidden.
- Evidence from 27 participants that model-written reasons, not raw scores, are what make an automated well-being assessment useful.

## Timeline

<figure class="aur-fig">
<svg viewBox="0 0 640 480" role="img" aria-label="Vertical timeline from December 2023 to June 2024 with milestones: audio recording and playback on 19 December, Whisper transcription on 22 December, S3 upload on 2 January, Parameters and Activities screens on 20 January, serverless analysis through Lambda on 22 January, chat screen scaffold on 27 January, Bedrock Lambda with output hardening on 2 February, new graphics on 10 February, then a user study and refinement phase through spring 2024.">
<g class="tm" text-anchor="end">
<text x="60" y="44">Dec 23</text><text x="60" y="104">Jan 24</text><text x="60" y="164">Feb</text><text x="60" y="224">Mar</text><text x="60" y="284">Apr</text><text x="60" y="344">May</text><text x="60" y="404">Jun</text>
</g>
<g class="grid">
<line x1="70" y1="40" x2="90" y2="40"/><line x1="70" y1="100" x2="90" y2="100"/><line x1="70" y1="160" x2="90" y2="160"/><line x1="70" y1="220" x2="90" y2="220"/><line x1="70" y1="280" x2="90" y2="280"/><line x1="70" y1="340" x2="90" y2="340"/><line x1="70" y1="400" x2="90" y2="400"/><line x1="70" y1="460" x2="90" y2="460"/>
</g>
<line x1="90" y1="30" x2="90" y2="465" class="axis"/>
<rect x="84" y="220" width="12" height="240" rx="6" class="span"/>
<g class="ln-soft">
<polyline points="90,75 130,75 130,60 160,60"/>
<polyline points="90,81 136,81 136,92 160,92"/>
<polyline points="90,102 120,102 120,124 160,124"/>
<polyline points="90,137 126,137 126,156 160,156"/>
<polyline points="90,141 132,141 132,188 160,188"/>
<polyline points="90,150 138,150 138,220 160,220"/>
<polyline points="90,164 144,164 144,252 160,252"/>
<polyline points="90,179 150,179 150,284 160,284"/>
</g>
<g class="dot">
<circle cx="90" cy="75" r="3.5"/><circle cx="90" cy="81" r="3.5"/><circle cx="90" cy="102" r="3.5"/><circle cx="90" cy="137" r="3.5"/><circle cx="90" cy="141" r="3.5"/><circle cx="90" cy="150" r="3.5"/><circle cx="90" cy="164" r="3.5"/><circle cx="90" cy="179" r="3.5"/>
</g>
<g text-anchor="start">
<text x="166" y="64" class="tb">Audio recording and playback</text><text x="460" y="64" class="ts">19 Dec</text>
<text x="166" y="96" class="tb">Whisper speech-to-text integration</text><text x="460" y="96" class="ts">22 Dec</text>
<text x="166" y="128" class="tb">Audio and transcript upload to S3</text><text x="460" y="128" class="ts">2 Jan</text>
<text x="166" y="160" class="tb">Parameters and Activities screens</text><text x="460" y="160" class="ts">20 Jan</text>
<text x="166" y="192" class="tb">Analysis moved to a serverless Lambda</text><text x="460" y="192" class="ts">22 Jan</text>
<text x="166" y="224" class="tb">Chat screen scaffold</text><text x="460" y="224" class="ts">27 Jan</text>
<text x="166" y="256" class="tb">Bedrock Llama prompt and output hardening</text><text x="460" y="256" class="ts">2 Feb</text>
<text x="166" y="288" class="tb">New graphics and visual identity</text><text x="460" y="288" class="ts">10 Feb</text>
<text x="166" y="350" class="tb">User study and refinement</text><text x="460" y="350" class="ts">spring 2024</text>
<text x="166" y="368" class="ts">27 participants · multiple weeks · interaction patterns and response quality</text>
</g>
<text x="20" y="476" class="tm">Milestones from the repository history; the study phase is shown as a span.</text>
</svg>
<figcaption>Eight weeks from the first recorded clip to a hardened serverless pipeline, then the user study.</figcaption>
</figure>

## Stack

| Area | Choice | Why |
|---|---|---|
| Mobile | React Native 0.72 on Expo SDK 49, EAS Build | One code base for iOS, Android and web; internal builds for study participants |
| Navigation | React Navigation native stack | Native transitions; route params carry the analysis between screens |
| Audio | `expo-av` + `expo-file-system` | Permissions, high-quality recording, local playback and clean-up |
| Speech-to-text | OpenAI Whisper (`whisper-1`) | Robust to accents and background noise, multilingual, one HTTP call |
| Compute | AWS Lambda (Python 3, `boto3`) | Zero servers, pay per reflection, prompt logic isolated from the app |
| Model | Meta Llama 70B chat via Amazon Bedrock | Managed endpoint, no GPU to run, deterministic decoding at temperature 0 |
| Storage | Amazon S3 | Optional archive of audio and transcripts with anonymised keys |
| Design | Manrope + Outfit, periwinkle `#5879B6`, peach `#F4A58C` | Calm, legible, built around the Aurora sphere |

## Links

- [Aurora on GitHub](https://github.com/AlbertoEusebio/Aurora_app): mobile app, Lambda source, design tokens and setup instructions.
- [NECSTLab, Politecnico di Milano](https://necst.it/): the research lab where the project was developed.
