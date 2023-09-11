function isValid(s) {
    const stack = [];
    const bracketPairs = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (bracketPairs[char]) {
        stack.push(char);
      } else {
        if (!stack.length || bracketPairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  