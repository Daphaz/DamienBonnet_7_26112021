const mainInputSearch = (receipes) => {
	mainInput.addEventListener('input', (e) => {
		if (e.target.value.length > 2) {
			cardsContainer.innerHTML = '';
			const query = e.target.value.toLowerCase();

			const results = receipes.filter((receipe) => {
				return (
					receipe.name.toLowerCase().startsWith(query) ||
					receipe.description.toLowerCase().includes(query) ||
					receipe.ingredients.some((ing) =>
						ing.ingredient.toLowerCase().includes(query)
					)
				);
			});

			if (
				!selectedIngredientFilters.length &&
				!selectedApplianceFilters.length &&
				!selectedUstensilFilters.length
			) {
				onFiltersCreateBody(results);
				createCardReceipes(results);
			} else {
				onResearchFilter(results);
			}

			if (!results.length) {
				cardsContainer.append(
					createDom(
						'div',
						`Aucune recette ne correspond à votre critère… vous pouvez
     chercher « tarte aux pommes », « poisson », etc.`,
						{ class: 'no__results' }
					)
				);
			}
		} else {
			cardsContainer.innerHTML = '';
			createCardReceipes(receipes);
		}
	});
};
