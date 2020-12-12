# Testing with Mocha and Chai in the Browser


### `code-to-test.js`

```js
function add3(z) {
	return z + 3;
}
```


### `tests.js`

```js
var assert = chai.assert

describe('testing add3', () => {
    it('add3 on 0 is 3', () => {
        assert(add3(0) === 3);
    });
});
```

### `test.html`


```xml
<html>

<head>
  <title>Mocha</title>
  <!-- CSS TO STYLE TEST RESULTS -->
  <link rel="stylesheet"
        href="https://unpkg.com/mocha/mocha.css" />
  <!-- TESTING LIBRARY -->
  <script src="https://unpkg.com/mocha/mocha.js"></script>
  <!-- ASSERTION LIBRARY -->
  <script src="https://unpkg.com/chai/chai.js"></script>
</head>

<body>
  <!-- TEST SETUP -->
  <script>
    mocha.setup('bdd');
  </script>
  <!-- CODE TO TEST -->
  <script src="code-to-test.js"></script>
  <!-- TEST SUITE -->
  <script src="tests.js"></script>
  <!-- RUNNING TESTS -->
  <script>
    window.onload = () => {
      mocha.run();
    };
  </script>
  <!-- DISPLAYING TESTS -->
  <div id="mocha"></div>
</body>

</html>
```


Open `index.html` to see the test results.

