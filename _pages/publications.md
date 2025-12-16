---
layout: archive
title: "Publications of Raghavendra Selvan"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% if author.googlescholar %}
You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

## Publication Types

- [Refereed Conference/ Workshop Papers](#refereed-conference-or-workshop-papers)
- [Journal Articles](#journal-articles)
- [Preprints](#preprints-or-under-review)
- [Monographs](#monographs)


## Refereed Conference or Workshop Papers
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %} 
  <li>    {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>

## Journal Articles
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'journal' %}
     <li> {% include archive-single.html %} </li>
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

## Monographs
---
<ol>
{% for post in site.publications reversed %}
  {% if post.pubtype == 'thesis' %}
   <li>   {% include archive-single.html %} </li>
  {% endif %}
{% endfor %}
</ol>


<!-- Peer-reviewing
---
Peer-reviewing is important to keep maintain scientific standards and to contribute to the research community. I also use it as an opportunity to read and keep abrest with new work. However, in the current Machine Learning research climate the reviewing load is quite hectic and takes up a considerable amount of my work time. I will try to maintain a count of all the reviewing I have done/will do to account for my time.

* Conferences/Workshops
   * International Conference on Learning Representations (ICLR) [2]
   * International Symposium on Biomedical Imaging (ISBI) [5]
   * Workshop on Medical Imaging meets NeurIPS (medNeurIPS) [10]
   * Medical Imaging Computing and Computer Assisted Intervention (MICCAI) [26]
   * Medical Imaging with Deep Learning (MIDL) [20]
   * Medical Image Understanding and Analysis (MIUA) [3]
   * Neural Information Processing Systems (NeurIPS) [7]

* Journals
   * German Journal of Artificial Intelligence [1]
   * Briefings in Bioinformatics [1]
   * Journal of Machine Learning Research [2]
   * Medical Image Analysis [1]
   * Machine Learning for Biomedical Imaging [13]
   * Pattern Recognition and Machine Intelligence [2]
   * Transactions on Medical Imaging [4]
-->
