function getPositionCharacter(c) {
  switch (c) {
    case "a":
      return 8;
    case "b":
      return 16;
    case "c":
      return 10;
    case "d":
      return 21;
    case "e":
      return 15;
    case "f":
      return 7;
    case "g":
      return 20;
    case "h":
      return 25;
    case "i":
      return 23;
    case "j":
      return 14;
    case "k":
      return 3;
    case "l":
      return 6;
    case "m":
      return 11;
    case "n":
      return 26;
    case "o":
      return 22;
    case "p":
      return 1;
    case "q":
      return 17;
    case "r":
      return 13;
    case "s":
      return 9;
    case "t":
      return 4;
    case "u":
      return 2;
    case "v":
      return 18;
    case "w":
      return 5;
    case "x":
      return 24;
    case "y":
      return 19;
    case "z":
      return 12;
    default:
      return 0;
  }
}

function removeCharactersInKey(callBy, pemKey, isPublicKey) {
  try {
    // Cắt chuỗi key
    const separatingStrings = ["\r\n", "\n"];
    const arrKey = pemKey
      .split(new RegExp(separatingStrings.join("|"), "g"))
      .filter(Boolean);

    // Convert sang List cho dễ xử lý
    const lstKey = [...arrKey];

    // Lấy chuỗi kí tự random, bỏ 1 dòng đầu và 2 dòng cuối -> -3
    const characterQty = lstKey.length - 3;
    const characterString = lstKey[lstKey.length - 2].substring(
      0,
      characterQty
    );

    // Lấy List kí tự và vị trí tương ứng
    const lstCharPos = [...characterString].map((c) => getPositionCharacter(c));

    // Xóa kí tự dòng key số 1
    if (isPublicKey) {
      const start = lstCharPos[0] + 44;
      lstKey[1] =
        lstKey[1].substring(0, start) + lstKey[1].substring(start + 1);
    } else {
      const start = lstCharPos[0] + 4;
      lstKey[1] =
        lstKey[1].substring(0, start) + lstKey[1].substring(start + 1);
    }

    // Xóa các kí tự tiếp theo với vị trí tương ứng của từng kí tự
    for (let i = 1; i < lstCharPos.length; i++) {
      const start = lstCharPos[i];
      lstKey[1 + i] =
        lstKey[1 + i].substring(0, start) + lstKey[1 + i].substring(start + 1);
    }

    // Xóa chuỗi kí tự
    lstKey[lstKey.length - 2] =
      lstKey[lstKey.length - 2].substring(characterQty);

    // Nối các key lại
    const keyReturn = lstKey.join("\r\n");

    return keyReturn;
  } catch (ex) {
    console.error(callBy + ":\n" + ex?.message);
    return "";
  }
}

const callBy = "Caller";
const pemKey =
  "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8KExIjt9YnwZMgC2DnML5sH52EPYF5ep7LS6BR/Fx3PjEXx/nJTUoJXsZuBBvBlLUeFzK5P2QWYmpKtpXmiFgDyXnc5LZfOioFJq/+Bq2g5F57hsDQwqCv8VO7Ngq2Hf7DYfaaX/l5h6Xnq3QJvnWz5zP2kKxb7IpmWGC7/7yNleD0rjMqVxY64SKrCzwQpBsYH6fl1AC4vahhLX5XY2r8OQq5mLw/G59ZoXQ0FLmbUx/m4F1ZwNptTQ3rOzVl6N6mqTRTfs/QtY+T/e6Co3epFkKg2fUu5Oc27dQ8ehvGzSGCspLnyfMdzExAgi5uFsEfCzgKCwIDAQAB\n-----END PUBLIC KEY-----";
const isPublicKey = true;
const result = removeCharactersInKey(callBy, pemKey, isPublicKey);
console.log(result);