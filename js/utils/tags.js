const onResearchFilter = (receipes) => {
	const results = receipes.filter((receipe) => {
		// console.log(receipe);
	});
};

const createTags = (receipes) => {
	containerTags.innerHTML = "";
	const tags = [];

	if (selectedIngredientFilters.length > 0) {
		selectedIngredientFilters.forEach((item) => {
			tags.push(
				createDom(
					"div",
					{ class: "search__tag bg-blue" },
					createDom("p", item, { class: "search__label" }),
					createDom(
						"button",
						{ class: "search__btn", type: "button" },
						createDom("i", { class: "far fa-times-circle" })
					)
				)
			);
		});
	}

	if (selectedApplianceFilters.length > 0) {
		selectedApplianceFilters.forEach((item) => {
			tags.push(
				createDom(
					"div",
					{ class: "search__tag bg-green" },
					createDom("p", item, { class: "search__label" }),
					createDom(
						"button",
						{ class: "search__btn", type: "button" },
						createDom("i", { class: "far fa-times-circle" })
					)
				)
			);
		});
	}

	if (selectedUstensilFilters.length > 0) {
		selectedUstensilFilters.forEach((item) => {
			tags.push(
				createDom(
					"div",
					{ class: "search__tag bg-red" },
					createDom("p", item, { class: "search__label" }),
					createDom(
						"button",
						{ class: "search__btn", type: "button" },
						createDom("i", { class: "far fa-times-circle" })
					)
				)
			);
		});
	}

	containerTags.append(...tags);

	onResearchFilter(receipes);
};
