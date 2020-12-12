# The Lambda Lecture

```
#lang lazy

(define (pair A B)
  (λ (sel)
    (sel A B)))


(define (fst A B) A)
(define (snd A B) B)


(define (cnd C T E) ;; laziness
  (C T E))


(define (truth A B) A)
(define (falsity A B) B)

;; ---

(define Z (λ (f) (λ (x) x)))

(define (succ N)
  (λ (f)
    (λ (x)
      (f ((N f) x)))))


;; I/O
(define (n->i N) ((N add1) 0))
(define (i->n i) (if (zero? i) Z (succ (i->n (sub1 i)))))

(define ((add M) N) ;; curried
  ((M succ) N))

(define ((mult M) N)
  ((M (add N)) Z))

(define (Z? N)
  ((N (lambda (_) falsity)) truth))

#|

  < 0, 0 > 0 copy snd, succ snd
  < 0, 1 > 1
  < 1, 2 > 2
  < 2, 3 > 3
  < 3, 4 > 4

|#


(define (pred N)
  (((N (λ (p)
         (pair (p snd)
               (succ (p snd)))))
    (pair Z Z))
   fst))


(define Y
  (λ (g)
    ((λ (f) (f f))
     (λ (f) (g (f f))))))


(define fact
  (Y
   (λ (fct)
     (λ (n)
       (cnd (Z? n)
           (i->n 1)
           ((mult n) (fct (pred n))))))))


(n->i (fact (i->n 5)))
; = 120
```