# TypeScript Problem Solving Lab

A collection of nine classic coding challenges solved in TypeScript.  
Each solution is fully typed, self-contained, and prints its output to the console.

---

## 📁 Project Structure

```

.
├── src
│   ├── app
│   │   ├── advanced-sorting.ts
│   │   ├── array-filtering-and-mapping.ts
│   │   ├── array-reduction.ts
│   │   ├── find-maximum-value.ts
│   │   ├── function-composition.ts
│   │   ├── leap-year-checker.ts
│   │   ├── object-manipulation.ts
│   │   ├── sorting-objects.ts
│   │   └── unique-values.ts
│   ├── data
│   │   ├── book.ts
│   │   ├── car.ts
│   │   ├── number.ts
│   │   ├── person.ts
│   │   └── student.ts
│   ├── types
│   │   ├── book.ts
│   │   ├── car.ts
│   │   ├── person.ts
│   │   └── student.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🔨 Available Scripts

* **`npm run dev`**
  Compile & run `src/index.ts` without type checks (fast).
* **`npm run build`**
  Transpile all `.ts` files to `dist/` and rewrite path aliases.
* **`npm start`**
  Run the compiled `dist/index.js`.
* **`npm run lint`** / **`lint:fix`**
  ESLint checks (and fixes).
* **`npm run format`** / **`format:fix`**
  Prettier checks (and fixes).

---

## 📄 Problems & Outputs

The entrypoint `src/index.ts` sequentially executes all nine functions:

1. **Array Filtering and Mapping**
   Filters out females from `people` and logs their names.
   *File:* `src/app/array-filtering-and-mapping.ts`

2. **Object Manipulation**
   Extracts book titles from an array of book objects.
   *File:* `src/app/object-manipulation.ts`

3. **Function Composition**
   Squares, doubles, then adds 5 to a number via composed functions.
   *File:* `src/app/function-composition.ts`

4. **Sorting Objects**
   Sorts `cars` by year ascending.
   *File:* `src/app/sorting-objects.ts`

5. **Array Reduction**
   Sums all even numbers in an array.
   *File:* `src/app/array-reduction.ts`

6. **Leap Year Checker**
   Determines if a given year is a leap year.
   *File:* `src/app/leap-year-checker.ts`

7. **Unique Values**
   Removes duplicate numbers from an array.
   *File:* `src/app/unique-values.ts`

8. **Find Maximum Value**
   Returns the maximum number in an array.
   *File:* `src/app/find-maximum-value.ts`

9. **Advanced Sorting**
   Sorts students by average grade descending.
   *File:* `src/app/advanced-sorting.ts`

---

## 🧩 Adding More Challenges

1. Create a new file in `src/app/` following the existing naming conventions.
2. Add any new static data into `src/data/` and types into `src/types/`.
3. Export your function and invoke it in `src/index.ts` with a `console.info` header.
4. Re-run `npm run dev` to see your new solution in action.

---

## 🚀 Running Locally

### Prerequisites

- **Node.js:** Install Node.js (version 20 or above recommended).
- **npm or yarn:** Package manager for installing dependencies.

### Installation

1. **Clone the Repository:**

   ```bash
   git@github.com:shahadathhs/typescript-problem-solving.git
   cd typescript-problem-solving
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Run in development mode

```bash
npm run dev
```

### Build & run production bundle

```bash
npm run build
npm start
```
