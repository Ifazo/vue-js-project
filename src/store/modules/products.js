import { createStore } from "vuex";

const productsStore = createStore({
  state: {
    products: [
      {
        id: "p1",
        image:
          "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png",
        title: "Book Collection",
        description:
          "A collection of must-read books. All-time classics included!",
      },
      {
        id: "p2",
        image:
          "https://cdn.pixabay.com/photo/2017/03/05/20/38/arrangement-2124081_960_720.jpg",
        title: "Flower Collection",
        description: "A collection of beautiful flowers.",
      },
      {
        id: "p3",
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        title: "Tree Collection",
        description: "A collection of beautiful trees from around the world.",
      },
      {
        id: "p4",
        image:
          "https://cdn.pixabay.com/photo/2016/10/25/13/55/ice-cream-1769512_960_720.jpg",
        title: "Ice Cream Collection",
        description: "A collection of delicious ice creams.",
      },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
});

export default productsStore;