/**
 * Email obfuscation utilities to prevent bots from harvesting email addresses
 */

/**
 * Encodes an email address using a simple character code offset
 */
export function encodeEmail(email: string): string {
  return btoa(email).replace(/=/g, '');
}

/**
 * Decodes an obfuscated email address
 */
export function decodeEmail(encoded: string): string {
  // Add padding if needed
  const padded = encoded + '='.repeat((4 - encoded.length % 4) % 4);
  return atob(padded);
}

/**
 * Creates a mailto link with obfuscated email that gets decoded on click
 */
export function createObfuscatedMailtoLink(email: string): string {
  const encoded = encodeEmail(email);
  return `javascript:void(0);data-email="${encoded}"`;
}

/**
 * ROT13 encoding for email obfuscation (alternative method)
 */
export function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, function(c) {
    const charCode = c.charCodeAt(0);
    const offset = charCode + 13;
    const limit = c <= 'Z' ? 90 : 122;
    return String.fromCharCode(offset <= limit ? offset : offset - 26);
  });
}

/**
 * Creates an obfuscated email display using character entity encoding
 */
export function obfuscateEmailForDisplay(email: string): string {
  return email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('');
}
