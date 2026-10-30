const publicationForm = document.querySelector('.publication-filters');
if (publicationForm) {
  const publications = [...document.querySelectorAll('.publication')];
  const search = document.querySelector('#pub-search');
  const year = document.querySelector('#pub-year');
  const type = document.querySelector('#pub-type');
  const theme = document.querySelector('#pub-theme');
  const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const texts = new Map(publications.map(paper => [paper, normalize(paper.textContent)]));
  const filter = () => {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    for (const paper of publications) {
      paper.hidden = !terms.every(term => texts.get(paper).includes(term)) ||
        (year.value && paper.dataset.year !== year.value) ||
        (type.value && paper.dataset.type !== type.value) ||
        (theme.value && paper.dataset.theme !== theme.value);
    }
    for (const section of document.querySelectorAll('.publication-year')) {
      section.hidden = ![...section.querySelectorAll('.publication')].some(paper => !paper.hidden);
    }
    const count = publications.filter(paper => !paper.hidden).length;
    document.querySelector('#pub-count').textContent = document.documentElement.lang === 'zh-Hans'
      ? `显示 ${count} / ${publications.length} 篇论文`
      : `Showing ${count} of ${publications.length} records`;
    document.querySelector('#pub-empty').hidden = count !== 0;
  };
  publicationForm.hidden = false;
  publicationForm.addEventListener('submit', event => event.preventDefault());
  publicationForm.addEventListener('input', filter);
  publicationForm.addEventListener('change', filter);
  publicationForm.addEventListener('reset', () => setTimeout(filter, 0));
  document.addEventListener('site-language-change', filter);
}
