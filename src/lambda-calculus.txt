# Untyped Lambda Calculus

### Basics

**What is the Grammar of Lambda Calculus?**

```
t ::=       terms
    x       variable
    λx.t    abstraction
    t t     application
```

**How are things grouped together?**
  - application associates to the left: s t u = (s t) u
  - bodies of abstractions are taken to extend as far to the right as possible. λx. λy. x y x = λx. (λy. ((x y) x))

**What is [x ↦ t_2]t_12 in (λx.t_12)t_2 ⟶ [x ↦ t_2]t_12?** The term obtained by replacing all free occurrences of x in t_12  t_2.

**What is a *free variable*?** An occurrence of x is *free* if it appears in a position where it is not bound by an enclosing straction on x.

**What is a *redex*?** A term of the form (λx.t_12) t2

**What is a *closed* term?** A term with no free variables

**What is a *beta reducion*?** Applying (λx.t_12)t_2 ⟶ [x ↦ t_2]t_12 on a *redex*

**What are the various evaluation strategies?**
  - *full beta-reduction*: any redex can be reduced at any time
  - *normal order strategy*: leftmost, outermost redex is reduced first
  - *call by name*: normal order + no reductions inside abstractions. optimized version: *call by need*
  - *call by value*: normal order +  redex is reduced only when its rhs is reduced to a value

### Programming in the Lambda Calculus

**How to get multiple arguments?** f = λ(x, y).s can be rewritten as f = λx.λy.s. Instead of f v w, we apply like: ((f v) w). 

**How to implement Booleans?** 

```
tru = λt. λf. t;
fls = λt. λf. f;
```

**How to implement boolean operators?**

```
and  = λb. λc. b c fls;
or   = λb. λc. b tru c;
not  = λb. b fls tru;
```


**How to implement Pairs?**


```
pair = λf. λs. λb b f s;
fst  = λp. p tru;
snd  = λp. p fls;
```

**How to implement Numbers?**

c_0 = λs. λz. z;
c_1 = λs. λz. s z;
c_2 = λs. λz. s (s z);
c_3 = λs. λz. s (s (s z));
etc.

takes in a succ (s) and 0 and applies succ to n times to 0.

scc = λn λs. λz. s (n s z)

scc takes in a church numeral and applies the successor to it

Another successor func:

scc = λn λs. λz. n (s (s z))

plus = λm. λn. λs λz. m s (n s z)

times = λm. λn. m (plus n) c_0

Is it possible to define times w/o using plus?

expt = `l

