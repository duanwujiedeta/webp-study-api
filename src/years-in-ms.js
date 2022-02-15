module.exports = function yearsInMs({ years }) {// { years } 是val-loader的选项
    const value = years * 365 * 24 * 60 * 60 * 1000;
  
    // NOTE: this return value will replace the module in the bundle
    return {
      cacheable: true,
      code: "module.exports = " + value,
    };
  };