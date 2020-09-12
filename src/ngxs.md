# NGXS

Notes on ngxs. Learning how to manage state in a better way in Angular. 

- What is NGXS?
  - state management pattern + library for angular. 
  - single source of truth for app's state
  - simple rules for predictable state mutations
  - modeled after CQRS pattern implemented in Redux and NgRx
  - reduces boilerplate by using TS classes and decorators
- Why
  - more Angular-y api for a state management solution
  - Simple: rxjs seen more as an implementation detail
  - DI: can inject angular service into state classes
  - actions are async, so they have a life cycle
  - there's an option for promises to be returned
- installation
  - npm install @ngxs/store --save
  - add to imports: `NgxsModule.forRoot([ZooState], { developmentMode: !environment.production })`
    - can pass root stores along with options. use `forFeature` option with the same args for lazy loading. 
    - can enable more runtime checks in dev mode, deep-freeze-strict
    - make sure to add `NgxsModule.forRoot([])` to root module
  - dev builds: `npm install @ngxs/store@dev --save; npm install @ngxs/logger-plugin@dev --save`
- Concetps
  - **Intro**. 4 concepts:
    - _Store_: global state container, action dispatcher and selector
    - _Actions_: Class describing the action to take and its associated metadata
    - _State_: Class definition of the state
    - _Selects_: State slice selectors
    - Note: these concepts create a circular fflow traceling from component dispatching an action, to a store reacting to the action, back to the component through state select. 
  - **Store**.
    - The store is a global state manager that dispatches actions your state containers listen to and provide a way to select data slices out from the global state. 
    - Createing an action. We just export a class - AddAnimal - with a static readonly type and a constructor for the data that goes with it. 
    - Dispatching actions: To dispatch actions, we inject the Store service into the component or service, and then invoke te dispatch function with tan action (or an array of actions.)
      - Note that the dispatch function returns an observable, so we can subscribe and do other stuff post that.
      - To get the state affter dispatch: use the pipe operator followed by withLatestFrom(the selected slice), and then subscribe to it to get the animals again!
    - Snapshots: `store.snapshot()` to get the snapshot of the state. 
    - Selecting state. See `select`. 
    - Rreset: To reset the state completely without trigerring any actions. (useful for testing): `store.reset(myNewStateObject)`. Will not fire any lifecycle event. EFFECTFUL. 
  - **Actions**. 
    - commands which should trigger something to happen/resulting event of something that has already appened. 
    - Internal actions: 
      - `@@INIT`: store being initialized beffore all the ngxsOnInit Life-cycle events
      - `@@UPDATE_STATE`: a new lazy-loaded state being added to the store. 
    - Simple action. Just export class with a stateic readonly type. And let's say we're just flipping a boolean flag in our internal state. 
    - Actions with Metadata: same as above but with a constructor that accepts some data. 
    - Dispatching Actions. Obviously we dispatch these. See `Store` above. 
    - How should you name your actions?
      - Commands: tell your app to do something. usually triggered by user events. The name should contain: 1. the context where the command came from, 2. a verb describing what we want to do with the entity. 3. the entity we are acting upon. Example: `[User API] GetUser`, `[Product Page] AddItemToCart`
      - Event examples: Events are actions that have already happened and we now need to react to them. Should be in past tense. Examples: `[User Details Page] PasswordChanged` and `[Project Stars Component] StarsUpdated`. See: [Good action Hygiene by Mike Ryan](https://www.youtube.com/watch?v=JmnsEvoy-gY)
    - Group your actions: Don't sufffic your action names like AddTodo, EditTodo, group similar actions into a namespace. 
  - **State**.
    - State are classes that deine a state container. 
    - Defining a State. 
  - **Select**.
    - .



---

State management. 

- [7:39:33 AM] https://www.youtube.com/watch?v=omnwu_etHTY
- [8:25:24 AM] https://www.youtube.com/watch?v=OOpnxakGYEk


**NGRX/NGXS**: [Ngrx (DesignCourse)](https://www.youtube.com/watch?v=9P5DTlg9oLc), [Ngxs (DesignCourse)](https://www.youtube.com/watch?v=SfiO3bDUK7Q), [Ngrx (Fireship)](https://www.youtube.com/watch?v=f97ICOaekNU), [Ngrx + Ngxs (Fireship)](https://www.youtube.com/watch?v=SGj11j4hxmg). Other Ngrx shorts (Fireship): [redux from scratch](https://www.youtube.com/watch?v=hG7v7quMMwM), [ngrx user auth](https://www.youtube.com/watch?v=wOLF-3wNQh8), [ngrx firebase](https://www.youtube.com/watch?v=13nWhUndQo4), [ngrx firestore](https://www.youtube.com/watch?v=rv37jBygQ2g), [ngrx entity](https://www.youtube.com/watch?v=8Wy1AqY5gqE)
