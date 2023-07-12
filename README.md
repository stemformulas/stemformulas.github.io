# stemformulas
Welcome to [https://stemformulas.com/](https://stemformulas.com/), the site with the goal of being the best place in the world to look for STEM-related
formulas.

<video src='stemformulas_demo.mp4' width=500></video>

## How to contribute:

There are two ways contribute formulas: suggestions and direct contributions:

1. Suggestions: fill out this Google Form with a formula that you would like to see added to the site:
https://forms.gle/EWjwFmiEQrrjsZEF9

2. Direct contributions: create a pull request (on the GitHub repo, following the detailed instructions below.


## Adding a formula by submitting a pull request:
Adding a formula is a bit of a process, here are the steps.

1. Install [Git](https://git-scm.com/downloads). Git allows you to download this code, modify it, and push it back up to GitHub.

2. Clone this repository on your command line with the submodules flag:

```
git clone --recurse-submodules https://github.com/stemformulas/stemformulas.github.io.git
```

3. Install [Go](https://go.dev/doc/install) and [Hugo (extended)](https://gohugo.io/installation/). Go is a programming language, and Hugo is a static website builder that we use as a scaffolding for our site. Read the hugo installation instructions carefully, they're not easy to skim through.

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

6. Create a folder in `content/formulas/` with the name of your formula. For example, if you're adding the formula for the area of a circle, you would create a folder called `area-of-a-circle`. Inside this folder, create a file called `index.md` and copy the contents of `content/formulas/pythagorean-theorem/index.md` into it (any other index.md would be fine too, but this one shows how to use pictures). This file will contain the information about your formula. Change all the information until it's correct for your formula.

7. Visit your formula's page in your browser (from step 4) and proofread it. Make sure you proofread the `index.md` file you've created too.

8. On the localhost:1313/formulas page, zoom in and take a screenshot of the formula (with reasonable white padding and no black lines) and save it as `preview.png` in your formula's folder. This will be the preview image when the formula is linked on social media. You can look at any existing formulas folder for an example. Optionally, if you have Python installed, run `pip install Pillow` and `python normalize_preview_imgs.py` to make the preview image never get cut off in the social media preview image.

9. Push your changes to GitHub (replace `new-formula-name` with your own branch's name from step 5):

```
git status
git add .
git commit -m "write a short message explaining what you added"
git push origin -u new-formula-name
```

10. Create a [pull request](https://github.com/stemformulas/stemformulas.github.io/compare) from your branch to the main branch. We'll review it, give you feedback, and then eventually merge it.

11. In the future, if you want to contribute again, switch to main and pull in changes so that you're up to date:

```
git checkout main
git pull
git checkout -b new-formula-name
```

Then, repeat everything from step 6.

## ChatGPT workflow
I use ChatGPT and a custom Python GUI to help me write formula pages. Here's how it works:

1. Run `pip install streamlit` to install Streamlit (only need to do this once).
2. Run `streamlit run streamlit-app.py` to open up the Python GUI in your browser at localhost:8501.
3. Fill in the formula name, LaTeX, and two sources. The app will then make a prompt for you to copy and paste into ChatGPT, basically saying "format this new formula information the same way as this blurb". Then, copy the reply from ChatGPT and paste it into the second tab of the Python GUI, which will fix some of the LaTeX formatting. This can usually now be put into an index.md file, with all of the grunt work done. Make sure to fully proofread what ChatGPT gives you, as it is crucial that formulas put on the site are correct.

## Possible future work
- Formula sheet maker
- Docker build for easier contributions
- Better SEO
