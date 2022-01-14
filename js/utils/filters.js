const removeExpandFilters = () => {
	ingredientFilter.classList.remove("expand");
	applianceFilter.classList.remove("expand");
	ustensilFilter.classList.remove("expand");

	ingredientInput.placeholder = ingredientDefaultPlaceholder;
	applianceInput.placeholder = applianceDefaultPlaceholder;
	ustensilInput.placeholder = applianceDefaultPlaceholder;
};

const onFiltersEvent = (receipes) => {
	const { appliances, ingredients, ustensils } = filterReceipes(receipes);

	/**
	 *  Ingredients.
	 */
	const onClickIngredientsItems = () => {
		const ingredientItems = document.querySelectorAll(".filter__ing-item");

		ingredientItems.forEach((item) => {
			item.addEventListener("click", () => {
				if (!selectedIngredientFilters.includes(item.textContent.toLowerCase())) {
					selectedIngredientFilters.push(item.textContent.toLowerCase());
				}

				removeExpandFilters();
				createTags(receipes);
			});
		});
	};

	ingredientButton.addEventListener("click", () => {
		ingredientBody.innerHTML = "";

		ingredients.slice(0, 30).forEach((ing) => {
			const label = ing.charAt(0).toLocaleUpperCase() + ing.slice(1);
			const btn = createDom("button", label, {
				type: "button",
				class: "filter__ing-item",
			});

			ingredientBody.append(btn);
		});

		if (!ingredientFilter.classList.contains("expand")) {
			removeExpandFilters();

			ingredientFilter.classList.add("expand");
			ingredientInput.placeholder = ingredientOpenPlaceholder;
			ingredientInput.focus();
		} else {
			removeExpandFilters();
		}

		onClickIngredientsItems();
	});

	/**
	 *  Appliances.
	 */
	const onClickAppliancesItems = () => {
		const applianceItems = document.querySelectorAll(".filter__app-item");

		applianceItems.forEach((item) => {
			item.addEventListener("click", () => {
				if (!selectedApplianceFilters.includes(item.textContent.toLowerCase())) {
					selectedApplianceFilters.push(item.textContent.toLowerCase());
				}

				removeExpandFilters();

				createTags(receipes);
			});
		});
	};

	applianceButton.addEventListener("click", () => {
		applianceBody.innerHTML = "";

		appliances.slice(0, 30).forEach((appliance) => {
			const label = appliance.charAt(0).toLocaleUpperCase() + appliance.slice(1);
			const btn = createDom("button", label, {
				type: "button",
				class: "filter__app-item",
			});

			applianceBody.append(btn);
		});

		if (!applianceFilter.classList.contains("expand")) {
			removeExpandFilters();

			applianceFilter.classList.add("expand");
			applianceInput.placeholder = applianceOpenPlaceholder;
			applianceInput.focus();
		} else {
			removeExpandFilters();
		}

		onClickAppliancesItems();
	});

	/**
	 *  Ustensils.
	 */
	const onClickUstensilsItems = () => {
		const ustensilItems = document.querySelectorAll(".filter__ust-item");

		ustensilItems.forEach((item) => {
			item.addEventListener("click", () => {
				if (!selectedUstensilFilters.includes(item.textContent.toLowerCase())) {
					selectedUstensilFilters.push(item.textContent.toLowerCase());
				}

				removeExpandFilters();

				createTags(receipes);
			});
		});
	};

	ustensilButton.addEventListener("click", () => {
		ustensilBody.innerHTML = "";

		ustensils.slice(0, 30).forEach((ustensil) => {
			const label = ustensil.charAt(0).toLocaleUpperCase() + ustensil.slice(1);
			const btn = createDom("button", label, {
				type: "button",
				class: "filter__ust-item",
			});

			ustensilBody.append(btn);
		});

		if (!ustensilFilter.classList.contains("expand")) {
			removeExpandFilters();

			ustensilFilter.classList.add("expand");
			ustensilInput.placeholder = ustensilOpenPlaceholder;
			ustensilInput.focus();
		} else {
			removeExpandFilters();
		}

		onClickUstensilsItems();
	});
};
