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
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      inStock: 100,
      totalSold: 50,
      isActive: true,
    },
    {
      catName: "Electronics",
      catImgUrl:
        "https://www.ceiworldexpo.com/img/india-market-info/electronics.jpeg",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OPWQChUB0oD4_jhDQLgxXjJqZVnLTmzALw&s",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "Television",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "100",
      availableStock: "50",
      prodImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cptvdisplay.jpg/1200px-Cptvdisplay.jpg",
      category: "Electronics",
      totalSold: 5,
    },
    {
      prodName: "Ladys finger",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "50",
      availableStock: "50",
      prodImgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiG3TaaVlr-q0cJ8gsWYiKqWLJPphG3radjw&s",
      category: "Vegetables",
      totalSold: 5,
    },
    {
      prodName: "Potato",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "250",
      availableStock: "50",
      prodImgUrl:
        "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg",
      category: "Vegetables",
      totalSold: 5,
    },
    {
      prodName: "Spinach",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "80",
      availableStock: "50",
      prodImgUrl:
        "https://www.rhs.org.uk/getmedia/743086ee-1ff9-448f-bf4c-69f911765cfa/spinach-Emilia3x2.jpg",
      category: "Vegetables",
      totalSold: 5,
    },
  ],
  inCart: [],
  placedOrders: [],
};

export default defaultState;
