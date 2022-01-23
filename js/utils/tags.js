const onResearchFilter = (receipes) => {
	const filters = [...document.querySelectorAll('.search__tag')];

	const results = receipes.filter((receipe) => {
		return filters.every((item) => {
			const label = item
				.querySelector('.search__label')
				.textContent.toLowerCase();
			return (
				receipe.ingredients.some((i) => {
					return i.ingredient.toLowerCase().includes(label);
				}) ||
				receipe.appliance.toLowerCase().includes(label) ||
				receipe.ustensils.some((ustensil) => {
					return ustensil.toLowerCase() === label;
				})
			);
		});
	});

	if (results.length) {
		cardsContainer.innerHTML = '';
		createCardReceipes(results);
		onEventFilterTag(filters, results);
	} else {
		onEventFilterTag(filters, results);
		cardsContainer.innerHTML = '';
		cardsContainer.append(
			createDom(
				'div',
				`Aucune recette ne correspond à votre critère… vous pouvez
		chercher « tarte aux pommes », « poisson », etc.`,
				{ class: 'no__results' }
			)
		);
	}
};

const onEventFilterTag = (filters, receipes) => {
	onFiltersCreateBody(receipes);

	filters.forEach((filter) => {
		filter.addEventListener('click', () => {
			removeFilter(filter);
		});
	});
};

const removeFilter = async (selectedFilter) => {
	const filterType = selectedFilter.className.split(' ')[1];
	const filterLabel = selectedFilter.textContent.toLowerCase();
	selectedFilter.remove();

	switch (filterType) {
		case 'bg-blue':
			selectedIngredientFilters = selectedIngredientFilters.filter(
				(val) => val !== filterLabel
			);
			break;
		case 'bg-green':
			selectedApplianceFilters = selectedApplianceFilters.filter(
				(val) => val !== filterLabel
			);
			break;
		case 'bg-red':
			selectedUstensilFilters = selectedUstensilFilters.filter(
				(val) => val !== filterLabel
			);
			break;

		default:
			break;
	}

	const { receipes: defaultReceipes } = await getReceipes();
	onResearchFilter(defaultReceipes);
};

const createTags = (receipes) => {
	containerTags.innerHTML = '';
	const tags = [];

	if (selectedIngredientFilters.length > 0) {
		selectedIngredientFilters.forEach((item) => {
			const formatedString = formatedStr(item);
			tags.push(
				createDom(
					'div',
					{ class: 'search__tag bg-blue' },
					createDom('p', formatedString, { class: 'search__label' }),
					createDom(
						'button',
						{ class: 'search__btn', type: 'button' },
						createDom('i', { class: 'far fa-times-circle' })
					)
				)
			);
		});
	}

	if (selectedApplianceFilters.length > 0) {
		selectedApplianceFilters.forEach((item) => {
			const formatedString = formatedStr(item);
			tags.push(
				createDom(
					'div',
					{ class: 'search__tag bg-green' },
					createDom('p', formatedString, { class: 'search__label' }),
					createDom(
						'button',
						{ class: 'search__btn', type: 'button' },
						createDom('i', { class: 'far fa-times-circle' })
					)
				)
			);
		});
	}

	if (selectedUstensilFilters.length > 0) {
		selectedUstensilFilters.forEach((item) => {
			const formatedString = formatedStr(item);
			tags.push(
				createDom(
					'div',
					{ class: 'search__tag bg-red' },
					createDom('p', formatedString, { class: 'search__label' }),
					createDom(
						'button',
						{ class: 'search__btn', type: 'button' },
						createDom('i', { class: 'far fa-times-circle' })
					)
				)
			);
		});
	}

	containerTags.append(...tags);

	onResearchFilter(receipes);
};
