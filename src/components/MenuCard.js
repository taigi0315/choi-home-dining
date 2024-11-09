import React from 'react';
import { menuCategories } from '../data/menuData';
import styles from './MenuCard.module.css';
import backgroundImage from '../assets/background.png';  // Add your image to src/assets folder


const MenuCard = () => {
  const handleImageError = (e) => {
    e.target.src = '/images/menu/default_menu.png';  // Updated default image path
    e.target.onerror = null;  // Prevent infinite loop if default image also fails
  };

  const renderProteinTag = (protein) => {
    if (!protein || protein === 'none') return null;
    
    if (Array.isArray(protein)) {
      return protein.map((p, index) => (
        <span key={index} className={`${styles.tag} ${styles.proteinTag}`}>
          <img 
            src={`/images/tag/${p.toLowerCase()}.png`}
            alt={p}
            className={styles.tagIcon}
          />
        </span>
      ));
    }
  
    return (
      <span className={`${styles.tag} ${styles.proteinTag}`}>
        <img 
          src={`/images/tag/${protein.toLowerCase()}.png`}
          alt={protein}
          className={styles.tagIcon}
        />
      </span>
    );
  };


  const renderSpicyLevel = (level) => {
    if (level <= 0) return null;
  
    return (
      <span className={`${styles.tag} ${styles.spicyTag}`}>
        <img 
          src="/images/tag/spicy.png"
          alt="spicy"
          className={styles.tagIcon}
        />
      </span>
    );
  };
  
  const renderCategoryTag = (category) => (
    <span className={`${styles.tag} ${styles.categoryTag}`}>
      <img 
        src={`/images/tag/${category.toLowerCase()}.png`}
        alt={category}
        className={styles.tagIcon}
      />
    </span>
  );


  return (
    <div 
      className={styles.menuContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${backgroundImage})`
      }}
    >
      {/* Header Section */}
      <header className={styles.menuHeader}>
        <h1 className={styles.mainTitle}>Choi Family Home Dining</h1>
        <h2 className={styles.subTitle}>"Our family food menu is a true labor of love, crafted with generations of cherished recipes and the tender touch of many loving hands. Each dish is a testament to the heart and soul of our family, infused with the comforting flavors of tradition and the generous spirit of home."</h2>
      </header>

      {/* Menu Content */}
      <div className={styles.menuContent}>
        {Object.entries(menuCategories).map(([mainCategory, subCategories]) => (
          <div key={mainCategory} className={styles.categorySection}>
            {/* Main Category - Now Left Aligned */}
            <div className={styles.categoryHeader}>
              <span className={styles.categoryTitle}>{mainCategory}</span>
            </div>

            {/* Sub Categories */}
            {Object.entries(subCategories).map(([subCategory, items]) => (
              <div key={`${mainCategory}-${subCategory}`} className={styles.subCategorySection}>
                <h3 className={styles.subCategoryTitle}>{subCategory}</h3>

                {/* Menu Items */}
                <div className={styles.itemsGrid}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.menuCard}>
                      <div className={styles.menuItemContent}>
                        <div className={styles.imageContainer}>
                          <img
                            src={item.imageUrl || '/images/menu/default_menu.png'}
                            alt={item.romanizedName}
                            className={styles.menuImage}
                            onError={(e) => {
                              e.target.src = '/images/menu/default_menu.png';
                              e.target.onerror = null;
                            }}
                          />
                        </div>
                        <div className={styles.itemDetails}>
                          <div className={styles.itemHeader}>
                            <h4 className={styles.itemTitle}>
                              <span>{item.koreanName}</span>
                              <span className={styles.romanized}>({item.romanizedName})</span>
                            </h4>
                            <p className={styles.itemDescription}>{item.description}</p>
                          </div>
                          <div className={styles.tagContainer}>
                            {renderProteinTag(item.protein)}
                            {renderSpicyLevel(item.spicyLevel)}
                            {item.categories.map((category, index) => (
                              <React.Fragment key={index}>
                                {renderCategoryTag(category)}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;