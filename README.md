# Unhandled JS Exception: Cannot read properties of undefined (reading 'name') in React Native

This repository demonstrates a common error in React Native applications: attempting to access properties of an undefined state variable before it's been initialized.  The error message typically looks like this: `Unhandled JS Exception: Cannot read properties of undefined (reading 'name')`.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a solution to prevent this error.

## Problem

The issue arises from accessing `data.name` before the asynchronous `fetch` request completes and updates the `data` state.  This results in `data` being `undefined`, causing the error.

## Solution

The solution involves using conditional rendering to check if `data` is defined before attempting to access its properties.  This prevents the error by only rendering the `Text` component when the data is available.

This demonstrates a simple but crucial pattern for handling asynchronous operations and preventing common errors in React Native applications.