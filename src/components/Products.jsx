import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        " Arqu Executive Development Team and its employess continue to receive order for customers and that get orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        " Arqu Executive Development Team and its employess continue to receive order for customers and that get orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        " Arqu Executive Development Team and its employess continue to receive order for customers and that get orders for customers that",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        " Arqu Executive Development Team and its employess continue to receive order for customers and that get orders for customers that",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 23);
  };
  return (
    <div className="relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-xl"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
              src="https://cdn.refokus.com/website/Maniv-Compressed.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
              src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
              src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
              src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
