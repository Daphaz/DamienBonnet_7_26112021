const onFiltersEvent = (receipes) => {
	const { appliances, ingredients, ustensils } = filterReceipes(receipes);

	/**
	 *  Ingredients.
	 */
	ingredientButton.addEventListener("click", () => {
		ingredientBody.innerHTML = "";

		ingredients.slice(0, 30).forEach((ing) => {});

		ingredientFilter.classList.toggle("expand");
	});
};
