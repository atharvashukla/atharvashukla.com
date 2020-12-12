# Matching Parenthesis checker in Racket


```
; ParenString -> Boolean
; are the parenthesis balanced?
(define (isbalanced parens)
  (local (; String -> Boolean
          (define (isopen? p)
            (string=? p "("))
          ; String -> Boolean
          (define (isclosed? p)
            (string=? p ")"))

          ; String String -> Boolean
          ; ) matches ( in the "stack"
          (define (is-matching p1 p2)
            (and (isclosed? p1) (isopen? p2)))

          ; String -> [List-of 1String]
          ; is p balanced?
          ; Accumulator `l` is a stack that
          ; "matches" (in our sense) each 1String
          (define (isbalanced/l p l)
            (cond [(empty-string? p) (empty? l)]
                  [(isopen? (string-first p))
                   (isbalanced/l (string-rest p) (cons (string-first p) l))]
                  [(isclosed? (string-first p))
                   (and (not (empty? l)) (is-matching (string-first p) (first l))
                        (isbalanced/l (string-rest p) (rest l)))]
                  [else "not a parenthesis"])))
    (isbalanced/l parens '())))

; String -> String
; is s an empty  string?
(define (empty-string? s)
  (string=? "" s))

; NEString -> String
; first 1String of s
(define (string-first s)
  (substring s 0 1))

; NEString -> String
; all except the first 1String of s
(define (string-rest  s)
  (substring s 1 (string-length s)))
```