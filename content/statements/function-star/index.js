/**
 * function*
 *
 * The function* declaration (function keyword followed by an asterisk) defines
 * a generator function, which returns a Generator object.
 *
 * Syntax:
 * function* name(param0, param1,  … , paramN) {
 *   statements
 * }
 *
 * Note: Generator functions do not have arrow function counterparts.
 *
 * Generators are functions that can be exited and later re-entered.
 * Their context (variable bindings) will be saved across re-entrances.
 *
 * Calling a generator function does not execute its body immediately;
 * a generator object for the function is returned instead. When the iterator's
 * next() method is called, the generator function's body is executed until
 * the first yield expression, which specifies the value to be returned from
 * the iterator or, with yield*, delegates to another generator function.
 *
 * The next() method returns an object with a value property containing
 * the yielded value and a done property which indicates whether the generator
 * has yielded its last value, as a boolean.
 *
 * Calling the next() method with an argument will resume the generator function
 * execution, replacing the yield expression where an execution was paused with
 * the argument from next().
 *
 * https://dev.moz/js/Statements/function*
 */
