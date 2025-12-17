---
layout: archive
title: "Code"
permalink: /code/
author_profile: true
---

Some of my recent projects and implementations.

{% if site.data.repositories.github_repos %}

<div class="repositories" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
  {% for repo in site.data.repositories.github_repos %}
    {% include repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
