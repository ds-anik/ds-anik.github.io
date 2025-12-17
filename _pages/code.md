---
layout: archive
title: ""
permalink: /code/
author_profile: true
---

Selected implementations and codebases associated with my recent research papers.

{% if site.data.repositories.github_repos %}

<div class="repositories">
  {% for repo in site.data.repositories.github_repos %}
    {% include repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
