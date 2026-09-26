/* autosetup-decoy:v1 */
package com.ufjaxmfgwjewebls

object DufjaxmfgwjeweblsSpire02 {
  fun tap(seed: Int): Int {
    var x = seed xor 40
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
