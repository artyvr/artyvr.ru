const GetPostsJSON = async () => 
{
	let response = await fetch('/index.json')
	let data = await response.json()
	return data
}

const FilterPostsJSON = (query, element) => 
{
	let result, itemsWithElement;
	query = new RegExp(query, 'ig')
	dataJSON = GetPostsJSON()
	result = dataJSON.filter(item => query.test(item.title) | query.test(item.plain))

	itemsWithElement = result.map(item => (
		`<div class="search-result-item">
			<a href="${item.url}">
				${item.parent} / ${item.title}
				<span class="icon">
					<i class="fas fa-external-link-alt"></i>
				</span>
			</a>
		</div>`
	))

	element.style.display = 'block';
	element.innerHTML = itemsWithElement.join('');
}

const searchInputAction = (event, callback) => 
{
	searchInput.addEventListener(event, callback)
}

searchInputAction('focus', () => GetPostsJSON().then(data => dataJSON = data))
searchInputAction('keyup', (event) => FilterPostsJSON(event.target.value, searchResult))