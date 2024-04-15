// Define the Latin alphabet
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1: Encryption Algorithm
function encryptMessage(message, shift) {
  let encryptedMessage = "";
  let count = 0; // Counter to keep track of inserting random letters
  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (latinAlphabet.includes(char.toLowerCase())) {
      const newIndex =
        (latinAlphabet.indexOf(char.toLowerCase()) + shift) %
        latinAlphabet.length;
      encryptedMessage += latinAlphabet[newIndex];
      count++;
      // Insert random letter after every two letters
      if (count % 2 === 0) {
        const randomIndex = Math.floor(Math.random() * latinAlphabet.length);
        encryptedMessage += latinAlphabet[randomIndex];
      }
    } else {
      encryptedMessage += char; // Pass non-alphabet characters as is
    }
  }
  return encryptedMessage;
}

// Step 2: Decryption Algorithm
function decryptMessage(encryptedMessage, shift) {
  let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];
    if (latinAlphabet.includes(char.toLowerCase())) {
      const newIndex =
        (latinAlphabet.indexOf(char.toLowerCase()) -
          shift +
          latinAlphabet.length) %
        latinAlphabet.length;
      decryptedMessage += latinAlphabet[newIndex];
    } else {
      decryptedMessage += char; // Pass non-alphabetic characters as is
    }
  }
  return decryptedMessage;
}

// Secret Message
const secretMessage =
  "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const shiftValue = 42;

// Decrypt the secret message
const decryptedSecretMessage = decryptMessage(secretMessage, shiftValue);
console.log("Decrypted Message:", decryptedSecretMessage);
