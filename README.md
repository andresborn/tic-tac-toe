# tic-tac-toe

##### The purpose of this exercise is to get familiar with functional programming and the module pattern.

Some things that I have learned are:

- If you need to constantly test for something, tuck that function into another function, otherwise, once the test runs true, the variable will have that value permanently assigned to it.
- <strong>Scope</strong>: Inside an IIFE, you might just want to access a variable directly. But if you pretend to modify that variable from outside that function, you might not be dealing with the same variable. What I mean is `board !== gameBoard.board`.
