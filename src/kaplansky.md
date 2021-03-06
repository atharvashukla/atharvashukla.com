# Solutions to Set Theory and Metric Spaces by Irving Kaplansky


## 1 Basic Set Theory

### 1.1 Inclusion

**Q.1 A set A has the property that A ⊂ B holds for any set B. Prove that A = Ø.**

"A set A has the property that A ⊂ B holds for any set B" is assumed to be true in the problem statement. Consider the case where B = Ø. A has to be Ø because the only subset of Ø is Ø. 

**Q.2 Let A, B and C be sets satisfying A ⊂ B, B ⊂ C, and C ⊂ A. Prove that A = B = C.**

C1. ( A ⊂ B ) 

C2. ( B ⊂ C )

C3. ( C ⊂ A )

D1. ( B ⊂ A ) {Subset Relation is Transitive on C1, C2}

D2. ( C ⊂ B ) {Subset Relation is Transitive on C3, C1}

D3. ( A ⊂ C ) {Subset Relation is Transitive on C1, C2}

D4. A = B {Definition 2 of Set Equality on C1, D1}

D5. B = C {Definition 2 of Set Equality on C2, D2}

D6. C = A {Definition 2 of Set Equality on C3, D3}

A = B = C 

Subset Relation is Transitive

( A ⊂ B ) ∧ ( B ⊂ C )

⇝ ( e ∈ A ⟹ e ∈ B ) ∧ ( e ∈ B ⟹ e ∈ C) {Definition of Subset}

⇝ ( e ∈ A ⟹ e ∈ C ) {Hypothetical Syllogism}

⇝ A ⊂ C {Definition of Subset} 

Set Equality is Transitive

( A = B ) ∧ ( B = C )

(1): A ⊂ B; (2): B ⊂ A {Definition 2 of Set Equality on ( A = B )}

(3): B ⊂ C; (4): C ⊂ B {Definition 2 of Set Equality on ( B = C )}

(5): ( A ⊂ C ) {Subset Relation is Transitive on (1), (3)}

(6): ( C ⊂ A ) {Subset Relation is Transitive on (4), (2)}

A = C {Definition 2 of Set Equality on (5), (6)} 

**Q.3 How many elements are there in the following sets: Ø, {Ø}, {{Ø}}, {Ø, {Ø}}, {Ø, Ø}?**

0, 1, 1, 2, 2 respectively

**Q.4 List all inclusions that hold among the following sets:**

**(a) A = {2, 4, 6}**

**(b) B = {2, 4, 6, 8}**

**(c) C = Ø**

**(d) D = all even integers between 1 and 9**

(a) {}, {2}, {4}, {6}, {2, 4}, {2, 6}, {4, 6}, {2, 4, 6}

(b) {}, {2}, {4}, {6}, {8}, {2, 4}, {2, 6}, {2, 8}, {4, 6}, {4, 8}, {6, 8}, {2, 4, 6}, {4, 6, 8}, {2, 4, 8}, {2, 6, 8}, {2, 4, 6, 8}

(c) {}

(d) D = {2, 4, 6, 8} so it’s the answer is same as (b)

**Q.5 List all inclusions that hold among the following sets:**

**(a) all integers from 1 to 9 satisfying x^2 - 5x = 14**

**(b) B = {2, 7}**

**(c) C = {-2, 7}**

**(d) D = {7}**


(a) x^2 - 5x = 14 ≡ (x - 2)(x + 7) so x = 2 or x = -7. The set is {2}. Set of all subsets: {{}, {2}}

(b) {{}, {2}, {7}, {2, 7}}

(c) {{}, {-2}, {7}, {-2, 7}}

(d) {{}, {7}}


**Q.6 List all the subsets of {1, 2}. How many subsets are there?**

{{}, {1}, {2}, {1, 2}}. 4 subsets. 

**Q.7 List all the subsets of {1, 2, 3}. How many subsets are there?**

