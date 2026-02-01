import React from "react";
import HeartMosaic from "./HeartMosaic";

const YesDiv = () => {
  const Images = Array.from(
    { length: 32 },
    (_, i) => `/balentayms/mosaic/${i}.jpeg`,
  );
  return (
    <div className="p-4 min-h-screen w-full text-center flex flex-col items-center">
      <h1 className="text-4xl lg:text-[100px] font-bold my-4 text-pink-600 font-love">
        Yay!!!😁🙌
      </h1>
      <h1 className="text-4xl lg:text-[100px] font-bold my-4 text-pink-600 text-center font-love">
        I Love You So Much Asawa Ko!! ❤️🥰
      </h1>
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 w-full  mb-4">
        <div
          className="tenor-gif-embed"
          data-postid="9804311574812597097"
          data-share-method="host"
          data-aspect-ratio="1.23333"
          data-width="100%"
        >
          <a href="https://tenor.com/view/cat-by-ednastochi-good-morning-oi-feliz-gif-9804311574812597097">
            Cat By Ednastochi Sticker
          </a>
          from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
        <div
          className="tenor-gif-embed"
          data-postid="16364996"
          data-share-method="host"
          data-aspect-ratio="1.42857"
          data-width="100%"
        >
          <a href="https://tenor.com/view/pikachu-pokemon-tongue-out-wiggle-tongue-weird-face-gif-16364996">
            Pikachu Pokemon GIF
          </a>
          from <a href="https://tenor.com/search/pikachu-gifs">Pikachu GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
        <div
          className="tenor-gif-embed"
          data-postid="9804311574812597097"
          data-share-method="host"
          data-aspect-ratio="1.23333"
          data-width="100%"
        >
          <a href="https://tenor.com/view/cat-by-ednastochi-good-morning-oi-feliz-gif-9804311574812597097">
            Cat By Ednastochi Sticker
          </a>
          from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
        <div
          className="tenor-gif-embed"
          data-postid="16364996"
          data-share-method="host"
          data-aspect-ratio="1.42857"
          data-width="100%"
        >
          <a href="https://tenor.com/view/pikachu-pokemon-tongue-out-wiggle-tongue-weird-face-gif-16364996">
            Pikachu Pokemon GIF
          </a>
          from <a href="https://tenor.com/search/pikachu-gifs">Pikachu GIFs</a>
        </div>{" "}
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        ></script>
      </div> */}
      <HeartMosaic images={Images} />
    </div>
  );
};

export default YesDiv;
