# README

This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## Deployment Instructions

1. Precompile Assets:
   Run the following command to compile assets for production:
   ```
   rails assets:precompile
   ```

2. Run Database Migrations:
   Execute the following command to apply any pending migrations:
   ```
   rails db:migrate RAILS_ENV=production
   ```

3. Set Environment Variables:
   Ensure that the necessary environment variables (e.g., `DATABASE_URL`, `RAILS_MASTER_KEY`) are set in the production environment.

4. Deploy to Heroku:
   Use the Heroku CLI to deploy the application:
   ```
   git push heroku main
