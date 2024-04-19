import "./App.css";

function App() {
  return (
    <>
      <body>
        <h1>
          TypeScript for Beginners: Get Started on Your Development Journey!
        </h1>
        <p>
          Welcome to the exciting world of TypeScript! If you're familiar with
          JavaScript, TypeScript is a supercharged version that adds superpowers
          like type checking. Let's explore what TypeScript is and how it can
          make you a more efficient developer.
        </p>

        <h2>Benefits of TypeScript</h2>
        <ul>
          <li>
            <b>Fewer Bugs:</b> TypeScript catches errors early in the
            development process, saving you time debugging later.
          </li>
          <li>
            <b>Improved Code Readability:</b> Types make your code more
            understandable for yourself and others.
          </li>
          <li>
            <b>Enhanced Developer Experience:</b> Autocompletion and code
            navigation features in modern editors are boosted by TypeScript.
          </li>
        </ul>
        <h2>Setting Up Your Environment</h2>
        <p>
          Let's get ready to code! Here's how to set up your development
          environment:
        </p>
        <ol>
          <li>
            <b>Install Node.js:</b> Head over to{" "}
            <a href="https://nodejs.org/en" target="_blank">
              https://nodejs.org/en
            </a>{" "}
            and download the latest LTS (Long-Term Support) version. This comes
            bundled with npm (Node Package Manager), which we'll use to install
            TypeScript.
          </li>
          <li>
            <b>Install TypeScript:</b> Open your terminal and run the following
            command:
            <br />
            <img src="/bash-npm-i.png" alt="" />
            <p>This installs TypeScript globally on your system.</p>
          </li>
          <li>
            <b>Create a New Project:</b> Use your preferred code editor or
            terminal to create a new project directory. Inside this directory,
            initialise a new npm project by running:
            <br />
            <img src="/npm-init.png" alt="" />
            <p>This creates a package.json file for your project.</p>
          </li>
        </ol>

        <h2>Core TypeScript Concepts</h2>
        <p>Now, let's dive into the core concepts of TypeScript!</p>
        <ul>
          <li>
            <b>Types:</b> Unlike JavaScript, TypeScript lets you define the data
            types of your variables. This can be numbers, strings, booleans, or
            even custom types we create.
            <br />
            <img src="/ts-variables.png" alt="" />
          </li>
          <li>
            <b>Type Annotations:</b> We use a colon (:) followed by the type
            name to specify the type of a variable.
          </li>
          <li>
            <b>Simple Functions:</b> Functions in TypeScript can also have type
            annotations for their parameters and return values.
            <br />
            <img src="/function.png" alt="" />
          </li>
          <li>
            <b>Interfaces:</b> Interfaces define the structure of objects. They
            specify which properties an object should have and their types.
            <br />
            <img src="/interface.png" alt="" />
          </li>
        </ul>

        <h2>Compiling and Running TypeScript Code</h2>
        <p>
          TypeScript code needs to be compiled into JavaScript before it can run
          in a browser. Let's see how to do that:
        </p>
        <ol>
          <li>
            Create a TypeScript file (e.g., main.ts). Write your TypeScript code
            in this file.
          </li>
          <li>
            In your terminal, navigate to the directory containing your
            TypeScript file and run:
            <br />
            <img src="/bash-tsc.png" alt="" />
            <p>
              This creates a JavaScript file (e.g., main.js) containing the
              compiled code.
            </p>
          </li>
          <li>
            Open the generated JavaScript file in your browser or run it using
            Node.js (if applicable).
          </li>
        </ol>

        <h2>
          This is just the beginning of your TypeScript journey!
          <br /> Here are some resources to help you learn more:
        </h2>
        <ul>
          <li>
            The official TypeScript documentation:{" "}
            <a href="https://www.typescriptlang.org/docs/" target="_blank">
              https://www.typescriptlang.org/docs
            </a>
          </li>
          <li>
            Interactive tutorials:{" "}
            <a href="https://www.typescriptlang.org/docs" target="_blank">
              https://www.typescriptlang.org/docs
            </a>
          </li>
          <li>Online courses and tutorials</li>
        </ul>

        <p>
          Remember, practice makes perfect! Start writing simple TypeScript
          programs and experiment with different features. As you progress,
          you'll be amazed at how much smoother and more efficient your
          development process becomes.
        </p>

        <p>
          <b>Bonus Tip:</b> Use online tools like{" "}
          <a href="https://playcode.io/typescript" target="_blank">
            https://playcode.io/typescript
          </a>{" "}
          to write and run TypeScript code directly in your browser.
        </p>
      </body>
    </>
  );
}

export default App;
