# Type Systems

## Lecture 1

```
-----
Terms
-----

n := 0 | s n

We'll see this as a tree (don't worry about parsing)

              n    <--  if n is a metavariable
-----  and  ----- 
  z          S n   <-- then S n is also a term


How is this interpreted?

T = Smallest set such that (z ∈ T) and (if n ∈ T then S n ∈ T)

S = U_(S_i) (ininite union like: U_0)

S_0     = {}
S_(i+1) = { z } ⋃ { (S n) | n ∈ s_i }  

^ Helps actually construct it.

----------------
Prove that S = T
----------------

Need to prove that "S has the properties" and "S is smallest"

Prove (z ∈ S): S_1 = { z } ⋃ { ... }, so z ∈ S_1, so z ∈ S [<-- the first property]

Prove (if n ∈ S then S n ∈ S)                           [<-- the second property]

S_(i+1) = {z} ⋃ { S n | n ∈ S_i}                        [<-- definition of S]

If n ∈ S then n ∈ S_k then S n ∈ S_(k+1) => ((S n) ∈ S) [<-- proving property 2 using definition of S]


How to show it's the smallest set?

Show if U satisies the properties then S ⊆ U

{ We want to show: whatever is in S will also be in U }

Prove S_i ⊆ U ∀i 
      S = Union over all S_i ⊆ U

Prove by Induction

Base case S_0 ⊆ U, Empty set is a subset of all sets. 

Assume S_i ⊆ U

Prove S_(i+1) ⊆ U

S_(i+1) = {z} ⋃ {S n | n ∈ S_i}

- {z} will be in U (by definition of the properties)
- By IH, S_I ∈ U eill br in

So S_(i+1) is in U. 

So S ⊆ U

---------------














































```