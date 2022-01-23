const removeExpandFilters = () => {
	ingredientFilter.classList.remove('expand');
	applianceFilter.classList.remove('expand');
	ustensilFilter.classList.remove('expand');

	ingredientInput.placeholder = ingredientDefaultPlaceholder;
	applianceInput.placeholder = applianceDefaultPlaceholder;
	ustensilInput.placeholder = ustensilDefaultPlaceholder;
};

const onFilterBtnEvent = () => {
	ingredientButton.addEventListener('click', () => {
		if (ingredientFilter.classList.contains('expand')) {
			removeExpandFilters();
		} else {
			removeExpandFilters();
			ingredientFilter.classList.add('expand');
			ingredientInput.placeholder = ingredientOpenPlaceholder;
			ingredientInput.focus();
		}
	});
	applianceButton.addEventListener('click', () => {
		if (applianceFilter.classList.contains('expand')) {
			removeExpandFilters();
		} else {
			removeExpandFilters();
			applianceFilter.classList.add('expand');
			applianceInput.placeholder = applianceOpenPlaceholder;
			applianceInput.focus();
		}
	});
	ustensilButton.addEventListener('click', () => {
		if (ustensilFilter.classList.contains('expand')) {
			removeExpandFilters();
		} else {
			removeExpandFilters();
			ustensilFilter.classList.add('expand');
			ustensilInput.placeholder = ustensilOpenPlaceholder;
			ustensilInput.focus();
		}
	});
};

const onFilterInputEvent = (type, searches, receipes) => {
	switch (type) {
		case 'ingredient':
			ingredientInput.addEventListener('input', (e) => {
				ingredientBody.innerHTML = '';
				if (e.target.value.length > 2) {
					const query = e.target.value.toLowerCase();
					const results = searches.filter((ing) => {
						return ing.toLowerCase().includes(query);
					});

					results.slice(0, 30).forEach((item) => {
						const label = formatedStr(item);
						const btn = createDom('button', label, {
							type: 'button',
							class: 'filter__ing-item',
						});

						btn.addEventListener('click', () => {
							if (!selectedIngredientFilters.includes(label.toLowerCase())) {
								selectedIngredientFilters.push(label.toLowerCase());
							}

							e.target.value = '';
							removeExpandFilters();
							createTags(receipes);
						});

						if (!selectedIngredientFilters.includes(label.toLowerCase())) {
							ingredientBody.append(btn);
						}
					});
				}
			});
			break;
		case 'appliance':
			applianceInput.addEventListener('input', (e) => {
				applianceBody.innerHTML = '';
				if (e.target.value.length > 2) {
					const query = e.target.value.toLowerCase();
					const results = searches.filter((ing) => {
						return ing.toLowerCase().includes(query);
					});

					results.slice(0, 30).forEach((item) => {
						const label = formatedStr(item);
						const btn = createDom('button', label, {
							type: 'button',
							class: 'filter__app-item',
						});

						btn.addEventListener('click', () => {
							if (!selectedApplianceFilters.includes(label.toLowerCase())) {
								selectedApplianceFilters.push(label.toLowerCase());
							}

							e.target.value = '';
							removeExpandFilters();
							createTags(receipes);
						});

						if (!selectedApplianceFilters.includes(label.toLowerCase())) {
							applianceBody.append(btn);
						}
					});
				}
			});
			break;
		case 'ustensil':
			ustensilInput.addEventListener('input', (e) => {
				ustensilBody.innerHTML = '';
				if (e.target.value.length > 2) {
					const query = e.target.value.toLowerCase();
					const results = searches.filter((ing) => {
						return ing.toLowerCase().includes(query);
					});

					results.slice(0, 30).forEach((item) => {
						const label = formatedStr(item);
						const btn = createDom('button', label, {
							type: 'button',
							class: 'filter__ing-item',
						});

						btn.addEventListener('click', () => {
							if (!selectedUstensilFilters.includes(label.toLowerCase())) {
								selectedUstensilFilters.push(label.toLowerCase());
							}

							e.target.value = '';
							removeExpandFilters();
							createTags(receipes);
						});

						if (!selectedUstensilFilters.includes(label.toLowerCase())) {
							ustensilBody.append(btn);
						}
					});
				}
			});
			break;

		default:
			break;
	}
};

const onFiltersCreateBody = (receipes) => {
	const { appliances, ingredients, ustensils } = filterReceipes(receipes);

	/**
	 *  Ingredients.
	 */
	ingredientBody.innerHTML = '';

	ingredients.slice(0, 30).forEach((ing) => {
		const label = formatedStr(ing);
		const btn = createDom('button', label, {
			type: 'button',
			class: 'filter__ust-item',
		});

		btn.addEventListener('click', () => {
			if (!selectedIngredientFilters.includes(label.toLowerCase())) {
				selectedIngredientFilters.push(label.toLowerCase());
			}

			removeExpandFilters();
			createTags(receipes);
		});

		if (!selectedIngredientFilters.includes(label.toLowerCase())) {
			ingredientBody.append(btn);
		}
	});

	onFilterInputEvent('ingredient', ingredients, receipes);

	/**
	 *  Appliances.
	 */
	applianceBody.innerHTML = '';

	appliances.slice(0, 30).forEach((appliance) => {
		const label = formatedStr(appliance);
		const btn = createDom('button', label, {
			type: 'button',
			class: 'filter__app-item',
		});

		btn.addEventListener('click', () => {
			if (!selectedApplianceFilters.includes(label.toLowerCase())) {
				selectedApplianceFilters.push(label.toLowerCase());
			}

			removeExpandFilters();

			createTags(receipes);
		});

		if (!selectedApplianceFilters.includes(label.toLowerCase())) {
			applianceBody.append(btn);
		}
	});

	onFilterInputEvent('appliance', appliances, receipes);

	/**
	 *  Ustensils.
	 */
	ustensilBody.innerHTML = '';

	ustensils.slice(0, 30).forEach((ustensil) => {
		const label = formatedStr(ustensil);
		const btn = createDom('button', label, {
			type: 'button',
			class: 'filter__ust-item',
		});

		btn.addEventListener('click', () => {
			if (!selectedUstensilFilters.includes(label.toLowerCase())) {
				selectedUstensilFilters.push(label.toLowerCase());
			}

			removeExpandFilters();
			createTags(receipes);
		});

		if (!selectedUstensilFilters.includes(label.toLowerCase())) {
			ustensilBody.append(btn);
		}
	});

	onFilterInputEvent('ustensil', ustensils, receipes);
};
