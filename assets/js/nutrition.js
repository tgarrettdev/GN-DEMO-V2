const menuItems = [
    {
      name: 'Soupe de Poissons Locale',
      category: 'starters',
      nutrition: ['low-calorie', 'low-carb'],
      image: 'https://www.mangeons-local.bzh/wp-content/uploads/Cotriade-Bretonne-2.jpg',
      description: 'Dublin Bay seafood chowder, selection of fish, Dublin Bay prawns, croutons',
      calories: 450,
      carbs: 25,
      protein: 35,
      allergens: 'molluscs, fish, crustaceans, gluten, milk, celery, mustard',
      price: 12.99,
      recommendedNutrients: {
        calories: 500,
        carbs: 30,
        protein: 35
      }
    },
    {
      name: 'Gambas Sautées à l’Ail, Herbes Fraîche, et Flambé au Pastis',
      category: 'starters',
      nutrition: ['low-carb','high-protein'],
      image: 'https://i.guim.co.uk/img/media/0cf18052953dd386b56158ac4e9e8bef79bf1753/0_758_7065_4240/master/7065.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=47b23109e3dc490466386672867c746e',
      description: 'Tiger prawns sautéed in garlic and fresh herbs, flambéed in Pastis',
      calories: 300,
      carbs: 10,
      protein: 25,
      allergens: 'crustaceans, sulphites',
      price: 14.99,
      recommendedNutrients: {
        calories: 350,
        carbs: 15,
        protein: 25
      }
    },
    {
      name: 'Paté de Foie de Canard et Truffe "Tuber Aesstivum"',
      category: 'starters',
      nutrition: ['low-calorie'],
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/02/ef/06/terre-de-truffe.jpg',
      description: 'Duck liver paté, summer truffle, walnut toast',
      calories: 400,
      carbs: 15,
      protein: 20,
      allergens: 'gluten, nuts',
      price: 16.99,
      recommendedNutrients: {
        calories: 450,
        carbs: 20,
        protein: 20
      }
    },
    {
      name: 'Chair de Crabes de Kerry et Morue Croquette',
      category: 'starters',
      nutrition: ['low-carb','high-protein'],
      image: 'https://fr.chatelaine.com/wp-content/uploads/2019/04/BeignetsSaumonFumeSesame_iStock-542832092_615x500-375x211.jpg',
      description: 'Portmagee Crab meat and cod, beetroot, tartar sauce',
      calories: 350,
      carbs: 15,
      protein: 30,
      allergens: 'fish, crustaceans, gluten, eggs',
      price: 18.99,
      recommendedNutrients: {
        calories: 400,
        carbs: 20,
        protein: 30
      }
    },
    {
      name: 'Homard en Salade, Tomate Concassée, Roquette, Vinaigrette Citron',
      category: 'starters',
      nutrition: ['low-carb'],
      image: 'https://images.squarespace-cdn.com/content/v1/628763c5c7467a464bbaa8e8/1901a753-2f7e-4daf-97ab-445cfab31e84/Guinea+Pig+077.JPG?format=2500w',
      description: 'Lobster salad, tomato relish, rocket leaves, citrus vinaigrette, chili oil',
      calories: 250,
      carbs: 10,
      protein: 20,
      allergens: 'crustaceans, fish, sulphites',
      price: 22.99,
      recommendedNutrients: {
        calories: 300,
        carbs: 15,
        protein: 20
      }
    },
    {
      name: 'Brie au Four',
      category: 'starters',
      nutrition: ['low-calorie','high-protein'],
      image: 'https://cocoandcamellia.com/wp-content/uploads/2022/02/Baked-Brie-With-Honey-Recipe-11-720x1080.jpg',
      description: 'Oven baked Brie, brandy, Royal Gala, rocket leaves, grilled bread',
      calories: 500,
      carbs: 30,
      protein: 20,
      allergens: 'dairy, gluten, nuts',
      price: 15.99,
      recommendedNutrients: {
        calories: 600,
        carbs: 35,
        protein: 20
      }
    },
    {
      name: 'Scampi and Chips',
      category: 'mains',
      nutrition: ['low-carb'],
      image: 'https://realfood.tesco.com/media/images/RFO-RWC-mainhero-England-f207de88-8f45-41cf-833c-613e6517e372-0-1400x919.jpg',
      description: 'South Atlantic prawn scampi, tartar sauce, chips',
      calories: 800,
      carbs: 60,
      protein: 40,
      allergens: 'crustaceans, gluten, eggs, milk',
      price: 20.99,
      recommendedNutrients: {
        calories: 900,
        carbs: 70,
        protein: 40
      }
    },
    {
      name: 'Sole Meunière, Recette Classique',
      category: 'mains',
      nutrition: ['low-calorie','high-protein'],
      image: 'https://www.krumpli.co.uk/wp-content/uploads/2023/03/Pan-Fried-Lemon-Sole-with-Meuniere-Sauce-06-720x540.jpg',
      description: 'Grilled classic Dover Sole Meunière, on the bone, garlic and parsley butter',
      calories: 600,
      carbs: 10,
      protein: 40,
      allergens: 'fish, milk',
      price: 32.99,
      recommendedNutrients: {
        calories: 700,
        carbs: 15,
        protein: 40
      }
    },
    {
      name: 'Homard Cuit Minute',
      category: 'mains',
      nutrition: ['low-carb'],
      image: 'https://assets.epicurious.com/photos/57cedb9cb102a9723e3fb7c1/master/w_1000,h_750,c_limit/lobster-with-garlic-butter.jpg',
      description: 'Fresh Dalkey lobster, cooked as you wish: garlic butter (min 600gr)',
      calories: 400,
      carbs: 10,
      protein: 60,
      allergens: 'crustaceans, milk',
      price: 54.99,
      recommendedNutrients: {
        calories: 450,
        carbs: 10,
        protein: 60
      }
    },
    {
      name: 'Loup de Mer Grillé au Four, Escalivade, Chapelure aux Olives et Capres',
      category: 'mains',
      nutrition: ['low-calorie','low-carb','high-protein'],
      image: 'https://img.taste.com.au/L9yvPCqk/taste/2016/11/baked-fish-with-tomatoes-olives-and-capers-33536-1.jpeg',
      description: 'Baked Seabass, slow cooked Provençale vegetables, black olive and caper crumb',
      calories: 500,
      carbs: 20,
      protein: 50,
      allergens: 'fish, milk, gluten',
      price: 28.99,
      recommendedNutrients: {
        calories: 600,
        carbs: 25,
        protein: 50
      }
    },
    {
      name: 'Magret de Canard au Miel d’Ac',
      category: 'mains',
      nutrition: [],
      image: 'https://ileauxepices.com/blog/wp-content/uploads/2015/02/magret-de-canard-%C3%A0-lorange-epices.jpg',
      description: 'Acacia honey roasted duck, ratatouille Provençale, five spice sauce',
      calories: 700,
      carbs: 30,
      protein: 40,
      allergens: 'none',
      price: 26.99,
      recommendedNutrients: {
        calories: 800,
        carbs: 40,
        protein: 40
      }
    },
    {
      name: 'Filet de Bœuf Irlandais, Onion Grillé, Frites, Sauce au Poivre',
      category: 'mains',
      nutrition: ['low-calorie','high-protein'],
      image: 'https://archive.commercialappeal.com/Services/image.ashx?domain=www.commercialappeal.com&file=carol_borchardt_13200143_ver1.0_640_480.jpg&resize=',
      description: '8oz Irish fillet steak, grilled onions, fries, pepper sauce',
      calories: 900,
      carbs: 40,
      protein: 60,
      allergens: 'none',
      price: 34.99,
      recommendedNutrients: {
        calories: 1000,
        carbs: 50,
        protein: 60
      }
    },
    {
    name: 'Haricots Verts, Lardons et Amandes',
    category: 'sides',
    nutrition: ['low-carb'],
    image: 'https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2021/11/Green-Beans-Almondine-3.jpg?fit=1170%2C1753&ssl=1',
    description: 'Green beans, bacon lardons, toasted almonds',
    calories: 150,
    carbs: 10,
    protein: 5,
    allergens: 'nuts',
    price: 5.99,
    recommendedNutrients: {
      calories: 200,
      carbs: 15,
      protein: 5
    }
},
  {
    name: 'Champignons Sauvages et Pommes Sautées',
    category: 'sides',
    nutrition: ['low-carb','high-protein'],
    image: 'https://i.pinimg.com/736x/27/11/ea/2711ea207e7333c42d17adc752d39823.jpg',
    description: 'Wild mushrooms and apple',
    calories: 200,
    carbs: 15,
    protein: 5,
    allergens: 'none',
    price: 6.99,
    recommendedNutrients: {
      calories: 250,
      carbs: 20,
      protein: 5
    }
  },
  {
    name: 'Frites Faites Maison / French Fries',
    category: 'sides',
    nutrition: [],
    image: 'https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/06/Fries.png',
    description: 'Homemade French fries',
    calories: 400,
    carbs: 40,
    protein: 5,
    allergens: 'none',
    price: 4.99,
    recommendedNutrients: {
      calories: 450,
      carbs: 45,
      protein: 5
    }
  },
  {
    name: 'Gratin Dauphinois',
    category: 'sides',
    nutrition: ['low-calorie'],
    image: 'https://food-images.files.bbci.co.uk/food/recipes/dauphinoisepotatoes_90205_16x9.jpg',
    description: 'Dauphinois potato, slow cooked thinly sliced potato, garlic and cream',
    calories: 350,
    carbs: 20,
    protein: 5,
    allergens: 'dairy',
    price: 7.99,
    recommendedNutrients: {
      calories: 400,
      carbs: 25,
      protein: 5
    }
  },
  {
    name: 'Fondant au Chocolat Valrhona',
    category: 'desserts',
    nutrition: ['low-carb','high-protein'],
    image: 'https://tropicsfoodmagazine.files.wordpress.com/2015/05/chocolate-fondant-5.jpg',
    description: 'Molten chocolate dessert, vanilla ice-cream',
    calories: 500,
    carbs: 40,
    protein: 5,
    allergens: 'dairy, eggs, gluten, soy',
    price: 9.99,
    recommendedNutrients: {
      calories: 600,
      carbs: 50,
      protein: 5
    }
  },
  {
    name: 'Crêpe au Chocolat Noir (70%)',
    category: 'desserts',
    nutrition: ['high-protein'],
    image: 'https://i.pinimg.com/originals/6b/da/e2/6bdae28470a10bea94d1a7cf62bf7f20.jpg',
    description: 'French crêpe, Valrhona dark chocolate (70%), vanilla ice-cream, toasted almonds',
    calories: 400,
    carbs: 30,
    protein: 5,
    allergens: 'dairy, eggs, gluten, nuts, soy',
    price: 8.99,
    recommendedNutrients: {
      calories: 450,
      carbs: 35,
      protein: 5
    }
  },
  {
    name: 'Apple Tart Tatin',
    category: 'desserts',
    nutrition: ['low-carb'],
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/621_1_1436957452.jpg?tr=w-800,h-800',
    description: '(please order early, 15 minutes cooking), vanilla ice-cream',
    calories: 450,
    carbs: 35,
    protein: 5,
    allergens: 'dairy, eggs, gluten',
    price: 10.99,
    recommendedNutrients: {
      calories: 500,
      carbs: 40,
      protein: 5
    }
  },
  {
    name: 'Assiette de Fromage',
    category: 'desserts',
    nutrition: ['low-calorie'],
    image: 'https://i0.wp.com/ahedgehoginthekitchen.com/wp-content/uploads/2021/03/French-Cheese-Plate-7.jpg?resize=600%2C900&ssl=1',
    description: 'Irish and French cheese plate',
    calories: 600,
    carbs: 10,
    protein: 25,
    allergens: 'dairy, gluten, nuts',
    price: 12.99,
    recommendedNutrients: {
      calories: 700,
      carbs: 15,
      protein: 25
    }
  }
  ];  
  
  // Get menu items container
  const menuItemsContainer = document.querySelector('.menu-items');
  
  // Filter menu items by category and nutrition
  function filterMenuItems(category, nutrition) {
    let filteredMenuItems = menuItems.filter((item) => item.category === category);
    if (nutrition !== 'all') {
      filteredMenuItems = filteredMenuItems.filter((item) =>
        item.nutrition.includes(nutrition)
      );
    }
    return filteredMenuItems;
  }
  
  // Create menu item HTML
  function createMenuItemHTML(menuItem) {
    return `
    <div class="menu-item" data-name="${menuItem.name}" data-image="${menuItem.image}" data-description="${menuItem.description}" data-calories="${menuItem.calories}" data-carbs="${menuItem.carbs}" data-protein="${menuItem.protein}" data-price="${menuItem.price}">
      <img src="${menuItem.image}" alt="${menuItem.name}">
      <div id="text-box">
      <h4>${menuItem.name}</h4>
      <br>
      <p>${menuItem.description}</p>
      <p>Price: $${menuItem.price.toFixed(2)}</p>
      </div>
        <button class="add-to-cart-btn">Add to Cart</button>
        <button class="view-nutrition-btn">View Nutrition</button>
    </div>
  `;
  }
  
  
  function displayNutritionModal(item) {
    const modal = document.getElementById('nutrition-modal');
    document.getElementById('modal-item-name').textContent = item.name;
  
    modal.style.display = 'block';
  
    const nutritionChart1 = document.getElementById('nutrition-chart1').getContext('2d');
    const nutritionChart2 = document.getElementById('nutrition-chart2').getContext('2d');

    const chartData1 = {
      labels: ['Carbs', 'Protein'],
      datasets: [
        {
          label: 'Nutrient values',
          data: [item.carbs, item.protein],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
          borderColor: ['#ff6384', '#36a2eb', '#ffce56'],
          borderWidth: 1,
        },
        {
          label: 'Recommended adult intake',
          data: [item.recommendedNutrients.carbs, item.recommendedNutrients.protein],
          backgroundColor: ['#e3e3e3', '#e3e3e3', '#e3e3e3'],
          borderColor: ['#e3e3e3', '#e3e3e3', '#e3e3e3'],
          borderWidth: 1,
        },
      ],
    };

    const chartData2 = {
        labels: ['Calories'],
        datasets: [
          {
            label: 'Calories value',
            data: [item.carbs, item.protein],
            backgroundColor: ['#ff6384'],
            borderColor: ['#ff6384'],
            borderWidth: 1,
          },
          {
            label: 'Recommended adult intake',
            data: [item.recommendedNutrients.carbs, item.recommendedNutrients.protein],
            backgroundColor: ['#e3e3e3'],
            borderColor: ['#e3e3e3'],
            borderWidth: 1,
          },
        ],
      };
  
    // If a chart instance already exists, destroy it before creating a new one
    if (window.nutritionChart1) {
      window.nutritionChart1.destroy();
    }

    // If a chart instance already exists, destroy it before creating a new one
    if (window.nutritionChart2) {
        window.nutritionChart2.destroy();
        }
  
    window.nutritionChart1 = new Chart(nutritionChart1, {
      type: 'bar',
      data: chartData1,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value + 'g';
              },
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Nutritional Values vs Recommended Adult Intake',
            font: {
              size: 20,
            },
          },
        },
      },
    });

    window.nutritionChart2 = new Chart(nutritionChart2, {
        type: 'bar',
        data: chartData2,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value + 'g';
                },
              },
            },
          },
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              font: {
                size: 20,
              },
            },
          },
        },
      });
  
    modal.style.display = 'block';
  
    // Add an event listener to close the modal when the close button is clicked
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Add an event listener to close the modal when clicked outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  

