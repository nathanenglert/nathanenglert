---
number: 5
tag: "ARTICLE · AI"
title: "The Codebase Is No Longer the Center"
description: "Why intent, constraints, and evals are becoming the governing layer of modern software development."
url: "/log/the-codebase-is-no-longer-the-center/"
pubDate: 2026-06-13
---

For most of my career, the codebase has been the center of gravity.

Everything else pointed at it. Tickets described changes to it. Tests guarded it. Docs tried to explain it. Pull requests were the ritual for changing it without breaking the team’s shared understanding of what was real.

That still matters. The codebase is not going away. But I think it is becoming less like the source of truth and more like one output of a larger system.

The shift gets easier to see once agents enter the workflow. If an agent can write the implementation, rewrite the implementation, test the implementation, and open the pull request, then the most important artifact is not always the code it produced. It is the layer that tells the agent what counts as correct.

Intent becomes load-bearing. What are we actually trying to make true? What tradeoffs are acceptable? Which behavior is essential, and which behavior is just how the current system happens to work?

Constraints become load-bearing too. The agent should not have every option. It should have the right shape of task, the right tools, the right boundaries, and a clear definition of done. A loose instruction like “make this better” creates fog. A bounded request with known failure modes gives the work a frame.

Then evals become the thing that decides what survives. Tests, CI, visual checks, lint, benchmarks, review agents, production signals, and human judgment all start acting like a filtering system. Many implementations can be generated. Only the ones that pass the governing layer get to remain.

That changes the mental model of software development.

The old model is code-centered: humans carefully edit the durable artifact, and everything else is support material.

The new model is closer to intent-centered: humans maintain the goal, the constraints, the spec, and the judgment layer. Agents produce candidate changes. The system evaluates them. The codebase becomes the current compiled answer, not the whole truth.

This is why living specs suddenly matter more. A stale spec used to be annoying. In an agent-heavy workflow, it becomes dangerous, because the spec is part of what the agent is optimizing against. If the code changes but the intent layer does not, the system slowly loses the plot while still producing plausible work.

The faster autocomplete phase already happened. The more interesting question now is whether the tool can preserve intent as work moves through agents, checks, review, and deployment. The deeper change is a verified pipeline: task comes in, intent is clarified, constraints are applied, agents generate possible changes, evals reject most of them, and a human reviews the remainder with evidence attached.

In that world, the human engineer does not disappear. The role moves upward.

Less time spent personally carving every line into the codebase. More time spent deciding what should be true, what must never break, what evidence counts, and where the tradeoffs actually live.

The codebase still matters. It is where the system runs.

But it may no longer be the center.
