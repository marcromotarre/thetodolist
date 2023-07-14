export default function uuid() {
  let uuid = "";
  const characters = "abcdef0123456789";
  const sections = [8, 4, 4, 4, 12];

  for (let i = 0; i < sections.length; i++) {
    for (let j = 0; j < sections[i]; j++) {
      uuid += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (i < sections.length - 1) {
      uuid += "-";
    }
  }

  return uuid;
}
