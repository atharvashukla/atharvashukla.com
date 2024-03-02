import Link from "next/link";
import Image from "next/image";

export default function Music() {
  return (
    <article className="prose">
      <h1>Music</h1>

      <p>
        <Link href="https://www.youtube.com/watch?v=BqnG_Ei35JE">
          Crumb - Locket
        </Link>
        <Image
          height="1000"
          width="1000"
          src="/crumb.jpeg"
          alt="Crumb - Locket"
          title="Crumb - Locket [Official Video]"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=BqnG_Ei35JE">
          53 Thieves - after hours
        </Link>
        <Image
          height="1000"
          width="1000"
          src="/53-thieves.jpeg"
          alt="53 Thieves - after hours"
          title="53 Thieves - after hours"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=3CZn2G9y9t8">
          Leon Bridges & Khruangbin - Mariella
        </Link>
        <Image
          height="1000"
          width="1000"
          src="/mariella.jpeg"
          alt="Leon Bridges & Khruangbin - Mariella"
          title="Leon Bridges & Khruangbin - Mariella"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=eYDI8b5Nn5s">
          Jack Stauber - Buttercup
        </Link>
        <Image
          height="1000"
          width="1000"
          src="/jack-stauber-buttercup.jpeg"
          alt="Jack Stauber - Buttercup"
          title="Jack Stauber - Buttercup"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=SjgMmo6_DH0">
          OUTTA MY MIND by Monsune
        </Link>
        <Image
          height="1000"
          width="1000"
          src="/outta-my-mind.jpeg"
          alt="OUTTA MY MIND by Monsune"
          title="OUTTA MY MIND by Monsune"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=o-llwv4pLrg">
          Tom Misch & Yussef Dayes - Tidal Wave
        </Link>
        <Image
          width="1000"
          height="1000"
          src="/tidal-wave.jpeg"
          alt="Tom Misch & Yussef Dayes - Tidal Wave"
          title="Tom Misch & Yussef Dayes - Tidal Wave"
        />
      </p>

      <p>
        <Link href="https://www.youtube.com/watch?v=MV_3Dpw-BRY">
          Kavinsky - Nightcall
        </Link>
        <Image
          width="1000"
          height="1000"
          src="/kavinsky_nightcall.jpg"
          alt="Kavinsky - Nightcall"
          title="Kavinsky - Nightcall"
        />
      </p>
    </article>
  );
}
