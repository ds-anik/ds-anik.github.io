---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---

## Journal Articles

---

<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'journal' %}
     <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

## Conference Papers

---

<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

## Preprints or Under Review

---

<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'preprint' %}
      <li> {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>
