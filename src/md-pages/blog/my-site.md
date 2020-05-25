---
title: "How I built this website"
date: "2020-05-25"
parent: "blog"
attachments:
  - "#"
---

Or, the Battle of Eslint and Prettier, where did all my semi-colons go, and what in all the CSS gods is this Flash of Unstyled Content (FOUC) doing here?

## Chapter 1
The year was 2020. The day, who knew? It had been dark, and now it was bright. It would be dark again, then bright, then dark, and on and on it would go. But it meant nothing to her. Time meant nothing to her. She leaned forward in her chair, peered at her screen, and then shook her head. Slowly, as if by the very motion, she could make what she was seeing go away. She took a deep breath and clicked reload again, holding her breath. There it was, the page styled with Semantic UI React, and AH WHAT THE FOUC!

### On a more serious note...
This is more of a basic postmortem than a tutorial. If you're looking for a tutorial, check out Andrew Mead's The Great Gatsby Bootcamp on YouTube. Super great stuff and got me through Gatsby.

This website was built with:
1. Gatsby
2. Typescript
3. Lots of soy milk

I chose Gatsby because I already know React and Gatsby is supposed to be good for static websites. I chose Typescript because I kinda...missed...writing in a typed language. There, I said it. The last class I took was in Java, so I missed typing. But using Typescript came with a few commas, and I spent some time trying to wrangle it into submission.

1. My .eslintrc.js file needed to know what typescript was so it would stop yelling at me for doing what I was supposed to be doing
2. Prettier and Eslint clashed over the single quotes and double quotes, and not even editing the .prettierrc file fixed it. Imagine the nightmare―saving the file changes single to double quotes, then eslint cries. Saving again changes back to single quotes, and now prettier cries. I ended up having to shut prettier up from .eslintrc.js.
3. Props need to be typed! I've never, ever, wondered about what was in my props. If I needed something from it, I had it: props.something. La fin. Typescript on the other hand, demanded that I know exactly what was in props. I'm pretty sure I got tired at some point and just wrote unknown.

Along the way, I also learned about css modules and deploying with Netlify.

It's a pretty basic website, with as little CSS as I could get away with (I have nothing against CSS, I swear), and it keeps most of Gatsby's styles (if it ain't broke, it ain't broke. That's how the saying goes, right?), but I made it, so I'm proud of it.

Till next time.