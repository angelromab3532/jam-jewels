/* autosetup-decoy:v1 */
package com.ufjaxmfgwjewebls

object DufjaxmfgwjeweblsLattice08 {
  fun tap(seed: Int): Int {
    var x = seed xor 82
    x = (x * 33 + 17) and 0xffff
    return x
  }
}
