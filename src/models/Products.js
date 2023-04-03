module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("Products", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      }
    });
  
    return Products;
  };