---
sidebar_position: 2

tags:
  - NGIAB
  - ngen
  - nextgen
  - national water model
---

# NextGen In A Box (NGIAB)

NextGen framework-based simulations are now easy with NextGen In A Box!

Github URL: https://github.com/CIROH-UA/NGIAB-CloudInfra/

Containerized "NextGen In a Box" (NGIAB) is a community-accessible version of the NextGen National Water Resources Modeling Framework.

The key accomplishment of this research effort is the development and dissemination of NextGen In a Box (NGIAB), a community-accessible port of the NextGen framework. In addition to enhancing research infrastructure, this project places a strong emphasis on fostering and promoting the integration of NextGen Framework within the broader research community.

With this development, and the accompanying training sessions, many researchers are now making much more rapid progress towards new developments in the NextGen framework and we expect this to lead quickly to improvements in the operational performance of upcoming versions of the Operational National Water Model.

It is a NextGen National Water Resources Modeling Framework Community Release

- Provides capabilities to run the Next Generation National Water Resources Modeling framework on your local machine for any size watershed.

![NGIAB](/img/ngiab.jpg)

## We are doing a case study : 
### NWM run for Sipsey Fork,Black Warrior river

- We don’t want to run all of CONUS
- We want to run NextGen locally
- We want to have control over inputs / config.
- How can we do it? Answer: **NextGen In A Box**

## How to run the NextGen In A Box for your sample input data?

Follow the steps in README.md located at :
https://github.com/CIROH-UA/NGIAB-CloudInfra/blob/main/README.md

## How NGIAB CI pipeline works?

![NGIAB](/img/ngiab-ci.jpg)

## How NextGen In A Box is dependant on ngen and t-route?

![NGIAB](/img/ngiab-ngen-deps.jpg)

# Contribute to CIROH-UA/NGIAB-CloudInfra

### The summary steps to contribute to repo repository by forking it:

1. Fork the Repository:

- Visit the repository on GitHub.

- Click the "Fork" button in the top-right corner to create a copy of the repository in your - GitHub account.

2. Clone Your Fork:

- Go to your forked repository on GitHub.

- Click the "Code" button and copy the repository URL.

- Use git clone to clone your fork to your local machine:

```bash

git clone <your-fork-url>

```

3. Create a New Branch:

- Create a new branch for your changes using git checkout -b < branch-name>.

4. Make Changes:

- Open project files in your code editor and make the necessary changes.

5. Commit Changes:

- Use git add . to stage changes.

- Commit your changes with git commit -m "Your commit message".

6. Push Changes to Your Fork:

- Push your local branch to your fork on GitHub with git push origin < branch-name>.

7. Create a Pull Request (PR):

- Go to your forked repository on GitHub.

- Click "Compare & pull request" to create a PR.

- Provide a title and description for your PR.

- Click "Create pull request."

8. Review and Collaborate:

- Engage in discussions with maintainers and address feedback.

- Once approved, the PR can be merged into the original repository.

9. Sync Your Fork (Optional):

- If changes have been made to the original repository, you can sync your fork by adding the original repository as a remote and pulling changes from it.

## Technologies

- Git
- Github
- Github Actions - Using Github Actions for Continous Integration and Continous Deployment (CI/CD)
- Docker - Employing Docker to build, deploy, and run NextGen applications within containers.
- DockerHub - Utilizing DockerHub for container image management. 
- AWS S3 - Storing input data in AWS S3 buckets.

## Code

The source code for the NextGen In A Box can be found on Github:

- Github URL: [CIROH-UA/NGIAB-CloudInfra](https://github.com/CIROH-UA/NGIAB-CloudInfra)

Docker images are available at:

- Dockerhub URL: https://hub.docker.com/u/awiciroh

## More Information

For more information, please refer the latest slide below that is used for training and workshop:

### Poster from CIROH Science Meeting - October 2023

- [NextGen In A Box - Oct 2023 - Poster](https://github.com/CIROH-UA/Conferences/tree/main/ScienceMeeting2023-Poster)

### Slide's from Summer Institute - June 2023

- [NextGen In A Box - June 2023](https://github.com/CIROH-UA/Conferences/tree/main/SummerInstitute2023)

### Slide's from CIROHDevCon1 - May 2023

- [NextGen In A Box - May 2023](https://github.com/CIROH-UA/Conferences/tree/main/CIROHdevCon23)

## Bug and Issue Tracker

Please report bugs and issues on the Github Issues page:

- Issue Tracker: [Issue Tracker](https://github.com/CIROH-UA/CloudInfra/issues/)

## Team Members

- **The University of Alabama Team** - [Arpita Patel](https://dev.awi.ua.edu/about/staff/arpita-patel/), Dr. James Halgren, [Dr. Puri Bangalore](https://eng.ua.edu/eng-directory/dr-purushotham-bangalore/), [Dr. Jeff Carver](http://carver.cs.ua.edu/), Benjamin Lee, [Dr. Sepehr Karimiziarani](https://dev.awi.ua.edu/about/staff/sepehr-karimiziarani-ph-d/), [Dr. Shahab Alam](https://dev.awi.ua.edu/about/staff/md-shahabul-alam-ph-d/), Trupesh Patel, Hari Jajula, Rohan Sunkarapalli, Manjiri Gunaji, [Dr. Steve Burian](https://eng.ua.edu/eng-directory/dr-steven-burian/)
- **Lynker Contractors** - Zach Wills, Nels Frazier, Jordan Laser, Mike Johnson
