const getReceipes = async () => {
	try {
		const datas = await fetch("./js/mocks/datas.json", {
			mode: "no-cors",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});

		return datas.json();
	} catch (e) {
		console.error("getReceipes: ", e);
	}
};

const filterReceipes = (receipes) => {
	let ingredients = [],
		appliances = [],
		ustensils = [];

	receipes.forEach((receipe) => {
		receipe.ingredients.forEach((ing) => {
			if (!ingredients.includes(ing.ingredient.toLowerCase())) {
				ingredients.push(ing.ingredient.toLowerCase());
			}
		});

		if (!appliances.includes(receipe.appliance.toLowerCase())) {
			appliances.push(receipe.appliance.toLowerCase());
		}

		receipe.ustensils.forEach((ustensil) => {
			if (!ustensils.includes(ustensil.toLowerCase())) {
				ustensils.push(ustensil.toLowerCase());
			}
		});
	});

	ingredients.sort();
	appliances.sort();
	ustensils.sort();

	return {
		ingredients,
		appliances,
		ustensils,
	};
};

const createCardReceipes = (receipes) => {
	cardsContainer.innerHTML = "";
	receipes.forEach((receipe) => {
		cardsContainer.append(new CardReceipes(receipe).display());
	});
};

const init = async () => {
	const { receipes } = await getReceipes();
	filterReceipes(receipes);
	onFiltersEvent(receipes);
	createCardReceipes(receipes);
};

init();
