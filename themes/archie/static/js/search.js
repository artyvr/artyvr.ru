document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  let searchData = [];

  localStorage.setItem('searchCache', JSON.stringify({
	data: searchData,
	timestamp: Date.now()
  }));

	// Проверяем при загрузке
  const cached = localStorage.getItem('searchCache');
  if (cached) {
	const { data, timestamp } = JSON.parse(cached);
	if (Date.now() - timestamp < 86400000) { // 24 часа
		searchData = data;
	}
  }

  fetch('/index.json')
    .then(res => res.json())
    .then(data => searchData = data);

   searchInput.addEventListener('input', debounce(search, 300));

  function search() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';
    
    if (query.length < 2) return;

    const results = searchData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    );

    displayResults(results, query);
  }

  function displayResults(results, query) {
    if (!results.length) {
      resultsContainer.innerHTML = '<p>Ничего не найдено</p>';
      return;
    }

    resultsContainer.innerHTML = results.map(item => `
      <div class="search-item">
        <h3><a href="${item.url}">${highlight(item.title, query)}</a></h3>
        <p>${highlight(item.content.substring(0, 150), query)}...</p>
      </div>
    `).join('');
  }

  function highlight(text, query) {
    return text.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
  }

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});