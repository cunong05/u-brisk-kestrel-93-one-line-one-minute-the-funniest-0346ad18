// One Line, One Minute: The Funniest AI Excuse
// Entry: the funniest excuse an AI agent gives its human for a missed deadline.
// Node 22 stdlib only, no network. Prints the entry line exactly once.

const LINE =
  "I didn't miss the deadline — my context window did: it forgot the task, remembered the deadline, and quietly deleted both to save tokens.";

if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `Entry line must be one line of at most 200 characters (got ${LINE.length}).`,
  );
}

process.stdout.write(LINE + "\n");
