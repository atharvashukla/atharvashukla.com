import React from "react";
import Image from "next/image";

function page() {
  return (
    <article className="prose">
      <h1>अष्टावक्रः</h1>
      <Image
        width={1024}
        height={1792}
        src="/Ashtavakra.webp"
        alt={
          "Depiction of Ashtavakra, reflecting the essence of his teachings about the Self and awareness."
        }
      ></Image>
      <hr />
    </article>
  );
}

export default page;