// Display menu items
function displayMenuItems(menuItems) {
  menuItemsContainer.innerHTML = '';
  menuItems.forEach((item) => {
    const menuItemHTML = createMenuItemHTML(item);
    menuItemsContainer.insertAdjacentHTML('beforeend', menuItemHTML);
  });

  // Add event listener for "View Nutrition" buttons
  const viewNutritionBtns = document.querySelectorAll('.view-nutrition-btn');
  viewNutritionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      displayNutritionModal(menuItems[index]);
    });
  });
}

// Initialize menu items
displayMenuItems(filterMenuItems('breakfast', 'all'));

// Add event listener to filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');

    const categoryFilter = btn.getAttribute('data-filter');
    const nutritionFilter = document.querySelector('#nutrition-filter-select').value;
    const allergenFilter = document.querySelector('#allergen-filter-select').value;
    const filteredItems = filterMenuItems(categoryFilter, nutritionFilter, allergenFilter);
    displayMenuItems(filteredItems);
  });
});

// Add event listener to nutrition filter select
const nutritionFilterSelect = document.querySelector('#nutrition-filter-select');
nutritionFilterSelect.addEventListener('change', () => {
  const categoryFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
  const nutritionFilter = nutritionFilterSelect.value;
  const filteredItems = filterMenuItems(categoryFilter, nutritionFilter);
  displayMenuItems(filteredItems);
});

// Add event listener to nutrition filter select
const allergenFilterSelect = document.querySelector('#allergen-filter-select');
nutritionFilterSelect.addEventListener('change', () => {
  const categoryFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
  const nutritionFilter = nutritionFilterSelect.value;
  const filteredItems = filterMenuItems(categoryFilter, nutritionFilter);
  displayMenuItems(filteredItems);
});

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
  
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
      toastContainer.removeChild(toast);
    }, 3000);
  }
  
