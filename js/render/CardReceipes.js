class CardReceipes {
	constructor({
		id,
		name,
		servings,
		ingredients,
		time,
		description,
		appliance,
		ustensils,
	}) {
		this.id = id;
		this.name = name;
		this.servings = servings;
		this.ingredients = ingredients;
		this.time = time;
		this.description = description;
		this.appliance = appliance;
		this.ustensils = ustensils;
	}

	display() {
		const element = createDom(
			"div",
			{ class: "cards__item" },
			createDom("div", { class: "cards__item__header" }),
			createDom(
				"div",
				{ class: "cards__item__body" },
				createDom(
					"div",
					{ class: "cards__item__body__head" },
					createDom("h3", this.name),
					createDom(
						"span",
						createDom("i", { class: "far fa-clock" }),
						createDom("strong", `${this.time} min`)
					)
				),
				createDom(
					"div",
					{ class: "cards__item__body__wrap" },
					createDom(
						"ul",
						{ class: "cards__item__body__col" },
						...this.ingredients.map((item) =>
							createDom(
								"li",
								createDom("strong", item.ingredient),
								` ${item.quantity} ${item.unit || ""}`
							)
						)
					),
					createDom(
						"p",
						{ class: "cards__item__body__col" },
						`${
							this.description.length > 199
								? this.description.slice(0, 199) + "..."
								: this.description
						}`
					)
				)
			)
		);

		return element;
	}
}
