var neliel = {
  /**
   * accurate adds two numbers.
   *
   * @category Math
   * @param {number} augend The first number in an addition.
   * @param {number} addend The second number in an addition.
   * @param {number} toFixedNumber result to fixed number.
   * @returns {number} Returns the total.
   * @example
   *
   * neliel.add(0.1, 0.7);
   * // => 0.8
   * neliel.add(0.22, 0.91, 2);
   * // => 1.13
   *
   */
  add: function(augend, addend) {
    augend = (augend || 0).toString()
    addend = (addend || 0).toString()
    var arg1Arr = augend.split('.'),
      arg2Arr = addend.split('.'),
      d1 = arg1Arr.length == 2 ? arg1Arr[1] : '',
      d2 = arg2Arr.length == 2 ? arg2Arr[1] : ''
    var maxLen = Math.max(d1.length, d2.length)
    var m = Math.pow(10, maxLen)
    var result = Number(((augend * m + addend * m) / m).toFixed(maxLen))
    var d = arguments[2]
    return typeof d === 'number' ? Number(result.toFixed(d)) : result
  },
  /**
   * accurate subtract two numbers.
   *
   * @category Math
   * @param {number} minuend The first number in a subtraction.
   * @param {number} subtrahend The second number in a subtraction.
   * @param {number} toFixedNumber result to fixed number.
   * @returns {number} Returns the difference.
   * @example
   *
   * neliel.sub(0.8 - 0.1);
   * // => 0.7
   * 
   */
  sub: function(minuend, subtrahend) {
    return neliel.add(minuend, -Number(subtrahend), arguments[2])
  },
  /**
   * accurate multiply two numbers.
   *
   * @category Math
   * @param {number} multiplier The first number in a multiplication.
   * @param {number} multiplicand The second number in a multiplication.
   * @param {number} toFixedNumber result to fixed number.
   * @returns {number} Returns the product.
   * @example
   *
   * neliel.mul(0.8, 0.1);
   * // => 0.08
   */
  mul: function(multiplier, multiplicand) {
    var r1 = (multiplier || 0).toString(),
      r2 = (multiplicand || 0).toString(),
      m,
      resultVal,
      d = arguments[2]
    m =
      (r1.split('.')[1] ? r1.split('.')[1].length : 0) +
      (r2.split('.')[1] ? r2.split('.')[1].length : 0)
    resultVal = (Number(r1.replace('.', '')) * Number(r2.replace('.', ''))) / Math.pow(10, m)
    return typeof d !== 'number' ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)))
  },
  /**
   * accurate divide two numbers.
   *
   * @category Math
   * @param {number} dividend The first number in a division.
   * @param {number} divisor The second number in a division.
   * @param {number} toFixedNumber result to fixed number.
   * @returns {number} Returns the quotient.
   * @example
   *
   * neliel.div(0.08, 0.1);
   * // => 0.8
   */
  div: function(dividend, divisor) {
    var r1 = (dividend || 0).toString(),
      r2 = (divisor || 1).toString(),
      m,
      resultVal,
      d = arguments[2]
    m =
      (r2.split('.')[1] ? r2.split('.')[1].length : 0) -
      (r1.split('.')[1] ? r1.split('.')[1].length : 0)
    resultVal = (Number(r1.replace('.', '')) / Number(r2.replace('.', ''))) * Math.pow(10, m)
    return typeof d !== 'number' ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)))
  }
}

module.exports = neliel
