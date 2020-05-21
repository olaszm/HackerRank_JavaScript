let vowels = "a, e, i, o,  u";

function regexVar(str) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = /^([aeiou]).*\1$/i;

  /*
   * Do not remove the return statement
   */
  console.log(re.test(str));
  return re;
}

regexVar("asdo");
