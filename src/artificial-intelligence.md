# Artificial Intelligence

- [A\*](https://en.wikipedia.org/wiki/A*_search_algorithm)
  - [Shakey](https://en.wikipedia.org/wiki/Shakey_the_robot)
  - [Nils Nilsson](https://en.wikipedia.org/wiki/Nils_John_Nilsson)
  - Bertram Raphael: suggested adding g(n) to h(n)
  - Peter Hart: [admissibility](https://en.wikipedia.org/wiki/Admissible_heuristic) and [consistency](https://en.wikipedia.org/wiki/Consistent_heuristic)


**[Best-first search](https://en.wikipedia.org/wiki/Best-first_search)** is a search algorithm which explores a graph by expanding the most promising node chosen according to a specified rule.

> Estimating the promise of node n by a "heuristic evaluation function f(n) which, in general, may depend on the description of n, the description of the goal, the information gathered by the search up to that point, and most important, on any extra knowledge about the problem domain."

-- Judea Pearl


Search evaluation function for A\*: f(n) = g(n) + h(n)

- `f(n)` = the evaluation function
- `g(n)` = the cost from the start node to the current node
- `h(n)` = estimated cost from current node to goal

**[Admissible](https://en.wikipedia.org/wiki/Admissible_heuristic)**: if it never overestimates the cost of reaching the goal, i.e. the cost it estimates to reach the goal is not higher than the lowest possible cost from the current point in the path

- n is a node
- h is a heuristic
- h(n) is cost indicated by h to reach a goal from n
- h\*(n) is the optimal cost to reach a goal from n
- h(n) is admissible if, ∀ n h(n) <= h\*(n)

2 admissible heuristics for [Fifteen puzzle](https://en.wikipedia.org/wiki/Fifteen_puzzle) problem: 
- [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance)
- [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance)


**[Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic)**: if its estimate is always less than or equal to the estimated distance from any neighbouring vertex to the goal, plus the cost of reaching that neighbour.


[**Dijkstra's shortest path algorithm**](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

Shortest path (and distance) from a given vertex to every other vertex in the graph

Result for the graph above:

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           |
|   B    |      3        |     D     |
|   C    |      7        |     E     |
|   D    |      1        |     A     |
|   E    |      2        |     D     |
+--------+---------------+-----------+
```

Shortest paths:

```
From A to B: A -> D -> B        3
From A to C: A -> D -> E -> C   E
From A to D: A -> D             1
From A to E: A -> D -> E        2
```

Will be using 2 lists:

(initially): 

Visited  = []

Unvisited = [A, B, C, D, E]

Consider the start vertex, A

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

The Distance to A from A = 0

Distance to all other vertices from A are unfnown, therefore `infinity`

Include that info in the table:

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           |
|   B    |    infinity   |           |
|   C    |    infinity   |           |
|   D    |    infinity   |           |
|   E    |    infinity   |           |
+--------+---------------+-----------+
```

For the current vertex, examine its unvisited neighbours

We are currently visiting A and its unvisited neighbours are B and D

For the current vertex, calculate the distance for each neighbour from the start vertex

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

A to B = 0 + 6 = 6

A to D = 0 + 1 = 1

If the calculated distance of a vertex is less than the known distance, update the shortest distance

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           |
|   B    |      6        |           |
|   C    |    infinity   |           |
|   D    |      1        |           |
|   E    |    infinity   |           |
+--------+---------------+-----------+
```

Update the previous vertex for each of the updated distancees

In this case we visited B and D via A

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           |
|   B    |      6        |    A      |
|   C    |    infinity   |           |
|   D    |      1        |    A      |
|   E    |    infinity   |           |
+--------+---------------+-----------+
```

Add the current vertex to the list of visited vertices


Visited: [A]

Unvisited: [B, C, D, E]

Now. The algorithm begins to repeat

Visit the unvisited vertex with the smallest known distance from the start vertex

This time around, it is vertex D

For the current vertex, examine its unvisited neighbours

We are currently visiting D and its unvisited neighbours are B and E

For the current vertex, calculate the distance of each neighbour from the start vertex

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

D to B = 1 + 2 = 3

D to E = 1 + 1 = 2

If the calculated distance of a vertex is less than the known distance, update the shortest distance


```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    A      |
|   C    |    infinity   |           |
|   D    |      1        |    A      |
|   E    |      2        |           |
+--------+---------------+-----------+
```

Update the previous vertex for each of the updated distances

In this case we visited B and E via D

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    D      |
|   C    |    infinity   |           |
|   D    |      1        |    A      | V
|   E    |      2        |    D      |
+--------+---------------+-----------+
```

Add the current vertex to the list of visited vertices

Visited: [A, D]

Unvisited: [B, C, E]

Visit the unvisited vertex with the smallest known distance from the start vertex

This time around, it is vetex E

For the current vertex, examine its unvisited neighbours

We are currently visiting E and its unvisited neighbours are B and C

For the current vertex, calculate the distance of each neighbour from the start vertex

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

From E to B: 2 + 2 = 4

From E to C: 2 + 5 = 7

If the calculated distance of a vertex is less than the known distance, update the shortest distance

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    D      |
|   C    |      7        |           |
|   D    |      1        |    A      | V
|   E    |      2        |    D      |
+--------+---------------+-----------+
```

We do not need to update the distance to B

Update the previous vertex for each of the updated distances

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    D      |
|   C    |      7        |    E      |
|   D    |      1        |    A      | V
|   E    |      2        |    D      |
+--------+---------------+-----------+
```

In this case we visited C via E.

Add the current vertex to the list of visited vertices

Visited: [A, D, E]

Unvisited: [B, C]

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    D      | V
|   C    |      7        |    E      |
|   D    |      1        |    A      | V
|   E    |      2        |    D      | V
+--------+---------------+-----------+
```

Visit the unvisited vertex with the smallest known distance from the start vertex

This time around, it is vertex B

For the current vertex, examine its unvisited neighbours

We are currently visiting B and its only unvisited neighbout is C

For the current vertex, calculate the distance of each neighbour from the start vertex

```
A--6---B\  
|     /| 5 
|    / |  \ 
|   2  |   C
1  /   2  /
| /    | 5
|/     |/
D---1--E
```

B to C: 3 + 5 = 8

If the calculated distance of a vertex is less than the known distance, update the shortest distance

We do not need to update the distance to C

Update the previous for each of the updated distaces

No distances were updated, so we don't need to do this either

Add the current vertex to the list of visited vertices

Visited: [A, D, E, B]

Unvisited: [C]

```
+--------+---------------+-----------+
|        | Shortest      |  Previous |
| Vertex | Dist from A   |   vertex  |
+--------+---------------+-----------+
|   A    |      0        |           | V
|   B    |      3        |    D      | V
|   C    |      7        |    E      | V
|   D    |      1        |    A      | V
|   E    |      2        |    D      | V
+--------+---------------+-----------+
```

Visit the unvisited verted with the smallest known distance from the start vertex

This time around, it is vertex C

For the current vertex, examine its unvisited neighbours

We are currently visiting C and it has no unvisited neighbours

Add the current vertex to the list of visited vertices

There are no more verticies to visit, so our table is complete

Algorithm: 

```
Let distance of start vertex from start vertex = 0
Let distance of all other vertices from start = infinity

Repeat
  Visit the unvisited vertex with the smallest known distance from the start vertex
  For the current vertex, examine its unvisited neighbours
  For the current vertex, calculate distance of each neighbour from start vertex
  If the calculated distance of a vertex is less than the knownn distance, update the shortest distance
  Update the previous vertex for each of the updated distances
  Add the current vertex to the list of visited vertices
Until all vertices visited
```

Greedy algorithm because of this step: "Visit the unvisited vertex with the smallest known distance from the start vertex"

We can use other criteria too. This makes locally optimal on each state (hoping for a global maximum)


Consider this:


``` 
  2--B--2--C--2--D--2--
 /                     \
A---------------5------E
```

Unnecessary processing. 


More refined algorithm

```
Let distance fo start verted from start vertex = 0
Let distance of all other vertices from start = infinity

WHILE vertices remain unvisited
  Visit the unvisited vertex with smallest known distance from start vertex (call this 'current vertex')
  FOR each unvisited neighbour of the current vertex
     Calculate the distance frfom start vertex
     If the calculated distance of this vertex is less than the knownn distance
        Update the shortest distance to this vertex
        Update the previous vertex with the current vertex
      end iff
   NEXT unvisited neighbour
   Add the current vertex to the list of vertices
END WHILE
```


---

A* pseudocode

```
Q is a priority queue of nodes, keyed by f() = g() + h() (true cost + heuristic)
Closed list C is a hash table of states seen before (not nodes)
   (Variant: Could maintain table of costs instead, throw out worse paths)
A state contains all problem-specific information about a possible state of the world
A node knows: true cost to get there, the state represents, 
              the node that generated it (parent), its key in the priority queue

Initialize priority queue Q with start node s (key is cost so far 0 + h() for cost-to-go)
Initialize empty hash table for closed list

While priority queue isn't empty, 
    Remove head of priority queue a
    If a is in closed list, continue
    If a is the goal, return path-to-get-here(a) // Backtrack using parent field
    Add a to the closed list
        // It's possible but not sufficient to filter based on closed list here
        Calculate neighbor's true cost to arrive (through a)
        Calculate neighbor's key (using true cost and heuristic)
        Set neighbor's parent to a
        Add neighbor to the priority queu
Return "not found"
```