---

---
# Hello World

### Patterns
{% for page in site.pages %}
    {% if page.category == "pattern" %}
        <p><a href="{{ page.url }}" style="color:{{ site.data.colors.link }}">{{ page.title }}</a></p>
    {% endif %}
{% endfor %}