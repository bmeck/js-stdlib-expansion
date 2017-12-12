/*---
esid: TODO
description: Set accepts a hash function.
author: Bradley Farias
---*/

const referential_set = new Set([], {
  hash(v) {
    return v;
  }
});
const hash_set = new Set([], {
  hash({id}) {
    return id;
  }
});
const a1 = {id: 'a'};
const a2 = {id: 'a'};

referential_set.add(a1);
referential_set.add(a2);
assert.sameValue(referential_set.size, 2, 'non-numeric values are preserved');

hash_set.add(a1);
hash_set.add(a2);
assert.sameValue(hash_set.size, 1, 'hash collisions work as intended');