---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /resume
---
{% include base_path %}
{% if author.googlescholar %}
You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

## Key Project Areas

RS been working in three key areas of Machine Learning research, with both methodological and application driven contributions.

- [Sustainability of AI](#sustainability-of-ai)
- [AI for Sciences](#ai-for-sciences)
- [Bio-Medical Image Analysis](#bio-medical-image-analysis)

If you are interested in joining our team check out the open positions advertised on [UCPH Job Portal](https://employment.ku.dk/). And if no positions are currently being advertised by RS feel free to reach out with a short email about what you are interested in and how the work in RS's team might be of interest to you. 

## Sustainability of AI
---
Material cost of developing and deploying complex ML models is growing considerably. In this line of research, we are focusing on some facets of sustainability of ML. Primarily, by focusing on the environmental sustainability (fx: energy consumption and carbon footprint) of ML methods and its interactions with social sustainability (fx: fairness, robustness, access) of AI. Some of the key publications from our team are listed below. 

<ol>
{% for post in site.publications reversed %}
  {% if post.project == 'sustofai' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

---

## AI for Sciences
---
ML methods can accelerate research and open possibilities of asking novel questions in many scientific disciplines. In this line of research, several inter-disciplinary collaborations spanning a broad range of topics are being investigated. From an ML point of view, these do open interesting methods development.

<ol>
{% for post in site.publications reversed %}
  {% if post.project == 'ai4sciences' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
---

## Bio-Medical Image Analysis
---
PhD training of RS was in medical image analysis. RS still holds keen interest in this domain and is active in investigating uncertainty quantification and use of deep latent generative models/ GNNs in this domain.

<ol>
{% for post in site.publications reversed %}
  {% if post.project == 'media' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
---




