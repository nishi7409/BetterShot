<!-- <h1 align="center">BetterShot</h1> -->
<!-- <p align="center">
    <img src="https://media.discordapp.net/attachments/930291717742153778/930291865524248647/Linkedin_cover.jpg?width=2303&height=699">
</p> -->

[![name](https://media.discordapp.net/attachments/930291717742153778/930291865524248647/Linkedin_cover.jpg?width=2303&height=699)](https://bettershot.io/)

![Vercel](https://vercelbadge.vercel.app/api/nishi7409/bettershot?style=for-the-badge)

## Introduction
### Vision
There are a lot of tools that allow users to seamlessly screenshot/record their screens and share that content with their peers such as Lightshot, Gyazo, and ShareX; however, these tools can sometimes be complicated to set up with a custom domain (ShareX), the software simply can't record your screen (Lightshot), or the snipping abilities are limited (Gyazo). Of course, there'll never be one single application that checks off all of the boxes, but because this project is <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software">FOSS</a>, users themselves can add their desired features at any point in time-- and even bring it up to the community so it's pushed to everyone's devices. This project aims to be an open-source version of ShareX, Lightshot, Gyazo, Streamable, and NVIDIA's GeForce Experience screen capturing tool.

### Goal
The goal of this application is to provide users with an alternative to existing solutions while aiding in content ownership and flexbility.

### Demonstration
Work in progress

### Disclaimer
Work in progress

---

## Developmental Setup
### Web Application
#### Frontend - [Nuxt.js](https://nuxtjs.org/)
1. Install the latest version of [Node.js](https://nodejs.org/en/)
2. Confirm the installation of Node.js by running `node -v` in a terminal of your choice (ie: command prompt)
3. Confirm the installation of **npm** by running `npm -v` in a terminal of your choice (ie: command prompt)
4. You should *theoretically* be on the latest version of `npm`, but you could run the following line `npm install -g npm` (optional)
5. `cd` to `/frontend/`
6. Run `npm install` to install all packages found in `package.json`.
7. Finally, run `npm run dev`

#### API - [Django](https://www.djangoproject.com/)
1. Install the latest version of [Python](https://www.python.org/downloads/)
2. Type `python` (or `python3`) in a terminal of your choice (ie: command prompt)
3. `cd` to `/server/`
4. Run `pip install -r requirements.txt`
5. Run `python manage.py makemigrations` (if python doesn't exist, try `python3`)
6. Run `python manage.py migrate` (if python doesn't exist, try `python3`)
7. Run `python manage.py migrate --run-syncdb` (if python doesn't exist, try `python3`)
8. Run `python manage.py runserver` (if python doesn't exist, try `python3`)
