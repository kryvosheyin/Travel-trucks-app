export const selectFavorites = state => state.favorites.items;

export const selectIsFavorite = (state, id) =>
  state.favorites.items.some(camper => camper.id === id);
