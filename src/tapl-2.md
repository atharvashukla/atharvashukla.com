# TAPL1

- 2 - Mathematical Preliminaries
  - 2.1 - Sets, Relations, and Functions
    - 2.1.1 - Sets stuff. Notations, and operations. 
    - 2.1.2 - Set of natural numbers - N
    - 2.1.3 - n-place relation when each element of the sets is related by producing a tuple
    - 2.1.5 - binary relation - R - produces tuple of two which belongs to R. 
    - 2.1.6 - triple relation
    - 2.1.7 - domain the first element of tuple, range is the second (for any second/first respectively)
    - 2.1.8 - partial function, when tuples with t1, 2 belong to R, and t1 = t2. Total when domain of R is S (ffunc from S to T)
    - 2.1.9 - partial function is _defined_ on s iff s in in domain. the notation with up arrow is used to say that f is undefined. down arrow = defined. 
    - 2.1.10 - some predicate is preserved when it holds after the relation. 
  - 2.2 - ordered sets
    - 2.2.1 - binary relation is reflexive if R related every element to itself. Symmetric if sRt => tRs. transitive if (sRt /\ tRu) => sRu. antisymmetric: sRt /\ tRs => s = t
    - reflexive + transitive = preorder. preorder with antisymmetry  = partial order. total order if wither off the two elements are guaranteed to be ordered. 
    - 2.2.3 j is lub(join) iff s <= j, t <= j and for any k in S, s <= k, t <= k we have j <= k. 
    meet (glb): m <= s, m <= t. for any n in S, n <= s and n <= t. n <= m
    - reflecive, transitive, symmetric relation on S -- equivalence on S
    - 2.2.5 refflexive closure, transitive closure. 
    - EX 2.2.6 ...
    - EX 2.2.7 ...
    - EX 2.2.8 ...
    - 2.2.9 we have preorder <= on S decreasing chain  in <= is s1, s2, s3... of S : each member of seq is lt its pred (chains can be finite and infinite)
    - 2.2.10 set with preorder <=. <= is well founded if it contains not infinite decreasing chains. nats are well founded. integers are not. "well founded set"
  - 2.3 - Sequences
    - 2.3.1 - comma is more like a consbut overloaded for append when used with another seq on lhs. 
  - 2.4 - Induction: pretty common
    - 2.4.1 principle of ordinary induction on natural numbers. P is a pred on nats. If P(0) and for all i, P(i) => P(i + 1), then P(n) holds for all n. 
    - 2.4.2 principle of complete induction on natural numbers. if for each nat n, given P(i) forall i < n, we can show P(n). then P(n) holds for all n.  
    - 2.4.3 lexicographical order on pairs off natural numbers (m, n) <= (m', n') iff m < m' or else m = m' /\ n <= n'
    - 2.4.4 Principle of lexicographic induction. P is predicate on pairs of natural numbers. If rach pair (m, n) of natural numbers, given P(m', n') for all (m', n') < (m, n) we can show P(m, n), then P(m, n) holds for all (m, n). 
  - 2.5 Background reading: Winskel, David and Priestley, Halmos. 

see: _Adequacy_

---