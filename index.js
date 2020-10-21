//const Trie = require('./lib/trie/Trie')
const Trie = require('./trie')

const trie = new Trie()

const NAMES = ['alfred', 'alfie', 'alfie', 'hello', 'helios', 'helios', 'alfie', 'alfred'];

function solve(names) {
  names.forEach(name => {
    trie.insert(name)
  });

  return trie.result;
}

function main() {
  const res = solve(NAMES);

 res.forEach(it => {
   console.log(`${it.word} ${it.isFullWord ? it.count : ""}`)
 })
}

main();
