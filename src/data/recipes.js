const recipes = [
  {
    id: 1,
    title: "Chicken Biryani",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
    description: "A flavorful and aromatic rice dish layered with spiced chicken.",
    cookTime: 45,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    ingredients: [
      "500g chicken",
      "2 cups basmati rice",
      "2 onions, sliced",
      "1 cup yogurt",
      "2 tbsp biryani masala",
      "Fresh coriander & mint"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices for 30 minutes.",
      "Wash and soak the rice for 20 minutes.",
      "Fry onions until golden brown.",
      "Cook chicken until tender.",
      "Layer rice and chicken, cook on low heat for 20 minutes."
    ]
  },
  {
    id: 2,
    title: "Pancakes",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500",
    description: "Fluffy homemade pancakes perfect for a weekend morning.",
    cookTime: 20,
    servings: 2,
    difficulty: "Easy",
    rating: 4.6,
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "Butter for cooking"
    ],
    instructions: [
      "Mix dry ingredients in a bowl.",
      "Whisk in egg and milk until smooth.",
      "Heat a pan with butter.",
      "Pour batter and cook until bubbles form, then flip.",
      "Serve with syrup or fruits."
    ]
  },
  {
    id: 3,
    title: "Caesar Salad",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    description: "A crisp and creamy classic salad with croutons and parmesan.",
    cookTime: 15,
    servings: 2,
    difficulty: "Easy",
    rating: 4.4,
    ingredients: [
      "1 head romaine lettuce",
      "1/2 cup parmesan cheese",
      "1 cup croutons",
      "Caesar dressing",
      "Grilled chicken (optional)"
    ],
    instructions: [
      "Chop lettuce and place in a large bowl.",
      "Add croutons and parmesan.",
      "Toss with Caesar dressing.",
      "Top with grilled chicken if desired."
    ]
  },
  {
    id: 4,
    title: "Chocolate Cake",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    description: "Rich and moist chocolate cake with a smooth ganache topping.",
    cookTime: 60,
    servings: 8,
    difficulty: "Medium",
    rating: 4.9,
    ingredients: [
      "2 cups flour",
      "1 cup cocoa powder",
      "2 cups sugar",
      "3 eggs",
      "1 cup milk",
      "1 cup butter"
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Mix dry ingredients together.",
      "Beat eggs, milk, and butter, then combine with dry mix.",
      "Pour into pan and bake for 40 minutes.",
      "Cool and top with ganache."
    ]
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
    description: "A quick and healthy mix of fresh vegetables in savory sauce.",
    cookTime: 25,
    servings: 3,
    difficulty: "Easy",
    rating: 4.5,
    ingredients: [
      "2 cups mixed vegetables",
      "2 tbsp soy sauce",
      "1 tbsp garlic, minced",
      "1 tbsp ginger, minced",
      "2 tbsp oil"
    ],
    instructions: [
      "Heat oil in a wok.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry on high heat.",
      "Add soy sauce and cook for 3-4 minutes.",
      "Serve hot with rice."
    ]
  },
  {
    id: 6,
    title: "Fresh Fruit Smoothie",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500",
    description: "A refreshing blend of fruits and yogurt for a healthy start.",
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
    rating: 4.7,
    ingredients: [
      "1 banana",
      "1 cup mixed berries",
      "1 cup yogurt",
      "1 tbsp honey",
      "1/2 cup milk"
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend until smooth.",
      "Pour into a glass and serve immediately."
    ]
  },
  {
    id: 7,
    title: "Beef Tacos",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
    description: "Spicy seasoned beef tacos topped with fresh salsa and cheese.",
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    rating: 4.6,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "Taco seasoning",
      "1 cup shredded cheese",
      "Salsa and lettuce"
    ],
    instructions: [
      "Cook ground beef with taco seasoning.",
      "Warm the taco shells.",
      "Fill shells with beef, cheese, lettuce, and salsa.",
      "Serve immediately."
    ]
  },
  {
    id: 8,
    title: "Avocado Toast",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500",
    description: "Simple, healthy toast topped with creamy mashed avocado.",
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
    rating: 4.3,
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt and pepper",
      "Chili flakes",
      "Lemon juice"
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread on toast.",
      "Sprinkle chili flakes on top."
    ]
  },
  {
    id: 9,
    title: "Margherita Pizza",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500",
    description: "Classic Italian pizza with fresh mozzarella, basil, and tomato.",
    cookTime: 35,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil"
    ],
    instructions: [
      "Preheat oven to 220°C.",
      "Roll out the pizza dough.",
      "Spread tomato sauce and add mozzarella.",
      "Bake for 12-15 minutes until golden.",
      "Top with fresh basil and olive oil."
    ]
  },
  {
    id: 10,
    title: "Chicken Noodle Soup",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500",
    description: "A comforting classic soup with tender chicken and noodles.",
    cookTime: 40,
    servings: 4,
    difficulty: "Easy",
    rating: 4.7,
    ingredients: [
      "300g chicken breast",
      "2 cups egg noodles",
      "1 carrot, sliced",
      "1 celery stalk, sliced",
      "6 cups chicken broth"
    ],
    instructions: [
      "Boil chicken broth with carrot and celery.",
      "Add chicken and cook until tender.",
      "Shred chicken and return to pot.",
      "Add noodles and cook until soft.",
      "Season with salt and pepper, serve hot."
    ]
  }
];

export default recipes;