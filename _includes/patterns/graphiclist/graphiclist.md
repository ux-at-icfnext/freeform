
<section class="usa-graphic-list usa-section usa-section--dark">
  <div class="grid-container">
    {% for graphic in page.graphics %}
      {% cycle '<div class="usa-graphic-list__row grid-row grid-gap">', '' %}
      <div class="usa-media-block tablet:grid-col">
        <img class="usa-media-block__img"  src="{{ graphic.image.src | relative_url }}" alt="{{ graphic.image.alt }}">
        <div class="usa-media-block__body">
          {% if graphic.title %}<h2 class="usa-graphic-list__heading">{{ graphic.title }}</h2>{% endif %}
          {{ graphic.description | markdownify }}
        </div>
      </div>
      {% cycle '', '</div>' %}
    {% endfor %}
  </div>
</section>