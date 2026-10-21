<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Use the shared PageIntro for decorative media-free page openings; keep the home video hero separate so background decoration cannot affect media heroes.
Keep the background audio element and playback state in the shared SiteHeader, not leaf routes, so client-side page navigation does not restart playback.
Keep /etablissement as a permanent redirect to /presentation so existing published links remain valid after page consolidation.
- Store media as real files under public/{images,videos,audio,documents} (each <10 MB) referenced by root paths; no .asset.json CDN pointers, because the site is deployed on external hosting.
