Tinytest.add('testdTreeExists', function (test) {
  test.isNotUndefined(dTree, "dTree was undefined!");
});

Tinytest.add('testdTreeVersion', function (test) {
  test.equal(dTree.VERSION, "1.3.0", "Wrong dTree version!");
});
