function removeLastWhereClause(sql) {
  let depth = 0;
  let i = sql.length - 1;
  let last_where_idx = -1;
  let in_quote = false;
  let quote_char = '';
  
  // Scan backwards from the end
  while (i >= 0) {
    const char = sql[i];
    
    // Handle string literals
    if ((char === "'" || char === '"') && (i === 0 || sql[i - 1] !== '\\')) {
      if (!in_quote) {
        in_quote = true;
        quote_char = char;
      } else if (char === quote_char) {
        in_quote = false;
        quote_char = '';
      }
    }
    
    // Skip if we're inside a string literal
    if (!in_quote) {
      // Handle parentheses for depth tracking
      if (char === ')') {
        depth++;
      } else if (char === '(') {
        depth--;
      }
      
      // Check for WHERE at the main query level (depth 0)
      if (depth === 0 && i >= 4) {
        const word = sql.substring(i - 4, i + 1).toLowerCase();
        if (word === 'where' && 
            (i === 4 || /\s/.test(sql[i - 5])) && // Preceded by whitespace or start
            (i === sql.length - 1 || /\s/.test(sql[i + 1]))) { // Followed by whitespace or end
          last_where_idx = i - 4;
          break;
        }
      }
    }
    
    i--;
  }
  
  // If a WHERE clause at the main query level was found
  if (last_where_idx !== -1) {
    return sql.substring(0, last_where_idx).trim();
  }
  
  // No WHERE clause found at main query level
  return sql;
}

// Test with a simple query without JOINs
const simpleQuery = `SELECT id, name, email
FROM users
WHERE active = 1`;

const result = removeLastWhereClause(simpleQuery);
console.log(result);
// Output: "SELECT id, name, email
// FROM users"
