export function prettyPrintMillions(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num < 1_000_000 && num >= 100_000) {
    return (num / 100_000).toFixed(1) + "K";
  } else {
    // Format numbers less than a million as you prefer
    return num.toString();
  }
}
