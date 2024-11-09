// src/data/menuData.js
export const menuCategories = {
    "SOUPS & STEWS": {
      Korean: [
        {
          id: "galbitang",
          koreanName: "갈비탕",
          romanizedName: "galbi tang",
          description: "Korean beef short rib soup in clear broth with glass noodles and vegetables",
          protein: "beef",
          spicyLevel: 0,
          categories: ["soup", "noodle"],
          imageUrl: "/images/menu/galbitang.png"
        },
        {
          id: "sarigomtang",
          koreanName: "사리곰탕",
          romanizedName: "sari gomtang",
          description: "Clear beef bone soup with tender brisket meat",
          protein: "beef",
          spicyLevel: 0,
          categories: ["soup"],
          imageUrl: "/images/menu/sarigomtang.png"
        },
        {
          id: "kimchijjigae",
          koreanName: "김치찌개",
          romanizedName: "kimchi jjigae",
          description: "Hearty Korean stew made with fermented kimchi and pork",
          protein: "pork",
          spicyLevel: 2,
          categories: ["stew"],
          imageUrl: "/images/menu/kimchijjigae.jpg"
        },
        {
          id: "budaejjigae",
          koreanName: "부대찌개",
          romanizedName: "budae jjigae",
          description: "Spicy Korean stew with kimchi, spam, and noodles",
          protein: ["pork"],
          spicyLevel: 2,
          categories: ["stew"],
          imageUrl: "/images/menu/budaejjigae.png"
        },
        {
          id: "dakkalguksu",
          koreanName: "닭칼국수",
          romanizedName: "dak kalguksu",
          description: "Korean chicken soup with hand-cut noodles",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["noodle"],
          imageUrl: "/images/menu/dakkalguksu.png"
        }
      ]
    },
    "NOODLE DISHES": {
      Korean: [
        {
          id: "kalguksu",
          koreanName: "칼국수",
          romanizedName: "kal-guksu",
          description: "Korean hand-cut wheat noodle soup with vegetables in a rich chicken broth",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["noodle", "soup"],
          imageUrl: "/images/menu/kalguksu.png"
        },
        {
          id: "naengmyeon",
          koreanName: "냉면",
          romanizedName: "naengmyeon",
          description: "Cold Korean buckwheat noodles served in chilled broth with cucumber, pear, and boiled egg",
          protein: "beef",
          spicyLevel: 0,
          categories: ["noodle"],
          imageUrl: "/images/menu/naengmyeon.png"
        },
        {
          id: "jjolmyeon",
          koreanName: "쫄면",
          romanizedName: "jjolmyeon",
          description: "Chewy cold noodles in spicy sauce",
          protein: null,
          spicyLevel: 2,
          categories: ["noodle"],
          imageUrl: "/images/menu/jjolmyeon.png"
        },
        {
          id: "golbaengisomyun",
          koreanName: "골뱅이소면",
          romanizedName: "golbaengi somyun",
          description: "Spicy noodles with sea snail meat",
          protein: "fish",
          spicyLevel: 2,
          categories: ["noodle"],
          imageUrl: "/images/menu/golbaengisomyun.png"
        }
      ],
      Japanese: [
        {
          id: "udon",
          koreanName: "우동",
          romanizedName: "udon",
          description: "Thick Japanese wheat noodles in savory broth",
          protein: null,
          spicyLevel: 0,
          categories: ["noodle", "soup"],
          imageUrl: "/images/menu/udon.png"
        },
        {
          id: "udonstirfry",
          koreanName: "우동볶음",
          romanizedName: "Stir-fry udon with beef",
          description: "Thick Japanese noodles stir-fried with beef and vegetables",
          protein: "beef",
          spicyLevel: 0,
          categories: ["noodle"],
          imageUrl: "/images/menu/udonstirfry.png"
        }
      ]
    },
    "RICE DISHES": {
      Korean: [
        {
          id: "bibimbap",
          koreanName: "비빔밥",
          romanizedName: "bibimbap",
          description: "Korean rice bowl topped with sautéed vegetables, meat, egg, and spicy gochujang sauce",
          protein: "beef",
          spicyLevel: 1,
          categories: ["rice"],
          imageUrl: "/images/menu/bibimbap.png"
        },
        {
          id: "koreancurry",
          koreanName: "한식 카레",
          romanizedName: "Korean style curry and rice",
          description: "Thick, mild curry sauce with vegetables and meat served over rice",
          protein: ["beef", "chicken"],
          spicyLevel: 0,
          categories: ["rice"],
          imageUrl: "/images/menu/koreancurry.png"
        }
      ]
    },
    "FRIED CHICKEN": {
      Korean: [
        {
          id: "snowchicken",
          koreanName: "눈꽃치킨",
          romanizedName: "snow chicken",
          description: "Korean fried chicken dusted with sweet milk powder",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["fried"],
          imageUrl: "/images/menu/snowchicken.png"
        },
        {
          id: "yangnyeomchikin",
          koreanName: "양념치킨",
          romanizedName: "yangnyeom-chikin",
          description: "Korean fried chicken in sweet and spicy sauce",
          protein: "chicken",
          spicyLevel: 2,
          categories: ["fried"],
          imageUrl: "/images/menu/yangnyeomchikin.png"
        },
        {
          id: "soysaucechicken",
          koreanName: "간장치킨",
          romanizedName: "soy sauce chicken",
          description: "Korean fried chicken glazed with soy sauce",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["fried"],
          imageUrl: "/images/menu/soysaucechicken.png"
        }
      ],
      American: [
        {
          id: "chickenandwaffles",
          koreanName: "치킨 앤 와플",
          romanizedName: "chicken and waffles",
          description: "Crispy fried chicken served on fluffy waffles",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["fried"],
          imageUrl: "/images/menu/chickenandwaffles.png"
        }
      ]
    },
    "PASTA & FUSION": {
      "Italian/Fusion": [
        {
          id: "creamychickenpestopasta",
          koreanName: "크리미 치킨 페스토 파스타",
          romanizedName: "Creamy Chicken Pesto Pasta",
          description: "Pasta tossed with basil pesto cream sauce and chicken",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["noodle"],
          imageUrl: "/images/menu/creamychickenpestopasta.png"
        },
        {
          id: "samgyeopsealpasta",
          koreanName: "삼겹살 파스타",
          romanizedName: "Samgyopsal pasta",
          description: "Pasta with Korean pork belly and garlic",
          protein: "pork",
          spicyLevel: 0,
          categories: ["noodle"],
          imageUrl: "/images/menu/samgyeopsealpasta.png"
        }
      ]
    },
    "MAIN DISHES": {
      "Korean": [
        {
          id: "jjimdak",
          koreanName: "찜닭",
          romanizedName: "jjimdak",
          description: "Korean braised chicken with vegetables in sweet soy sauce",
          protein: "chicken",
          spicyLevel: 1,
          categories: ["stew"],
          imageUrl: "/images/menu/jjimdak.png"
        },
        {
          id: "bossam",
          koreanName: "보쌈",
          romanizedName: "bossam",
          description: "Korean boiled pork belly served with lettuce wraps",
          protein: "pork",
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/bossam.png"
        },
        {
          id: "jokbal",
          koreanName: "족발",
          romanizedName: "jokbal",
          description: "Korean braised pig's feet in soy sauce and spices",
          protein: "pork",
          spicyLevel: 0,
          categories: ["pork"],
          imageUrl: "/images/menu/jokbal.png"
        },
        {
          id: "koreanomurice",
          koreanName: "오므라이스",
          romanizedName: "Korean omurice",
          description: "Omelette filled with fried rice and topped with ketchup or sauce",
          protein: "chicken",
          spicyLevel: 0,
          categories: ["rice"],
          imageUrl: "/images/menu/koreanomurice.jpg"
        }
      ],
      "Mexican": [
        {
          id: "chorizoandegg",
          koreanName: "초리조 & 계란 타코",
          romanizedName: "Chorizo and Egg Tacos",
          description: "Mexican-style tacos filled with spicy chorizo sausage and scrambled eggs",
          protein: ["pork"],
          spicyLevel: 1,
          categories: [],
          imageUrl: "/images/menu/chorizoandegg.jpg"
        },
        {
          id: "hameggatacos",
          koreanName: "햄 & 계란 타코",
          romanizedName: "Ham and Egg Tacos",
          description: "Breakfast tacos with diced ham and fluffy scrambled eggs",
          protein: ["ham"],
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/hameggatacos.jpg"
        },
        {
          id: "picadillo",
          koreanName: "피카디요",
          romanizedName: "Picadillo",
          description: "Latin American dish of seasoned ground beef with tomatoes, potatoes, and spices",
          protein: "beef",
          spicyLevel: 1,
          categories: ["stew"],
          imageUrl: "/images/menu/picadillo.jpg"
        },
        {
          id: "discada",
          koreanName: "디스카다",
          romanizedName: "Discada",
          description: "Northern Mexican mixed meat dish cooked on a plow disc",
          protein: "beef",
          spicyLevel: 1,
          categories: [],
          imageUrl: "/images/menu/discada.png"
        },
        {
          id: "pulledporkstreetacos",
          koreanName: "풀드 포크 타코",
          romanizedName: "Pulled pork street tacos",
          description: "Tender shredded pork in small corn tortillas",
          protein: "pork",
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/pulledporkstreetacos.png"
        }
      ],
      "Grilled/American": [
        {
          id: "porkchopveggies",
          koreanName: "돼지 등심 구이 & 야채",
          romanizedName: "Porkchop side of veggies",
          description: "Grilled porkchop served with sautéed vegetables",
          protein: "pork",
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/porkchopveggies.png"
        },
        {
          id: "chickenthightgrill",
          koreanName: "닭다리 구이",
          romanizedName: "Chicken thighs on the grill",
          description: "Grilled chicken thighs seasoned and charred",
          protein: "chicken",
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/chickenthightgrill.png"
        },
        {
          id: "hotdogwithcaramelizedjalapeno",
          koreanName: "핫도그 & 구운 양파, 할라피뇨",
          romanizedName: "Hotdog with grilled onions and jalapenos",
          description: "Grilled hotdog topped with caramelized onions and spicy jalapenos",
          protein: "pork",
          spicyLevel: 1,
          categories: [],
          imageUrl: "/images/menu/hotdogwithcaramelizedjalapeno.png"
        }
      ],
      "Japanese": [
        {
          id: "tonkatsu",
          koreanName: "돈까스",
          romanizedName: "Tonkatsu",
          description: "Crispy breaded pork cutlet served with cabbage and sauce",
          protein: "pork",
          spicyLevel: 0,
          categories: ["fried"],
          imageUrl: "/images/menu/tonkatsu.png"
        },
        {
          id: "fruitsando",
          koreanName: "과일 샌드위치",
          romanizedName: "Fruit sando",
          description: "Japanese fruit and whipped cream sandwich",
          protein: null,
          spicyLevel: 0,
          categories: ["fruit"],
          imageUrl: "/images/menu/fruitsando.png"
        }
      ]
    },
    "SNACKS & STREET FOOD": {
      Korean: [
        {
          id: "tteokbokki",
          koreanName: "떡볶이",
          romanizedName: "Tteok-bokki",
          description: "Chewy rice cakes in sweet-spicy red sauce",
          protein: null,
          spicyLevel: 2,
          categories: [],
          imageUrl: "/images/menu/tteokbokki.jpg"
        },
        {
          id: "kimbap",
          koreanName: "김밥",
          romanizedName: "Kimbap",
          description: "Rolled rice with vegetables and meat wrapped in seaweed",
          protein: null,
          spicyLevel: 0,
          categories: ["rice", "ham"],
          imageUrl: "/images/menu/kimbap.png"
        },
        {
          id: "chickenmayo",
          koreanName: "치킨마요",
          romanizedName: "Chicken mayo",
          description: "Korean-style chicken salad with creamy mayonnaise",
          protein: "chicken",
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/chickenmayo.png"
        },
        {
          id: "jjajanggtteokbokki",
          koreanName: "짜장떡볶이",
          romanizedName: "Jjajang Tteokbokki",
          description: "Rice cakes in black bean sauce",
          protein: null,
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/jjajanggtteokbokki.jpg"
        }
      ],
      "Hawaiian-Japanese": [
        {
          id: "musubi",
          koreanName: "무스비",
          romanizedName: "Musubi",
          description: "Hawaiian-style snack with grilled Spam on rice wrapped in seaweed",
          protein: null,
          spicyLevel: 0,
          categories: ["rice", "ham"],
          imageUrl: "/images/menu/musubi.png"
        }
      ],
      "Mexican": [
        {
          id: "applewithchamoy",
          koreanName: "사과 & 차모이 & 젤리",
          romanizedName: "Apple with chamoy and gummies",
          description: "Fresh apple slices with spicy-sweet chamoy sauce and gummy candies",
          protein: null,
          spicyLevel: 1,
          categories: ["fruit"],
          imageUrl: "/images/menu/applewithchamoy.png"
        }
      ],
      "Modern/Fusion": [
        {
          id: "tortillapizza",
          koreanName: "토르티야 피자",
          romanizedName: "Flour tortilla pizza",
          description: "Pizza made using tortilla as crust",
          protein: null,
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/tortillapizza.png"
        },
        {
          id: "avocadotoast",
          koreanName: "아보카도 토스트",
          romanizedName: "Avocado toast",
          description: "Mashed avocado on toasted bread",
          protein: null,
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/avocadotoast.png"
        }
      ]
    },
    "SALADS": {
      "Italian": [
        {
          id: "tomatobasilsalad",
          koreanName: "토마토 바질 발사믹 샐러드",
          romanizedName: "Tomato-basil balsamic salad",
          description: "Fresh tomatoes and basil with balsamic dressing and bread",
          protein: null,
          spicyLevel: 0,
          categories: [],
          imageUrl: "/images/menu/tomatobasilsalad.png"
        }
      ]
    },
    "BEVERAGES": {
      "Korean": [
        {
          id: "hwachae",
          koreanName: "화채",
          romanizedName: "Hwachae",
          description: "Korean fruity punch drink with fresh fruits and sweet rice drink",
          protein: null,
          spicyLevel: 0,
          categories: ["drink", "fruit"],
          imageUrl: "/images/menu/hwachae.jpg"
        }
      ],
      "Mexican": [
        {
          id: "mangonada",
          koreanName: "망고나다",
          romanizedName: "Mangonada",
          description: "Mexican frozen drink with mango, chamoy sauce, lime, and chili powder",
          protein: null,
          spicyLevel: 1,
          categories: ["drink", "fruit"],
          imageUrl: "/images/menu/mangonada.png"
        }
      ],
      "American": [
        {
          id: "lemonade",
          koreanName: "레모네이드",
          romanizedName: "Lemonade",
          description: "Sweet and tart drink made with fresh lemons, sugar, and water",
          protein: null,
          spicyLevel: 0,
          categories: ["drink"],
          imageUrl: "/images/menu/lemonade.jpg"
        },
        {
          id: "cokeslushie",
          koreanName: "코크 슬러시",
          romanizedName: "Coke Slushie",
          description: "Frozen slushy drink made with Coca-Cola, blended with crushed ice",
          protein: null,
          spicyLevel: 0,
          categories: ["drink"],
          imageUrl: "/images/menu/cokeslushie.jpg"
        }
      ]
    }
};
  

// Also export the utility functions that the error message suggests
export const getMenuItemsByCategory = (category) => {
    return menuCategories.filter(item => item.categories.includes(category));
};

export const getMenuItemsByProtein = (protein) => {
    return menuCategories.filter(item => item.protein === protein);
};

export const getMenuItemsBySpicyLevel = (level) => {
    return menuCategories.filter(item => item.spicyLevel === level);
    };

// Helper function to flatten menu for situations where we need a flat list
export const getFlattenedMenu = () => {
    const flattened = [];
    
    Object.entries(menuCategories).forEach(([mainCategory, subCategories]) => {
      Object.entries(subCategories).forEach(([subCategory, items]) => {
        items.forEach(item => {
          flattened.push({
            ...item,
            mainCategory,
            subCategory
          });
        });
      });
    });
    
    return flattened;
  };

export default menuCategories;
