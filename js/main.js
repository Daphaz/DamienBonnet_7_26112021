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
		ingredients = [
			...new Set([...ingredients, receipe.ingredients.map((i) => i.ingredient)]),
		];
		appliances = [...new Set([...appliances, receipe.appliance])];
		ustensils = [...new Set([...ustensils, receipe.ustensils.map((u) => u)])];
	});

	return {
		ingredients,
		appliances,
		ustensils,
	};
};

const init = async () => {
	const { receipes } = await getReceipes();
	filterReceipes(receipes);
	onFiltersEvent(receipes);
};

init();
