# Coq Tactics

[LF Tactics review](https://softwarefoundations.cis.upenn.edu/lf-current/Tactics.html)


- `intros`: move hyp/vars from goat to ctx
- `reflexivity`: finish proof when `lhs = rhs` in goal
- `apply`: prove goal using hyp, lemma, constr. 
- `simpl`: simplify. 
- `rewrite`: use an equality in Hyp to rewrite the goal.
- `symmetry`: swaps lhs and rhs
- `unfold`: replace const with its rhs in goal
- `destruct... as...`: case analysis. `destruct... eqn:...` records the result of the case analysis and adds it to the context. 
- `induction... as...`: induction
- `injection`: injectivity on equalities
- `discriminate`: reason by disjointness of constructors
- `assert (H: e)`: introduce a lemma locally 
- `generalize dependent x`: move x (and all dependencies) from ctx to goal.
- `apply ... in H`: forward reasoning by applying to hyp in ctx
- `simpl in H.` 
- `rewrite ... in H`
- `symmetry in H`
- `unfold... in H`


---

- `rewrite (plus_comm x y)` applies plus_comm with the arguments x, y instantiated. 
- `apply some_lema with (x := 42)` applies the lemma with x instantiated as 42. 


---

- When proving correctness of the tail recursive rev. Induct on the first list. You'll need a lemma that generalizes over the accumulator. When trying to prove that lemma, make sure you quantify over all accumulators (So don't intro it). This is important to be able to apply the IH.

---

[CUFP 2015](https://github.com/arthuraa/cufp-2015-tutorial)

- `intros`: Introduce variables into the context, giving them names.
- `simpl`: Simplify the goal.
- `reflexivity`: Prove that some expression `x` is equal to itself.
- `destruct`: Consider all possible constructors of an inductive data type, generating subgoals that need to be solved separately.
- `rewrite`: Replace one side of an equation by the other.
- `apply`: Suppose that the current goal is `Q`. If `H : Q`, then `apply H` solves the goal. If `H : P -> Q`, then `apply H` replaces `Q` by `P` in the goal. If `H` has multiple hypotheses, `H : P1 -> P2 -> ... -> Pn -> Q`, then `apply H` generates one subgoal for each `Pi`.
- `induction`: Argue by induction. It works as `destruct`, but additionally giving us an inductive hypothesis in the inductive case.
- `discriminate`: Looks for an equation between terms starting with different constructors, and solves the current goal.
- `revert`: The opposite of `intros`; removes variables and hypotheses from the context, putting them back in the goal.
- `clear`: Remove hypotheses from the context (ex. needed to simplify the IH).
- `unfold`: Calling `unfold foo` expands the definition of `foo` in the goal.
- `trivial`: solves simple goals through `reflexivity` and by looking for assumptions in the context that apply directly. If it cannot solve the goal, it does nothing.
- `;`: An expression such as `foo; bar` first calls `foo`, then calls `bar` on all generated subgoals. A common idiom is `foo; trivial`, which solves the trivial subgoals and does nothing on the remaining ones.
- `try`: Calling `try foo` tries to execute `foo`, doing nothing if `foo` raises any errors. In particular, if `foo` is a terminating tactic such as `discriminate`, `try foo` attempts to solve the goal, and does nothing if it fails.
- `destruct ... eqn: ...`: Do case analysis on an expression while generating an equation.
- `lia`: Short for "Linear Integer Arithmetic"; tries to solve goals that involve linear systems of inequalites on integers.
- `specialize`: Instantiate a universally quantified hypothesis 
- `assert`: Introduce a new hypothesis in the context, requiring us to prove that it holds. The curly braces `{}` allow us to focus on the current subgoal, like `+` and `-`. 