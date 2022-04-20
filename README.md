<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio hosted with GitHub Pages, built to showcase my recent projects.<br/> Site URL / Demo: 
    <a href="https://thelorda.github.io/resume/">thelorda.github.io/resume/</a>
    <br />
    <br />
    <a href="https://thelorda.github.io/resume/">About Me</a>
    ·
    <a href="https://github.com/thelorda/resume/issues">Report Bug</a>
    ·
    <a href="https://github.com/thelorda/resume/issues">Request Feature</a>
  </p>
</p>

[![Site preview](/public/social-image.png)](https://thelorda.github.io/resume/)

## Table of Contents

-    [Sharing 💗](#sharing-)
-    [Prerequisites 🍪](#prerequisites-)
-    [Setup And Deployment 🔧](#setup-and-deployment-)
-    [Contributing 🙌](#contributing-)
-    [Upcoming Features / Improvements 🔗](#upcoming-features-/-improvements-)

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit all of my informations with yours and don't forget to add your resume. <br/>
Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your machine, and of course own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

     ```bash
       git clone https://github.com/TheLordA/resume.git
     ```

3. Open in editor and edit the files with your informations.

4. Add your resume at [src/Assets](./src/Assets/), and don't forget the to edit the import at [src/components/Resume/Resume.js](./src/components/Resume/Resume.js) with your file name.

5. Edit [title](./public/index.html#L15) and meta [description](./public/index.html#L8) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

     ```json
      "homepage": "https://<your-username>.github.io/<your-repo-name>"
     ```

7. After editing run the following bash commands:

     ```bash
     npm install
     npm start
     ```

8. To deploy website, run:

     ```bash
      npm run build
      npm run deploy
     ```

9. Congrats your site is up and running. To see it live, visit:

     ```https
       https://<your-username>.github.io/<your-repo-name>
     ```

10. To change the thumbnail image:

     - Navigate to the "public" folder.
     - There you will see "social-image.png".
     - Delete it.
     - Take a screenshot of your version and rename it "social-image.png" and place it there.

Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at ferrak.anass@gmail.com.

## Contributing 🙌

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Upcoming Features / Improvements 🔗

-    [ ] Improve performances.
-    [ ] Deep code refactoring.
-    [ ] Improve UI (Desktop & mobile).
-    [x] Add Terminal UI.
-    [x] Button to download resume/CV.
-    [x] Customize the number of projects to show in website.
-    [ ] Blog page.
