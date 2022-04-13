export declare type desiredCategory = `alphabetic` | `numeric`;

export class Helper {
  /**
   *
   * @param desiredCategory `alphabetic` | `numeric`
   * @param stringLength indicates the number of characters of the random string
   * @returns
   */
  randomString(
    stringLength: number,
    desiredCategory?: desiredCategory
  ): string {
    let text = ``;
    let possible: string;
    if (typeof desiredCategory === "string") {
      switch (desiredCategory) {
        case `alphabetic`:
          possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
          break;

        case `numeric`:
          possible = `0123456789`;
          break;

        default:
          possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*@#%&()=?`;
          break;
      }
    } else {
      possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*@#%&()=?`;
    }

    for (let i = 0; i < stringLength; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
