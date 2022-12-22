# stemformulas
Welcome to [https://stemformulas.com/](https://stemformulas.com/), the site with the goal of being the best place in the world to look for STEM-related
formulas.

## How to contribute:

There are three ways contribute formulas, in order of most to least technical (i.e. least to most work for us):

1. Fill out this Google Form with all the necessary information for the formula:
https://forms.gle/zXGeNJ4pRJG2Rh7L6
2. Create a pull request on the GitHub repo, following the detailed instructions below.


## Adding a formula by submitting a pull request:
1. Install [Git](https://git-scm.com/downloads). Git allows you to download this code, modify it, and push it back up to GitHub.

2. Clone this repository on your command line with the submodules flag:

```
git clone --recurse-submodules https://github.com/stemformulas/stemformulas.github.io.git
```

3. [Install Hugo](https://gohugo.io/installation/). Hugo is the base software that allows this site to function.

4. Run the site locally:
```
hugo server
```
If all goes well, you should be able to see the site at `localhost:1313` in your browser.

5. Create a new branch for your changes:

```
git checkout -b new-formula-name
```

where `new-formula-name` is descriptive of the formula you're adding.

6. Add your formula to the `content/formulas` folder. You can copy the format of any of the other formulas in the folder.

7. Visit your formula's page in your browser and proofread it. Make sure you proofread the index.md file you've created too.

8. Add your name/update your number in the contributors list in the README.md file

9. Push your changes to GitHub:

```
git add .
git commit -m "message explaining what you added"
git push origin -u new-formula-name
```

10. Create a [pull request](https://github.com/stemformulas/stemformulas.github.io/compare) from your branch to the main branch. We'll review it, give you feedback, and then eventually merge it!


## Top contributors
(This will eventually be a nicely presented leaderboard on the site.)

kevinlinxc: 9 formulas

