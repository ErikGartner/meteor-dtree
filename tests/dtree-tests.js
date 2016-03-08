Tinytest.add('testdTreeExists', function (test) {
  test.isNotUndefined(dTree, "dTree was undefined!");
});

Tinytest.add('testdTreeVersion', function (test) {
  test.equal(dTree.VERSION, "1.2.1", "Wrong dTree version!");
});