{{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}. 8 subsets. 

**Q.8 The preceding two exercises have invited the guess that the set with n elements has 2^n subsets. Prove this. (Hint: You can argue directly that n decisions have to be made, in each of which there are two possibilities: including or excluding a given element. Alternatively, the proof may be given by induction. Assume that there are 2^(n-1) subsets of {1, 2, …, n-1}. To each of these n might or might not be adjoined.)**

To prove: |𝒫(Aᵢ)| = 2ⁱ where Aᵢ means |A| = i. 

Case |X| = 0: The only set whose size is 0 is Ø. Ø is the only subset of Ø, so its power set, 𝒫(A_0) = {Ø}. Therefore |𝒫(X_0)| = |{Ø}| = 1.

Case |X| = i: Assume |𝒫(Xᵢ)| = 2ⁱ

Case |X| = i + 1: Consider some element e ∈ X, and make a set Xᵢ = Xᵢ₊₁ - {e}. |Xᵢ| = i. And from the inductive hypothesis. |𝒫(Xᵢ)| = 2ⁱ. 

|𝒫(Xᵢ₊₁)| = |𝒫(Xᵢ)| + |𝒫(Xᵢ with e adjoined to each element)|

Adding the element e back to each does not change their number, so there are 2ⁱ more additions. 

|𝒫(Xᵢ₊₁)| = 2ⁱ + 2ⁱ = 2^(i+1)

Since |𝒫(Xᵢ)| = 2ⁱ ⟹ |𝒫(Xᵢ₊₁)| = 2^(i+1)

∀i ∈ ℕ: |𝒫(Aᵢ)| = 2ⁱ

### 1.1 Operations on Sets

**Q.1 Prove (5’)**

**To Prove: A ⋃ (B ⋂ C) = (A ⋃ B) ⋂ (A ⋃ C)**

e ∈ (A ⋃ (B ⋂ C))

≡ {Definition of Union}

e ∈ A ∨ e ∈ (B ⋂ C)

≡ {Definition of Intersection}

e ∈ A ∨ (e ∈ B ∧ e ∈ C)

≡ {Distribution of disjunction over conjunction}

(e ∈ A ∨ e ∈ B) ∧ (e ∈ A ∨ e ∈ C)

≡ {Definition of Union, Definition of Intersection}

(A ⋃ B) ⋂ (A ⋃ C)

A more formal proof using property of set builder:

{x | x ∈ (A ⋃ (B ⋂ C))}

≡ {Definition of Set Union}

{x | x ∈ {y | y ∈ A ∨ y ∈ (B ⋂ C)}}

≡ {Definition of Set Intersection}

{x | x ∈ {y | y ∈ A ∨ y ∈ {z | z ∈ B ∧ z ∈ C}}}

≡ {Set Builder Property: z ∈ {x | 𝜑(x)} iff 𝜑(z)}

{x | x ∈ {y | y ∈ A ∨ (y ∈ B ∧ y ∈ C)}}

≡ {Set Builder Property: z ∈ {x | 𝜑(x)} iff 𝜑(z)}

{x | x ∈ A ∨ (x ∈ B ∧ x ∈ C)}

≡ {Distribution of disjunction over conjunction}

{x | (x ∈ A ∨ x ∈ B) ∧ (x ∈ A ∨ x ∈ C)}

≡ {Set Builder Property: z ∈ {x | 𝜑(x)} iff 𝜑(z) x 3}

{x | x ∈ {y | (y ∈ A ∨ y ∈ B)} ∧ x ∈ {z | (z ∈ A ∨ z ∈ C)}}

≡ {Definition of Union}

{x | (x ∈ A ⋃ B) ∧ (x ∈ A ⋃ C)}

≡ {Definition of Intersection}

(A ⋃ B) ⋂ (A ⋃ C)

**Q.2 Prove (6), (7), (8), (9)**

**(6) To Prove: (A’)’ = A**

x ∈ (A’)’

≡ {Definition of ‘}

x ∉ A’

≡ {Definition of ∉}

¬(x ∈ A’)

≡ {Definition of ‘}

¬(x ∉ A)

≡ {Definition of ∉}

¬(¬(x ∈ A))

≡ {Double negation}

x ∈ A

**(7) To Prove: A ⋂ A’ = Ø, A ⋃ A’ = U**

{x | x ∈ A ⋂ A’}

≡ {Definition of ⋂}

{x | x ∈ A ∧ x ∈ A’}

≡ {Definition of ‘}

{x| x ∈ A ∧ x ∉ A}

≡ {Definition of ∉}

{x | x ∈ A ∧ ¬(x ∈ A)}

≡ 

{x | false}

≡

Ø


x ∈ A ⋃ A’

≡ {Definition of ⋃}

x ∈ A ∨ x ∈ A’

≡ {Defintion of ‘}

x ∈ A ∨ (x ∉ A ∧ x ∈ U)

≡ {Disjunction distributes over conjunction}

(x ∈ A ∨ x ∉ A) ∧ (x ∈ A ∨ x ∈ U)

≡ {Definition of ∉}

(x ∈ A ∨ ¬(x ∈ A)) ∧ (x ∈ A ∨ x ∈ U)

≡ {p ∨ ¬p = true}

true ∧ (x ∈ A ∨ x ∈ U)

≡ {true ∧ p = p{ 

(x ∈ A ∨ x ∈ U)

≡ {Definition of Set Union}

A ⋃ U

≡ {A ⊂ U}

U

**(8) (A ⋂ B)’ = A’ ⋃ B’**

(A ⋂ B)’

≡ {Definition of ⋂}

{x | (x ∈ A ∧ x ∈ B)}’

≡ {Definition of ‘}

{y | y ∉ {x | x ∈ A ∧ x ∈ B}}

≡ {Definition of ∉}

{y | ¬(y ∈ {x | x ∈ A ∧ x ∈ B})}

≡ {Set Builder Property}

{y | ¬(y ∈ A ∧ y ∈ B})}

≡ {DeMorgan’s}

{y | (y ∉ A ∨ y ∉ B})}

≡ {Definition of ‘, Union}

A’ ⋃ B’


**(9) (A ⋃ B)’ = A’ ⋂ B’**

(A ⋃ B)’

≡ {Definition of ⋃, ‘, ∉}

{y | ¬(y ∈ {x | x ∈ A ∧ x ∈ B})}

≡ {Set Builder Property, DeMorgan’s}

{y | (y ∉ A ∧ y ∉ B})}

