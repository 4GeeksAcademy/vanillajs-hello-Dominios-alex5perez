let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.es', '.net', '.io']

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extension) {
        console.log(p + a + n + e);
      }
    }
  }
}

