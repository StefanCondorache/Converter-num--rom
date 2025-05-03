# Practica

This repository contains a NodeJS project that provides functionality to convert numbers into their Romanian word equivalents. 

## Folder Structure

- `NodeJS/`: Contains the main JavaScript files for the project.
    - `Classes/`: Contains the class definitions for handling number conversion.
    - `FullConvertion.js`: A script to convert numbers to Romanian words and write the output to a file.

- `Python/`: Placeholder for Python-related content ( first attempt ).

## How to Use

 Make sure you have Node.js installed.
 
### One number conversion
```bash
node NodeJS/convertor.js <YourNumber>
```
### Running the Full Conversion Script

**WARNING:** 
The `FullConvertion.js` file is a **DANGER ZONE** script. Running it will:

- Generate a large amount of output.
- Overwrite the `output.txt` file every time you run it.
- Write a lot of numbers to the `output.txt` file, which might be hard to open due to its size.

#### Instructions:

 Run the script using:
   ```bash
   node NodeJS/FullConvertion.js
   ```
 You will be prompted:
   ```
   Are you sure you want to continue? (y/n)
   ```
   Enter `y` to proceed or `n` to cancel.

### Output File
The results of the conversion will be written to `output.txt`.
