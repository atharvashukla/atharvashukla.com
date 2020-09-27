# Lambda Calculus to De Bruijn Compiler



```
#lang racket

; <Lam>  := <id>
;        | (lambda (<id>) <Lam>)
;        | (<Lam> <Lam>)

; <LamDB> := <nat>
;         | <LamBD>
;         | (<LamBD> <LamBD>)


; Lam -> LamBD
; convert to de-bruijn
(define (compile/db lam [vars '()])
  (match lam
    [(? symbol?) (index-of vars lam)]
    [`(λ (,var) ,body) `(λ ,(compile/db body (cons var vars)))]
    [`(,fun ,arg) `(,(compile/db fun vars) ,(compile/db arg vars))]))

(module+ test
  (require rackunit)
  (check-equal?
   (compile/db `((λ (x) (λ (y) (λ (z) (λ (y) (x (y z))))))
                 (λ (x) x)))
   '((λ (λ (λ (λ (3 (0 1)))))) (λ 0))))
```