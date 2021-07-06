# "Google Keepy"

#### drawSQL database schema

https://drawsql.app/dave-2/diagrams/google-keepy

MVPs:

- [ ] Create a task list
- [ ] Add a task to the list and have an empty checkbox next to it
- [ ] Checked items move to the bottom and are "strikethrough"
- [ ] _this one if necessary_ Light and Dark Mode

Version 2.0 Revisions:

- [ ] Dynamic resizing of Keep if it has more or less content in it
- [ ] Media screen for keeps.css for more columns ( Currently only 2 3 or 4 columns)
- [ ] "Take a note..." bar does not dynamically resize based on media screen

Plan:

- Use the Authenticate Me project as a base
- Look at Google Keep website and come up with a written design idea (wireframing)
- Create a REUSABLE component for the task list "square" that will be created
- Get layout of each component that is added. They tile next to each other

BONUS FEATURES:

- Different color custom backgrounds for tasks
- Light and Dark Mode
- Pin Lists to the "top" of the list

## Steps for setting up database:

1. Create a user using the same credentials in the .env file with the ability to create databases. `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`
2. `npx dotenv sequelize db:create`
3. `npx dotenv sequelize db:migrate`
4. `npx dotenv sequelize db:seed:all`
