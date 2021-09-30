## Execution

1. First things first, the database needs to be started 

> $ docker-compose up db

2. [Optional : required only the first time]: Install node dependencies by using:

> $ yarn install

3. Attempt to seed the database

> $ docker-compose run seed

4. [Optional ] Run the tests

> $ docker-compose run test

5. Finally, after seeding (and optional testing), to run the prompt, do:

> $ docker-compose run app

6. After running all examples, playing with it, etc, recommended:

> $ docker-compose down
