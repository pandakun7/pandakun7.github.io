---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

こんにちは。ここはPandakunの個人サイトです。プログラミング言語「Scratch (スクラッチ)」で制作したプロジェクトを紹介しています。過去作から順に紹介ページを作成しています。最近のプロジェクトはScratchサイトを見てください。Tipやチュートリアル、素材データを公開する予定です。

## Scratchプロジェクト集

{% assign works = site.data.works | sort: "date" | reverse %}
<div class="works-grid">
  {% for w in works %}
    <article class="work-card">
      <a href="/{{ w.permalink }}/">
        <div class="work-thumb">
          <img src="{{ w.image | relative_url }}" alt="{{ w.title }}">
        </div>
        <div class="work-body">
          <p class="work-meta">{{ w.date | date: "%Y-%m-%d" }} ・ {{ w.category }}</p>
          <h3 class="work-title">{{ w.title }}</h3>
        </div>
      </a>
    </article>
  {% endfor %}
</div>