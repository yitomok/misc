/*
 * Check that brackets are balanced,
 * e.g., '({}[]{})' => true, '({)}' => false
 */
module.exports = brackets => {
    const stack = [];
    for (let ch of brackets) {
        switch (ch) {
            case '{':
            case '[':
            case '(':
                stack.push(ch);
                break;
            case '}':
            case ']':
            case ')':
                switch(stack.pop() + ch) {
                    case '{}':
                    case '[]':
                    case '()':
                        break;
                    default:
                        return false;
                }
                break;
            default:
                return false;
        }
    }
    return stack.length == 0;
}
