/*---
esid: TODO
description: Map accepts a hash function.
author: Bradley Farias
---*/

const referential_map = new Map([], {
  hash(v) {
    return v;
  }
});
const hash_map = new Map([], {
  hash({id}) {
    return id;
  }
});
const a1 = {id: 'a'};
const a2 = {id: 'a'};

referential_map.set(a1, true);
referential_map.set(a2, true);
assert.sameValue(referential_map.size, 2, 'non-numeric values are preserved');

hash_map.set(a1, true);
hash_map.set(a2, true);
assert.sameValue(hash_map.size, 1, 'hash collisions work as intended');