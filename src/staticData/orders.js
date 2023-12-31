const orders = [
  {
    cart: [
      {
        price: 10,
        discount: 10,
        tag: ["Fruit", "Mangoes"],
        title: "Mangoes",
        slug: "mangoes",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/P9LTCPS/1-b.jpg",
        originalPrice: 11,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5936",
        itemTotal: 10,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/0ZnXMJT/2.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 7,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Meat", "Chicken"],
        title: "Chicken Brest",
        slug: "chicken-brest",
        parent: "Fish & Meat",
        children: "Meat",
        image: "https://i.ibb.co/RSwfbWM/2-b.jpg",
        originalPrice: 10,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5929",
        itemTotal: 7,
      },
      {
        price: 13,
        discount: 0,
        tag: ["Vegetable", "Celery Sticks"],
        title: "Celery Sticks",
        slug: "celery-sticks",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/RSwfbWM/2-b.jpg",
        originalPrice: 13,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593c",
        itemTotal: 13,
      },
      {
        price: 17,
        discount: 0,
        tag: ["Fruit", "Clemens Tines"],
        title: "Clemens Tines",
        slug: "clemens-tines",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/8rhmZ5b/3.jpg",
        originalPrice: 17,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5934",
        itemTotal: 17,
      },
      {
        price: 9,
        discount: 10,
        tag: ["Fish", "Sword Fish"],
        title: "Sword Fish",
        slug: "sword-fish",
        parent: "Fish & Meat",
        children: "Fish",
        image: "https://i.ibb.co/ZL1zCW7/3-b.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5930",
        itemTotal: 9,
      },
      {
        price: 10,
        discount: 0,
        tag: ["Meat", "Sliced Turkey Breast"],
        title: "Sliced Turkey Breast",
        slug: "sliced-turkey-breast",
        parent: "Fish & Meat",
        children: "Meat",
        image: "https://i.ibb.co/0DXSdbb/4.jpg",
        originalPrice: 10,
        unit: "1.5kg",
        quantity: 47,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae592b",
        itemTotal: 470,
      },
    ],
    shippingCost: 5,
    discount: 0,
    name: "James J. Allen",
    address: "705 Pine Barren Rd, Pooler, GA, 31322 ",
    contact: "818-356-8600",
    email: "james@gmail.com",
    city: "GA",
    country: "US",
    zipCode: "31322",
    shippingOption: "UPS",
    paymentMethod: "COD",
    status: "Processing",
    subTotal: 533,
    total: 484.2,
    user: "61531a4f1c38473378ab0828",
    date: "11 Jan, 2022",
  },
  {
    cart: [
      {
        price: 9,
        discount: 10,
        tag: ["Fish", "Sword Fish"],
        title: "Sword Fish",
        slug: "sword-fish",
        parent: "Fish & Meat",
        children: "Fish",
        image: "https://i.ibb.co/DGN025D/4-b.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 55,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5930",
        itemTotal: 495,
      },
    ],
    shippingCost: 10,
    discount: 0,
    name: "James",
    address: "705 Pine Barren Rd, Pooler, GA, 31322 ",
    contact: "818-356-8600",
    email: "james@gmail.com",
    city: "GA",
    country: "US",
    zipCode: "31322 ",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 495,
    total: 454.5,
    user: "61531a4f1c38473378ab0828",
    date: "12 Jan, 2022",
  },
  {
    cart: [
      {
        price: 10,
        discount: 0,
        tag: ["Meat", "Sliced Turkey Breast"],
        title: "Sliced Turkey Breast",
        slug: "sliced-turkey-breast",
        parent: "Fish & Meat",
        children: "Meat",
        image: "https://i.ibb.co/KsYjVLJ/5.jpg",
        originalPrice: 10,
        unit: "1.5kg",
        quantity: 4,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae592b",
        itemTotal: 40,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/xG7VN1J/5-b.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 7,
      },
    ],
    shippingCost: 5,
    discount: 0,
    name: "James J. Allen",
    address: "705 Pine Barren Rd, Pooler, GA, 31322 ",
    contact: "818-356-8600",
    email: "james@gmail.com",
    city: "GA",
    country: "US",
    zipCode: "31322 ",
    shippingOption: "UPS",
    paymentMethod: "COD",
    status: "Cancel",
    subTotal: 47,
    total: 52,
    user: "61531a4f1c38473378ab0829",
    date: "11 Jan, 2022",
  },
  {
    cart: [
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/gmPJX6Z/6-b.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 7,
      },
    ],
    shippingCost: 5,
    discount: 0,
    name: "James",
    address: "705 Pine Barren Rd, Pooler, GA, 31322 ",
    contact: "818-356-8600",
    email: "james@gmail.com",
    city: "GA",
    country: "US",
    zipCode: "31322 ",
    shippingOption: "UPS",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 7,
    total: 12,
    user: "61531a4f1c38473378ab0830",
    date: "11 Jan, 2022",
  },
  {
    cart: [
      {
        price: 15,
        discount: 0,
        tag: ["Vegetable", "Veggie Platter"],
        title: "Veggie Platter",
        slug: "veggie-platter",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/Qp21sty/7.jpg",
        originalPrice: 15,
        unit: "1.5kg",
        quantity: 7,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965354781e22f8ae5944",
        itemTotal: 105,
      },
      {
        price: 15,
        discount: 0,
        tag: ["Vegetable", "Cucumber"],
        title: "Cucumber",
        slug: "cucumber",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/s9NxJZK/8.jpg",
        originalPrice: 15,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593e",
        itemTotal: 15,
      },
    ],
    shippingCost: 10,
    discount: 0,
    name: "Aurora E. Amerson",
    address: "2402 Overlook Dr, Selma, AL, 36703",
    contact: "660-515-7629",
    email: "aurora@gmail.com",
    city: "AL",
    country: "US",
    zipCode: "36703",
    shippingOption: "UPS",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 120,
    total: 130,
    user: "61531a4f1c38473378ab0831",
    date: "11 Fav, 2022",
  },
  {
    cart: [
      {
        price: 19,
        discount: 10,
        tag: ["Fruit", "Strawberry"],
        title: "Strawberry",
        slug: "strawberry",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/YfqDF23/9.jpg",
        originalPrice: 20,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5939",
        itemTotal: 19,
      },
      {
        price: 12,
        discount: 0,
        tag: ["Fruit", "Red Cherries"],
        title: "Red Cherries",
        slug: "red-cherries",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/Mp1790Q/10.jpg",
        originalPrice: 12,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5938",
        itemTotal: 12,
      },
      {
        price: 15,
        discount: 0,
        tag: ["Vegetable", "Cucumber"],
        title: "Cucumber",
        slug: "cucumber",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/g6WT1b2/11.jpg",
        originalPrice: 15,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593e",
        itemTotal: 15,
      },
      {
        price: 17,
        discount: 0,
        tag: ["Fruit", "Clemens Tines"],
        title: "Clemens Tines",
        slug: "clemens-tines",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/7jHtYQQ/12.jpg",
        originalPrice: 17,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5934",
        itemTotal: 17,
      },
    ],
    shippingCost: 10,
    discount: 0,
    name: "Aurora",
    address: "2402 Overlook Dr, Selma, AL, 36703",
    contact: "660-515-7629",
    email: "aurora@gmail.com",
    city: "AL",
    country: "US",
    zipCode: "36703",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Processing",
    subTotal: 63,
    total: 73,
    user: "61531a4f1c38473378ab0832",
    date: "15 Fav, 2022",
  },
  {
    cart: [
      {
        price: 10,
        discount: 0,
        tag: ["Meat", "Sliced Turkey Breast"],
        title: "Sliced Turkey Breast",
        slug: "sliced-turkey-breast",
        parent: "Fish & Meat",
        children: "Meat",
        image: "https://i.ibb.co/j892ZQs/13.jpg",
        originalPrice: 10,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae592b",
        itemTotal: 10,
      },
      {
        price: 13,
        discount: 0,
        tag: ["Vegetable", "Celery Sticks"],
        title: "Celery Sticks",
        slug: "celery-sticks",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/6vjkVDM/14.jpg",
        originalPrice: 13,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593c",
        itemTotal: 13,
      },
      {
        price: 10,
        discount: 10,
        tag: ["Fruit", "Mangoes"],
        title: "Mangoes",
        slug: "mangoes",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/HP5fF01/15.jpg",
        originalPrice: 11,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5936",
        itemTotal: 10,
      },
    ],
    shippingCost: 10,
    discount: 0,
    name: "Aurora E. Amerson",
    address: "2402 Overlook Dr, Selma, AL, 36703",
    contact: "660-515-7629",
    email: "aurora@gmail.com",
    city: "AL",
    country: "US",
    zipCode: "36703",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 33,
    total: 43,
    user: "61531a4f1c38473378ab0833",
    date: "15 Fav, 2022",
  },
  {
    cart: [
      {
        price: 10,
        discount: 10,
        tag: ["Fruit", "Mangoes"],
        title: "Mangoes",
        slug: "mangoes",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/9cwggjd/17.jpg",
        originalPrice: 11,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5936",
        itemTotal: 10,
      },
      {
        price: 13,
        discount: 0,
        tag: ["Vegetable", "Celery Sticks"],
        title: "Celery Sticks",
        slug: "celery-sticks",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/sp4kSMc/18.jpg",
        originalPrice: 13,
        unit: "1kg",
        quantity: 17,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593c",
        itemTotal: 221,
      },
      {
        price: 10,
        discount: 0,
        tag: ["Meat", "Sliced Turkey Breast"],
        title: "Sliced Turkey Breast",
        slug: "sliced-turkey-breast",
        parent: "Fish & Meat",
        children: "Meat",
        image: "https://i.ibb.co/w4Hdx3H/19.jpg",
        originalPrice: 10,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae592b",
        itemTotal: 10,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/vhx6Tng/20.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 14,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 98,
      },
      {
        price: 20,
        discount: 0,
        tag: ["Fruit", "Apple"],
        title: "Apple",
        slug: "apple",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/SJNhrN3/21.jpg",
        originalPrice: 20,
        unit: "1.2kg",
        quantity: 17,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5932",
        itemTotal: 340,
      },
      {
        price: 15,
        discount: 6.25,
        tag: ["pet care", "grain_free"],
        title: "Grain Free",
        slug: "grain_free",
        description:
          "By definition, pet care is the care and medical treatment of pets which means any job that has to do with taking care of pets would be considered a pet care profession.",
        parent: "Pet Care",
        children: "Cat Food",
        type: "Grocery",
        unit: "1kg",
        quantity: 1,
        originalPrice: 16,
        image: "https://i.ibb.co/Mcv1dpF/22.jpg",

        id: "612bf2b4b61784470028e0e9",
        itemTotal: 15,
      },
      {
        price: 12,
        discount: 7.6923076923076925,
        tag: ["makeup", "face-care"],
        title: "Face Republic Sun Gel",
        slug: "face_republic_Sun_gel",
        description:
          "Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ... Skin care is a routine daily procedure in many settings, such as skin that is either too dry or too moist, and prevention of dermatitis and prevention of skin injuries.",
        parent: "Beauty & Health",
        children: "Face Care",
        type: "Makeup",
        unit: "1ps",
        quantity: 9,
        originalPrice: 13,
        image: "https://i.ibb.co/Mcv1dpF/22.jpg",
        id: "612cdef8c5199407f43b4a88",
        itemTotal: 108,
      },
      {
        price: 15,
        discount: 0,
        tag: ["Vegetable", "Cucumber"],
        title: "Cucumber",
        slug: "cucumber",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/khd9QDb/23.jpg",
        originalPrice: 15,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593e",
        itemTotal: 15,
      },
    ],
    shippingCost: 0,
    discount: 0,
    name: "Aurora ",
    address: "2402 Overlook Dr, Selma, AL, 36703",
    contact: "660-515-7629",
    email: "aurora@gmail.com",
    city: "AL",
    country: "US",
    zipCode: "36703",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 817,
    total: 735.3,
    user: "61531a4f1c38473378ab0834",
    date: "15 Fav, 2022",
  },
  {
    cart: [
      {
        price: 16,
        discount: 0,
        tag: ["Vegetable", "French Green Beans"],
        title: "French Green Beans",
        slug: "french-green-beans",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/khd9QDb/23.jpg",
        originalPrice: 16,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593f",
        itemTotal: 16,
      },
      {
        price: 20,
        discount: 0,
        tag: ["Fruit", "Apple"],
        title: "Apple",
        slug: "apple",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/ccm2WTK/24.jpg",
        originalPrice: 20,
        unit: "1.2kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5932",
        itemTotal: 20,
      },
      {
        price: 19,
        discount: 10,
        tag: ["Fruit", "Strawberry"],
        title: "Strawberry",
        slug: "strawberry",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/ccm2WTK/24.jpg",
        originalPrice: 20,
        unit: "1.5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5939",
        itemTotal: 19,
      },
      {
        price: 12,
        discount: 0,
        tag: ["Fruit", "Red Cherries"],
        title: "Red Cherries",
        slug: "red-cherries",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/r26KqRq/25.jpg",
        originalPrice: 12,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5938",
        itemTotal: 12,
      },
    ],
    shippingCost: 0,
    discount: 0,
    name: "Aurora ",
    address: "2402 Overlook Dr, Selma, AL, 36703",
    contact: "660-515-7629",
    email: "aurora@gmail.com",
    city: "AL",
    country: "US",
    zipCode: "36703",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delivered",
    subTotal: 67,
    total: 67,
    user: "61531a4f1c38473378ab0835",
    date: "15 Fav, 2022",
  },
  {
    cart: [
      {
        price: 13,
        discount: 0,
        tag: ["Vegetable", "Celery Sticks"],
        title: "Celery Sticks",
        slug: "celery-sticks",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/r26KqRq/25.jpg",
        originalPrice: 13,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593c",
        itemTotal: 13,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/r26KqRq/25.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 7,
      },
      {
        price: 10,
        discount: 10,
        tag: ["Fruit", "Mangoes"],
        title: "Mangoes",
        slug: "mangoes",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/vxhPry2/27.jpg",
        originalPrice: 11,
        unit: "1kg",
        quantity: 2,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5936",
        itemTotal: 20,
      },
    ],
    shippingCost: 0,
    discount: 0,
    name: "Justin J. Ruiz",
    address: " 713 Jaycox Rd, Avon Lake, OH, 44012",
    contact: "212-512-2888",
    email: "justin@gmail.com",
    city: "OH",
    country: "US",
    zipCode: "44012",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delayed",
    subTotal: 40,
    total: 40,
    user: "61531a4f1c38473378ab0836",
    date: "15 Fav, 2022",
  },
  {
    cart: [
      {
        price: 13,
        discount: 0,
        tag: ["Vegetable", "Celery Sticks"],
        title: "Celery Sticks",
        slug: "celery-sticks",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/vxhPry2/27.jpg",
        originalPrice: 13,
        unit: "1kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593c",
        itemTotal: 13,
      },
      {
        price: 7,
        discount: 30,
        tag: ["Vegetable", "Corn"],
        title: "Corn",
        slug: "corn",
        parent: "Fruits & Vegetable",
        children: "Vegetable",
        image: "https://i.ibb.co/vxhPry2/27.jpg",
        originalPrice: 10,
        unit: "1/5kg",
        quantity: 1,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae593d",
        itemTotal: 7,
      },
      {
        price: 10,
        discount: 10,
        tag: ["Fruit", "Mangoes"],
        title: "Mangoes",
        slug: "mangoes",
        parent: "Fruits & Vegetable",
        children: "Fruits",
        image: "https://i.ibb.co/cTrw4Kn/28.jpg",
        originalPrice: 11,
        unit: "1kg",
        quantity: 2,
        type: "Grocery",
        description:
          "Vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.",

        id: "6127965254781e22f8ae5936",
        itemTotal: 20,
      },
    ],
    shippingCost: 0,
    discount: 0,
    name: "Justin J. Ruiz",
    address: " 713 Jaycox Rd, Avon Lake, OH, 44012",
    contact: "212-512-2888",
    email: "justin@gmail.com",
    city: "OH",
    country: "US",
    zipCode: "44012",
    shippingOption: "FedEx",
    paymentMethod: "COD",
    status: "Delayed",
    subTotal: 40,
    total: 40,
    user: "61531a4f1c38473378ab0837",
    date: "15 Fav, 2022",
  },
];
export default orders;
