// scripts/imageNaming.js

const formatImageName = (originalName) => {
    return originalName
      .toLowerCase()                    // Convert to lowercase
      .replace(/\s+/g, '-')            // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '')      // Remove special characters
      .replace(/-+/g, '-')             // Replace multiple hyphens with single hyphen
      .trim();                         // Remove trailing spaces
  };
  
  // Example usage:
  const originalNames = [
    "Tteok Bokki",
    "Galbi Tang",
    "Kimchi Jjigae"
  ];
  
  originalNames.forEach(name => {
    console.log(`${name} → ${formatImageName(name)}.jpg`);
  });