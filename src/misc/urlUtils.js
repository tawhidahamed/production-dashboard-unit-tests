/**
 * Gets protocol from URL.
 * @param {string} url
 * @returns {string}
 */
export function getProtocol(url) {
  return url.split(":")[0];
}

/**
 * Gets hostname from URL.
 * @param {string} url
 * @returns {string}
 */
export function getHostname(url) {
  return url.split("//")[1];
}

/**
 * Gets pathname from URL.
 * @param {string} url
 * @returns {string}
 */
export function getPathname(url) {
  return url.split("/")[2];
}

/**
 * Checks if URL is secure.
 * @param {string} url
 * @returns {boolean}
 */
export function isSecureUrl(url) {
  return url.includes("http");
}

