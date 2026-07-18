# NotesNoter

This is react app which can get the notes from the user and provides the option to mark it as Important, Archive and move it to Bin.


## Authors

- [@JayaPramodh](https://www.github.com/octokatherine)


## Acknowledgements
 - [Reference](https://github.com/prakashsakari/gfg_notes_app.git)


## Installation

To use this repository

```bash
  git clone https://github.com/JayaPramodh/notesnoter.git
```

Install the necessary packages before your work

```bash
    npm install
```

To make changes in your version

- Go to the src folder and make the desirable changes of adding, modifying and deleting a feature or any update.
- to test the changes use
    ```bash
        npm run dev
    ```
    this will render the project in localhost
- Once satisfied with the changes, build and deploy your version.

To deploy

- Build the project prior to deployment

```bash
    npm run build
```

- dist folder will be created on building the project, deplot the dist folder to the platform of your wish. I've deployed the folder in Netlify.
## Features

- Add notes with Title and Description.
- Mark the notes as important by pinning them on the top right of the notes card. Unpin it when it's no longer important.
- Mark the notes as archived by clicking the first icon in the bottom right. Unarchive feature enabled once the notes archived, in the same position.
- Move th notes to bin by clicking th last icon in the bottom right. The notes can be recovered by navigating to Bin page.
