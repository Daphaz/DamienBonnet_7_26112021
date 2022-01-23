const mainInputSearch = (receipes) => {
	mainInput.addEventListener('input', (e) => {
		if (e.target.value.length > 2) {
			const results = [];
			cardsContainer.innerHTML = '';
			const query = e.target.value.toLowerCase();

			for (let i = 0; i < receipes.length; i++) {
				const { name, ingredients, appliance, ustensils, description } =
					receipes[i];
				const includesInName = name.toLowerCase().includes(query);
				const includesInDescription = description.toLowerCase().includes(query);
				const includesInAppliance = appliance.toLowerCase().includes(query);
				let includesInIngredients = false;
				let includesInUstensils = false;

				for (let j = 0; j < ingredients.length; j++) {
					const element = ingredients[j];
					if (element.ingredient.toLowerCase().includes(query)) {
						includesInIngredients = true;
						break;
					}
				}

				for (let k = 0; k < ustensils.length; k++) {
					const element = ustensils[k];
					if (element.toLowerCase().includes(query)) {
						includesInUstensils = true;
						break;
					}
				}

				if (
					includesInName ||
					includesInDescription ||
					includesInIngredients ||
					includesInAppliance ||
					includesInUstensils
				) {
					results.push(receipes[i]);
				}
			}

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
