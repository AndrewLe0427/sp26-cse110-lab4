1. It prints 3. Because we used var to declare i, i is accessible in the whole function
2. It prints 150. Because we used var to declare discountedPrice, discountedPrice is accessible in the whole function.
3. It prints 150. Because we used var to declare finalPrice, finalPrice is accessible in the whole function.
4. It returns [ 50, 100, 150 ]. Even though you cannot access discounted directly, you can still get its value using the return statement.
5. ERROR! Because you define i using let, it is declared within its block. So outside its block, it is like i does not exist.
6. ERROR! Because you define discountedPrice using let, it is declared within its block. So outside its block, it is like discountedPrice does not exist.
7. 150. After the last iteration, the for loop gives finalPrice the value 150. And since finalPrice is declared by let in the same function as line 14, line 14 can access finalPrice.
8. It returns [ 50, 100, 150 ]. Even though you cannot access discounted directly, you can still get its value using the return statement.
9. ERROR! Because you define i using let, it is declared within its block. So outside its block, it is like i does not exist.
10. 3. Because length is declared using const in the function block, line 12 can use it because it is in the same function.
11. It returns [ 50, 100, 150 ]. Even though you cannot access discounted directly, you can still get its value using the return statement.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32' because 2 is converted to '2', and it is concatinated with '3'
    B. 1 because this time '3' is converted to 3 and 3 - 2 = 1
    C. 3 because null is converted to 0 and 3 + 0 = 3
    D. '3null' because null is converted into string 'null' and it is concatinated with '3'
    E. 4 because true is converted to 1 and 1 + 3 = 4
    F. 0 because false and null are both converted to 0.
    G. '3undefined' because undefined is converted into string 'undefined' and it is concatinated with '3'
    H. NaN because 'undefined' is converted into the number NaN. Any operations with NaN will result in NaN.
14. A. true because '2' is converted to 2 and 2 is greater than 1
    B. false because '2' and '12' is compared using lexicographical order
    C. true because '2' is converted to 2 and it equals itself
    D. false because "===" does not convert types. Different types = false.
    E. false because true is converted to 1 and 1 is not equal to 2
    F. true because Boolean() converts a non empty string to true.
15. == checks the equality with type conversion, while === checks the equality without type conversion.
17. It returns [ 2, 4, 6 ]. So when the compiler reads line 13, it calls the function modifyArray, which calls the other function everytime it loops. And that other function multiplies each element in the input array by 2.
19. It returns 1 and then 4 and then 3 and then 2.