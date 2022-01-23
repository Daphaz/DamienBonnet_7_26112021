/**
 *  Selected Filters
 */
let selectedIngredientFilters = [];
let selectedApplianceFilters = [];
let selectedUstensilFilters = [];

/**
 * Cards
 */
const cardsContainer = document.querySelector('.cards');

/**
 *  Header
 */
const mainInput = document.getElementById('search');

/**
 *  Tags
 */
const containerTags = document.querySelector('.search');

/**
 *  Filters
 */
// ingredients.
const ingredientFilter = document.getElementById('ingredientsFilter');
const ingredientInput = document.getElementById('ingredients');
const ingredientDefaultPlaceholder = 'Ingrédients';
const ingredientOpenPlaceholder = 'Rechercher un ingrédients';
const ingredientButton = document.getElementById('ingredientsBtn');
const ingredientBody = document.getElementById('ingredientsBody');
// appliances.
const applianceFilter = document.getElementById('appliancesFilter');
const applianceInput = document.getElementById('appliances');
const applianceDefaultPlaceholder = 'Appareil';
const applianceOpenPlaceholder = 'Rechercher un appareil';
const applianceButton = document.getElementById('appliancesBtn');
const applianceBody = document.getElementById('appliancesBody');
// ustensils.
const ustensilFilter = document.getElementById('ustensilsFilter');
const ustensilInput = document.getElementById('ustensils');
const ustensilDefaultPlaceholder = 'Ustensiles';
const ustensilOpenPlaceholder = 'Rechercher un ustensiles';
const ustensilButton = document.getElementById('ustensilsBtn');
const ustensilBody = document.getElementById('ustensilsBody');
