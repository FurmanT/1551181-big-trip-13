import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createTripInfoTemplate} from "./view/trip-info.js";
import {createContainerListTemplate} from "./view/container-list.js";
import {createPointEditTemplate} from "./view/point-edit";
import {createPointTemplate} from "./view/point.js";
import {createPointAddTemplate} from "./view/point-add.js";

const POINT_COUNT = 3;
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Форма создания;

const siteMainElement = document.querySelector(`.page-main`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);
const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMenuElement = tripMainElement.querySelector(`.trip-controls`);
const menuHeaderElement = siteMenuElement.firstElementChild;
const filterHeaderElement = siteMenuElement.lastElementChild;

render(menuHeaderElement, createSiteMenuTemplate(), `afterend`);
render(filterHeaderElement, createFilterTemplate(), `afterend`);
render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
render(tripEventsElement, createSortTemplate(), `beforeend`);
render(tripEventsElement, createContainerListTemplate(), `beforeend`);

const tripListElement = tripEventsElement.querySelector(`.trip-events__list`);
render(tripListElement, createPointEditTemplate(), `afterbegin`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripListElement, createPointTemplate(), `beforeend`);
}

render(tripListElement, createPointAddTemplate(), `beforeend`);
