import { create } from "zustand";

export const useWishlist = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  cart: [],

  toggleWishlist: (payload) =>
    set((state) => {
      const exist = state.wishlist.some((item) => item.id === payload.id);
      let store = [];
      if (exist) {
        // remove
        store = state.wishlist.filter((item) => item.id !== payload.id);
      } else {
        // add
        store = [...state.wishlist, payload];
      }
      localStorage.setItem("wishlist", JSON.stringify(store))
      return {wishlist: store}
    }),
}));
