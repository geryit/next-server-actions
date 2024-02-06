This is a Raxalle developer task Next.js project.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Technologies

Task is a Next.js project that uses TypeScript and Tailwind for styling. These are same technologies we use for our actual services. For purposes of this task, it might be useful to quickly brush up on what GeoJSON format looks like.

## Task

Your task is to build a search engine for construction sites around Finland. Dataset is included as a .geojson file and there is already an incomplete implementation. Task is split into multiple parts that build on top of each other, but you can implement all of them simultaneously.

If there are any tradeoffs you're making during the task (e.g. efficiency vs simplicity), it'd be good to take note of those. Additionally, take note of any questions you may have about the business requirements of the task.

There is no need to implements tests or bigger refactoring/new features. Try to utilize the given timeframe as efficiently as possible.

If running out of time, feel free to include short explanations on how you would further improve or add onto the current implementation. See [submitting](#submitting) section.

### Part 1: MVP

Implement search engine for construction sites. Search queries can be either name of the construction or the street it is on. You can omit construction sites that do not have either of the fields available.

Searches should be case-insensitive and support partial queries (e.g. `itäl` should find `Itälahdenkatu`).

**Tips and links:**

- You can utilize [server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components), [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), or [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for this
- Feel free to make changes to any file in app/ or lib/, but keep the data file intact

### Part 2: Optimization

The existing implementation does many things in a non-performant way. Try to find and fix some of the biggest offenders. Also helps if you're able to reduce duplicated code and keep things simple.

**Tips and links:**

- Feel free to make changes to any file in app/ or lib/, but keep the data file intact
- You can process the data file and keep it in memory in a memory-efficient format; we assume it won't change on-disk

### Part 3: Polish

In this section you can highlight your own strengths. If you have good ideas on how to improve the UI, what would make the development experience with this codebase better, or have some other low hanging fruits to fix, this would be the time and place to tackle those.

You can also try to improve the way data is presented and also make choices on what data should be shown where. Since this is an imaginary task, there are no strict guidelines on what data is considered important.

**Tips and links:**

- Linking between pages should generally be done using [<Link>](https://nextjs.org/docs/app/api-reference/components/link) in Next.js
- Try sticking to strict-mode TypeScript and accurate typings where possible (improving the current codebase to this effect is a good improvement option as well)
- Feel free to make changes to any file in app/ or lib/, but keep the data file intact

### Submitting

Preferably build your code on a separate branch. There are no commit conventions to follow, just following best practices is enough.

To submit, create a new PR from `your-branch-name` to `main`. You can use PR comments to highlight code sections that you would like to further improve upon.