≡ {Definition of ‘, Intersection}

A’ ⋂ B’

**Q.3 Let N be the set of all positive integers, A the set of even integers, B the set of odd integers, and C, the set of multiples of three.**

**(a) Describe the sets A ⋂ C, B ⋂ C’, B ⋃ C. (C’ is the complement of C within N.)**

**(b) Verify that A ⋂ (B ⋃ C) = (A ⋂ B) ⋃ (A ⋂ C)**

(a)

A ⋂ C: All even integer multiples of three

B ⋂ C’: All odd numbers that are not multiple of three

B ⋃ C: All odd integers plus all multiples of three

(b)
A ⋂ (B ⋃ C) = (A ⋂ B) ⋃ (A ⋂ C)

Verifying:

LHS: A ⋂ (B ⋃ C) is all even multiples of three.

RHS: (A ⋂ B) is Ø and (A ⋂ C) is all even integer multiples of three. 

LHS = RHS

**Q.4 Prove that (A ⋂ B) ⋃ C = A ⋂ (B ⋃ C) if and only if C ⊂ A.**

[(A ⋂ B) ⋃ C = A ⋂ (B ⋃ C)] => C ⊂ A

≡ {Definition of Set Union, Definition of Set Intersection}

[(e ∈ A ∧ e ∈ B) ∨ (e ∈ C) = (e ∈ A) ∧ (e ∈ B ∨ e ∈ C)] => C ⊂ A

≡ {Definition of Subset}

[(e ∈ A ∧ e ∈ B) ∨ (e ∈ C) = (e ∈ A) ∧ (e ∈ B ∨ e ∈ C)] => [e ∈ C => e ∈ A]

≡ {Exportation} 

[(e ∈ A ∧ e ∈ B) ∨ (e ∈ C) = (e ∈ A) ∧ (e ∈ B ∨ e ∈ C)] ∧ e ∈ C => e ∈ A

C1. (e ∈ A ∧ e ∈ B) ∨ (e ∈ C) = (e ∈ A) ∧ (e ∈ B ∨ e ∈ C)

C2. e ∈ C

(e ∈ A ∧ e ∈ B) ∨ (e ∈ C) = (e ∈ A) ∧ (e ∈ B ∨ e ∈ C)

≡ {C2}

true = (e ∈ A)

**Q.5 If A and B are subsets of U, and B’ denotes the complement of B within U, prove that A ⋂ B’ = Ø if and only if A ⊂ B.**

A ⋂ B’ = Ø ⟺ A ⊂ B

A ⋂ B’ = Ø ⟹ A ⊂ B

{Definition of Set Intersection, Definition of Subset, Definition of null}

[e ∈ A ∧ e ∈ B’= false] ⟹ [e ∈ A ⟹ e ∈ B]

≡ {Exportation}

