// Tag de afiliado de Amazon, centralizado en un único sitio.
// Si alguna vez cambia, solo hay que actualizarlo aquí: se aplica
// automáticamente a todos los enlaces de producto de la web.
export const AMAZON_TAG = 'thecozynest0a-21';

/**
 * Devuelve la URL de Amazon con el Tag de afiliado correcto aplicado,
 * sobrescribiendo cualquier `tag` que trajera la URL original
 * (por ejemplo, un placeholder de un borrador de artículo).
 */
export function withAffiliateTag(url) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set('tag', AMAZON_TAG);
    return parsed.toString();
  } catch {
    return url;
  }
}
