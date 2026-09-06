const AFFILIATE_TAG = 'thecozynest0a-21';

/**
 * Añade el tag de afiliado de Amazon a una URL de producto.
 * Es el único sitio del proyecto donde aparece el tag: si Amazon
 * te asigna uno nuevo en el futuro, solo hay que cambiarlo aquí.
 *
 * @param {string} url - URL del producto en Amazon (sin tag, o con otros parámetros)
 * @returns {string} URL con el tag de afiliado añadido
 */
export function withAffiliateTag(url) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}tag=${AFFILIATE_TAG}`;
}
