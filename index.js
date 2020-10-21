//const Trie = require('./lib/trie/Trie')
const Trie = require('./trie')

const trie = new Trie()

const NAMES = ['alfred', 'alfie', 'alfie', 'hello', 'helios'];

function solve(names) {
  names.forEach(name => {
    trie.insert(name)
  });

  console.log(trie.find('a'))


  return names;
}

function main() {
  const res = solve(NAMES);

  // var rootNode = trie.root

  // recur(rootNode)
}

function recur(rootNode) {
  for (const [key, node] of Object.entries(rootNode.children)) {
    if(Object.entries(rootNode.children).length > 1) {
      printParent(node)
      process.stdout.write(node.key + "\n");
    }

    if (node.end && node.count > 1) {
      printParent(node)
      process.stdout.write(node.key + " ");
      process.stdout.write(node.count + "");
      process.stdout.write("\n");
    }
    recur(node)
  }
}

function printParent(node) {
  let parent = node.parent
  if(!parent || !parent.key) return;
  printParent(parent)

  process.stdout.write(parent.key + "");
  parent = parent.parent
}

main();
