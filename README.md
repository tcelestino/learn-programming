# Learn Programming with TypeScript and Deno

This repository contains various TypeScript files implementing different algorithms and design patterns. The project uses Deno as the runtime environment.

## Setup Instructions

1. Install Deno by following the instructions on the [official website](https://deno.land/#installation).
2. Clone this repository:
   ```sh
   git clone https://github.com/tcelestino/learn-programming.git
   cd learn-programming
   ```

## Running the Project

To run the project, you can use the different tasks defined in the `deno.json` file:

- **Development**: `deno task dev`
- **Server**: `deno task server`
- **Testing**: `deno task test`
- **Formatting**: `deno task format`

## Using Arguments with `deno task dev`

You can use the following arguments with `deno task dev`:

- **dp**: Run scripts files in the design patterns folder
- **ex**: Run scripts files in the practices folder

By default, `deno task dev` runs scripts in the structure-data folder.

Example commands:
- `deno task dev dp`
- `deno task dev ex`

## Project Structure

The project includes the following directories:

- **design-patterns**: Contains TypeScript files implementing various design patterns.
- **practices**: Contains TypeScript files with different coding practices and exercises.
- **structure-data**: Contains TypeScript files implementing different data structures and algorithms.

The main entry point of the project is `main.ts`, which runs different modules based on command-line arguments.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Thank you for your contributions!
