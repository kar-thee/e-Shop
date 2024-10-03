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
    {
      catName: "Fashion",
      catImgUrl:
        "https://cdn.shopify.com/s/files/1/0080/4844/3455/files/456.jpg?v=1640019095",
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
        "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg",
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
    {
      prodName: "Orange",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "32",
      availableStock: "25",
      prodImgUrl:
        "https://www.health.com/thmb/m9S0Q8klaiVPouH-sFrfP5GaOrY=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/TypesOfOranges-f95153e786554ba5b6da0370387ee563.jpg",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "Banana",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "12",
      availableStock: "25",
      prodImgUrl: "https://treeplantation.com/images/articles/banana-tree.png",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "WaterMelon",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "60",
      availableStock: "55",
      prodImgUrl:
        "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1296838831.jpg?sfvrsn=3cfb930b_0",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "Grapes",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "190",
      availableStock: "45",
      prodImgUrl:
        "https://www.perfection.com.au/hubfs/Produce%20Close%20up%20or%20Styled/grapes-banner.jpg",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "PineApple",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "70",
      availableStock: "65",
      prodImgUrl:
        "https://www.proagrimedia.com/content/uploads/2023/03/vecteezy_pile-of-fresh-pineapples-for-sale-in-the-market_7061481_194-scaled.jpg",
      category: "Fruits",
      totalSold: 5,
    },
    {
      prodName: "Playstation 5",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "500",
      availableStock: "20",
      prodImgUrl:
        "https://assets.goal.com/images/v3/blt9033dcb9b28c66cc/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Electronics",
      totalSold: 5,
    },
    {
      prodName: "Iphone",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "700",
      availableStock: "50",
      prodImgUrl:
        "https://www.techadvisor.com/wp-content/uploads/2024/09/Apple-iPhone-16-Apple-Intelligence-240909-8.jpg?quality=50&strip=all&w=1024",
      category: "Electronics",
      totalSold: 5,
    },
    {
      prodName: "Laptop",
      prodDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price: "1000",
      availableStock: "50",
      prodImgUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
      category: "Electronics",
      totalSold: 5,
    },
  ],
  inCart: [],
  placedOrders: [],
};

export default defaultState;
