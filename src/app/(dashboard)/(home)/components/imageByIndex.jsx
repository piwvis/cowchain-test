import imageFrame from "assets/case-study/carousel/interface.png";
import imageFrame1 from "assets/case-study/carousel/x.png";
import imageFrame2 from "assets/case-study/carousel/buy.png";
import imageFrame3 from "assets/case-study/carousel/review.png";
import imageFrame4 from "assets/case-study/carousel/interface.png";
import imageFrame5 from "assets/case-study/carousel/interface.png";

export const images = [
  imageFrame,
  imageFrame1,
  imageFrame2,
  imageFrame3,
  imageFrame4,
  imageFrame5
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
