Tinytest.add('testdTreeExists', function (test) {
  test.isNotUndefined(dTree, "dTree was undefined!");
});

Tinytest.add('testdTreeVersion', function (test) {
  test.equal(dTree.VERSION, "1.2.0", "Wrong dTree version!");
});
