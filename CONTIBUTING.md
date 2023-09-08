# Contributing

Thanks for your interest in contributing to huez. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## About this repository

This repository is a monorepo.

- We use [npm](https://npmjs.com) for development.

## Structure

This repository is structured as follows:

```
 www
    ├── app
        ├──components
            ├──page.tsx
        ├──styles
            ├──page.module.scss
packages
    ├──src
    ├──__tests__

```

| Path                 | Description                              |
| -------------------- | ---------------------------------------- |
| `www/app`            | The Next.js application for the website. |
| `www/app/components` | The React components for the website.    |
| `packages/src`       | The `huez` package.                      |

## Development

### Start by cloning the repository:

```
git clone git@github.com:ciobanunicolae/huez.git
```

### Install dependencies

```
npm install
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
