import p1 from "@/assets/team/team-carousel/1.jpg";
import p2 from "@/assets/team/team-carousel/2.jpg";
import p3 from "@/assets/team/team-carousel/3.webp";
import p4 from "@/assets/team/team-carousel/4.jpg";
import p5 from "@/assets/team/team-carousel/5.jpg";
import p6 from "@/assets/team/team-carousel/6.jpg";
import p7 from "@/assets/team/team-carousel/7.jpg";

export const images = [p1, p2, p3, p4, p5, p6, p7];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
