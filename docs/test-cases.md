# Manual Test Cases – Math Tutor App

These are manual test cases covering key UI flows, negative paths, and edge input behavior for the Math Tutor application.

---

## Core Functionality

| ID   | Scenario                       | Steps                              | Expected Result                           |
| ---- | ------------------------------ | ---------------------------------- | ----------------------------------------- |
| TC01 | Correct input                  | Enter correct sum → Click "Answer" | Alert: "Correct!"                         |
| TC02 | Incorrect input                | Enter wrong value → Click "Answer" | Alert: "Incorrect!"                       |
| TC03 | Empty input                    | Leave input blank → Click "Answer" | Button stays disabled                     |
| TC04 | Non-numeric characters blocked | Attempt to enter `abc`, `@`, etc.  | Input ignores characters; nothing appears |

---

**Note:**  
The following test cases include negative paths (e.g., invalid or incomplete input) and edge cases (e.g., signed or decimal numbers). The app handles these inputs without crashing or producing unexpected results. While some behaviors (like accepting `+8` or silently ignoring malformed input) might benefit from clearer feedback, they appear consistent with the current implementation. These are noted for potential follow-up, not treated as failures.

---

## Edge Behavior

| ID   | Scenario                                                 | Steps                                               | Expected Result                                                 |
| ---- | -------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| TC09 | Typing `e` or `-` alone                                  | Enter `e` or `-` into the input field               | Input accepts character, but "Answer" button stays disabled     |
| TC10 | Button enables on valid input                            | Type a number (e.g., `4`)                           | "Answer" button becomes enabled                                 |
| TC11 | Enter signed number (`-5`)                               | Type `-5` (assuming the correct answer is positive) | "Answer" button becomes enabled; on submit, alert: "Incorrect!" |
| TC12 | Malformed input like `+5+2`                              | Enter `+5+2` into the input field                   | Input is accepted visually; button stays disabled               |
| TC13 | Leading plus sign in valid number (`+8`) _(manual-only)_ | Enter `+8` (assuming the answer is 8)               | Button becomes enabled; on submit, alert: "Correct!"            |
| TC14 | Decimal input (`3.14`)                                   | Enter `3.14` into the input field                   | Button becomes enabled; submission triggers alert               |
| TC15 | Parses prefix of malformed input                         | Enter `3abc`, `4.2.2`, or `5e+4x` into field        | Input displays prefix only (`3`, `4.2`, `5e+4`)                 |

---

## Misc Notes

- The app currently does **not implement inline field-level validation** (e.g., red outline or error text beneath the input).
  All feedback is delivered via toast notifications after submission.
  However, invalid input is implicitly handled by:

  - Blocking unaccepted characters from being typed into the input
  - Keeping the "Answer" button disabled until the input is parseable as a number

- Inputs like `3abc`, `4.2.2`, or `5e+4x` are partially valid. The field retains the initial valid numeric portion (e.g., `3`, `4.2`, `5e+4`), and ignores the rest. This behavior is native to HTML `<input type="number">` and should be documented as expected.

- The "Answer" button stays disabled unless the input field contains a fully parseable number.
- Characters like `e`, `-`, and `+` can be entered, but alone (or in malformed formats like `+5+2`), they do not enable the button.
- Valid input formats like `-5`, `+8`, or `3.14` do enable submission, even if the answer is incorrect.
- No form-level validation messages are displayed—feedback is provided only via `window.alert()`.
- The app relies on input being parseable as a single numeric value; expressions or malformed input are ignored.
