function* generatorFunction()
{
    yield "First Val"
    yield "Second Val"
    yield "Third Val"
}
let generator = generatorFunction()
console.log(generator.next().value)
console.log("I'm executing after first yield statement")
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())




function* storyViewer() {
  yield "📖 Story 1: Morning coffee ☕";
  yield "🌇 Story 2: Sunset view 🌅";
  yield "🎥 Story 3: Gym workout 💪";
  yield "🎶 Story 4: Night music vibes 🎧";
  return " Instagram"
}

const viewer = storyViewer();

// user taps through stories one by one
console.log(viewer.next().value); // 📖 Story 1: Morning coffee ☕
console.log(viewer.next().value); // 🌇 Story 2: Sunset view 🌅
console.log(viewer.next().value); // 🎥 Story 3: Gym workout 💪
console.log(viewer.next().value); // 🎶 Story 4: Night music vibes 🎧
console.log(viewer.next().value); // undefined (no more stories)


