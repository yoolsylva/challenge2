const NAMES = ['alfred', 'alfie', 'alfie'];

function solve(names) {
  const res = []
  names.forEach(name => {
    res[res.length-1]
  })

  return res;
}

function main() {
  const res = solve(NAMES);
  console.log((res || []).join('\n'));
}

main();