[(e ∈ A ∧ e ∈ B’ = false) ∧ e ∈ A] ⟹ e ∈ B

e ∈ B’ = false 

≡ {Definition of ‘, Definition of ∉}

¬(e ∈ B) = false

≡ {Negate both sides}

e ∈ B = true

⟹ e ∈ B


(⟸)

A ⊂ B ⟹ A ⋂ B’ = Ø

≡ {Definition of Set Intersection and Subset}

[e ∈ A ⟹ e ∈ B] ⟹ [e ∈ A ∧ e ∈ B’ = false]

≡ {Exportation}

[e ∈ A ∧ e ∈ B] ⟹ [e ∈ A ∧ e ∈ B’ = false]

C1. e ∈ A

C2. e ∈ B

e ∈ A ∧ e ∈ B’

≡ {C1}

e ∈ B’ 

≡ {Definition of ‘, Definition of ∉}

¬(e ∈ B)

≡ {C2, Contradiction}

false

**Q.6 For a finite set A, let o(A) denote the number of elements in A. If A and B are finite sets, prove that o(A ⋂ B) + o(A ⋃ B) = o(A) + o(B)**

o(A ⋃ B)

≡ o(A) + o(B - A)

≡ o(A) + o(B - A) + o(A ⋂ B) - o(A ⋃ B)

≡ o(A) + o((B - A) ⋃ (A ⋂ B)) - o(A ⋂ B)

≡ o(A) + o(B) -o(A ⋂ B)

**Q.7 For any sets A, B, and C, prove:**
**(a) C - (A ⋃ B) = (C - A) ⋂ (C - B)**

**(b) C - (A ⋂ B) = (C - A) ⋃ (C - B)**

**(c) B - (B - A) = A ⋂ B**

**(d) (A - B) ⋃ (B - A) = (A ⋃ B) - (A ⋂ B)**

(a)

C - (A ⋃ B)

≡ {Definition of Set Subtraction}

(e ∈ C) ∧ e ∉ (A U B)

≡ {Definition of ∉}

(e ∈ C) ∧ ¬(e ∈ (A U B))

≡ {Definition of Union}

(e ∈ C) ∧ ¬(e ∈ A ∨ e ∈ B))

≡ {De Morgan’s Law}

(e ∈ C) ∧ ¬(e ∈ A) ∧ ¬(e ∈ B)

(e ∈ C) ∧ ¬(e ∈ A) ∧ (e ∈ C) ∧ ¬(e ∈ B)

≡ {Definition of ∉}

[(e ∈ C) ∧ (e ∉ A)] ∧ [(e ∈ C) ∧ (e ∉ B)]

≡ {Definition of Intersection, Set Subtraction}

(C - A) ⋂ (C - B)

(b)

C - (A ⋂ B) = (C - A) ⋃ (C - B)

C - (A ⋂ B)

e ∈ C ∧ ¬(e ∈ A ∧ e ∈ B)

e ∈ C ∧ [¬(e ∈ A) ∨ ¬(e ∈ B)]

[(e ∈ C) ∧ ¬(e ∈ A)] ∨ [(e ∈ C) ∧ ¬(e ∈ B)]

(C - A) ⋃ (C - B)

(c)

B - (B - A) = A ⋂ B

B - (B - A)

≡ e ∈ B ∧ e ∉ (B - A)

≡ e ∈ B ∧ e ∉ [e ∈ B ∧ e ∉ A]

≡ e ∈ B ∧ ¬[e ∈ B ∧ e ∉ A]

≡ e ∈ B ∧ [¬(e ∈ B) ∨ ¬(e ∉ A)]

≡ [(e ∈ B) ∧ ¬(e ∈ B)] ∨ [(e ∈ B) ∧ ¬(e ∉ A)]

