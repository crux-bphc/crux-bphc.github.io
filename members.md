---
layout: members-list
title: Members
---

{% for member in site.members %}

  <li class="list-group-item"><a href="{{member.url}}">{{member.title}}</a></li>
{% endfor %}
