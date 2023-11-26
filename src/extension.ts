// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { parseJSONWithComments } from "./parser";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  function updateDecorations(editor: vscode.TextEditor) {
    const text = editor.document.getText();
    const decorations = parseJSONWithComments(text);

    decorations.forEach((decoration) => {
      const range = new vscode.Range(
        new vscode.Position(decoration.startLine, decoration.startCharacter),
        new vscode.Position(decoration.endLine, decoration.endCharacter)
      );

      // Create a decoration type with the specific color for each decoration
      const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: decoration.color, // Use the color specified in the decoration
        borderRadius: "4px",
        color: decoration.textColor,
      });

      editor.setDecorations(decorationType, [range]);
    });
  }

  if (vscode.window.activeTextEditor) {
    updateDecorations(vscode.window.activeTextEditor);
  }

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      if (editor) {
        updateDecorations(editor);
      }
    },
    null,
    context.subscriptions
  );

  vscode.workspace.onDidChangeTextDocument(
    (event) => {
      if (
        vscode.window.activeTextEditor &&
        event.document === vscode.window.activeTextEditor.document
      ) {
        updateDecorations(vscode.window.activeTextEditor);
      }
    },
    null,
    context.subscriptions
  );

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'JSON Colorizador "json-comment-colorizer" esta activo!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "json-comment-colorizer.colorizarJson",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "JSON Colorizado!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