≡ [false ∨ [(e ∈ B) ∧ ¬(e ∉ A)]

≡ (e ∈ B) ∧ ¬(e ∉ A)

≡ (e ∈ B) ∧ (e ∈ A)

≡ B ⋃ A

≡ A ⋃ B

(d)

(A - B) ⋃ (B - A) = (A ⋃ B) - (A ⋂ B)

(A - B) ⋃ (B - A)

≡ (e ∈ A ∧ e ∉ B) ∨ (e ∈ B ∧ e ∉ A)

≡ [(e ∈ A ∧ e ∉ B) ∨ e ∈ B] ∧ [(e ∈ A ∧ e ∉ B) ∨  e ∉ A]

≡ [e ∈ B ∨ (e ∈ A ∧ e ∉ B)] ∧ [e ∉ A ∨ (e ∈ A ∧ e ∉ B)]

≡ [(e ∈ B ∨ e ∈ A) ∧ (e ∈ B ∨ e ∉ B)] ∧ [(e ∉ A ∨  e ∈ A) ∧ (e ∉ A ∨  e ∉ B)]

≡ [(e ∈ B ∨ e ∈ A) ∧ true] ∧ [true ∧ (e ∉ A ∨  e ∉ B)]

≡ (e ∈ B ∨ e ∈ A) ∧ (e ∉ A ∨ e ∉ B)

≡ (e ∈ A ∨ e ∈ B) ∧ ¬(e ∈ A ∧ e ∉ B)

≡ (A ⋃ B) - (A ⋂ B)

**Q.8 With an arbitrary (possibly infinite) index set I, prove that:**

**(a) A ⋃ ( ⋂ᵢ Bᵢ ) = ⋂ᵢ ( A ⋃ Bᵢ )**
**(b) A ⋂ ( ⋃ᵢ Bᵢ ) = ⋃ᵢ ( A ⋂ Bᵢ )**
**(c) ( ⋃ᵢ [ Aᵢ ] )‘ =  ⋂ᵢ [ ( Aᵢ )’ ]**
**(d) ( ⋂ᵢ [ Aᵢ ] )‘ =  ⋃ᵢ [ ( Aᵢ )’ ]**

(a)

A ⋃ ( ⋂ᵢ Bᵢ )

≡ {def U and ⋂ᵢ}

e ∈ A ∧ ∃i: ( e ∈ Bᵢ )

≡ {P ∧ ∃x [ Q(x) ] ⟺ ∃x [ P ∧ Q(x) ] where x must not occur free in P}

∃i: ( e ∈ A ∧ e ∈ Bᵢ )

≡ {def U and ⋂ᵢ}

⋂ᵢ ( A ⋃ Bᵢ )

(b)

A ⋂ ( ⋃ᵢ Bᵢ )

≡ {def ⋃ᵢ and ⋂}

e ∈ A ∨ ∀i: ( e ∈ Bᵢ )

≡ {P ∨ ∀x [ Q(x) ] ⟺ ∀x [ P ∨ Q(x) ] where x must not occur free in P}

∀i: ( e ∈ A ∨ e ∈ Bᵢ )

≡ {def ⋃ᵢ and ⋂}

⋃ᵢ ( A ⋂ Bᵢ )

(c)

⋃ᵢ [ Aᵢ ] )'

e ∈ ( ⋃ᵢ ( Aᵢ ) )'

e ∉ ( ⋃ᵢ ( Aᵢ ) )

