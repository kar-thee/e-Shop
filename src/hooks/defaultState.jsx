const defaultState = {
  categoriesArray: [
    {
      catName: "Vegetables",
      catImgUrl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
      inStock: 100,
      totalSold: 50,
      isActive: true,
    },
    {
      catName: "Fruits",
      catImgUrl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
      inStock: 100,
      totalSold: 50,
      isActive: true,
    },
    {
      catName: "Electronics",
      catImgUrl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
      inStock: 100,
      totalSold: 50,
      isActive: true,
    },
  ],
  productsArray: [
    {
      prodName: "Tomato",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "150",
      availableStock: "50",
      prodImgUrl:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
      category: "Vegetables",
      totalSold: 5,
    },
    {
      prodName: "Apple",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "350",
      availableStock: "50",
      prodImgUrl:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
      category: "Electronics",
      totalSold: 5,
    },
    {
      prodName: "Television",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "100",
      availableStock: "50",
      prodImgUrl:
        "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
      category: "Fruits",
      totalSold: 5,
    },
  ],
  inCart: [],
  placedOrders: [],
};

export default defaultState;
