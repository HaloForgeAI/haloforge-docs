const DEFAULT_UPSTREAM_ORIGIN = "https://haloforge-docs.pages.dev";

export default {
  fetch(request, env) {
    const requestUrl = new URL(request.url);
    const upstreamOrigin = String(env.UPSTREAM_ORIGIN || DEFAULT_UPSTREAM_ORIGIN).replace(/\/+$/, "");
    const upstreamUrl = new URL(`${requestUrl.pathname}${requestUrl.search}`, upstreamOrigin);
    const upstreamRequest = new Request(upstreamUrl.toString(), request);

    return fetch(upstreamRequest);
  },
};