e ∈ ( ⋂ᵢ ( Aᵢ )') 

⋂ᵢ [ ( Aᵢ )' ]

(d)

( ⋂ᵢ [ Aᵢ ] )’ 

e ∈ ( ⋂ᵢ [ Aᵢ ] )’

e ∉ ( ⋂ᵢ [ Aᵢ ] )

e ∈ ( ⋃ᵢ [ Aᵢ ]’ ) 

⋃ᵢ [ ( Aᵢ )’ ]

**Q.9 The symmetric difference of sets A and B is (A - B) ⋃ (B - A), i.e., all elements in A or in B but not in both. Write A + B for the symmetric difference and shorten A ⋂ B to AB.**

**(a) Prove that A(B + C) = AB + AC**
**(b) If you know the relevant definitions, prove that these operations make P(A) a commutative associative ring with the unit in which every element is idempotent. (Recall that P(A) is the power set of A - the set of all subsets of A.)**

(a)

A(B + C)

≡ {Definition of Symmetric Difference}

A[(B - C) ⋃ (C - B)]

≡ {Intersection Distributes over Union}

A(B - C) ⋃ A(C - B)

≡ {Intersection Distributes over Set Difference}

(AB - AC) ⋃ (AC - AB)

≡ {Definition of Symmetric Difference}

AB + AC

(b)

**Need to prove Commutative and Unitary Ring Axioms on (P(A), +, ⋃).**

TODO

**Q.10 Call a subset B of a set A cofinite if the complement of B in A is finite. If B and C are cofinite subsets of A, prove that B ⋂ C is cofinite.**

Definition: If B ⊂ A then B is cofinite in A if A ∧ B' if finite

More formally:

fin(X) is true if X is finite. 

cof(X, Y) is true if X is cofinite in Y. cof(X, Y) ⟺ (X ⊂ Y) ∧ fin(Y ∧ X')

cof(B, A) ∧ cof(C, A) ⟹ cof(B ⋂ C, A)

cof(B, A) ∧ cof(C, A)

≡ {Definition of cof}

[(B ⊂ A) ∧ fin(A ∧ B')] ∧ [(C ⊂ A) ∧ fin(A ∧ C')]

≡ {Theorem SubAnd}

[((B ∧ C) ⊂ A) ∧ fin(A ∧ B') ∧ fin(A ∧ C')]

≡ {Theorem FiniteAnd}

[((B ∧ C) ⊂ A) ∧ fin(A ∧ (B' ∧ C'))]

≡ {Definition of cof}

cof(B ⋂ C, A)


Theorem SubAnd: If two sets are a subset of a third then their union is also its subset

(B ⊂ A)  (C ⊂ A) ⟹ (B ⋃ C) ⊂ A

(B ⊂ A) ∧ (C ⊂ A)

≡ {Definition of Subset}

(e ∈ A ⟹ e ∈ B) ∧ (e ∈ A ⟹ e ∈ C)

≡ {if p ⟹ q and p ⟹ r then p ⟹ q ∧ r}

e ∈ A ⟹ (e ∈ B ∧ e ∈ C)

≡ {Definition of Subset, Definition of Union}

(B ⋃ C) ⊂ A


Theorem FiniteAnd: fin(X) ∧ fin(Y) ⟹ fin(X ∧ Y)

---

_Useful Theorems and Definitions_

Hypothetical Syllogism

((P ⇒ Q) ∧ (Q ⇒ R)) ⇒ (P ⇒ R)

Definition of Union

A ⋃ B = { e | e ∈ A ∨ e ∈ B }

Definition of Intersection

A ⋂ B = { e | e ∈ A ∧ e ∈ B }

Definition of Set Subtraction

A - B = { e | e ∈ A ∧ e ∉ B }

Definition of Complementation

A’ = { e | e ∉ A }

Definition of Subset

A ⊂ B = ∀e: (e ∈ A ⟹ e ∈ B)

Definition of Superset

A ⊃ B = ∀e: (e ∈ B ⟹ e ∈ A)

Definition 1 of Set Equality

A = B = ∀e: (e ∈ A ⟺ e ∈ B)

Definition 2 of Set Equality

A = B = ( A ⊂ B ) ∧ ( B ⊂ A ) 

Distribution of disjunction over conjunction

A ∨ (B ∧ C) ⟺ (A ∨ B) ∧ (A ∨ C)

Set Builder Property

z ∈ {x | 𝜑(x)} iff 𝜑(z)

Exportation

A ⟹ [B ⟹ C] ≡ [A ∧ B] ⟹ C

Definition of Symmetric Difference

A + B = (A - B) ⋃ (B - A) = (A ⋂ B’) ⋃ (B ⋂ A’)

Groups and Rings Definitions

Algebraic Structure: An algebraic structure is an ordered tuple `(S, ○_1, ○_2, ..., ○_n)` where S is a set which has one or more binary operations `○_1, ○_2, …` defined on all elements of S × S.

Closure: For the algebraic structure (S, ○), S is closed under ○ if and only if ∀(x, y) ∈ S × S : x ○ y ∈ S. 

Left identity: For (S, ○), e ∈ S if a left identity if and only if x ∈ S : e ○ x = x. 

Right identity: For (S, ○), e ∈ S if a right identity if and only if ∀ x ∈ S : x ○ e = x. 

Identity: For (S, ○), e ∈ S is an identity element if and only if it is both left identity and right identity. ∀x in S : x ○ e = x = e ○ x.

Left inverse: (S, ○) is a monoid whose identity is e. Then x ∈ S is a left inverse of y if and only if x ○ y = e.

Right inverse: (S, ○) is a monoid whose identity is e. Then x ∈ S is a right inverse of y if and only if y ○ x = e. 

Inverse: (S, ○) is an algebraic structure with an identity element e and x, y ∈ S. Then x is an inverse of y if and only if x is both a left inverse of y and a right inverse of y. x ○ y = e = y ○ x.

Magma: (S, ○) where S is closed under ○.

Semigroup: A semigroup is an associative magma. 

Monoid: Monoid is a semigroup with an identity element.

Group: A group is a semigroup with a monoid in which every element has an inverse. Group Axioms:

`(G0): Closure: ∀a, b ∈ G: a ○ b ∈ G`

`(G1): Associativity: ∀a, b, c  ∈ G: a ○ (b ○ c) = (a ○ b) ○ c`

`(G2): Identity: ∃e ∈ G: ∀a ∈ G: e ○ a = a = a ○ e`

`(G3): Inverse: ∀a ∈ G: ∃b ∈  G: a ○ b = e = b ○ a`

Abelian group: is a group `(G, *)` where ∀a, b ∈ G : a * b = b * a. Every element in G commutes with every other element in G. Abelian Group Axioms:

`(G0): Closure: ∀x, y ∈ G: x ○ y ∈ G: x ○ y ∈ G`

`(G1): Associativity: ∀x, y, z ∈ G: x ○ (y ○ z) = (x ○ y) ○ z`

`(G2): Identity: ∃ e ∈ G : ∀x ∈ G: e ○ x = x = x ○ e`

`(G3): Inverse: ∀y ∈ G: ∃x ∈ G: x ○ y = e  = y ○ x`

`(C): Commutativity: ∀a, b ∈ G : a ○ b = b ○ a`

Ringoid: A ringoid is a triple `(S, *, ○)` where S is a set, `*` and `○` are binary operations on S, the operation `○` distributes over `*`. 

`∀a, b, c, ∈ S : a ○ (b * c) = (a ○ b) * (a ○ c)`

`∀a, b, c, ∈ S : (a * b) ○ c = (a ○ c) * (b ○ c)`

For the expression above to make sense, S has to be closed under ○ and +.

Semiring: A semiring is a ringoid `(S, *, ○)` in which  `(S, *)` forms a semigroup and `(S, ○)` forms a semigroup. Semiring Axioms:

`(A0): ∀a, b ∈ S: a * b ∈ S`

`(A1): ∀a, b, c ∈ S: (a * b) * c = a * (b * c)`

`(M0): ∀a, b ∈ S: a ○ b ∈ S`

`(M1): ∀a, b, c ∈ S: (a ○ b) ○ c = a ○ (b ○ c)`

`(D1): ∀a, b, c ∈ S: a ○ (b * c) = (a ○ b) * (a ○ c)`

`(D2): ∀a, b, c ∈ S: (a * b) ○ c = (a ○ c) * (b ○ c)`

Ring: A ring `(R, *, ○)` is a semiring in which (R, ○) forms an abelian group. 

```
                    Totality Associativity Identity Invertibility   Commutativity
Semigroupoid        r        g             r        r               r
Small Category      r        g             g        r               r
Grupoid             r        g             g        g               r
Magma               g        r             r        r               r
Quasigroup          g        r             r        g               r
Unital Magma        g        r             g        r               r
Loop                g        r             g        g               r
Semigroup           g        g             r        r               r
Inverse Semigroup   g        g             r        g               r
Monoid              g        g             g        r               r
Commutative Monoid  g        g             g        r               g
Group               g        g             g        g               r
Abelian Group       g        g             g        g               g
```

Ring with unity: `(R, *, ○)` is a ring with unity if and only if the multiplicative semigroup (R, ○) has an identity element. 

Commutative and Unitary Ring: `(R, *, ○)` is a ring with unity which is also commutative.

```
(A0): Closure under *: ∀a, b ∈ R: a * b ∈ R
(A1): Associativity of *: ∀a, b, c ∈ R: (a * b) * c = a * (b * c)
(A2): Commutativity of *: ∀a, b ∈ R: a * b = b * a
(A3): Identity element for *: ∃e ∈ R: ∀a ∈ R: a * e = a = 0 * a
(A4): Inverse elements for *: ∀a ∈ R: ∃a’ ∈ R: a * a’ = e = a’ * a
(M0): Closure under ○: ∀a, b ∈ R: a ○ b ∈ R
(M1): Associativity of ○: ∀a, b, c ∈ R: (a ○ b) ○ c = a ○ (b  ○ c)
(M2): Commutativity of ○: ∀a, b ∈ R: a ○ b = b ○ a
(M3): Identity element for ○: ∃f ∈ R: ∀a ∈ R: a ○ f = a = f ○ a
(D): ○ is distributive over *:  ∀a, b, c ∈ R: a ○ (b * c) = (a ○ b) * (a ○ c) ∧ (a * b) ○ c = (a ○ c) * (b ○ c)
```

Symmetric Difference is Associative and Commutative

Theorem SD0: Set Difference is Commutative

A + B ≡ B + A

A + B

≡ {Definition of Symmetric Difference}

(A ⋂ B’) ⋃ (B ⋂ A’)

≡ {Union is commutative}

(B ⋂ A’) ⋃ (A ⋂ B’)

≡ {Definition of Symmetric Difference}

B + A

Theorem SD1: Symmetric Difference is the union of the two sets intersected with the union of their complements

A + B = (A ⋃ B) ⋂ (A’ ⋃ B’)

A + B

≡ {Definition of Symmetric Difference}

(A ⋂ B’) ⋃ (B ⋂ A’)

≡ {Union Distributes over Intersection}

[(A ⋂ B’) ⋃ B] ⋂ [(A ⋂ B’) ⋃ A’]

≡ {Union Distributes over Intersection}

[(A ⋃ B) ⋂ (B’ ⋃ B)] ⋂ [(A ⋃ A’) ⋂ (B’ ⋃ A’)]

≡ {Union of a set with its complement is U}

[(A ⋃ B) ⋂ U] ⋂ [U ⋂ (B’ ⋃ A’)]

≡ {Intersection of a set with U is the set itself}

(A ⋃ B) ⋂ (B’ ⋃ A’)

≡ {Union is commutative}

(A ⋃ B) ⋂ (A’ ⋃ B’)


Theorem SD2: Complement of Symmetric Difference

(A + B)’ = (A’ ⋃ B) ⋂ (A ⋃ B’)

(A + B)’

≡ {Definition of Symmetric Difference}

((A ⋂ B’) ⋃ (B ⋂ A’))’

≡ {De Morgan’s Law}

((A ⋂ B’)’ ⋂ (B ⋂ A’)’)

≡ {De Morgan’s Law}

(A’ ⋃ B) ⋂ (B’ ⋃ A)

Theorem SD3: Expansion of Triple Symmetric Difference

(A + B) + C = (A ⋃ B ⋃ C) ⋂ (A’ ⋃ B’ ⋃ C) ⋂ (A’ ⋃ B ⋃ C’) ⋂ (A ⋃ B’ ⋃ C’)

(A + B) + C

≡ {Theorem SD1 on (A + B) and C}

((A + B) ⋃ C) ⋂ ((A + B)’ ⋃ C’)

≡ {Theorem SD1 on A and B}

([(A ⋃ B) ⋂ (A’ ⋃ B’)] ⋃ C) ⋂ ((A + B)’ ⋃ C’)

≡ {Theorem SD2 on (A + B)’}

([(A ⋃ B) ⋂ (A’ ⋃ B’)] ⋃ C) ⋂ ((A’ ⋃ B) ⋂ (A ⋃  B’) ⋃ C’)

≡ {Union Distributes over Intersection}

[(A ⋃ B ⋃ C) ⋂ (A’ ⋃ B’ ⋃ C)] ⋂ [(A’ ⋃ B ⋃ C’) ⋂ (A ⋃ B’ ⋃ C’)]

≡ {Intersection is Associative}

(A ⋃ B ⋃ C) ⋂ (A’ ⋃ B’ ⋃ C) ⋂ (A’ ⋃ B ⋃ C’) ⋂ (A ⋃ B’ ⋃ C’)

Theorem SD4: Symmetric Difference is Associative

(A + B) + C = A + (B + C)

(A + B) + C

≡ {Theorem SD3: Expansion of Triple Symmetric Difference}

(A ⋃ B ⋃ C) ⋂ (A’ ⋃ B’ ⋃ C) ⋂ (A’ ⋃ B ⋃ C’) ⋂ (A ⋃ B’ ⋃ C’)

≡ {Union is Commutative}

(B ⋃ C ⋃ A) ⋂ (B’ ⋃ C ⋃ A’) ⋂ (B ⋃ C’ ⋃ A’) ⋂ (B’ ⋃ C’ ⋃ A)

≡ {Intersection is Associative}

(B ⋃ C ⋃ A) ⋂  (B’ ⋃ C’ ⋃ A) ⋃ (B’ ⋃ C ⋃ A’) ⋂ (B ⋃ C’ ⋃ A’)

≡ {Theorem SD3: Expansion of Triple Symmetric Difference}

(B + C) + A

≡ {SD0: Set Difference is Commutative}

A + (B + C)
