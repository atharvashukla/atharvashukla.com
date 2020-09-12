# SetTheory
```
Set Theory and Metric Spaces - Irving Kaplansky


1 Basic Set Theory

1.1 Inclusion

Q.1
A set A has the property that A ⊂ B holds for any set B. Prove that A = Ø.

“A set A has the property that A ⊂ B holds for any set B” is assumed to be true in the problem statement. Consider the case where B = Ø. A has to be Ø because the only subset of Ø is Ø. 

Q.2
Let A, B and C be sets satisfying A ⊂ B, B ⊂ C, and C ⊂ A. Prove that A = B = C.

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


Q.3
How many elements are there in the following sets: Ø, {Ø}, {{Ø}}, {Ø, {Ø}}, {Ø, Ø}? 0, 1, 1, 2, 2 respectively

Q.4
List all inclusions that hold among the following sets: 

(a) A = {2, 4, 6}
(b) B = {2, 4, 6, 8}
(c) C = Ø
(d) D = all even integers between 1 and 9

(a) {}, {2}, {4}, {6}, {2, 4}, {2, 6}, {4, 6}, {2, 4, 6}
(b) {}, {2}, {4}, {6}, {8}, {2, 4}, {2, 6}, {2, 8}, {4, 6}, {4, 8}, {6, 8}, {2, 4, 6}, {4, 6, 8}, {2, 4, 8}, {2, 6, 8}, {2, 4, 6, 8}
(c) {}
(d) D = {2, 4, 6, 8} so it’s the answer is same as (b)

Q.5
List all inclusions that hold among the following sets:

(a) all integers from 1 to 9 satisfying x^2 - 5x = 14
(b) B = {2, 7}
(c) C = {-2, 7}
(d) D = {7}

(a) x^2 - 5x = 14 ≡ (x - 2)(x + 7) so x = 2 or x = -7. The set is {2}. Set of all subsets: {{}, {2}}
(b) {{}, {2}, {7}, {2, 7}}
(c) {{}, {-2}, {7}, {-2, 7}}
(d) {{}, {7}}

Q.6
List all the subsets of {1, 2}. How many subsets are there? {{}, {1}, {2}, {1, 2}}

Q.7
List all the subsets of {1, 2, 3}. How many subsets are there? {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}

Q.8
The preceding two exercises have invited the guess that the set with n elements has 2^n subsets. Prove this. (Hint: You can argue directly that n decisions have to be made, in each of which there are two possibilities: including or excluding a given element. Alternatively, the proof may be given by induction. Assume that there are 2^(n-1) subsets of {1, 2, …, n-1}. To each of these n might or might not be adjoined.)


To prove: |𝒫(Aᵢ)| = 2ⁱ where Aᵢ means |A| = i. 
Case |X| = 0: The only set whose size is 0 is Ø. Ø is the only subset of Ø, so its power set, 𝒫(A_0) = {Ø}. Therefore |𝒫(X_0)| = |{Ø}| = 1.

Case |X| = i: Assume |𝒫(Xᵢ)| = 2ⁱ

Case |X| = i + 1: Consider some element e ∈ X, and make a set Xᵢ = Xᵢ₊₁ - {e}. |Xᵢ| = i. And from the inductive hypothesis. |𝒫(Xᵢ)| = 2ⁱ. 

|𝒫(Xᵢ₊₁)| = |𝒫(Xᵢ)| + |𝒫(Xᵢ with e adjoined to each element)|
Adding the element e back to each does not change their number, so there are 2ⁱ more additions. 

|𝒫(Xᵢ₊₁)| = 2ⁱ + 2ⁱ = 2^(i+1)

Since |𝒫(Xᵢ)| = 2ⁱ ⟹ |𝒫(Xᵢ₊₁)| = 2^(i+1)

∀i ∈ ℕ: |𝒫(Aᵢ)| = 2ⁱ
1.1 Operations on Sets

Q.1
Prove (5’)

To Prove: A ⋃ (B ⋂ C) = (A ⋃ B) ⋂ (A ⋃ C)

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

Q.2
Prove (6), (7), (8), (9)

(6) To Prove: (A’)’ = A

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

(7) To Prove: A ⋂ A’ = Ø, A ⋃ A’ = U

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

(8) (A ⋂ B)’ = A’ ⋃ B’

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


(9) (A ⋃ B)’ = A’ ⋂ B’

(A ⋃ B)’
≡ {Definition of ⋃, ‘, ∉}
{y | ¬(y ∈ {x | x ∈ A ∧ x ∈ B})}
≡ {Set Builder Property, DeMorgan’s}
{y | (y ∉ A ∧ y ∉ B})}
≡ {Definition of ‘, Intersection}
A’ ⋂ B’

Q.3
Let N be the set of all positive integers, A the set of even integers, B the set of odd integers, and C, the set of multiples of three. 

(a) Describe the sets A ⋂ C, B ⋂ C’, B ⋃ C. (C’ is the complement of C within N.)
(b) Verify that A ⋂ (B ⋃ C) = (A ⋂ B) ⋃ (A ⋂ C)

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

Q.4
Prove that (A ⋂ B) ⋃ C = A ⋂ (B ⋃ C) if and only if C ⊂ A.

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

Q.5
If A and B are subsets of U, and B’ denotes the complement of B within U, prove that A ⋂ B’ = Ø if and only if A ⊂ B.

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

Q.6
For a finite set A, let o(A) denote the number of elements in A. If A and B are finite sets, prove that o(A ⋂ B) + o(A ⋃ B) = o(A) + o(B)

o(A ⋃ B)
≡ o(A) + o(B - A)
≡ o(A) + o(B - A) + o(A ⋂ B) - o(A ⋃ B)
≡ o(A) + o((B - A) ⋃ (A ⋂ B)) - o(A ⋂ B)
≡ o(A) + o(B) -o(A ⋂ B)
Q.7
For any sets A, B, and C, prove:
(a) C - (A ⋃ B) = (C - A) ⋂ (C - B)
(b) C - (A ⋂ B) = (C - A) ⋃ (C - B)
(c) B - (B - A) = A ⋂ B
(d) (A - B) ⋃ (B - A) = (A ⋃ B) - (A ⋂ B)

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

Q.8
With an arbitrary (possibly infinite) index set I, prove that:

(a) A ⋃ ( ⋂ᵢ Bᵢ ) = ⋂ᵢ ( A ⋃ Bᵢ )
(b) A ⋂ ( ⋃ᵢ Bᵢ ) = ⋃ᵢ ( A ⋂ Bᵢ )
(c) ( ⋃ᵢ [ Aᵢ ] )‘ =  ⋂ᵢ [ ( Aᵢ )’ ]
(d) ( ⋂ᵢ [ Aᵢ ] )‘ =  ⋃ᵢ [ ( Aᵢ )’ ]

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

Q.9
The symmetric difference of sets A and B is (A - B) ⋃ (B - A), i.e., all elements in A or in B but not in both. Write A + B for the symmetric difference and shorten A ⋂ B to AB. 

(a) Prove that A(B + C) = AB + AC
(b) If you know the relevant definitions, prove that these operations make P(A) a commutative associative ring with the unit in which every element is idempotent. (Recall that P(A) is the power set of A - the set of all subsets of A.)

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
Need to prove Commutative and Unitary Ring Axioms on (P(A), +, ⋃). 
TODO

Q.10
Call a subset B of a set A cofinite if the complement of B in A is finite. If B and C are cofinite subsets of A, prove that B ⋂ C is cofinite. 

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
```