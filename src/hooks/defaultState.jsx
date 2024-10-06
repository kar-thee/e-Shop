const defaultState = {
  categoriesArray: [
    {
      catName: "Vegetables",
      catImgUrl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6",
      inStock: 100,
      totalSold: 50,
      isActive: true,
      cid: "125cd144-0798-4372-9c33-1f0696044d7b",
    },
    {
      catName: "Fruits",
      catImgUrl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      inStock: 100,
      totalSold: 50,
      isActive: true,
      cid: "0db63371-876d-4fbc-935c-4354ca3dec4f",
    },
    {
      catName: "Electronics",
      catImgUrl:
        "https://www.ceiworldexpo.com/img/india-market-info/electronics.jpeg",
      inStock: 100,
      totalSold: 50,
      isActive: true,
      cid: "8b321b13-e9e9-4de8-ac24-27b97c720987",
    },
    {
      catName: "Fashion",
      catImgUrl:
        "https://cdn.shopify.com/s/files/1/0080/4844/3455/files/456.jpg?v=1640019095",
      inStock: 100,
      totalSold: 50,
      isActive: true,
      cid: "967c41a3-6788-403b-8be8-3cddc77de130",
    },
  ],
  productsArray: [
    {
      prodName: "Tomato",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "150",
      availableStock: 50,
      prodImgUrl:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg",
      category: "Vegetables",
      totalSold: 5,
      pid: "ae70c1e7-3ecd-4c5e-9b40-c283d03e953a",
    },
    {
      prodName: "Apple",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "350",
      availableStock: 50,
      prodImgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OPWQChUB0oD4_jhDQLgxXjJqZVnLTmzALw&s",
      category: "Fruits",
      totalSold: 5,
      pid: "16e3e213-53b7-40f8-a451-ab1b8dc7b804",
    },
    {
      prodName: "Television",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "100",
      availableStock: 50,
      prodImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cptvdisplay.jpg/1200px-Cptvdisplay.jpg",
      category: "Electronics",
      totalSold: 5,
      pid: "6d5e9f38-7455-4b68-89b8-7daaf1cf0c5b",
    },
    {
      prodName: "Ladys finger",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "50",
      availableStock: 50,
      prodImgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiG3TaaVlr-q0cJ8gsWYiKqWLJPphG3radjw&s",
      category: "Vegetables",
      totalSold: 5,
      pid: "f79530bc-8b53-4ecf-ae2e-24e48b6a5f99",
    },
    {
      prodName: "Potato",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "250",
      availableStock: 50,
      prodImgUrl:
        "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg",
      category: "Vegetables",
      totalSold: 5,
      pid: "c1d1e306-cdbb-4a3d-aacf-a03cb264832a",
    },
    {
      prodName: "Spinach",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "80",
      availableStock: 50,
      prodImgUrl:
        "https://www.rhs.org.uk/getmedia/743086ee-1ff9-448f-bf4c-69f911765cfa/spinach-Emilia3x2.jpg",
      category: "Vegetables",
      totalSold: 5,
      pid: "a141dd98-d227-4b05-a3a4-f6e390286e5b",
    },
    {
      prodName: "Orange",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "32",
      availableStock: 11,
      prodImgUrl:
        "https://www.health.com/thmb/m9S0Q8klaiVPouH-sFrfP5GaOrY=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/TypesOfOranges-f95153e786554ba5b6da0370387ee563.jpg",
      category: "Fruits",
      totalSold: 5,
      pid: "a3e5f72e-b4b8-4ad4-9caa-b043f3f515dc",
    },
    {
      prodName: "Banana",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "12",
      availableStock: 25,
      prodImgUrl: "https://treeplantation.com/images/articles/banana-tree.png",
      category: "Fruits",
      totalSold: 5,
      pid: "c6097b0e-d1aa-4d7c-9486-b0568e3873a2",
    },
    {
      prodName: "WaterMelon",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "60",
      availableStock: 55,
      prodImgUrl:
        "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1296838831.jpg?sfvrsn=3cfb930b_0",
      category: "Fruits",
      totalSold: 5,
      pid: "b326f80a-12c1-4fc8-8956-0650523071aa",
    },
    {
      prodName: "Grapes",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "190",
      availableStock: 45,
      prodImgUrl:
        "https://www.perfection.com.au/hubfs/Produce%20Close%20up%20or%20Styled/grapes-banner.jpg",
      category: "Fruits",
      totalSold: 5,
      pid: "8fc5b3b3-56d2-49a3-9b88-17a2c9e5772f",
    },
    {
      prodName: "PineApple",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "70",
      availableStock: 65,
      prodImgUrl:
        "https://www.proagrimedia.com/content/uploads/2023/03/vecteezy_pile-of-fresh-pineapples-for-sale-in-the-market_7061481_194-scaled.jpg",
      category: "Fruits",
      totalSold: 5,
      pid: "50acca65-f9a7-4a23-88af-33be3215e5f5",
    },
    {
      prodName: "Playstation 5",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "500",
      availableStock: 5,
      prodImgUrl:
        "https://assets.goal.com/images/v3/blt9033dcb9b28c66cc/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Electronics",
      totalSold: 5,
      pid: "e5c3b5e5-5752-45b9-b8b9-32538438576f",
    },
    {
      prodName: "Iphone",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "700",
      availableStock: 50,
      prodImgUrl:
        "https://www.techadvisor.com/wp-content/uploads/2024/09/Apple-iPhone-16-Apple-Intelligence-240909-8.jpg?quality=50&strip=all&w=1024",
      category: "Electronics",
      totalSold: 5,
      pid: "a6088e36-e7f2-4985-8d76-e2abe6943396",
    },
    {
      prodName: "Laptop",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      price: "1000",
      availableStock: 15,
      prodImgUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
      category: "Electronics",
      totalSold: 5,
      pid: "0db82d5a-a5bf-4a7f-9a66-8b5958800821",
    },
  ],
  inCart: [],
  placedOrders: [],
  snackBarState: false,
};

export default defaultState;
