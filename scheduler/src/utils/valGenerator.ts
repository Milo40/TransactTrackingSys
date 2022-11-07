const genName: Function = () => {
  var adjective: String[] = [
    "Excited",
    "Anxious",
    "Overweight",
    "Demonic",
    "Jumpy",
    "Misunderstood",
    "Squashed",
    "Gargantuan",
    "Broad",
    "Crooked",
    "Curved",
    "Deep",
    "Even",
    "Excited",
    "Anxious",
    "Overweight",
    "Demonic",
    "Jumpy",
    "Misunderstood",
    "Squashed",
    "Gargantuan",
    "Broad",
    "Crooked",
    "Curved",
    "Deep",
    "Even",
    "Flat",
    "Hilly",
    "Jagged",
    "Round",
    "Shallow",
    "Square",
    "Steep",
    "Straight",
    "Thick",
    "Thin",
    "Cooing",
    "Deafening",
    "Faint",
    "Harsh",
    "High-pitched",
    "Hissing",
    "Hushed",
    "Husky",
    "Loud",
    "Melodic",
    "Moaning",
    "Mute",
    "Noisy",
    "Purring",
    "Quiet",
    "Raspy",
    "Screeching",
    "Shrill",
    "Silent",
    "Soft",
    "Squeaky",
    "Squealing",
    "Thundering",
    "Voiceless",
    "Whispering",
  ];
  var object: String[] = [
    "Taco",
    "Operating System",
    "Sphere",
    "Watermelon",
    "Cheeseburger",
    "Apple Pie",
    "Spider",
    "Dragon",
    "Remote Control",
    "Soda",
    "Barbie Doll",
    "Watch",
    "Purple Pen",
    "Dollar Bill",
    "Stuffed Animal",
    "Hair Clip",
    "Sunglasses",
    "T-shirt",
    "Purse",
    "Towel",
    "Hat",
    "Camera",
    "Hand Sanitizer Bottle",
    "Photo",
    "Dog Bone",
    "Hair Brush",
    "Birthday Card",
  ];
  const result: String =
    adjective[Math.floor(Math.random() * adjective.length)] +
    " " +
    object[Math.floor(Math.random() * object.length)];

  return result;
};

const genAmt: Function = (length: number) => {
  const result = Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
  return result;
};

export { genName, genAmt };
