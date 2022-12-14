const shortid = require("shortid");
const config = require("../config/config");
const { get } = require("lodash");

const generateImageName = async (data) => {
  let imgShortId = null;
  let combineData = null;
  if (data.file) {
    imgShortId = await `${shortid.generate()}.png`;
    combineData = {
      name: data.body.name,
      image: `${config.image.image_url}/${imgShortId}`,
      ...get(data, "body"),
    };
  }

  return {
    imgShortId,
    combineData,
  };
};

module.exports = generateImageName;
