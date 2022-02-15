module.exports = function yearsInMs(options, loaderContext, content) {
    console.log("content");
    console.log(content);
    const { years } = JSON.parse(content);
    const value = years * 365 * 24 * 60 * 60 * 1000;
  
    return {
      cacheable: true,
      code: "module.exports = " + value,
    };
  };