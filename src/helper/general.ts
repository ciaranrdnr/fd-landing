export function isMobile() {
  return typeof window !== 'undefined' ? /(android|iphone|ipad|mobile)/i.test(navigator?.userAgent) : false;
}