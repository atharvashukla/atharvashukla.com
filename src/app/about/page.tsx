import Link from "next/link";

export default function About() {
  return (
    <article className="prose">
      <h1>About</h1>
      <ul>
        <li>
          2017-2018:{" "}
          <Link href="https://htdp.org/">Systematic Program Design</Link>
        </li>

        <li>
          2019-2020:{" "}
          <Link href="https://en.wikipedia.org/wiki/Formal_methods">
            Program Specification and Verification
          </Link>
        </li>

        <li>
          2021-22:
          <ul>
            <li>
              Founded <Link href="https://recklesslabs.co/">Reckless Labs</Link>{" "}
              with{" "}
              <Link href="https://twitter.com/DhruvAggs">Dhruv Aggarwal</Link>;
              launched the{" "}
              <Link href="https://www.wickedcranium.com/">Wicked Craniums</Link>
              .
            </li>
          </ul>
        </li>
        <li>
          2023-2024:
          <ul>
            <li>
              <Link href="https://wisecounsel.ai">Wise Counsel</Link>, Wired
            </li>
          </ul>
        </li>
        <li>
          2025:
          <ul>{/* <li>...</li> */}</ul>
        </li>
      </ul>
      <hr />
      <h2>Quotes</h2>
      <ul>
        <li>
          Programs must be written for people to read, and only incidentally for
          machines to execute — Harold Abelson
        </li>
        <li>Believe in yourself to the point of delusion — Sam Altman</li>
        <li>
          Make definite assertions. Avoid tame, colorless, hesitating,
          non-committal language — William Strunk Jr.
        </li>
        <li>Work on raising the ceiling, not the floor — Nat Friedman</li>
      </ul>
    </article>
  );
}
