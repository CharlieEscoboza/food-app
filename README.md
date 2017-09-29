#Welcome to `thefoodapp` an app for placing food orders and more.

#Developers
## For running the app
First than all the app is using node v6.11.0 or above.
We strongly recommend to use [`NVM` (NODE VERSION MANAGER)](https://github.com/creationix/nvm).

```bash
nvm install v6.11.0
```

After that and been sure you're using the correct node version.
```bash
nvm use v6.11.0
```

Then run
```bash
npm install
```

After you make sure all packages has been installed correctly, by running:
```bash
npm ls --depth=0
```
This will list you the first level of dependencies in the project
and any error in them, if there were some during the dependency installation.

Finally, run:
```bash
npm run dev
```

This will start the app in development mode.

Go to your browser and visit: `http://localhost:3000` to see the app.

## For contributing
Create a new branch prefixing the main attend of the one:
`bugfix|feature|update`
i.e.: `feature/add-docs`

- Open your PR
- Fill the PR template according to your necessity for explaining in
detail (why / what) your tenting to solve.
- Assign the proper team members for reviewing the changes.
- After getting at least 1 approval from the assigned members, please fill free
to use `Github` UI tooling for squashing and merging.
