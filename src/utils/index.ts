
export function cleanString(input: string): string {
    return input
      .replace(/\n/g, '')   // Replace newlines with a space
      .replace(/\s+/g, ' ')  // Replace multiple spaces with a single space
      .trim();               // Remove leading and trailing spaces
}
  